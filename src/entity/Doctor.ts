// src/entity/Doctor.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialization: string;

  @Column()
  gender: string;

  @Column()
  location: string;

  @Column("simple-array") // Store availability as a comma-separated string
  availability: string[]; // Example: ["Monday 9-12", "Tuesday 10-2"]

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];
}
