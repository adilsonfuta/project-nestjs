https://github.com/typestack/class-validator

npm i ---save class-validator class-transformer 

 npm i @nestjs/mapped-types

 $ npm i -D prisma

- start prisma
- npx prisma init



    // @Post()
    // async create (@Body() {name, email, password} : CreateUserDTO){
    //     // return { name, email, password };
    //     return this.UserService.create({name, email, password});
    // }


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



    #  npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started

2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.

3. Run prisma db pull to turn your database schema into a Prisma schema.

4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
