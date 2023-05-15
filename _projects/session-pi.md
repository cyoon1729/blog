---
title: 'Session-Pi'
description: A Session-Typed Pi-Calculus Interpreter
date: '2023-05-14'
image: /assets/images/posts/random-img.jpg
tags: 'PL/Compilers, OCaml'
---
My friend Andrei Coman and I implemented a session-typed pi calculus interpreter for Columbia's
graduate programming languages course ([COMS 6998: Types, Languages, and Compilers](http://www.cs.columbia.edu/~sedwards/classes/2023/6998-spring-tlc/index.html)), taught by Prof. Stephen Edwards.
In particular, we implemented the type system studied in ["Subtyping for session types in the pi calculus"](https://link.springer.com/article/10.1007/s00236-005-0177-z)
by Simon Gay and Malcolm Hole (2005).

The type system the correctness of a communication patterns in multi-threaded
pi-calculus programs with respect to its defined session type. We also implement a pi-calculus
evaluator that executes the given program, based on the operational semantics in the paper.

Below is an example of a pi-calculus program our interpreter can type-check and evaluate - not that it's readable in any way :^)
```
(v x : ^['[?{int, int}.!{int}.!{int}.end]])
    ((v y : '[?{int, int}.!{int}.!{int}.end])
     x![y].y![2, 3].y?[z : int].y?[w : int].zero
     |
     x?[y : '[?{int, int}.!{int}.!{int}.end]].
     y?[z : int, w : int].y![z].y![w].zero)
```

Our interpreter is implemented with the OCaml language, and can be found in [this github repo](https://github.com/session-pi/session-pi)! Our project write-up can be found in the [course website](http://www.cs.columbia.edu/~sedwards/classes/2023/6998-spring-tlc/reports/Session-report.pdf).
