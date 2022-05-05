import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { TypePost } from '../types';
import ReactMarkdown from 'react-markdown';

type BlogData = {
  graphCmsPost: TypePost;
};

const Blog = ({ data }: PageProps<BlogData>) => {
  const post = data.graphCmsPost;
  return (
    <section>
      <div className="relative img-block">
        <img
          src={post.image.url}
          alt="blog picture"
          className="object-cover h-full w-full "
        />
        <h2 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-3xl text-center font-semibold">
          {post.title}
        </h2>
        <p className="text-center text-xl text-gray-600">
          {new Date(post.updatedAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </div>

      <div className="wrapper">
        <div className="cms-content">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
        <div className="border-solid border border-pink-300 flex uppercase text-center">
          <p className="border-r  border-pink-300 grow py-3">shared:</p>
          <a className="border-r  border-pink-300 grow py-3 hover:bg-pink-300" href="#">
            twitter
          </a>
          <a className="border-r  border-pink-300 grow py-3 hover:bg-pink-300" href="#">
            facebook
          </a>
          <a className="grow py-3 hover:bg-pink-300" href="#">
            google+
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

export const postQuery = graphql`
  query ($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      title
      body
      updatedAt
      image {
        url
      }
    }
  }
`;
