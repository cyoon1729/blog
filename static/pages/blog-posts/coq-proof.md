# An Anatomy of a Coq Program

*Published: 08.08.2024*

TLDR: I tried to dissect a simple proof for a trivial theorem (namely, the injectivity
of the successor function for natural numbers) in an effort to understand the mechanics
of `Coq`. Things turned chaotic towards the end, but anyway here's what I learned!

Getting a bit tired of proving the *n*th little theorem about natural numbers
in the `IndProp` chapter of the *Software Foundations* (SF) book, I decided to take
a short break and turn to the more foundational underpinnings of all this.

The bedrock of all this is the Curry-Howard correspondence, which roughly states that
there is an isomorphism between the languages of programs and proofs. 
Consequently, (mathematical) theorems can be represented as types (as in programming languages), 
whose proofs are programs/expressions that type-check at that type.

There's *a lot* to unpack in the sentence above - I spent a couple days looking back at
the Coq code I had written for SF with this new perspective, trying to really understand
how theorems are types and proofs are programs, and what type-checking means in this context.
I realized that my earlier frustration with Coq mainly came from approaching exercises from SF
as math problems/puzzles, rather than as "programming".

### Theorems are Types, Proofs are Programs

Consider the canonical inductive type, `nat`ural numbers:
```coq
Inductive nat : Set :=
| O : nat
| S : nat -> nat.
```
Let's begin with an extremely simple theorem that states the injectivity of the successor
function `S`:
```coq
Theorem S_inj : forall (n m : nat), S n = S m -> n = m.
```
Read mathematically, the statement is simple: "for every natural numbers n and m,
if `S n = S m` then `n = m`." But how can we read this as a *type* of an expression?

First, `forall` denotes a dependent product type, so we have `[n : nat][m : nat] (S n = S m) -> (n = m)`.
Then, how do we interpret the logical implication `(S n = S m) -> (n = m)` as a type?
Note that `_ = _` is short-hand for the (polymorhpic) inductive type `eq`:
```coq
Inductive eq (A : Type) (x : A) : A -> Prop :=  eq_refl : eq x x
```
Both `(S n = S m)` and `n = m` are instances of `eq nat (S n) (S m)`, and
`eq nat n m` respectively, which are of type `Prop`. Recall that the type `Prop`
are inhabited by "proof terms", the same way that `O`, `S O`, and so on inhabit the
type `nat`. In particular, the `Prop`osition `eq nat n m` for some `n` and `m` is 
only provable when `n` and `m` are identical, via `eq_refl`. Thus, the type
`(S n = S m) -> (n = m)` can be interpreted as a function that takes a proof that
`S n` and `S m` are equal, and returns a proof that `n` and `m` are equal.

Then, what exactly is a "proof term"? If theorems/propositions are types, then their proofs are
expressions that type-check at that type - this is the Curry-Howard correspondence.
Let's begin with some trivial propositions on `eq`:
```coq
Theorem provableEq: eq 1 1.
Proof.
  apply eq_refl. (* or just `reflexivity` *)
Defined.
```
Printing `provableEq` gives:
```coq
provableEq = eq_refl : 1 = 1
```
Note again that `eq 1 1` is of type `Prop` (keep in mind currying), and is inhabited by
`eq_refl` due to the `nat` arguments being identical. A `Prop` like `eq 0 1` will 
not be provable, as there is cannot be inhabited by instance of `eq`.

Now, let's consider `S_inj` again. `S_inj` was of type
```
[n : nat][m : nat] (S n = S m) -> (n = m)
```
so giving a term of that type suffices as a proof for `S_inj` - a term of a dependent
product type `[x : A] F(x)` would be a lambda abstraction whose input is `x` of type `A`
and whose body is an expression of type `F(x)`. For `S_inj`, the proof term would then
be an abstraction whose inputs are of type `n : nat` and `m : nat`, and whose
body is of type `(S n = S m) -> (n = m)` - and when curried, we also have `(S n = S m)`
as input type, and just `n = m` as the type of the body:
```
(nat -> nat -> S n = S m) -> n = m
```
With that, lets look at a proof of `S_inj` and work backwards:
```coq
Theorem S_inj : forall (n m : nat), S n = S m -> n = m.
Proof.
  intros n m H.
  injection H as Hinj.
  apply Hinj.
Defined.
```
printing `S_inj` now gives us:
```coq
S_inj = fun (n m : nat) (H : S n = S m) =>
  let H0 : n = m :=
    f_equal (fun e : nat => match e with O => n | S n0 => n0 end) H
  in (fun Hinj : n = m => Hinj) H0
    : forall n m : nat, S n = S m -> n = m
```
which shows us a lambda abstraction, as expected.

