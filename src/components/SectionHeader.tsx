import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  action,
  className = ""
}: SectionHeaderProps) => (
  <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 ${className}`}>
    <div>
      {subtitle && (
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl">{description}</p>
      )}
    </div>
    {action && <div className="flex-shrink-0">{action}</div>}
  </div>
);

export default SectionHeader;
