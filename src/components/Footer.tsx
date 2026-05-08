import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            </div>
            <span className="text-xl font-bold">BengalHost</span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed">
            BengalHost is Bangladesh's leading premium web hosting provider, dedicated to delivering ultra-fast performance and reliable infrastructure for local businesses.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-blue-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-blue-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link to="/shared-hosting" className="hover:text-blue-500 transition-colors">Shared Hosting</Link></li>
            <li><Link to="/vps-hosting" className="hover:text-blue-500 transition-colors">VPS Hosting</Link></li>
            <li><Link to="/domains" className="hover:text-blue-500 transition-colors">Domain Registration</Link></li>
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Cloud Servers</Link></li>
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Reseller Hosting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Careers</Link></li>
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3"><MapPin size={18} className="text-blue-500" /> 123 Hosting St, Dhaka, BD</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-blue-500" /> +880 1234-567890</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-blue-500" /> support@bengalhost.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
        <p>© 2026 BengalHost. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-zinc-300">Status</Link>
          <Link to="/" className="hover:text-zinc-300">Knowledgebase</Link>
          <Link to="/" className="hover:text-zinc-300">API Documentation</Link>
        </div>
      </div>
    </footer>
  );
}
