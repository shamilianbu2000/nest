import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Role, User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[

    TypeOrmModule.forFeature( [User,Role]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
