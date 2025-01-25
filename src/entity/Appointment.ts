// src/entity/Appointment.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ default: "booked" })
  status: "booked" | "completed" | "canceled";

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient: Patient;
}
