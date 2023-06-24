import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Role } from 'src/user/entities/user.entity';

@Module({
  imports
  :[
  TypeOrmModule.forFeature( [Team,Role]),],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
