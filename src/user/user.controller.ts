import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user.dto";
import { UpdateUserDTO } from "./DTO/Update-user.dto";
import { UpdatePatchUserDTO } from "./DTO/Update-Patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly UserService: UserService){}


    @Post()
    async create (@Body() data: CreateUserDTO){
        // return this.UserService.create({name, email, password});
      return  this.UserService.create(data);
    }

    @Put(':id')
    async updateTotal(@Body() { name,email, password }: UpdateUserDTO, @Param('id', ParseIntPipe) id:number){
            return {
                method: 'put',
                name,
                email,
                password,
                id }
    }
    

    @Patch(':id')
    async updatePartial(@Body() {name,email,password}:UpdatePatchUserDTO,@Param('id', ParseIntPipe) id:number){
        return {
        method: 'put',
        name,
        email,
        password,
        id,
        }
    }

    @Delete(':id')
    async DeleteUser(@Param('id', ParseIntPipe) id:number){
        return {
            id
        }
    }

    @Get()
    async list(){
        return { users:[] }
    }


    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id:number){
        return { users:{ }, id }
    }

}