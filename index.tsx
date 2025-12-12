import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
interface HeroProps {
  name: string;
}

// --- HERO COMPONENT ---
const Hero: React.FC<HeroProps> = ({ name }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative z-10 flex flex-col items-center justify-center p-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 select-none cursor-default text-center">
          {name}
        </h1>
      </div>
      
      <div className={`mt-6 h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 w-24' : 'opacity-0 w-0'}`} />
      
      <p className={`mt-8 text-slate-400 font-light tracking-widest uppercase text-sm md:text-base transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Portfolio
      </p>
    </div>
  );
};

// --- APP COMPONENT ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-950 text-white overflow-hidden selection:bg-indigo-500 selection:text-white">
      <main className="flex-grow flex items-center justify-center relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <Hero name="Robert Ricks" />
      </main>
      
      <footer className="w-full py-6 text-center text-slate-600 text-sm absolute bottom-0 z-10">
        <p>© {new Date().getFullYear()} Robert Ricks. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- RENDER LOGIC ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
