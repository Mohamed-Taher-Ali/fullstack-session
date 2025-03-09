import { Fragment, PropsWithChildren, ReactNode } from 'react';

export const Render = ({
  children,
  ifCondition,
  elseRender,
  render,
}: PropsWithChildren<{
  ifCondition: any;
  render?: ReactNode;
  elseRender?: ReactNode;
}>) => <Fragment>{!!ifCondition ? children || render : elseRender}</Fragment>;
