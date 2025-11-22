import { ChevronRight, Home } from 'lucide-react';
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const CustomBreadcrumb = ({
  items,
  className = "",
}: CustomBreadcrumbProps) => (
  <nav className={`flex items-center gap-2 text-sm ${className}`}>
    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
      <Home className="w-4 h-4" />
      <span>Home</span>
    </Link>

    {items.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        {item.path ? (
          <Link
            to={item.path}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ) : (
          <span className="text-foreground font-medium">{item.label}</span>
        )}
      </div>
    ))}
  </nav>
);

export default CustomBreadcrumb;
