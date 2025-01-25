"use client";

import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import QueueManagement from "../../components/QueueManagement";
import AppointmentManagement from "../../components/AppointmentManagement";
import DoctorManagement from "../../components/DoctorManagement";
import PatientRegistration from "../../components/PatientManagement";

const Dashboard = () => {
  return (
    <div className="p-6">
      <Tabs defaultValue="queue-management">
        <TabsList>
          <TabsTrigger value="queue-management">Queue Management</TabsTrigger>
          <TabsTrigger value="appointment-management">
            Appointment Management
          </TabsTrigger>
          <TabsTrigger value="doctor-management">Doctor Management</TabsTrigger>
          <TabsTrigger value="patient-registration">
            Patient Registration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="queue-management">
          <QueueManagement />
        </TabsContent>

        <TabsContent value="appointment-management">
          <AppointmentManagement />
        </TabsContent>

        <TabsContent value="doctor-management">
          <DoctorManagement />
        </TabsContent>

        <TabsContent value="patient-registration">
          <PatientRegistration />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
