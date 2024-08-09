import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toastManager } from "./components/ToastManager";

const App: React.FC = () => {
  const [toasts, setToasts] = useState([]);

  // Subscribe to the toastManager on mount
  useEffect(() => {
    toastManager.subscribe(setToasts);

    // Cleanup on unmount
    return () => {
      toastManager.unsubscribe(setToasts);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button
          onClick={() =>
            toastManager.addToast({
              message: "Default toast message",
              variant: "default",
            })
          }
        >
          Default
        </Button>
        <Button
          onClick={() =>
            toastManager.addToast({
              message: "Success toast message",
              variant: "success",
            })
          }
        >
          Success ✅
        </Button>
        <Button
          onClick={() =>
            toastManager.addToast({
              message: "Error toast message",
              variant: "error",
            })
          }
        >
          Error ❌
        </Button>
        <Button onClick={() => toastManager.clearAllToasts()}>
          Clear All 🗑️
        </Button>
      </div>

      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default App;
