# Everything-I-know-about-Paxos

This blog post details everything I know about Paxos, to date. With the amount
that I've actually written, this should probably be taken as a series of blog posts,
not intended to be read in a single sitting (if read at all). That
said, the post is organized as followed:

1. [#] An introduction to the distributed consensus problem that Paxos solves
2. **Single-Decree Paxos**: mostly summarizes parts of the Leslie Lamport's original Paxos paper
([*The Part-Time Parliament*](https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf)), and
his friendlier follow-up paper [*Paxos Made Simple*](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf), 
with a focus on how the original protocol is motivated from the requirements and invariants
3. **Multi-Paxos**: summarizes the multi-decree parts of the original Paxos paper and Robbert van Renesse's 
[*Paxos Made Moderately Complex*](https://www.cs.cornell.edu/home/rvr/Paxos/paxos.pdf) paper, with a more
engineering perspective
4. Optimizations and Designs of Multi-Paxos concerning real-world implementations, discussed in 
*Paxos Made Moderately Complex*, and [*Paxos Made Practical*](https://www.scs.stanford.edu/~dm/home/papers/paxos.pdf)
5. The [Raft](https://raft.github.io/raft.pdf) protocol and how it reduces to a special case of Paxos
6. Paxos and Raft in Production-Grade Systems
7. My Implementation of Multi-Paxos 

### Problem: Reaching Distributed Consesus


### Single-Paxos


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

