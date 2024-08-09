// src/components/ToastContainer.tsx
import React from "react";
import { Toast } from "./Toast";

type ToastContainerProps = {
  toasts: Array<{ id: number; message: string; variant: string }>;
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
