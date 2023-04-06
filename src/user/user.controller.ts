import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";


@Controller('users')
export class UserController {

    @Post()
    async create (@Body() body){
        return { body };
    }

    @Get()
    async list(){
        return { users:[] }
    }

    @Get(':id')
    async readOne(@Param() parametro){
        return { users:{ }, parametro }
    }

    @Put(':id')
    async updateTotal(@Body() body, @Param() paramentros){
            return {
                method: 'put',
                body,
                paramentros
            }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() parament){
        return {
            method: 'put',
            body,
            parament
        }
    }

    @Delete(':id')
    async DeleteUser(@Param() Parametro){
        return {Parametro}
    }
}