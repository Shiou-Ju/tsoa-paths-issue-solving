import { Controller, Get, Path, Route } from "tsoa";

@Route("/test")
export class TestController extends Controller {
    @Get("/all")
    async getAll(): Promise<number[]> {
        return [1,2,3];
    }

    @Get("/{id}")
    async getOne(@Path() id: number): Promise<number> {
        return id;
    }
}
