import { motion } from "motion/react";
import { Check, Zap, Shield, Globe } from "lucide-react";

export default function SharedHosting() {
  const plans = [
    {
      name: "Starter",
      price: "149",
      description: "Perfect for personal blogs and small portfolios.",
      features: ["1 Website", "5GB NVMe SSD", "Unlimited Bandwidth", "Free SSL Certificate", "2 Email Accounts"],
      color: "blue",
    },
    {
      name: "Pro",
      price: "299",
      description: "Best for growing business websites.",
      features: ["5 Websites", "25GB NVMe SSD", "Unlimited Bandwidth", "Free SSL & Domain", "Unlimited Emails", "Daily Backups"],
      color: "emerald",
      popular: true,
    },
    {
      name: "Business",
      price: "599",
      description: "Max performance for high traffic sites.",
      features: ["Unlimited Websites", "100GB NVMe SSD", "Dedicated IP", "Free SSL & Domain", "Premium Support", "Priority Updates"],
      color: "purple",
    },
  ];

  return (
    <div className="py-24 px-6 overflow-hidden relative">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Blazing Fast <span className="text-blue-500">Shared Hosting</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Get the performance your website deserves with our optimized NVMe storage and LiteSpeed servers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl bg-zinc-900 border ${plan.popular ? 'border-blue-500' : 'border-zinc-800'} relative flex flex-col group`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Recommended</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-8">{plan.description}</p>
              <div className="flex items-baseline gap-2 mb-10 text-4xl font-bold">
                ৳{plan.price} <span className="text-sm font-normal text-zinc-500">/month</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check size={18} className="text-blue-500" /> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20' : 'bg-zinc-800 hover:bg-zinc-700'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500"><Zap /></div>
                <h4 className="font-bold">NVMe Storage</h4>
                <p className="text-zinc-500 text-sm">Ultra-fast disk access for lightning quick load times.</p>
            </div>
            <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500"><Shield /></div>
                <h4 className="font-bold">Free SSL</h4>
                <p className="text-zinc-500 text-sm">Keep your visitors safe with Let's Encrypt SSL certificates.</p>
            </div>
            <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500"><Globe /></div>
                <h4 className="font-bold">Global CDN</h4>
                <p className="text-zinc-500 text-sm">Cache your content globally for international visitors.</p>
            </div>
            <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500"><Check /></div>
                <h4 className="font-bold">Daily Backups</h4>
                <p className="text-zinc-500 text-sm">Never lose data with our automated daily backup system.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
