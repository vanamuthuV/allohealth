// src/entity/Patient.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";
import { Queue } from "./Queue";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  contact: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => Queue, (queue) => queue.patient)
  queueEntries: Queue[];
}
