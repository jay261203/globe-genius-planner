import { Spinner } from '@/components/ui/spinner';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner = ({ size = 'md', text, fullScreen = false }: LoadingSpinnerProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Spinner className={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-12 h-12' : 'w-8 h-8'} />
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
