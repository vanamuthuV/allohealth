// src/entity/Doctor.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Doctor's Name

  @Column()
  specialization: string; // Doctor's specialization

  @Column("simple-array")
  availableSlots: string[]; // Available time slots, e.g., ["2025-02-01 9:00 AM", "2025-02-01 10:00 AM"]
}
