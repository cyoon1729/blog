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
        I am a Software Engineer at Palantir Technologies, starting Fall 2024.
      </p>
      <p>
        Before that, I completed my undergrad degree at Columbia University (CC
        &lsquo;24), with a Computer Science major and a Mathematics minor. My
        academic focus was mostly on compilers and programming language theory
        (type systems, LLVM/MLIR, formal methods), as well as operating systems
        (linux kernel hacking, hypervisors).
      </p>
      <p>
        Generally, I enjoy systems programming -- things like operating systems,
        distributed systems, and compilers!
      </p>
      <p>
        Find my <a href="resume">resume</a>; my <a href="projects"> projects</a>
        ; or my <a href="blog">blog</a>!
      </p>
      <p>
        If you ever want to chat, reach out to me at{' '}
        <b>cjy2129 [at] gmail [dot] com</b> :)
      </p>
    </Content>
  </Main>
);

export default Index;
