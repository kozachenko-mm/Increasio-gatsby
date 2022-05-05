import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { TypePost } from './src/types';

type TypeData = {
  allGraphCmsPost: {
    nodes: TypePost[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<TypeData>(`
    {
      allGraphCmsPost {
        nodes {
          slug
          id
        }
      }
    }
  `);

  const postTemplate = path.resolve('./src/templates/blog.tsx');
  if (result.data?.allGraphCmsPost)
    result.data.allGraphCmsPost.nodes.forEach((post: TypePost) => {
      createPage({
        path: `/${post.slug}`,
        component: postTemplate,
        context: {
          slug: post.slug
        }
      });
    });
};
