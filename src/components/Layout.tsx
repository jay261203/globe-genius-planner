import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  withSidebar?: boolean;
  withHeader?: boolean;
  fullWidth?: boolean;
}

export const Layout = ({ 
  children, 
  withSidebar = true, 
  withHeader = true,
  fullWidth = false 
}: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(v => !v);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div className="min-h-screen flex flex-col">
      {withHeader && <Header onToggleSidebar={toggleSidebar} />}

      <div className="flex flex-1">
        {withSidebar && (
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        )}

        <main
          className={`flex-1 ${withHeader ? 'pt-16' : ''} ${fullWidth ? '' : 'max-w-full'}`}
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
