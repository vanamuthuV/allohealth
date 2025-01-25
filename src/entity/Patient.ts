// src/entity/Patient.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Patient's Name

  @Column({ unique: true })
  contact: string; // Patient's contact information

  @Column()
  age: number; // Patient's age

  @Column()
  gender: string; // Patient's gender
}
