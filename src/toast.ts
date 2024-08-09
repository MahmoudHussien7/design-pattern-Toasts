// src/toast.ts
import { toastManager } from "./components/ToastManager";

// Global function to show a toast
export const showToast = (
  message: string,
  variant: "default" | "success" | "error" = "default"
) => {
  toastManager.addToast({ message, variant });
};

// Global function to remove a toast by ID
export const removeToast = (id: number) => {
  toastManager.removeToast(id);
};

// Global function to clear all toasts
export const clearAllToasts = () => {
  toastManager.clearAllToasts();
};
