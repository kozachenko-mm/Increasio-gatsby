import { Link as GatsbyLink } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import React from 'react';

export function Link<TState>({
  children,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
  return <GatsbyLink<TState> {...props}>{children}</GatsbyLink>;
}
