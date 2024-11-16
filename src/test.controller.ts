import { Controller, Get, Query } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/api/test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  async list() {
    return await this.testService.list();
  }

  @Get('/add')
  async add(@Query('text') text: string) {
    return await this.testService.add(text);
  }
}
