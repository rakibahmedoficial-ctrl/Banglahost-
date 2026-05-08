import { motion } from "motion/react";
import { Shield, Globe, Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-1 px-3 bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-4"
          >
            Since 2018
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            The Local <span className="text-blue-500">Infrastructure</span> Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            BengalHost started with a simple mission: to provide world-class web hosting infrastructure specifically optimized for the Bangladeshi digital landscape.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Bridging the Gap</h2>
            <p className="text-zinc-400 leading-relaxed">
              For years, Bangladeshi businesses struggled with high-latency hosting from international providers. We stepped in to build a local network that combines global hardware standards with local connectivity advantages.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Today, BengalHost powers thousands of websites, e-learning platforms, and e-commerce stores across the country, maintaining a reputation for speed, security, and human-first support.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
               <div className="border-l-2 border-blue-600 pl-4">
                  <div className="text-2xl font-bold">12k+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Active Clients</div>
               </div>
               <div className="border-l-2 border-emerald-600 pl-4">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Average Uptime</div>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600 opacity-20 blur-3xl -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
               alt="Our Team" 
               className="rounded-[3rem] border border-zinc-800 shadow-2xl" 
             />
          </div>
        </section>

        <section className="py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Our Mission", icon: Target, desc: "To democratize high-speed internet infrastructure for every Bangladeshi entrepreneur." },
             { title: "Our Values", icon: Heart, desc: "Transparency, performance, and unmatched local customer service in our mother tongue." },
             { title: "Quality Guarantee", icon: Award, desc: "We only use Tier-3 and Tier-4 data centers to ensure your business stays online 24/7." }
           ].map((v, i) => (
             <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center text-blue-500 border border-zinc-800 shadow-lg mb-4">
                   <v.icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
             </div>
           ))}
        </section>
      </div>
    </div>
  );
}
