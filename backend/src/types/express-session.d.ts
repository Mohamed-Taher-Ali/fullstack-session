import { Session } from 'express-session';

import { ISession } from '@src/modules/_globals/auth/types';
import { IUser } from '@src/modules/user';

declare module 'express-session' {
  interface SessionData extends ISession {}
}

declare module 'express' {
  interface Request {
    session: Session & Partial<SessionData>;
  }
}
