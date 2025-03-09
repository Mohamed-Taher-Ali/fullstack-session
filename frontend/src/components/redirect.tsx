import { Navigate, useLocation, NavigateProps } from 'react-router-dom';

export type RedirectProps = NavigateProps;

export const Redirect = ({ to, ...rest }: RedirectProps) => {
  const location = useLocation();

  return <Navigate to={to} state={{ from: location }} {...rest} />;
};
