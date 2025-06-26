## Understanding Paxos - Part 1

*Published: 06.25.2025*

TL;DR: I present a human-written proof that Paxos guarantees consistency. 

#### Intro

It occured to me that understanding _how_ Paxos works is not sufficient - we have to understand
_why_ Paxos works (or how Paxos _solves_ the consensus problem). Some questions I wanted to be 
able to answer were: what happens if certain assumptions are relaxed? Why do the invariants hold? and 
How would I know that a specification/implementation of Paxos is indeed correct? I think being able to
prove that Paxos guarantees consistency is a step towards internalizing those questions.

A big frustration I had while trying to understand Paxos was the lack of pen-and-paper proofs of how
Paxos guarantees consistency. Most proofs that are presented for this are specified and done via 
TLA+/TLAPS - machine-checked proofs that rely heavily on automated theorem provers (like Z3). 

In this blog post, I aim to present a human-written proof of the consistency guarantee of Paxos, which mostly 
follows the structure presented in the TLA proofs written by Lamport and others. At the very least,
this is my attempt at wrestling with understanding _why_ Paxos works.

I think a more organic approach (than presented in this post) to understanding Paxos is to begin with a simple voting protocol,
prove its consistency conditions, then build Paxos on top of that and give a refinement proof
of the Paxos protocol to the simple voting protocol. This refinement approach is said to be
how Leslie Lamport discovered/developed the Paxos protocol, as he explains in his mini lecture
series [_The Paxos Algorithm, or How to win a Turing Award_](https://lamport.azurewebsites.net/tla/paxos-algorithm.html).
As far as I'm concerned, the refinement proof presented leaves most of the hard work to TLAPS (i.e. shoving
it into an SMT solver). That's great (for TLA+), but not so great for actually understanding the
refinement argument - I plan to also cover this in a future post :).

Now, onto one way of understanding Paxos - 

#### Distributed Consensus

WIP

#### Specification of Paxos

WIP

#### Invariants of Paxos

WIP

#### Consistency Proof of Paxos 

<!-- Start of InvConsistent -->
**Lemma (InvConsistent)** Given that the invariants _Inv_ holds,
$$
\forall v_1, v_2 \in \mathcal{V}, \mathrm{chosen}(v_{1}) \land \mathrm{chosen}(v_{2}) \Longrightarrow v_1 = v_2
$$

**_Proof:_**
By definition of _chosen_, the statement we want to prove is equivalent to the following: given ballot numbers \\(b_1, b_2 \in \mathcal{B}\\)
and values \\(v_1, v_2 \in \mathcal{V}\\),
$$
\mathrm{chosen}(b_1, v_1) and \mathrm{chosen}(b_2, v_2) \Longrightarrow v_1 = v_2
$$

Without loss of generality, assume \\(b_1 <= b_2\\). We have two cases to prove, \\(b_1 = b_2\\) and \\(b_1 < b_2\\).

First, assume \\(b := b_1 = b_2\\). By definition of _chosenIn_, we have quorums \\(Q_1, Q_2 \in \mathcal{Q}\\) such that,
\\(\forall a \in Q_{1}: \mathrm{VotedForIn}(a, b, v_{1})\\), and \\(\forall a \in Q_{2}: \mathrm{VotedForIn}(a, b, v_{2})\\) hold.

By the quorum assumption, there must be \\(a \in Q_1 \cap Q_2\\) such that \\(\mathrm{VotedForIn}(a, b, v_{1})\\) and
\\(\mathrm{VotedForIn}(a, b, v_{2})\\) both hold. Recall that _VotedForIn_ states the existence of 2b messages
\\(\\{\mathrm{type}: 2b, \mathrm{acc}: a, \mathrm{bal}: b, \mathrm{val}: v_1\\}\\) and
\\(\\{\mathrm{type}: 2b, \mathrm{acc}: a, \mathrm{bal}: b, \mathrm{val}: v_2\\}\\). By _MsgInv2b_, the existence of
these 2b messages imply the existence of 2a messages \\(m_1 := \\{\mathrm{type}: 2a, \mathrm{bal}: b, \mathrm{val}: v_1\\}\\)
and \\(m_1 := \\{\mathrm{type}: 2a, \mathrm{bal}: b, \mathrm{val}: v_2\\}\\) respectively.

By _MsgInv2a_, \\(m_1\\) and \\(m_2\\) have equal ballot numbers \\(b\\), and thus \\(m_1 = m_2\\),
so we conclude that \\(v_1 = v_2\\). To generalize this argument, note that we have shown
$$
\mathrm{VotedForIn}(a, b, v_1) \land \mathrm{VotedForIn}(a, b, v_2) \Longrightarrow v_1 = v_2
$$

Next, assume \\(b_1 < b_2\\). Due to \\(\mathrm{chosenIn}(b_2, v_2)\\), there must be a quorum \\(Q_2 \in \mathcal{Q}\))\\)
such that \\(\forall a \in Q_2: \mathrm{VotedForIn}(a, v_2, b_2)\\) holds. By definition of _VotedForIn_ and _MsgInv2b_,
there must exist a 2a message \\(\\{\mathrm{type}: 2a, \mathrm{bal}: b_2, \mathrm{val}: v_2\\}\\). By _MsgInv2a_, this 
implies
$$
\forall b \in [0, b_2  - 1]: \exists Q \in \mathcal{Q} \text{ such that } \forall a \in Q, \mathrm{VotedForIn}(a, b_2, v_2) \lor \mathrm{WontVoteIn}(a, b).
$$
In particular, there is a quorum \\(Q \in \mathcal{Q}\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_2) \lor \mathrm{WontVoteIn}(a, b_1)\\) holds for
every \\(a \in Q\\). Also, by \\(\mathrm{chosen}(b_1, v_1)\\), there exists \\(Q_1 \in \mathcal{Q}\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_1)\\)
holds for every \\(a \in Q_1\\). 
  
Then, by the quorum assumption, there must exist \\(a \in Q \cap Q_1\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_2)\\) and
\\(\mathrm{VotedForIn}(a, b_1, v_1)\\) both hold (from quorums \\(Q_1\\) and \\(Q_2\\) respectively). We know from an earlier argument this implies
\\(v_1 = v_2\\). Therefore the invariants _Inv_ imply consistency.
$$\tag*{$\square$}$$
<!-- End of InvConsistent -->
