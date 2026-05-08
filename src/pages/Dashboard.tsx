import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Server, Globe, CreditCard, Headphones, ChevronRight, Layout, Settings, LogOut, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard({ user }: { user: User }) {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(collection(db, "orders"), where("userId", "==", user.uid));
        const snapshot = await getDocs(q);
        setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user.uid]);

  const stats = [
    { name: "Active Services", value: orders.filter(o => o.status === 'completed').length, icon: Server, color: "text-blue-500" },
    { name: "Registered Domains", value: 0, icon: Globe, color: "text-emerald-500" },
    { name: "Unpaid Invoices", value: orders.filter(o => o.status === 'pending').length, icon: CreditCard, color: "text-orange-500" },
    { name: "Support Tickets", value: 0, icon: Headphones, color: "text-purple-500" },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-black px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-2">
           <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                 {user.email?.charAt(0).toUpperCase()}
              </div>
              <h3 className="font-bold truncate">{user.displayName || "New Client"}</h3>
              <p className="text-xs text-zinc-500 truncate">{user.email}</p>
           </div>
           
           <nav className="space-y-1">
              {[
                { name: "Overview", icon: Layout, active: true },
                { name: "Services", icon: Server },
                { name: "Domains", icon: Globe },
                { name: "Billing", icon: CreditCard },
                { name: "Support", icon: Headphones },
                { name: "Settings", icon: Settings },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}
                >
                  <item.icon size={18} /> {item.name}
                </button>
              ))}
           </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
           <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                 <h1 className="text-2xl font-bold">Client Overview</h1>
                 <p className="text-sm text-zinc-500">Welcome back to BengalHost Portal.</p>
              </div>
              <Link to="/shared-hosting" className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl text-sm font-bold transition-all text-center">Order New Service</Link>
           </header>

           {/* Stats Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-zinc-700 transition-all">
                   <div className={`w-10 h-10 ${stat.color} bg-current/10 rounded-xl flex items-center justify-center mb-4`}>
                      <stat.icon size={20} />
                   </div>
                   <div className="text-2xl font-bold">{stat.value}</div>
                   <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">{stat.name}</div>
                </div>
              ))}
           </div>

           {/* Recent Activity */}
           <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] overflow-hidden">
              <div className="px-8 py-6 border-b border-zinc-800 flex items-center justify-between">
                 <h2 className="font-bold">Recent Services</h2>
                 <button className="text-xs text-blue-500 hover:text-blue-400 flex items-center gap-1 font-bold uppercase tracking-wider">View All <ChevronRight size={14}/></button>
              </div>
              <div className="p-8">
                 {loading ? (
                    <div className="py-10 flex justify-center"><div className="w-8 h-8 border-2 border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div></div>
                 ) : orders.length === 0 ? (
                    <div className="py-12 text-center">
                       <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-500"><Server size={32}/></div>
                       <p className="text-zinc-500 text-sm">No active services found in your account.</p>
                       <Link to="/shared-hosting" className="text-blue-500 text-sm font-bold mt-2 inline-block">Purchase a plan to get started</Link>
                    </div>
                 ) : (
                    <div className="space-y-4">
                       {orders.map((order, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500"><Server size={20}/></div>
                                <div>
                                   <div className="font-bold text-sm">Hosting Plan #{order.id.slice(0, 8)}</div>
                                   <div className="text-xs text-zinc-500 uppercase tracking-widest">{order.status}</div>
                                </div>
                             </div>
                             <button className="p-2 text-zinc-500 hover:text-white"><ChevronRight /></button>
                          </div>
                       ))}
                    </div>
                 )}
              </div>
           </div>

           {/* Security / Tips Banner */}
           <div className="p-8 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/20 rounded-[2rem] flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shrink-0"><Shield size={32}/></div>
              <div>
                 <h3 className="font-bold text-lg mb-1">Security Recommendation</h3>
                 <p className="text-sm text-zinc-300">Enable Two-Factor Authentication (2FA) to add an extra layer of security to your BengalHost profile.</p>
              </div>
              <button className="md:ml-auto whitespace-nowrap px-6 py-2.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-zinc-200 transition-colors">Enable 2FA</button>
           </div>
        </div>
      </div>
    </div>
  );
}
