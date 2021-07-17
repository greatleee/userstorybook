import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('page/main/index')
  mainPage(): Object {
    return { message: 'Userstorybook' };
  }

  @Get('search')
  @Render('page/search/index')
  searchResultPage(): Object {
    return {};
  }
}
