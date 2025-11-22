import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}

export const ConfirmDialog = ({
  open,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
}: ConfirmDialogProps) => (
  <AlertDialog open={open}>
    <AlertDialogContent className="glass-card border-border/50">
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <div className="flex gap-3 justify-end">
        <AlertDialogCancel onClick={onCancel} className="hover-lift">
          {cancelText}
        </AlertDialogCancel>
        <AlertDialogAction
          onClick={onConfirm}
          className={isDestructive ? "bg-destructive hover:bg-destructive/90" : "bg-gradient-primary hover:opacity-90"}
        >
          {confirmText}
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);

export default ConfirmDialog;
