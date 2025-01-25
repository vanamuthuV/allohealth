"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useToast } from "../hooks/use-toast";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Smith",
      patientName: "John Doe",
      date: "2025-02-01",
      time: "9:00 AM",
      location: "Jayanagar",
    },
    {
      id: 2,
      doctorName: "Dr. Adams",
      patientName: "Jane Doe",
      date: "2025-02-02",
      time: "10:00 AM",
      location: "Electronic City",
    },
  ]);

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Smith",
      specialization: "Cardiologist",
      availableSlots: [
        { date: "2025-02-01", time: "9:00 AM" },
        { date: "2025-02-01", time: "10:00 AM" },
      ],
    },
    {
      id: 2,
      name: "Dr. Adams",
      specialization: "Pediatrician",
      availableSlots: [
        { date: "2025-02-02", time: "10:00 AM" },
        { date: "2025-02-02", time: "11:00 AM" },
      ],
    },
  ]);

  console.log(setDoctors);

  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
  console.log(setPatients);
  const [isOpen, setIsOpen] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [location, setLocation] = useState("");
  const [patientId, setPatientId] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const locations = [
    "Jayanagar",
    "Electronic City",
    "Peenya",
    "Marthahalli",
    "Indira Nagar",
  ];

  const { toast } = useToast();

  const sortedAppointments = appointments.filter((appointment) => {
    const today = new Date();
    const appointmentDate = new Date(appointment.date);
    return appointmentDate >= today;
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBookAppointment = (doctor) => {
    setDoctorName(doctor.name);
    setAppointmentTime(doctor.availableSlots[0]?.time || "10:00 AM"); // Default first slot
    openModal();
  };

  const addAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      { id: prevAppointments.length + 1, ...newAppointment },
    ]);
    closeModal();
    toast({
      title: "Database Error: Appointment Creation Failed",
      description:
        "A syntax error occurred while attempting to add the appointment. Please contact support or check the server logs for more details.",
      variant: "destructive",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientId || !doctorName || !location || !appointmentTime) {
      // @ts-expect-error: `form.reset` might not be recognized by TypeScript
      alert("Please fill all fields");
      return;
    }

    const selectedPatient = patients.find(
      (patient) => patient.id === parseInt(patientId)
    );
    if (selectedPatient) {
      addAppointment({
        doctorName,
        patientName: selectedPatient.name,
        patientId: selectedPatient.id,
        date: new Date().toISOString(),
        time: appointmentTime,
        location,
      });
    }

    toast({
      title: "Database Error: Appointment Creation Failed",
      description:
        "A syntax error occurred while attempting to add the appointment. Please contact support or check the server logs for more details.",
      variant: "destructive",
    });
  };

  useEffect(() => {
    console.log("Appointments:", appointments);
  }, [appointments]);
  console.log(patientName, setPatientName);
  return (
    <div className="p-4">
      {/* Book Appointment Button */}
      <div className="flex justify-end mb-4">
        <Button onClick={openModal} className="bg-purple-600 text-white">
          Book Appointment
        </Button>
      </div>

      {/* Modal for Booking Appointment */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="patientId">Patient</Label>
            <select
              id="patientId"
              name="patientId"
              value={patientId}
              // @ts-expect-error: `form.reset` might not be part of the form interface
              onChange={(e: unknown) => setPatientId(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Patient</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>

            <Label htmlFor="doctorName">Doctor&apos;s Name</Label>
            <Input
              id="doctorName"
              name="doctorName"
              value={doctorName}
              readOnly
            />

            <Label htmlFor="location">Location</Label>
            <select
              id="location"
              name="location"
              value={location}
              // @ts-expect-error: `form.reset` might not be part of the form interface
              onChange={(e: unknown) => setLocation(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Location</option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <Label htmlFor="appointmentTime">Select Time Slot</Label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={appointmentTime}
              // @ts-expect-error: `form.reset` might not be part of the form interface
              onChange={(e: unknown) => setAppointmentTime(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Time</option>
              {doctors
                .find((doc) => doc.name === doctorName)
                ?.availableSlots.map((slot, idx) => (
                  <option key={idx} value={slot.time}>
                    {slot.time}
                  </option>
                ))}
            </select>

            <Button type="submit" className="mt-4">
              Book Appointment
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mt-6">
        <h2 className="text-lg font-bold">Doctors and Available Slots</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="font-semibold text-xl">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <div className="mt-4">
                <h4 className="font-medium">Available Time Slots</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {doctor.availableSlots.map((slot, idx) => (
                    <div
                      key={idx}
                      className="p-2 border rounded-md shadow-sm bg-gray-100 hover:bg-purple-100 cursor-pointer"
                    >
                      <span className="text-sm text-gray-700">{`${slot.date} at ${slot.time}`}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={() => handleBookAppointment(doctor)}
                className="mt-4 w-full bg-purple-600 text-white"
              >
                Book Appointment
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold">Upcoming Appointments</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Patient</th>
              <th className="px-4 py-2 border-b text-left">Doctor</th>
              <th className="px-4 py-2 border-b text-left">Date</th>
              <th className="px-4 py-2 border-b text-left">Time</th>
              <th className="px-4 py-2 border-b text-left">Location</th>
              <th className="px-4 py-2 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedAppointments.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">
                  No upcoming appointments
                </td>
              </tr>
            ) : (
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="border px-4 py-2">
                    {appointment.patientName}
                  </td>
                  <td className="border px-4 py-2">{appointment.doctorName}</td>
                  <td className="border px-4 py-2">{appointment.date}</td>
                  <td className="border px-4 py-2">{appointment.time}</td>
                  <td className="border px-4 py-2">{appointment.location}</td>
                  <td className="border px-4 py-2">
                    <Button
                      onClick={() => {}}
                      className="bg-red-500 text-white"
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentManagement;
