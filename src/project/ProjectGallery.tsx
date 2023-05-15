import React, { useState } from 'react';

import { Content } from '../content/Content';
import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/ProjectContent';

export type IProjectGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

function gatherAllTags(props: IProjectGalleryProps) {
  const postsByTags: Map<string, PostItems[]> = new Map<string, PostItems[]>();
  postsByTags.set('all', []);
  props.posts.forEach((post) => {
    const tags = post.tags.toString().split(',');
    tags.forEach((tag) => {
      if (!postsByTags.has(tag)) {
        postsByTags.set(tag, []);
      }
      postsByTags.get(tag)!.push(post);
    });
    postsByTags.get('all')!.push(post);
  });
  return postsByTags;
}

function displayTags(tags: string[]) {
  return (
    <>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </>
  );
}

const postTagList = (rawTags: string) => rawTags.toString().split(',');

const TagGallery = (posts: PostItems[]) => (
  <>
    <ul>
      {posts.map((post) => (
        <li
          key={post.slug}
          className="rounded-md border-x-2 border-y-2 shadow mb-3 flex justify-between"
        >
          <div className="my-4 ml-4">
            <h2>{post.title}</h2>
            <div className="text-sm mt-2 mr-2">{post.description}</div>
            <div className="text-sm mt-2 mr-2">
              <Content>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Content>
            </div>
            <div className="text-xs mt-3 mb-0">
              {displayTags(postTagList(post.tags))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </>
);

const ProjectGallery = (props: IProjectGalleryProps) => {
  const postsByTags: Map<string, PostItems[]> = gatherAllTags(props);
  const tags = Array.from(postsByTags.keys());
  const [selectedTag, setTag] = useState<string>('all');

  const clickTagHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const clickedTag: HTMLButtonElement = event.currentTarget;
    setTag(clickedTag.name);
  };

  return (
    <>
      <div className="text-xs mt-3 mb-0">
        {tags.map((tag) => (
          <button
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2"
            name={tag}
            onClick={clickTagHandler}
            style={{ backgroundColor: tag === selectedTag ? '#78b3e0' : '' }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div>{TagGallery(postsByTags.get(selectedTag)!)}</div>
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </>
  );
};

export { ProjectGallery };
