import { Link } from "react-router-dom";
import { User, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { Menu, X, Globe, Server, Shield, Cpu, ChevronDown } from "lucide-react";

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const navLinks = [
    { name: "Shared Hosting", href: "/shared-hosting", icon: Globe },
    { name: "VPS Hosting", href: "/vps-hosting", icon: Server },
    { name: "Domains", href: "/domains", icon: Shield },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Cpu size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              BengalHost
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-sm font-medium text-zinc-400 hover:text-white">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full bg-zinc-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 p-4 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-zinc-400 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-4">
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-400">Dashboard</Link>
                <button onClick={handleLogout} className="text-left text-sm font-medium text-blue-500">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-400">Login</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="text-sm font-medium text-blue-500">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
