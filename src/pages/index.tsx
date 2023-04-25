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
        I am an undergrad at Columbia University studying Computer
        Science (graduating in 2024!).
      </p>
      <p>
	I care deeply about building safe and performant software systems.
	Specifically, I enjoy studying <em>compilers</em>, <em>languages</em>, and
	&nbsp;<em>systems-for-ML</em>.
      </p>
      <p>
	Recently, I've been thinking about <em>type systems</em>, <em>session types</em>,
	and <em>Rust</em>!
      </p>
      <p>
        <h2> Experience </h2>
        <img src="./assets/timeline.svg" />
        <br />
        <b>Virtu Financial, Software Engineer Intern (2023 Summer)</b>
        <br />
        Virtu Financial is a High Frequency Trading firm. I will be joining
        their NYC office to work on...
        <br />
        <br />
        <b>Palantir Technologies, Software Engineer Intern (2023 Fall)</b>
        <br />
        Joining their NYC office during 2023 Fall to work on...
        <br />
        <br />
        <b>Riot Games, Software Engineer Intern (2022 Summer)</b>
        <br />
        Riot Games is an online game company behind games like League of Legends
        and Valorant. I was with the &nbsp;
        <em>Live Operations Enginnering - Incident Management Team</em>,
        building tools to improve service observability and infrastructure for
        service incident response.
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
            <li>COMS 6998: Graduate Seminar on Type Systems and Programming Languages</li>
            <li>COMS 6998: Graduate Seminar on Privacy Preserving Systems</li>
            <li>COMS 6118: Graduate Seminar on Operating Systems</li>
            <li>
              COMS 4115: Programming Languages and Translators (Compilers)
            </li>
            <li>COMS 4118: Operating Systems</li>
            <li>COMS 4995: Parallel Functional Programming</li>
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
            <li>COMS 4995: Parallel Functional Programming (with Haskell) (Fall &lsquo;22)</li>
            <li>
              COMS 4701: Artificial Intelligence (Spring &lsquo;22, Summer
              &lsquo;22, Spring &lsquo;23)
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
