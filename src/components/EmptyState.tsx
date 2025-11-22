import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ${className}`}>
    {children}
  </div>
);

export default Container;
