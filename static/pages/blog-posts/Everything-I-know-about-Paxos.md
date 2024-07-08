# Everything-I-know-about-Paxos

This blog post details everything I know about Paxos, to date. With the amount
that I've actually written, this should probably be taken as a series of blog posts,
not intended to be read in a single sitting (if read at all). That
said, the post is organized as followed:

1. [#] An introduction to the distributed consensus problem that Paxos solves
2. **Single(-Decree) Paxos**: details the original single-decree protocol, as motivated from 
the guarantees, constraints, and invariants established in Leslie Lamport's original Paxos paper,
[*The Part-Time Parliament*](https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf), and
his friendlier follow-up paper [*Paxos Made Simple*](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf) 
3. **Multi(-Decree) Paxos**: summarizes the multi-decree protocol of the original Paxos paper and Robbert van Renesse's 
[*Paxos Made Moderately Complex*](https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf) paper, with a more
engineering perspective
4. Optimizations and Designs of Multi-Paxos concerning real-world implementations, discussed in 
*Paxos Made Moderately Complex*, and [*Paxos Made Practical*](https://www.scs.stanford.edu/~dm/home/papers/paxos.pdf)
5. The [Raft](https://raft.github.io/raft.pdf) protocol and how it reduces to a special case of Paxos
6. Paxos and Raft in Production-Grade Systems
7. My Implementations of Multi-Paxos and Raft

### Problem: Reaching Distributed Consesus

#### Guarantees

#### Assumptions
Paxos makes two important assumptions for distributed consensus to be reached:
- **(A1)** Processes in the network are **asynchronous**, meaning they operate at
different arbitrary speeds. Processes may also stop, fail, and restart at any time.
- **(A2)** The network is **non-Byzantine**, meaning any participant can fail, but none will
be hostile. Practically, messages can be delayed, lost, or duplicated, but never corrupted.

### Single-Paxos
Single-Decree Paxos (which will now be referred to as just "Paxos") is a protocol to achieve 
consensus on *a single value* in an asynchronous and non-Byzantine network. Values can be
proposed within the network, one of which will be accepted and chosen.

#### Proposers and Acceptors
For now, let there be two kinds of processes in the network: proposers and acceptors; proposers send proposals of values 
to acceptors, and the acceptors accept or reject proposals. Since arbitrarily many proposals can be made, proposals must 
be identifiably unique. Moreover, for reasons that will become clear very soon, let proposal IDs be ordered
(for simplicity, assume the IDs are natural numbers). When a majority of the acceptors accept the same value, 
then that value is *chosen* as the consensus. Note that the terms *chosen* and *accepted* mean two different things - *chosen* 
specifically denotes *accepted by the majority and thus achieved consensus*. 

For a consensus to be reached at all, a value must be chosen among the proposed values. Thus, the following
requirement is made:

- **(R1)** An acceptor must accept the first proposal `n` it receives (and it may accept new proposals afterwards)

This alone is problematic because different proposals can arrive simultaneously at acceptors, and which
of those is read first is generally undefined. This, and with the condition that an acceptor can accept subsequent 
proposals after it had already accepted one, can result in there being no majority vote
for a single value (ever) - then no consensus can maintained. To overcome that, require the following as well: 

- **(R2)** If a value `v` of a proposal `n` is chosen, then any higher-numbered proposal `m > n` that is
*chosen* must have value `v`

This guarantees that a consensus (a single chosen value) can be maintained. Consider the following strenghtening of
(R2):

- **(R2')** If a value `v` of a proposal `n` is chosen, then any higher-numbered proposal `m > n` *issued by any proposer has value* `v`

Obviously, (R2) still holds via enforcing (R2'). A consensus protocol requiring (R1) and (R2') thus guarantees that 
only a value that has been proposed may be chosen (G1), and that only a single value can be chosen (G2), as desired.
(R1) is easy to enforce; our concern is designing a protocol such that (R2') is never violated.

We require the 

#### The Synod Protocol




- **(R2a)**  
- **(R2b)**  
- **(R2c)**  


To summarize the protocol developed so far: 




### Multi-Paxos


### Optimizations and Designs for Multi-Paxos


### "Raft is a Special Case of Paxos"


### Paxos and Raft in the Real World


### An Implementation of Multi-Paxos


### References
Here are all resources/papers referenced in the post:
- [1] [The Part-Time Parliament](https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf)
- [2] [Paxos Made Simple](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf)
- [3] [Paxos Made Moderately Complex](https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf)
- [4] [Paxos Made Practical](https://www.scs.stanford.edu/~dm/home/papers/paxos.pdf)
- [5] [In Search of an Understandable Consensus Algorithm (Raft)](https://raft.github.io/raft.pdf)
- [6] [Paxos Made Live](https://static.googleusercontent.com/media/research.google.com/en//archive/paxos_made_live.pdf)
