import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  private db: string[] = [];

  public async list() {
    return Promise.resolve(this.db.slice());
  }

  public async add(text: string) {
    return Promise.resolve(this.db.push(text || '空文本'));
  }
}
