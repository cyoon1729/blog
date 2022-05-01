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
        I am a 2nd year undergrad (graduating in 2024!) at Columbia University
        studying Computer Science and Mathematics. I am especially passionate
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
        During Summer 2022, I will be at <b>Riot Games</b> as a{' '}
        <b>Software Engineer Intern</b>
        <img
          src={'./assets/riot.png'}
          alt="riot"
          style={{ width: 25, height: 25, display: 'inline-block' }}
        />{' '}
        . I am with the <b>Live Operations Engineering Team</b>, where we build
        systems to respond to and monitor crashes in live game services.
      </p>
      <p>
        Some courses I have taken at Columbia are:{' '}
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
              COMS 6998: Advanced Operating Systems (graduate research seminar)
            </li>
            <li>COMS 4118: Operating Systems</li>
            <li>COMS 4995: Parallel Functional Programming</li>
            <li>COMS 4113: Distributed Systems</li>
            <li>COMS 4115: Progamming Languages and Translators (Compilers)</li>
            <li>MATH 4044: Representation Theory of Finite Groups</li>
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
            <li>COMS 4701: Artificial Intelligence (Spring &lsquo;22)</li>
            <li>
              CSEE 3827: Fundamentals of Computer Systems (Spring &lsquo;22)
            </li>
          </ul>
        </small>
      </p>
    </Content>
  </Main>
);

export default Index;
