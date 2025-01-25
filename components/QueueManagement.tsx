"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Trash, Star } from "lucide-react";

const QueueManagement = () => {
  const [queue, setQueue] = useState([
    {
      id: 1,
      queueNumber: 1,
      status: "waiting",
      name: "John Doe",
      isPriority: false,
    },
    {
      id: 2,
      queueNumber: 2,
      status: "with doctor",
      name: "Jane Smith",
      isPriority: false,
    },
  ]);

  const updateQueueStatus = (id, status) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const makePriority = (id) => {
    setQueue((prev) => {
      const updatedQueue = prev.map((item) =>
        item.id === id
          ? { ...item, isPriority: true }
          : { ...item, isPriority: false }
      );
      return [
        ...updatedQueue.filter((item) => item.isPriority),
        ...updatedQueue.filter((item) => !item.isPriority),
      ];
    });
  };

  const deleteQueueEntry = (id) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Queue Management</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {queue.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                item.isPriority
                  ? "bg-yellow-100 border-l-4 border-yellow-500"
                  : "bg-gray-50"
              }`}
            >
              <div>
                <p className="text-lg font-semibold">
                  Queue #{item.queueNumber}
                </p>
                <p>Name: {item.name}</p>
                <p>Status: {item.status}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Select
                  value={item.status}
                  onValueChange={(value) => updateQueueStatus(item.id, value)}
                >
                  <SelectTrigger className="w-40 border-gray-300">
                    <SelectValue placeholder={item.status} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="waiting">Waiting</SelectItem>
                    <SelectItem value="with doctor">With Doctor</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                {/* Priority Button with background color and icon */}
                <Button
                  onClick={() => makePriority(item.id)}
                  variant="outline"
                  className="flex items-center bg-purple-700 text-white hover:bg-purple-600"
                  style={{
                    backgroundColor: "rgb(111 97 190/var(--tw-bg-opacity,1))",
                  }}
                >
                  <Star className="w-4 h-4 mr-1" /> Priority
                </Button>

                {/* Delete Button with icon and custom color */}
                <Button
                  onClick={() => deleteQueueEntry(item.id)}
                  variant="outline"
                  className="flex items-center bg-red-600 text-white hover:bg-red-500"
                >
                  <Trash className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default QueueManagement;
