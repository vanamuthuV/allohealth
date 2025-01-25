"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Smith",
      specialization: "Cardiologist",
      availability: ["Monday 9-12"],
      location: "Clinic A",
    },
    {
      id: 2,
      name: "Dr. Adams",
      specialization: "Pediatrician",
      availability: ["Tuesday 10-2"],
      location: "Clinic B",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [doctorToEdit, setDoctorToEdit] = useState(null);

  const addDoctor = (newDoctor) => {
    setDoctors((prev) => [...prev, { id: prev.length + 1, ...newDoctor }]);
  };

  const updateDoctor = (id, updatedDoctor) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...updatedDoctor } : doc))
    );
  };

  const openModal = (doctor) => {
    setDoctorToEdit(doctor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDoctorToEdit(null);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Doctor Management</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-md border-gray-200">
              <CardHeader>
                <h3 className="text-md font-bold">{doctor.name}</h3>
                <p>{doctor.specialization}</p>
              </CardHeader>
              <CardContent>
                <p>Availability: {doctor.availability.join(", ")}</p>
                <p>Location: {doctor.location}</p>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" onClick={() => openModal(doctor)}>
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setDoctors((prev) =>
                        prev.filter((doc) => doc.id !== doctor.id)
                      )
                    }
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-md font-bold">Add New Doctor</h3>
          <form
            onSubmit={(e : any) => {
              e.preventDefault();
              const form = e.target;
              const newName = form.name.value;
              const newSpecialization = form.specialization.value;
              const newAvailability = form.availability.value
                .split(",")
                .map((a) => a.trim());
              const newLocation = form.location.value;

              if (
                newName &&
                newSpecialization &&
                newAvailability.length &&
                newLocation
              ) {
                addDoctor({
                  name: newName,
                  specialization: newSpecialization,
                  availability: newAvailability,
                  location: newLocation,
                });
                form.reset();
              }
            }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" name="specialization" required />
            </div>
            <div>
              <Label htmlFor="availability">Availability</Label>
              <Input
                id="availability"
                name="availability"
                placeholder="e.g., Monday 9-12, Tuesday 10-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" required />
            </div>
            <Button type="submit" className="w-full">
              Add Doctor
            </Button>
          </form>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Doctor</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e : any) => {
                e.preventDefault();
                const form = e.target;

                const updatedName = form.name.value;
                const updatedSpecialization = form.specialization.value;
                const updatedAvailability = form.availability.value
                  .split(",")
                  .map((a) => a.trim());
                const updatedLocation = form.location.value;

                if (
                  updatedName &&
                  updatedSpecialization &&
                  updatedAvailability &&
                  updatedLocation
                ) {
                  updateDoctor(doctorToEdit.id, {
                    name: updatedName,
                    specialization: updatedSpecialization,
                    availability: updatedAvailability,
                    location: updatedLocation,
                  });
                  closeModal();
                }
              }}
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={doctorToEdit?.name}
                  required
                />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  name="specialization"
                  defaultValue={doctorToEdit?.specialization}
                  required
                />
              </div>
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  name="availability"
                  defaultValue={doctorToEdit?.availability.join(", ")}
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={doctorToEdit?.location}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                style={{
                  backgroundColor: "rgb(111 97 190/var(--tw-bg-opacity,1))",
                  color: "white",
                }}
              >
                Save Changes
              </Button>
              <Button
                type="button"
                className="w-full mt-4"
                onClick={closeModal}
              >
                Cancel
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default DoctorManagement;
