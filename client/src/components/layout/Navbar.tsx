import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  LogOut,
  LayoutDashboard,
  PlusCircle,
  Search
} from "lucide-react";
import { useState } from "react";
import logoIcon from "@assets/generated_images/gramseba_logo_icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <span className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          isActive 
            ? "bg-primary/10 text-primary" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}>
          {Icon && <Icon className="w-4 h-4" />}
          {children}
        </span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logoIcon} alt="GramSeba" className="w-8 h-8 object-contain" />
            <span className="font-heading font-bold text-xl tracking-tight text-primary">GramSeba</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/jobs" icon={Search}>Find Jobs</NavLink>
          <NavLink href="/post-job" icon={PlusCircle}>Post a Job</NavLink>
          <NavLink href="/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>
        </div>

        {/* Auth / Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/signin">
              <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-sm transition-colors">
                Join Now
              </button>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background space-y-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-2">
            <Link href="/jobs" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                <Search className="w-4 h-4" /> Find Jobs
              </div>
            </Link>
            <Link href="/post-job" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                <PlusCircle className="w-4 h-4" /> Post a Job
              </div>
            </Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </div>
            </Link>
          </div>
          <div className="pt-4 border-t flex flex-col gap-2">
            <Link href="/signin" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 text-left border rounded-md hover:bg-muted transition-colors">Sign In</button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 text-left bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Join Now</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
