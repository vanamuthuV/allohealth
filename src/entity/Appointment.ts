// src/entity/Appointment.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorName: string; // Doctor's Name (instead of doctorId)

  @Column()
  patientName: string; // Patient's Name (instead of patientId)

  @Column()
  date: string; // Date of the appointment

  @Column()
  time: string; // Time of the appointment (e.g., "9:00 AM")

  @Column()
  location: string; // Location of the appointment

  @Column({ default: "booked" })
  status: "booked" | "completed" | "canceled"; // Status of the appointment
}
