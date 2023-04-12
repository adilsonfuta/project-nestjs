https://github.com/typestack/class-validator

npm i ---save class-validator class-transformer 

 npm i @nestjs/mapped-types


### All request for controller

     @Post()
     async create (@Body() body : CreateUserDTO){
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