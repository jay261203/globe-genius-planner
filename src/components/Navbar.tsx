import { Link, useLocation } from 'react-router-dom';
import { Bell, Plus, MapPin, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/plan', label: 'Plan', primary: true },
    { to: '/explore', label: 'Explore' },
    { to: '/dashboard', label: 'My Trips' },
    { to: '/receipts', label: 'Receipts' },
    { to: '/photos', label: 'Photos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </motion.div>
          <span className="font-semibold text-foreground hidden sm:inline">Trippy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Link to={link.to}>
                <Button 
                  variant={link.primary && !isActive(link.to) ? "default" : "ghost"}
                  size="sm"
                  className={`font-medium transition-all duration-200 ${
                    isActive(link.to) 
                      ? 'text-primary bg-primary/10 hover:bg-primary/15' 
                      : link.primary 
                        ? 'hover:scale-[1.02]' 
                        : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.primary && !isActive(link.to) && <Plus className="w-4 h-4 mr-1" />}
                  {link.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <motion.button 
            className="p-2 rounded-lg hover:bg-muted transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
          </motion.button>
          <Link to="/profile">
            <motion.div 
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JD
            </motion.div>
          </Link>
          <motion.button 
            className="p-2 rounded-lg hover:bg-muted transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-border bg-background overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={link.to} onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      variant={link.primary ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        isActive(link.to) ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      {link.primary && <Plus className="w-4 h-4 mr-2" />}
                      {link.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
