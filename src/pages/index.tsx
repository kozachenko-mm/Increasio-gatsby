import * as React from 'react';
import { graphql } from 'gatsby';
import { TypePost } from '../types';
import { PostTitle } from '../components';

interface MainPageData {
  data: {
    allGraphCmsPost: {
      nodes: TypePost[];
    };
  };
}

const IndexPage: React.FC<MainPageData> = ({ data }) => {
  const posts = data.allGraphCmsPost.nodes;
  return (
    <div className="wrapper">
      <h1 className="text-7xl text-center mb-12">Posts</h1>
      {posts.map((post) => (
        <PostTitle key={post.id} post={post} />
      ))}
    </div>
  );
};

export default IndexPage;

export const PageQuery = graphql`
  query {
    allGraphCmsPost {
      nodes {
        updatedAt
        image {
          url
        }
        title
        slug
        id
      }
    }
  }
`;
