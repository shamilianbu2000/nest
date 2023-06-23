


import { Role, User } from "src/user/entities/user.entity";

import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";


  @Entity('team')
  export class Team {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: "empId" })
    empId: User;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: "tlId" })
    tlId: User;

    @Column({nullable:true})
    experience: number;
    @Column({nullable:true})
    salery: number;

    @Column({nullable:true})
    joinDate: Date;
    @Column({ default: false })
    isCertified: boolean;

    @Column({ default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
  }

    
