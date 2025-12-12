import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import BrickWaveBackground from './components/BrickWaveBackground';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative bg-slate-50">
        {/* Interactive Background */}
        <BrickWaveBackground />
        
        {/* Main Content with z-index to sit above background */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
