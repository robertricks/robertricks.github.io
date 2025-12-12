import React, { useEffect, useState } from 'react';
import type { HeroProps } from './types.ts';

export const Hero: React.FC<HeroProps> = ({ name }) => {
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