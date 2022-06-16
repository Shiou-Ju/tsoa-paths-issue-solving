import { Controller, Get, Middlewares, Path, Post, Route } from 'tsoa';
import testMiddleware from '../testMiddleware';

interface User {
  name: string;
  birthday?: string;
  age?: number;
}

@Route('/test')
@Middlewares(testMiddleware())
export class AnotherController extends Controller {
  // TODO: shall be placed after `testController.ts`
  @Get('/{id}/detail')
  async getDetailById(@Path() id: number): Promise<string> {
    return `${id}: has some info\n`;
  }

  @Post('/all')
  async clearAllUsers(): Promise<string> {
    return `users might be deleted`;
  }

  @Post('/{id}/detail')
  async editDetailById(@Path() id: number): Promise<string> {
    return `${id}: change some info\n`;
  }
}
