import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

// @Controller('hello') // tienes que visitar primero la ruta /hello
@Controller()
export class HelloController {

    /* @Get("/")
    index() {
        return "/ ruta principal"
    } */

    // si hiciera falta usar express
    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: "hello wold"
        })
    }

    @Get()
    @HttpCode(404) // status code
    notFoundPage() {
        return "404 not found"
    }

    @Get("ticket/:num")
    getNumber(@Param("num", ParseIntPipe) num: number) { // @Param("num", ParseIntPipe) convertir num en entero
        console.log(typeof num)
        return num + 23
    }

    @Get("greet") // /greet?name=sam&age=30
    @UseGuards(AuthGuard) // validacion para seguir (auth? y mas)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        return `Hola ${query.name}, tu edad es ${query.age}`
    }
}
