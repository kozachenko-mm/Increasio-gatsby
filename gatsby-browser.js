import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import './src/layouts/layout.css';

const wrapRootElement = ({ element }) => (
  <MDXProvider components={{ Test: () => '' }}>{element}</MDXProvider>
);

export { wrapRootElement };
