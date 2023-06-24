import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository} from 'typeorm';
import { Team } from './entities/team.entity';
import { Role } from 'src/user/entities/user.entity';
@Injectable()




export class TeamService {
  constructor(
    @InjectRepository(Team)
    private userRepository: Repository<Team>,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) { }

   async create(createTeamDto: CreateTeamDto) {
    await this.userRepository.save(createTeamDto);
  }

   async findAll() { 
    let roleName = await this.roleRepository.find();
    return roleName;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
