import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import{Response,Request} from 'express'
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt') )

export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('send')
  creates(@Req() req:Request,@Res() res:Response,@Body() createTeamDto: any) {
  console.log('---------------');
res.status(200).json({message:'success'})
  return true
  }
  @Post('signUp')
  create(@Req() req:Request,@Res() res:Response,@Body() createTeamDto: any)
   {  console.log('---------------');
  res.status(200).json({message:'success'})
    return true
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

