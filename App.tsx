import React from 'react';
import { Hero } from './components/Hero.tsx';

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

export default App;