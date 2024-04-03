import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main meta={<Meta title="About Me" description="About Me" />}>
    <Content>
      <div className="my-0">
        <h1>Chris Yoon</h1>
      </div>
      <p>
        I am an undergrad at Columbia University studying Computer Science
        (graduating in 2024!). I will be joining Palantir Technologies as a
        Software Engineer following my graduation.
      </p>
      <p>
        I care deeply about building robust and performant software systems.
        Towards this, I enjoy studying programming language theory, compilers,
        and operating systems, roughly in that order. Recently, I've been 
        exploring formal verification and the Coq proof assistant.
      </p>
      <p>
        My recent academic endeavors have been in programming languages (type
        systems, session types, and equality saturation); compilers (LLVM and
        MLIR hacking), and in operating systems (hypervisors and secure
        containerization). In the distant past I did some work in machine
        learning (geometric deep learning, reinforcement learning, and
        distributed training).
      </p>
      <p>
        See <a href="projects">here</a> to read about some of my projects!
      </p>
      <p>
        <h2> Experience </h2>
        <img src="./assets/timeline.svg" />
        <br />
        <b>Palantir Technologies, Software Engineer Intern (2023 Fall)</b>
        <br />
        I was primarily with the Gotham Data Modeling team, but also contributed
        to Foundry services as part of their unification/interoperability
        effort. I did backend engineering for their ontology services, which
        control how data is ingested, represented, and distributed to downstream
        services.
        <br />
        <br />
        <b>Virtu Financial, Software Engineer Intern (2023 Summer)</b>
        <br />
        Virtu Financial is a High Frequency Trading firm. I was with the
        pre/post-trade infrastructure team, and did some work on low-level
        networking with Java and DB access control mechanisms.
        <br />
        <br />
        <b>Riot Games, Software Engineer Intern (2022 Summer)</b>
        <br />
        Riot Games is an online game company behind <em>League of Legends </em>
        and <em>Valorant</em>. I was with the Live Operations Engineering Team,
        building tools to improve observability and infrastructure for service
        incident response.
      </p>
      <p>
        <h2> School </h2> I had the chance to take some really interesting
        courses at Columbia:
        <small>
          <ul
            style={{
              listStyleType: 'circle',
              marginTop: '0.5em',
              marginLeft: '3.5em',
            }}
          >
            <li>COMS 6998: Graduate Seminar on Programming Language Theory</li>
            <li>COMS 6998: Graduate Seminar on Privacy Preserving Systems</li>
            <li>COMS 6118: Graduate Seminar on Operating Systems</li>
            <li>
              COMS 4115: Programming Languages and Translators (Compilers)
            </li>
            <li>COMS 4118: Operating Systems</li>
            <li>CSEE 4824: Computer Architecture</li>
            <li>COMS 4119: Computer Networks</li>
            <li>COMS 4995: Parallel Functional Programming (with Haskell)</li>
            <li>COMS 4111: Database Systems</li>
            <li>
              MATH 4041 & 4042: Modern Algebra I&II (Abstract Algebra, Group
              Theory, Galois Theory){' '}
            </li>
            <li>MATH 4061: Real Analysis I</li>
          </ul>
        </small>
        I have also had the opportunity to be a Teaching Assistant for:
        <small>
          <ul
            style={{
              listStyleType: 'circle',
              marginTop: '0.5em',
              marginLeft: '3.5em',
            }}
          >
            <li>
              COMS 4115: Programming Languages and Translators (Compilers)
              (Spring &lsquo;24 Head TA)
            </li>
            <li>
              COMS 4995: Parallel Functional Programming (with Haskell) (Fall
              &lsquo;22)
            </li>
            <li>
              COMS 4701: Artificial Intelligence (Spring &lsquo;22, Summer
              &lsquo;22, Spring &lsquo;23 Head TA)
            </li>
            <li>
              CSEE 3827: Fundamentals of Computer Systems (Spring &lsquo;22,
              Fall &lsquo;22, Spring &lsquo;23)
            </li>
          </ul>
        </small>
      </p>
    </Content>
  </Main>
);

export default Index;
