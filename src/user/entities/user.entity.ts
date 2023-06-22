
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

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  roleName: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable:true})
    name: string;

    @Column({nullable:true})
    remark: string;

    @Column({nullable:true})
    mobileNo: string;

    @Column({nullable:true})
    DOB: Date;

    @Column()
    married: boolean;

    @Column({ default: false })
    isActive: boolean;

    @Column({ default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
  
    @ManyToOne(() => Role, (role) => role.id)
    @JoinColumn({ name: "roleId" })
    roleId: Role;
    
    // @ManyToOne(() => User, (user) => user.id)
    // @JoinColumn({ name: "createdBy" })
    // createdBy: User;
  
    // @ManyToOne(() => User, (user) => user.id)
    // @JoinColumn({ name: "modifiedBy" })
    // modifiedBy: User;

}

