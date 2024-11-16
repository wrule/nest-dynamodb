import { Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/api/test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  list(): string[] {
    return this.testService.list();
  }

  @Post()
  add(text: string) {
    this.testService.add(text);
    return 'ok';
  }
}
