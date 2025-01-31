// src/entity/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // Hashed password

  @Column({ default: true })
  isActive: boolean; // To enable or disable accounts
    firstName: string;
    lastName: string;
    age: number;
}
