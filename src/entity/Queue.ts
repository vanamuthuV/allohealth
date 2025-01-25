// src/entity/Queue.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Patient } from "./Patient";

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  queueNumber: number;

  @Column({ default: "waiting" })
  status: "waiting" | "with doctor" | "completed";

  @ManyToOne(() => Patient, (patient) => patient.queueEntries)
  patient: Patient;

  @Column({ default: false })
  isPriority: boolean; // For urgent cases
}
