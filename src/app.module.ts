import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { Role, User } from './user/entities/user.entity';
import { Team } from './team/entities/team.entity';

// import { Request, Response } from "express";
import { JwtService } from './auth/jwt/jwt.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [    ConfigModule.forRoot({
    isGlobal: true,// [REQUIRED if want to use env gloablly among all modules]
  }),  JwtModule.register({ secret: "dev",signOptions: { expiresIn: '60s'},}),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE_NAME, 
    // synchronize:true,
    autoLoadEntities:true,  
    entities: [User,Role,Team]
  }), UserModule, 
  ],
  
 
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {

  
}
