## Understanding Paxos - Part 1

*Published: 06.25.2025*

TL;DR: I present a human-written proof that Paxos guarantees consistency. 

#### Intro

A big frustration I had while trying to understand Paxos was the lack of pen-and-paper proofs of how
Paxos guarantees consistency. Most proofs that are presented for this are specified and done via 
TLA+/TLAPS - machine-checked proofs that rely heavily on SMT solvers. 

In this blog post, I aim to present a human-written proof of the consistency guarantee of Paxos, which mostly 
follows the structure presented in the TLA proofs written by Lamport and others. At the very least,
this is my attempt at wrestling with understanding _why_ Paxos works.

#### The Consensus Problem

WIP

#### Specification of Paxos

To avoid any ambiguity of the protocol specification that comes from prose, 
we will take Lamport's TLA spec of Paxos with slight modification on syntax, but
with same mathematical meaning.

In _Phase1a_, a proposer requests to start a ballot with a unique ballot number \\(b \in \mathcal{B}\\):
$$\begin{align}
&\mathrm{Phase1a}(b \in \mathcal{B}) := \phantom{\mathrm{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}}\\\\\\
&\quad \land \ \nexists \ m \in \mathcal{M}, \ m\mathrm{.type} = \mathrm{1a}, \ m.\mathrm{bal} = b \\\\\\
&\quad \land \ \mathrm{send}(\\{\mathrm{type}: \mathrm{1a}, \mathrm{bal}: b\\})
\end{align}$$

In _Phase1b_, _an_ acceptor acknowleding the ballot if its ballot number \\(b\\) is greater than \\(\mathrm{maxBal}\[a\]\\),
the highest ballot number it had previously acknowledged. Note that this acts as a _promise_ that if an acceptor acknowledges
a ballot, it will ignore any other ballot initiation request (a 1a message) with a lower ballot number. This phase will run
for each acceptor, and the acceptors who send the 1b message will form the quorum for the ballot.
$$\begin{align}
&\mathrm{Phase1b}(a \in \mathcal{A}) :=\\\\\\
&\quad \land \ \exists \ m \in \mathcal{M}, \ m.\mathrm{type} = \mathrm{1a}, \ m.\mathrm{bal} \gt  \mathrm{maxBal}\[a\] \\\\\\
&\quad \land \ \mathrm{send}(\\{\mathrm{type}: \mathrm{1b}, \mathrm{acc}: a, \mathrm{bal}: b, \mathrm{maxVBal}: \mathrm{maxVBal}\[a\], \mathrm{maxVal}: \mathrm{maxVal}\[a\]\\}) \\\\\\
&\quad \land \ \mathrm{maxBal}[a] \leftarrow m.\mathrm{bal}
\end{align}$$

