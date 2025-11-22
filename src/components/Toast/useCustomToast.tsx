import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

export const useCustomToast = () => {
  const { toast } = useToast();

  const showSuccess = (message: string, description?: string) => {
    toast({
      description: message,
      duration: 3000,
    });
  };

  const showError = (message: string, description?: string) => {
    toast({
      description: message,
      variant: "destructive",
      duration: 3000,
    });
  };

  const showInfo = (message: string, description?: string) => {
    toast({
      description: message,
      duration: 3000,
    });
  };

  const showWarning = (message: string, description?: string) => {
    toast({
      description: message,
      duration: 3000,
    });
  };

  return { showSuccess, showError, showInfo, showWarning };
};
