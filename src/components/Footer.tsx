import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">Get the latest travel tips, destination guides, and exclusive offers.</p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-input"
              />
              <Button className="bg-gradient-primary hover:opacity-90 hover-lift">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Trippy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered travel planning for your perfect adventure.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg hover:bg-muted/50 transition-colors hover-lift">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-muted/50 transition-colors hover-lift">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-muted/50 transition-colors hover-lift">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Destinations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">Feedback</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@trippy.com" className="hover:text-foreground transition-colors">support@trippy.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-foreground transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Trippy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
