import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Resume = () => (
  <Main meta={<Meta title="Chris Yoon" description={AppConfig.description} />}>
    <div>
      Please find a pdf version of my resume
      <Link href="/assets/files/christopher_yoon_resume.pdf">
        <a> here!</a>
      </Link>
    </div>
  </Main>
);

export default Resume;
