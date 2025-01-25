"use client";

import { useToast } from "../hooks/use-toast";

// Define the Toast type correctly
interface Toast {
  id: string;
  title: string;
  description?: string;
  dismiss: () => void;
}

const ToastContainer = () => {
  const { toasts, dismiss } = useToast(); // Get the toasts from your state

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {toasts.map((toast: Toast) => (
        <div
          key={toast.id}
          className="bg-red-600 text-white p-3 rounded-md shadow-md mb-2"
        >
          <div className="flex justify-between items-center">
            <span>{toast.title}</span>
            <button
              onClick={() => dismiss(toast.id)} // Trigger dismiss with the correct toast ID
              className="ml-2 text-white"
            >
              Dismiss
            </button>
          </div>
          {toast.description && <div>{toast.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
