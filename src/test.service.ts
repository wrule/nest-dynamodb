import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  private db: string[] = [];

  public list() {
    return this.db.slice();
  }

  public add(text: string) {
    this.db.push(text || '空文本');
  }
}
