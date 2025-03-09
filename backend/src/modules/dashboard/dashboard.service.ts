import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  welcome() {
    return { content: 'Welcome to the application.' };
  }
}
