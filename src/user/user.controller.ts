import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import{Response,Request} from 'express';
@Controller('user')
export class UserController {
  createUserDto: any;
  constructor(private readonly userService: UserService) {}

  @Post('sign')
   async create(@Body() createUserDto:any,@Req() req:Request,@Res() res:Response) {
    try{
      
      console.log("createUserDto",createUserDto);
      
      await this.userService.create(createUserDto);

      res.status(200).json({
        message:'user created successfully'
      })

    }
    catch(error){
      console.log(error,"error");
      res.status(500).json({
        message:'sum think went wrong'
      })
    }
   
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
