import { motion } from "motion/react";
import { Check, Settings, Cpu, HardDrive, Shield, Zap } from "lucide-react";

export default function VPSHosting() {
  const plans = [
    {
      name: "Cloud 1",
      cpu: "1 vCPU",
      ram: "2GB",
      disk: "40GB NVMe",
      bandwidth: "1TB",
      price: "1499",
    },
    {
      name: "Cloud 2",
      cpu: "2 vCPU",
      ram: "4GB",
      disk: "80GB NVMe",
      bandwidth: "2TB",
      price: "2499",
      popular: true,
    },
    {
      name: "Cloud 3",
      cpu: "4 vCPU",
      ram: "8GB",
      disk: "160GB NVMe",
      bandwidth: "4TB",
      price: "4999",
    },
    {
      name: "Cloud 4",
      cpu: "8 vCPU",
      ram: "16GB",
      disk: "320GB NVMe",
      bandwidth: "8TB",
      price: "9999",
    },
  ];

  return (
    <div className="py-24 px-6 relative">
      <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_100%)]"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">Enterprise <span className="text-blue-500">Cloud VPS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">High-performance virtual private servers with full root access, dedicated resources, and lightning-fast local connectivity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-zinc-900/50 border ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/10' : 'border-zinc-800'} backdrop-blur-xl flex flex-col`}
            >
              <h3 className="text-xl font-bold mb-6">{plan.name}</h3>
              <div className="text-3xl font-bold mb-8">৳{plan.price} <span className="text-xs font-normal text-zinc-500">/mo</span></div>
              
              <div className="space-y-4 mb-10 text-sm">
                 <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">CPU</span>
                    <span className="font-bold flex items-center gap-2"><Cpu size={14}/> {plan.cpu}</span>
                 </div>
                 <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">RAM</span>
                    <span className="font-bold flex items-center gap-2"><Settings size={14}/> {plan.ram}</span>
                 </div>
                 <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">NVMe SSD</span>
                    <span className="font-bold flex items-center gap-2"><HardDrive size={14}/> {plan.disk}</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Bandwidth</span>
                    <span className="font-bold">{plan.bandwidth}</span>
                 </div>
              </div>

              <div className="space-y-2 mb-10">
                <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase"><Check size={12}/> Root Access</div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase"><Check size={12}/> 1 Dedicated IP</div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase"><Check size={12}/> Choice of OS</div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500' : 'bg-zinc-800 hover:bg-zinc-700'}`}>Deploy Now</button>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Comparison */}
        <div className="mt-32 p-12 rounded-[3rem] bg-zinc-900/30 border border-zinc-800">
           <h2 className="text-3xl font-bold mb-12 text-center">Built for Scale</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white"><Shield size={32}/></div>
                 <h3 className="text-2xl font-bold">Advanced DDoS Protection</h3>
                 <p className="text-zinc-400 leading-relaxed">All VPS plans include complimentary layer 3, 4, and 7 DDoS protection. Our sophisticated algorithms automatically detect and mitigate attacks before they reach your server.</p>
              </div>
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white"><Zap size={32}/></div>
                 <h3 className="text-2xl font-bold">Local BDIX Network</h3>
                 <p className="text-zinc-400 leading-relaxed">Connect to the major local ISPs in Bangladesh with multi-gigabit speeds. Ideal for local e-commerce, software delivery, and streaming services.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
