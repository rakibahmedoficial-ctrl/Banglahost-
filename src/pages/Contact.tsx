import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real integration would go here
  };

  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Get in <span className="text-blue-500">Touch</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Have questions? Our team is here to help you 24/7. Reach out via your preferred channel.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
             <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-start gap-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0"><Phone size={24}/></div>
                <div>
                   <h3 className="font-bold mb-1">Phone Support</h3>
                   <p className="text-sm text-zinc-400 mb-2">Mon-Fri from 9am to 6pm.</p>
                   <p className="font-bold text-blue-400 tracking-tight">+880 1234 567 890</p>
                </div>
             </div>
             <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-start gap-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 shrink-0"><Mail size={24}/></div>
                <div>
                   <h3 className="font-bold mb-1">Email</h3>
                   <p className="text-sm text-zinc-400 mb-2">Our friendly team is here to help.</p>
                   <p className="font-bold text-emerald-400 tracking-tight">sales@bengalhost.com</p>
                </div>
             </div>
             <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-start gap-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 shrink-0"><MapPin size={24}/></div>
                <div>
                   <h3 className="font-bold mb-1">Office</h3>
                   <p className="text-sm text-zinc-400 mb-2">Visit us at our HQ.</p>
                   <p className="font-bold text-zinc-200 tracking-tight">Level 4, Building 10, Banani, Dhaka</p>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
             <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl h-full">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
                     <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                        <Send size={40} />
                     </div>
                     <h2 className="text-3xl font-bold">Message Sent!</h2>
                     <p className="text-zinc-400 max-w-sm">Thank you for reaching out. One of our experts will get back to you shortly.</p>
                     <button onClick={() => setSubmitted(false)} className="text-blue-500 font-bold">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-sm font-medium text-zinc-400">First Name</label>
                          <input type="text" placeholder="John" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" required />
                       </div>
                       <div className="space-y-3">
                          <label className="text-sm font-medium text-zinc-400">Last Name</label>
                          <input type="text" placeholder="Doe" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" required />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-sm font-medium text-zinc-400">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div className="space-y-3">
                       <label className="text-sm font-medium text-zinc-400">Message</label>
                       <textarea rows={5} placeholder="How can we help you?" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-3">
                       Send Message <Send size={18}/>
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-32 text-center p-12 bg-blue-600 rounded-[3rem] text-white">
           <h2 className="text-3xl font-bold mb-4">Immediate Assistance?</h2>
           <p className="mb-10 opacity-80">Our live chat agents are ready to assist you right now for any technical or sales queries.</p>
           <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-900 transition-colors"><MessageSquare size={20}/> Start Live Chat</button>
              <button className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-xl font-bold flex items-center gap-2 backdrop-blur-md transition-colors"><Headphones size={20}/> Support Portal</button>
           </div>
        </div>
      </div>
    </div>
  );
}
