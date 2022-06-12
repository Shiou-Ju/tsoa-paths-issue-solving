import { Controller, Get, Middlewares, Path, Route } from 'tsoa';
import testMiddleware from '../testMiddleware';

interface User {
  name: string;
  birthday?: string;
  age?: number;
}

@Route('/test')
@Middlewares(testMiddleware())
export class TestController extends Controller {
  @Get('/all')
  async getAllUsers(): Promise<Array<User>> {
    return [{ name: 'John Doe' }, { name: 'Lisa Lin', birthday: '2000-01-01' }];
  }

  //   @Get('/{name}')
  //   async getByName(@Path() name: string): Promise<string> {
  //     return `${name}\n`;
  //   }

  @Get('/{id}')
  async getById(@Path() id: number): Promise<string> {
    return `${id}\n`;
  }
}
