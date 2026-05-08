import { motion } from "motion/react";
import Hero from "../components/Hero";
import { Server, Zap, Shield, Headphones, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "Ultra-Fast NVMe SSD",
      description: "Experience speeds up to 20x faster than traditional HDD storage with our high-grade NVMe drives.",
      icon: Zap,
    },
    {
      title: "Local BD Data Center",
      description: "Minimum latency for local users with our servers hosted right here in Dhaka, Bangladesh.",
      icon: Globe,
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Our redundant network and power systems ensure your website is always accessible to your customers.",
      icon: Server,
    },
    {
      title: "Advanced Security",
      description: "Enterprise-level DDoS protection and free SSL certificates for every website you host with us.",
      icon: Shield,
    },
    {
      title: "24/7 Expert Support",
      description: "Get assistance anytime via live chat, ticket, or phone from our Bangladeshi support team.",
      icon: Headphones,
    },
    {
      title: "Easy Local Payments",
      description: "Pay securely using bKash, Nagad, Rocket or any local bank card via our integrated gateway.",
      icon: CreditCard,
    },
  ];

  return (
    <div>
      <Hero />

      {/* Domain Search Component */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 backdrop-blur-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Find Your Perfect Domain</h2>
            <p className="text-zinc-400">Search for .com, .net, .org, or .com.bd domains at best prices</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="example.com" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-lg tracking-wide"
              />
            </div>
            <button className="bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Check Availability
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-500">
             <span>.com - ৳1250/yr</span>
             <span>.net - ৳1400/yr</span>
             <span>.xyz - ৳250/yr</span>
             <span>.org - ৳1350/yr</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl">Why Choose BengalHost?</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">We provide the infrastructure you need to succeed online, backed by superior performance and local expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 px-6 bg-zinc-950/50">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">Simple Plans, Fair Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Shared Hosting Teaser */}
               <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center">
                  <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4">Starter</span>
                  <h3 className="text-2xl font-bold mb-2">Personal Hosting</h3>
                  <div className="text-4xl font-bold mb-8">৳149 <span className="text-sm font-normal text-zinc-500">/mo</span></div>
                  <ul className="space-y-4 mb-10 text-zinc-400 text-sm w-full">
                     <li className="flex items-center gap-2"><Shield size={16} className="text-blue-500"/> 1 Website</li>
                     <li className="flex items-center gap-2"><Zap size={16} className="text-blue-500"/> 5GB NVMe Storage</li>
                     <li className="flex items-center gap-2"><Globe size={16} className="text-blue-500"/> Unlimited Bandwidth</li>
                  </ul>
                  <Link to="/shared-hosting" className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold">See Features</Link>
               </div>
               
               {/* VPS Hosting Teaser (Most Popular) */}
               <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-900/20 to-zinc-900 border border-blue-500/50 relative flex flex-col items-center scale-105 shadow-2xl shadow-blue-500/10">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                  <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4">Enterprise</span>
                  <h3 className="text-2xl font-bold mb-2">Cloud VPS</h3>
                  <div className="text-4xl font-bold mb-8">৳1499 <span className="text-sm font-normal text-zinc-500">/mo</span></div>
                  <ul className="space-y-4 mb-10 text-zinc-400 text-sm w-full">
                     <li className="flex items-center gap-2"><Server size={16} className="text-blue-500"/> 2 Core CPU</li>
                     <li className="flex items-center gap-2"><Zap size={16} className="text-blue-500"/> 4GB DDR4 RAM</li>
                     <li className="flex items-center gap-2"><Shield size={16} className="text-blue-500"/> Root Access</li>
                  </ul>
                  <Link to="/vps-hosting" className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-bold">Configure Now</Link>
               </div>

               {/* Game Hosting Teaser */}
               <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center">
                  <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4">Gaming</span>
                  <h3 className="text-2xl font-bold mb-2">Pro Gamer</h3>
                  <div className="text-4xl font-bold mb-8">৳899 <span className="text-sm font-normal text-zinc-500">/mo</span></div>
                  <ul className="space-y-4 mb-10 text-zinc-400 text-sm w-full">
                     <li className="flex items-center gap-2"><Zap size={16} className="text-emerald-500"/> High Tickrate</li>
                     <li className="flex items-center gap-2"><Shield size={16} className="text-emerald-500"/> Anti-DDoS Game</li>
                     <li className="flex items-center gap-2"><Globe size={16} className="text-emerald-500"/> Instant Setup</li>
                  </ul>
                  <Link to="/contact" className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold">Contact Us</Link>
               </div>
            </div>
         </div>
      </section>

      {/* Quick Payment Info */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-900/30 p-12 rounded-[3rem] border border-zinc-800">
            <div className="max-w-md">
               <h2 className="text-3xl font-bold mb-4">Pay Your Way</h2>
               <p className="text-zinc-400">We accept multiple local payment methods for your convenience. Get instant service activation after payment.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
               <img src="https://raw.githubusercontent.com/tuhinpal/bkash-payment-gateway-php/master/public/bkash.png" className="h-12 object-contain" alt="bKash" />
               <img src="https://www.nagad.com.bd/wp-content/uploads/2021/04/Nagad-Logo.png" className="h-10 object-contain" alt="Nagad" />
               <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" className="h-8 object-contain" alt="Visa" />
               <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" className="h-10 object-contain" alt="Mastercard" />
            </div>
         </div>
      </section>
    </div>
  );
}
