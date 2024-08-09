// src/toastManager.ts

// Type definition for a Toast
type Toast = {
  id: number;
  message: string;
  variant: "default" | "success" | "error";
};

type Observerss = (toasts: Toast[]) => void;

class ToastManager {
  private Observers: Observerss[] = [];

  // Current list of toasts
  private toasts: Toast[] = [];

  // Method to subscribe an observer (listener) to the ToastManager
  subscribe(observer: Observerss) {
    this.Observers.push(observer);
  }

  // Method to unsubscribe an observer (listener) from the ToastManager
  unsubscribe(Observer: Observerss) {
    this.Observers = this.Observers.filter((l) => l !== Observer);
  }

  // Notify all subscribed observers (listeners) of a change in the toasts
  notify() {
    this.Observers.forEach((listener) => listener(this.toasts));
  }

  // Add a new toast and notify observers
  addToast(toast: Omit<Toast, "id">) {
    const id = Date.now();
    this.toasts = [...this.toasts, { ...toast, id }];
    this.notify(); // Notify observers of the new toast
  }

  // Remove a toast by ID and notify observers
  removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify(); // Notify observers of the removed toast
  }

  // Clear all toasts and notify observers
  clearAllToasts() {
    this.toasts = [];
    this.notify(); // Notify observers that all toasts are cleared
  }
}

// Exporting a singleton instance of ToastManager for global use
export const toastManager = new ToastManager();