Let's look into the body of the function: note that `f_equal` is
```coq
f_equal = fun (A B : Type) (f : A -> B) (x y : A) (H : x = y) =>
  match H in (_ = a) return (f x = f a) with
    | eq_refl => eq_refl
  end.
    : forall (A B : Type) (f : A -> B) (x y : A), x = y -> f x = f y
```
Roughly put, `f_equal` takes as inputs a function `f : A -> B` and a proof `H` 
for `x y : nat` that `x = y` (that there is a valid instance of `eq_refl x y`, which
is true iff `x` and `y` are equivalent), and returns a proof that `f x = f y`. More
simply put, applying `f_equal` to `x = y` where `x` and `y` are equivalent makes true
that `f x` and `f y` are equivalent.

In the context of `S_inj`, `f_equal` is applied to
- `f := (fun e : nat ...)`, a function that undoes the successor operator `S` to its input `e`
- `S n` and `S m`, as well as a proof `H` that `S n = S m`
where if `H` is a valid proof term (i.e. an instance of `eq_refl`), `f_equal` returns an instance
of `eq_refl` for `n` and `m` (i.e. a valid proof term for `n = m`)
Note that Coq's type system infers `f_equal`'s arguments that were not provided in `S_inj`
(namely `A B : Type` and `x y : A`).

Thus, `H0 : n = m` in `let H0 : n = m := f_equal ... H` evaluates to an instance of
`eq_refl` provided that `S n` and `S m` are equivalent, and the application 
`(fun Hinj : n = m => Hinj) H0` returns `H0` itself if `H0` is a valid instance of `eq_refl`.

Putting all the above together, the "proof" of `S_inj` is a function that takes `n : nat`, `m : nat`,
a proof `H` that `S n = S m` are equal, and gives us a "proof" that `n` and `m` are equal. 

Now, going back to the Coq proof for `S_inj`,
```coq
Theorem S_inj : forall (n m : nat), S n = S m -> n = m.
Proof.
  intros n m H.
  injection H as Hinj.
  apply Hinj.
Defined.
```

To note some points/observations on how each applied tactics relate to the generated proof term:
- `intro`/`intros` generates a function `fun`, so `intros n m H` creates a function
```coq
fun (n m : nat) (H : S n = S m) => ...
```
- `injection H` generates all hypothesis Coq and infer from `H`, which in this case, the injectivity result `n = m`.
Presumably, Coq was able to this by knowing to apply `f_equal` to constructor-based equalities (*I'm actually not sure*).
Expanding on that, I would assume, in the constructed proof term for `S_inj`,
```coq
let H0 : n = m :=
  f_equal (fun e : nat => match e with O => n | S n0 => n0 end) H
in (fun Hinj : n = m => Hinj) H0
```
`injection H as Hinj` creates the hypothesis `Hinj : n = m` (generated by Coq) in the context,
whose proof is `H0`, which uses `f_equal` on the function `fun e: nat => ...` (*suspiciously* doing
something with the constructor `S` - i.e. taking the `pred`) and `H : S n = S m`. `Hinj` is a hypothesis, so
`(fun Hinj: n = m => Hinj)` applied on `H0` returns itself, a proof that `H0`.

### For next time:
I'm curious about how each line in the proof (or each application of tactic) incrementally constructs the
proof term. e.g. `intros` creates an abstraction, `apply` generates an application, `destruct, split, inversion` 
generates `match` statements - without printing out the proof term, I hope to get an idea of how each tactic
maps to Gallina constructs


