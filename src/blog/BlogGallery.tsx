import React, { useState } from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

function gatherAllTags(props: IBlogGalleryProps) {
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

const TagGallery = (tag: string, posts: PostItems[]) => (
  <>
    <ul>
      {posts.map((post) => (
        <li
          key={post.slug}
          className="rounded-md border-x-2 border-y-2 shadow mb-3 flex justify-between"
        >
          <div className="my-2 ml-2">
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <div className="text-sm">{post.description}</div>
            <div className="text-xs mt-3 mb-0">
              {displayTags(postTagList(post.tags))}
            </div>
          </div>
          <div className="text-right my-2 mr-3 text-sm">
            {format(new Date(post.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
    </ul>
  </>
);

const BlogGallery = (props: IBlogGalleryProps) => {
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
      <div>{TagGallery(selectedTag, postsByTags.get(selectedTag)!)}</div>
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </>
  );
};

export { BlogGallery };
