import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { IUser } from '@src/types';

type IAppContext = {
  user?: IUser;
  isAuthenticated: boolean;
  updateUser: (user?: IUser) => void;
};

const AppContext = createContext<IAppContext>({
  isAuthenticated: false,
  updateUser: () => {},
});

export const useAppContext = () => useContext(AppContext);

export default ({ children }: PropsWithChildren) => {
  const [user, updateUser] = useState<IUser | undefined>();
  const isAuthenticated = !!user;

  return (
    <AppContext.Provider value={{ user, updateUser, isAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
