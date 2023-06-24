import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
<<<<<<< HEAD
import {Request,Response} from 'express'
import { AuthGuard } from '@nestjs/passport';
=======
import {Request,Response} from 'express';
>>>>>>> 4ae854eb610f70d7eab1a4fb115d154a4653fa3e
@Controller('team')
@UseGuards(AuthGuard('jwt') )
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('insert')
  async create(@Req() req:Request,@Res() res:Response,@Body() createTeamDto: CreateTeamDto) {
    try{
      console.log("createUserDto",createTeamDto);
      
      await this.teamService.create(createTeamDto);

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

  @Get('getRole')

  async findAll(@Req() req:Request,@Res() res:Response) {
  try{
   
      let role =await  this.teamService.findAll();
      res.status(200).json({
        message:'ok',
        data:role
      })
    
  }catch(error){
    console.log(error,"error");
    res.status(500).json({
      message:'sum think went wrong'
    })
  }
}
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
