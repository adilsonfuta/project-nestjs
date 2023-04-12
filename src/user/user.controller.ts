import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdateUserDTO } from "./DTO/Update-user.dto";


@Controller('users')
export class UserController {

    @Post()
    async create (@Body() {name, email, password} : CreateUserDTO){
        return { name, email, password };
    }

    @Put(':id')
    async updateTotal(@Body() { name,email, password }: UpdateUserDTO, @Param() parametros){
            return {
                method: 'put',
                name,
                email,
                password,
                parametros }
    }
    

    @Patch(':id')
    async updatePartial(@Body() body, @Param() parament){
        return {
        method: 'put',
        body,
        parament,
        }
    }

    @Get()
    async list(){
        return { users:[] }
    }


    @Get(':id')
    async readOne(@Param() parametro){
        return { users:{ }, parametro }
    }


    @Delete(':id')
    async DeleteUser(@Param() Parametro){
        return {Parametro}
    }
}