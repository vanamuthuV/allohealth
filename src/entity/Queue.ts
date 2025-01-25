// src/entity/Queue.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  queueNumber: number; // Queue number for the patient

  @Column({ default: "waiting" })
  status: "waiting" | "with doctor" | "completed"; // Status of the patient in the queue

  @Column()
  patientName: string; // Patient's Name (instead of patient relation)

  @Column({ default: false })
  isPriority: boolean; // Flag to mark urgent cases
}
