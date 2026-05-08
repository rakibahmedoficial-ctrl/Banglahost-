import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, Globe, CheckCircle2, XCircle } from "lucide-react";

export default function DomainRegistration() {
  const [domain, setDomain] = useState("");
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<{ domain: string; available: boolean; price: number | null } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    setSearching(true);
    setResult(null);
    
    try {
      const resp = await fetch(`/api/check-domain?domain=${domain}`);
      const data = await resp.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setSearching(false);
    }
  };

  const domainExtensions = [
    { ext: ".com", price: "৳1250", renewal: "৳1350" },
    { ext: ".net", price: "৳1400", renewal: "৳1500" },
    { ext: ".org", price: "৳1350", renewal: "৳1450" },
    { ext: ".xyz", price: "৳250", renewal: "৳1250" },
    { ext: ".biz", price: "৳1100", renewal: "৳1300" },
    { ext: ".info", price: "৳1200", renewal: "৳1400" },
    { ext: ".com.bd", price: "৳2500", renewal: "৳2500" },
    { ext: ".net.bd", price: "৳2500", renewal: "৳2500" },
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">Claim Your Identity Online</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Register your perfect domain name today with BengalHost. Instant setup, full DNS control, and local support.</p>
        </header>

        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Search for your next big idea..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-14 pr-40 py-6 text-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
            />
            <button 
              type="submit"
              disabled={searching}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl disabled:opacity-50 transition-all active:scale-95"
            >
              {searching ? "Checking..." : "Search"}
            </button>
          </div>
        </form>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl mx-auto p-8 rounded-3xl mb-24 border ${result.available ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-rose-500/10 border-rose-500/50'} flex flex-col md:flex-row items-center justify-between gap-6`}
          >
            <div className="flex items-center gap-4">
               {result.available ? <CheckCircle2 className="text-emerald-500 w-12 h-12" /> : <XCircle className="text-rose-500 w-12 h-12" />}
               <div className="text-left">
                  <h3 className="text-2xl font-bold">{result.domain}</h3>
                  <p className={result.available ? 'text-emerald-500' : 'text-rose-500'}>
                    {result.available ? "Hooray! This domain is available." : "Oops! This domain is already taken."}
                  </p>
               </div>
            </div>
            {result.available && (
              <div className="flex items-center gap-6">
                <div className="text-right">
                   <div className="text-sm text-zinc-400">First year</div>
                   <div className="text-2xl font-bold">৳{result.price}</div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold">Register Now</button>
              </div>
            )}
          </motion.div>
        )}

        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[3rem] p-12">
          <h2 className="text-3xl font-bold mb-12">Domain Pricing List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {domainExtensions.map((item, idx) => (
               <div key={idx} className="p-6 bg-zinc-950/50 border border-zinc-800 rounded-2xl flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2 tracking-tighter">{item.ext}</div>
                  <div className="text-xl font-mono mb-1">{item.price}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Renewal: {item.renewal}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
