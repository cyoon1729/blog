---
title: 'Orlang'
description: Poor Man's OCaml
date: '2023-05-13'
image: /assets/images/posts/random-img.jpg
tags: 'PL/Compilers, OCaml'
---
For [Columbia's compilers course](https://verigu.github.io/4115Fall2022/), my group (Andrei Coman, Scott Geng, Alan Zhao, Eumin Hong) and I 
built **Orlang**, a functional programming language targetting the LLVM IR. The compiler is written in the OCaml langauge.

Orlang is syntactically similar to OCaml, with strict evaluation, a strong, static, and polymorphic type system based on the Damas-Hindley-Milner
type system. Orlang also supports higher-order functions, currying, recursion, and some built-in list functionalities.

Below is a cool Orlang program, featuring pattern matching, list functionalities, recursive let-bindings, and currying! 
```
let applyFnList flist alist =
  let rec applyHelper fs as acc =
    match |.fs.| with
    | 0         => reverse acc
    | otherwise => let (f::ff) = fs in
                   let (a::aa) = as in
                   applyHelper ff aa ((f a)::acc)
    ;
  in applyHelper flist alist []

val fnList : List (Int -> Int -> Int)
let fnList =
  [add, subtract, multiply]
  where add      = (\x y -> x + y)
    and subtract = (\x y -> x - y)
    and multiply = (\x y -> x * y)

val print_list : List Int -> List ()
let print_list lst = map (\x -> print (extend (string_of_int x) [' '])) lst

val main : ()
let main =
  let lst1 = [1, 2, 3] in
  let lst2 = [4, 5, 6] in
  let curried = applyFnList fnList lst1 in
  let res = applyFnList curried lst2 in
  let pnt = print_list res
  in ()
```
Find Orlang in [this github repo](https://github.com/orlang-proj/orlang)!
