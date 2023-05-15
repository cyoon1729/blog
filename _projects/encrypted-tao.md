---
title: 'Encrypted-TAO'
description: Simplified Implementation of Facebook's TAO engine, plus encryption. In Rust.
date: '2023-05-14'
image: /assets/images/posts/random-img.jpg
tags: 'Privacy-Preserving, Rust'
---

My team (Avery Blanchard, Jackie Ryu) and I implemeted an encrypted version of Facebook's [TAO](https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/) engine
for our final project for the graduate [Privacy-Preserving Systems](https://systems.cs.columbia.edu/private-systems-class/) seminar at Columbia.

Facebook's TAO (**T**he **A**ssociation of **O**bjects) is a data model and API tailored for serving the social graph, acting as a proxy over a SQL Database. At a high level, it translate graph queries into SQL queries to serve social graph data on a regular SQL database. 

We implemented a simplified version of TAO (as a proxy server over a Postgres DB) with Rust. On top of that, we incorporate deterministic encryption and our own implementation of order-preserving encryption into TAO, such that every data stored in the backend DB is fully encrypted. With this, our TAO can serve graph queries on fully encrypted data (including range queries!). 

Our code and presentation slides can be found in our [github repo](https://github.com/encrypted-tao/encrypted-tao)!
