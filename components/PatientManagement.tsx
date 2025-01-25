"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const PatientRegistration = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients((prev) => [...prev, { id: prev.length + 1, ...newPatient }]);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Patient Registration</h2>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            // @ts-expect-error: `form.reset` might not be recognized by TypeScript
            const newName = form.name.value;
            // @ts-expect-error: `form.reset` might not be recognized by TypeScript
            const newContact = form.contact.value;
            // @ts-expect-error: `form.reset` might not be recognized by TypeScript
            const newAge = Number.parseInt(form.age.value);
            // @ts-expect-error: `form.reset` might not be recognized by TypeScript
            const newGender = form.gender.value;

            if (newName && newContact && newAge && newGender) {
              addPatient({
                name: newName,
                contact: newContact,
                age: newAge,
                gender: newGender,
              });
              // @ts-expect-error: `form.reset` might not be part of the form interface
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
            <Label htmlFor="contact">Contact</Label>
            <Input id="contact" name="contact" required />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" name="age" type="number" required />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select name="gender" required>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Register Patient
          </Button>
        </form>

        <div className="mt-6">
          <h3 className="text-md font-bold">Registered Patients</h3>
          <ul className="space-y-2">
            {patients.map((patient) => (
              <li key={patient.id} className="bg-gray-100 p-2 rounded">
                <p>Name: {patient.name}</p>
                <p>Contact: {patient.contact}</p>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientRegistration;
