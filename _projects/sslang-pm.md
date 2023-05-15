---
title: 'Pattern Matching Anomaly Detection in sslang'
description: Detecting useless arms in, or non-exhaustive, pattern matching in the sslang language
date: '2023-05-14'
image: /assets/images/posts/random-img.jpg
tags: 'PL/Compilers, Haskell'
---

I implemented pattern matching anomaly detection for [*sslang*](https://github.com/ssm-lang/sslang),
a programming langauge from [Prof. Stephen Edwards's lab](http://www.cs.columbia.edu/~sedwards/index.html) at Columbia.
*sslang* is built upon the sparse synchronous model, supporting precise timing prescription and deterministic concurrency.

I implemented Luc Maranget (from INRIA)'s [pattern matching anomlay detection algorithm](http://moscova.inria.fr/~maranget/papers/warn/warn.pdf), in *sslang*'s IR (with Haskell). This pipeline generates compiler warnings for non-exhaustive pattern matching, or useless arms. For instance, in *sslang*:
```
type List a
  Cons a (List a)
  Nil

-- Example 1:
f x =
  match x          -- this pattern matching is not exhaustive
    Cons _ _ = 1

-- Example 2:
f x =
  match x
    Nil = 0
    Cons _ Nil = 1
    Cons _ l = 2
    Cons _ _ = 3   -- this arm is useless!
```
