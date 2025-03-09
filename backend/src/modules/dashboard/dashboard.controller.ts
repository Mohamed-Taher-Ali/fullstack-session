import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { DashboardService } from './dashboard.service';
import { AuthGuard } from '@src/decorators';

@AuthGuard
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  welcome(@Res() res: Response) {
    const data = this.dashboardService.welcome();
    return res.json(data);
  }
}
