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
        I am a 3rd year undergrad (graduating in 2024 Spring!) at Columbia
        University studying Computer Science. I am especially passionate
        about... <br />
        <br />
        <div className="text-center">
          <b>
            {' '}
            Distributed Systems &nbsp; && &nbsp; ML Systems &nbsp; && &nbsp;
            Operating Systems
          </b>
        </div>
      </p>
      <p>
        Previously, I was a <b>Software Engineer Intern </b> at{' '}
        <b>Riot Games</b> &nbsp;
        <img
          src={'./assets/riot.png'}
          alt="riot"
          style={{ width: 25, height: 25, display: 'inline-block' }}
        />{' '}
        . I was with the{' '}
        <b>Live Operations Engineering - Incident Management Team</b>, which
        builds tools and infrastructure that makes detecting and responding to
        service incidents for our game services (e.g. League of Legends and
        Valorant) more efficient.
      </p>
      <p>
        My coursework at Columbia that are representative of my strengths and
        interests are:{' '}
        <small>
          <ul
            style={{
              listStyleType: 'circle',
              marginTop: '0.5em',
              marginLeft: '3.5em',
            }}
          >
            <li>
              {' '}
              COMS 6998: Graduate Research Seminar on Operating Systems (taking
              in Fall 2022)
            </li>
            <li>
              {' '}
              COMS 6863: Graduate Seminar on Software & Hardware Verification
              (taking in Fall 2022)
            </li>
            <li>COMS 4113: Distributed Systems (taking in Fall 2022) </li>
            <li>
              COMS 4115: Progamming Languages and Translators; Compilers (taking
              in Fall 2022){' '}
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
        I was also a Teaching Assistant at Columbia for
        <small>
          <ul
            style={{
              listStyleType: 'circle',
              marginTop: '0.5em',
              marginLeft: '3.5em',
            }}
          >
            <li>COMS 4995: Parallel Functional Programming (Fall &lsquo;22)</li>
            <li>
              COMS 4701: Artificial Intelligence (Spring, Summer &lsquo;22)
            </li>
            <li>
              CSEE 3827: Fundamentals of Computer Systems (Spring, Fall
              &lsquo;22)
            </li>
          </ul>
        </small>
      </p>
    </Content>
  </Main>
);

export default Index;
