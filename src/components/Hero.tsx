import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Zap, Globe, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0081ff] to-[#04c99e] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              href="#" 
              className="inline-flex space-x-6"
            >
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-400">
                <span>Just shipped NVMe VPS v2.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Premium Hosting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Bangladeshi</span> Innovators
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-zinc-400"
          >
            Deploy your website in seconds on our high-performance infrastructure based in Local Data Centers. Ultra-low latency, 99.9% uptime, and 24/7 expert support.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              to="/shared-hosting"
              className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link to="/vps-hosting" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
              View VPS Plans <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2 font-bold text-zinc-300">
              <Shield size={24} />
              <span>DDoS Protected</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-zinc-300">
              <Zap size={24} />
              <span>Turbo NVMe</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <div className="-m-2 rounded-xl bg-zinc-900/50 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-3xl shadow-2xl">
              <div className="rounded-md bg-zinc-950 shadow-2xl ring-1 ring-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Stats UI */}
                <div className="absolute top-10 right-10 p-4 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-xl space-y-2 animate-bounce-slow">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono">Server Status: Online</span>
                   </div>
                   <div className="text-xl font-bold">12.4ms <span className="text-xs font-normal text-zinc-500">Latency</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
