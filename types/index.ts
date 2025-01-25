export interface Appointment {
  id: number;
  date: Date;
  status: "booked" | "completed" | "canceled";
  doctor: Doctor;
  patient: Patient;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  gender: string;
  location: string;
  availability: string[];
  appointments: Appointment[];
}

export interface Patient {
  id: number;
  name: string;
  contact: string;
  age: number;
  gender: string;
  appointments: Appointment[];
  queueEntries: Queue[];
}

export interface Queue {
  id: number;
  queueNumber: number;
  status: "waiting" | "with doctor" | "completed";
  patient: Patient;
  isPriority: boolean;
}

export interface User {
  id: number;
  username: string;
  isActive: boolean;
}
