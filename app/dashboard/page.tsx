"use client";

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      localStorage.getItem("token") !==
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    ) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  ) : (
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
