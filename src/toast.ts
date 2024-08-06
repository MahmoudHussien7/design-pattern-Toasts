import { react } from "@vitejs/plugin-react";
import { useToast } from "./Contexts/ToastContext";

const useToastFunctions = () => {
  const { addToast, clearAllToasts } = useToast();

  const toast = (message: string) => {
    addToast({ message, variant: "default", onClose: () => {} });
  };

  toast.success = (message: string) => {
    addToast({ message, variant: "success", onClose: () => {} });
  };

  toast.error = (message: string) => {
    addToast({ message, variant: "error", onClose: () => {} });
  };

  toast.dismissAll = clearAllToasts;

  return toast;
};

export default useToastFunctions;
