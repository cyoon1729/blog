import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import {
  ProjectGallery,
  IProjectGalleryProps,
} from '../project/ProjectGallery';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllProjects } from '../utils/ProjectContent';

const Projs = (props: IProjectGalleryProps) => (
  <Main meta={<Meta title="Chris Yoon" description={AppConfig.description} />}>
    <ProjectGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<
  IProjectGalleryProps
> = async () => {
  const posts = getAllProjects([
    'title',
    'description',
    'date',
    'tags',
    'slug',
    'content',
  ]);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Projs;
