import { Fragment, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppContext } from '@src/provider';
import { Redirect, Render } from '.';

const Guard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAppContext();

  return (
    <Render
      ifCondition={isAuthenticated}
      render={<Fragment>{children || <Outlet />}</Fragment>}
      elseRender={<Redirect to="/auth" />}
    />
  );
};

const Public = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAppContext();

  return (
    <Render
      ifCondition={!isAuthenticated}
      render={<Fragment>{children || <Outlet />}</Fragment>}
      elseRender={<Redirect to="/" />}
    />
  );
};

export const AuthWrapper = {
  Guard,
  Public,
};
