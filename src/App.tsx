import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Globe, Mail } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    // Start logo animation immediately
    setLogoVisible(true);
    
    // Delay other content animation slightly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/levelup-high-resolution-logo-transparent.png" 
                alt="Level Up Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('newsletter')}
                className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors duration-200 font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div>
            <div className={`mb-8 ${logoVisible ? 'animate-drop-in' : 'opacity-0'}`}>
              <img 
                src="/levelup-high-resolution-logo-transparent.png" 
                alt="Level Up Logo" 
                className="h-24 md:h-32 w-auto mx-auto mb-6"
              />
            </div>
            
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Digital Solutions for Tomorrow's Challenges
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group bg-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-all duration-200 transform hover:scale-105"
                >
                  Explore Services
                </button>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-black border border-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-orange-500/50">
              <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Web Development</h3>
              <p className="text-gray-300">
                Modern, responsive websites and web applications built with cutting-edge technologies
              </p>
            </div>
            
            <div className="group p-8 bg-black border border-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-orange-500/50">
              <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300">
                Native and cross-platform mobile applications for iOS and Android
              </p>
            </div>
            
            <div className="group p-8 bg-black border border-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-orange-500/50">
              <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Strategy</h3>
              <p className="text-gray-300">
                Comprehensive digital transformation and strategic consulting services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Glow Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-orange-500/20 blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-12 border border-orange-500/30">
            <div className="space-y-8">
              <div className="w-24 h-24 mx-auto bg-orange-500 rounded-full flex items-center justify-center">
                <Globe className="w-12 h-12 text-black" />
              </div>
              <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                Elevating businesses through innovative digital solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Footer */}
      <footer id="newsletter" className="bg-gradient-to-br from-blue-900/20 to-blue-800/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <img 
              src="/levelup-high-resolution-logo-transparent.png" 
              alt="Level Up Logo" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-lg">
              Subscribe to our newsletter for the latest insights, tips, and updates from Level Up
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 Level Up Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;