_Phase2a_ kicks off the ballot for \\(b\\), given that there has not already been a ballot initiated with the same ballot number. The
2a message with a proposed value is sent to the quorum.
$$\begin{align}
&\mathrm{Phase2a}(b \in \mathcal{B}) := \phantom{\mathrm{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}}\\\\\\
&\quad \land \ \nexists \ m \in \mathcal{M}, \ m.\mathrm{type} = \mathrm{2a}, \ m.\mathrm{bal} = b \\\\\\
&\quad \land \ \exists \ v \in \mathcal{V} \ \text{ such that } \ \exists \ Q \in \mathcal{Q}, S \subseteq \\{m \in \mathcal{M}: m.\mathrm{type} = 1b, \ m.\mathrm{bal} = b \\}, \\\\\\
&\quad \quad \quad \quad \land \ \forall a \in Q, \exists \ m \in \mathrm{M}: m.\mathrm{acc} = a \\\\\\
&\quad \quad \quad \quad \land \ (\forall m \in S: m.\mathrm{maxVBal} = -1) \ \lor \ (\exists \ b' \in [0, b), \\\\\\
&\quad \quad \quad \quad \quad \quad \quad \quad \quad (\forall m \in S, m.\mathrm{maxVBal} \leq b') \\\\\\
&\quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \land \ (\exists \ m \in S, m.\mathrm{maxVBal} = b', m.\mathrm{maxVal} = v)) \\\\\\
&\quad \land \mathrm{send}(\\{\mathrm{type}: \mathrm{2a}, \mathrm{bal}: b, \mathrm{val}: v\\})
\end{align}$$
Pay close attention to how the proposed value \\(v\\) is decided.

In _Phase2b_, the quorum votes by responding with a 2b message, and each acceptor that voted updates their
\\(\mathrm{maxBal}\\), \\(\mathrm{maxVBal}\\), and \\(\mathrm{maxVal}\\).
$$\begin{align}
&\mathrm{Phase2b}(a \in \mathcal{A}) := \phantom{\mathrm{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}}\\\\\\
&\quad \land \ \exists \ m \in \mathcal{M}, \ m.\mathrm{type} = \mathrm{2a}, \ m.\mathrm{bal} \geq \mathrm{maxBal}[a] \\\\\\
&\quad \land \ \mathrm{send}(\\{\mathrm{type}: \mathrm{2a}, \mathrm{acc}: a, \mathrm{bal}: b, \mathrm{val}: v\\}) \\\\\\
&\quad \land \ \mathrm{maxBal}[a] \leftarrow m.\mathrm{bal} \\\\\\
&\quad \land \ \mathrm{maxVBal}[a] \leftarrow m.\mathrm{bal} \\\\\\
&\quad \land \ \mathrm{maxVal}[a] \leftarrow m.\mathrm{val} \\\\\\
\end{align}$$

#### Invariants of Paxos

WIP

#### Consistency Proof of Paxos 

<!-- Start of InvConsistent -->
**Lemma (InvConsistent)** Given that the invariants _Inv_ holds,
$$
\forall v_1, v_2 \in \mathcal{V}, \ \mathrm{chosen}(v_{1}) \land \mathrm{chosen}(v_{2}) \Longrightarrow v_1 = v_2
$$

**_Proof:_**
By definition of _chosen_, the statement we want to prove is equivalent to the following: given ballot numbers \\(b_1, b_2 \in \mathcal{B}\\)
and values \\(v_1, v_2 \in \mathcal{V}\\),
$$
\mathrm{chosen}(b_1, v_1) \land \mathrm{chosen}(b_2, v_2) \Longrightarrow v_1 = v_2
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

Next, assume \\(b_1 < b_2\\). Due to \\(\mathrm{chosenIn}(b_2, v_2)\\), there must be a quorum \\(Q_2 \in \mathcal{Q}\\)
such that \\(\forall a \in Q_2: \mathrm{VotedForIn}(a, v_2, b_2)\\) holds. By definition of _VotedForIn_ and _MsgInv2b_,
there must exist a 2a message \\(\\{\mathrm{type}: 2a, \mathrm{bal}: b_2, \mathrm{val}: v_2\\}\\). By _MsgInv2a_, this 
implies
$$
\forall b \in [0, b_2): \exists Q \in \mathcal{Q} \text{ such that } \forall a \in Q, \mathrm{VotedForIn}(a, b_2, v_2) \lor \mathrm{WontVoteIn}(a, b).
$$
In particular, there is a quorum \\(Q \in \mathcal{Q}\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_2) \lor \mathrm{WontVoteIn}(a, b_1)\\) holds for
every \\(a \in Q\\). Also, by \\(\mathrm{chosen}(b_1, v_1)\\), there exists \\(Q_1 \in \mathcal{Q}\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_1)\\)
holds for every \\(a \in Q_1\\). 
  
Then, by the quorum assumption, there must exist \\(a \in Q \cap Q_1\\) such that \\(\mathrm{VotedForIn}(a, b_1, v_2)\\) and
\\(\mathrm{VotedForIn}(a, b_1, v_1)\\) both hold (from quorums \\(Q_1\\) and \\(Q_2\\) respectively). We know from an earlier argument this implies
\\(v_1 = v_2\\). Therefore the invariants _Inv_ imply consistency.
$$\tag*{$\square$}$$
<!-- End of InvConsistent -->


#### Closing

I think a more organic approach (than presented in this post) to understanding Paxos is to begin with a simple voting protocol,
prove its consistency conditions, then build Paxos on top of that and give a refinement proof
of the Paxos protocol to the simple voting protocol. This refinement approach is said to be
how Leslie Lamport discovered/developed the Paxos protocol, as he explains in his mini lecture
series [_The Paxos Algorithm, or How to win a Turing Award_](https://lamport.azurewebsites.net/tla/paxos-algorithm.html).
As far as I'm concerned, the refinement proof presented leaves most of the hard work to TLAPS (i.e. shoving
it into an SMT solver). That's great (for TLA+), but not so great for actually understanding the
refinement argument - I plan to also cover this in a future post :).
