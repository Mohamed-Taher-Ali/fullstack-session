import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class SessionService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  setSessionData(key: string, value: any) {
    this.request.session[key] = value;
  }

  getSessionData(key: string): any {
    return this.request.session[key];
  }

  clearSession() {
    this.request.session.destroy((err) => {
      if (err) console.error('Error clearing session:', err);
    });
  }
}
