'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setServicesVisible(true), 500);
    const timer2 = setTimeout(() => setAboutVisible(true), 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const services = [
    {
      title: 'Arabic & English Calligraphy',
      description: 'Beautiful hand-lettered calligraphy combining traditional Arabic scripts with modern English typography.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20arabic%20calligraphy%20artwork%20with%20elegant%20english%20lettering%20on%20textured%20paper%2C%20artistic%20handwriting%20with%20traditional%20ink%2C%20professional%20calligraphy%20studio%20setup%20with%20modern%20lighting%20and%20creative%20atmosphere&width=400&height=300&seq=calligraphy1&orientation=landscape',
      icon: 'pen-tool'
    },
    {
      title: 'Abstract Painting',
      description: 'Expressive abstract artworks that capture emotions and movement through color, form, and texture.',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20abstract%20painting%20with%20flowing%20colors%20and%20dynamic%20brushstrokes%2C%20modern%20art%20canvas%20with%20rich%20textures%2C%20artistic%20studio%20with%20paint%20brushes%20and%20palette%2C%20contemporary%20abstract%20expressionist%20style%20artwork&width=400&height=300&seq=abstract1&orientation=landscape',
      icon: 'palette'
    },
    {
      title: 'Digital Art',
      description: 'Modern digital illustrations and artwork created with cutting-edge tools and creative vision.',
      image: 'https://readdy.ai/api/search-image?query=digital%20art%20creation%20on%20tablet%20with%20stylus%2C%20modern%20illustration%20software%20interface%2C%20creative%20digital%20artwork%20with%20vibrant%20colors%2C%20professional%20digital%20artist%20workspace%20with%20multiple%20monitors&width=400&height=300&seq=digital1&orientation=landscape',
      icon: 'monitor'
    },
    {
      title: 'Mural Painting',
      description: 'Large-scale wall murals that transform spaces with stunning visual narratives and artistic expression.',
      image: 'https://readdy.ai/api/search-image?query=artist%20painting%20colorful%20mural%20on%20large%20wall%2C%20creative%20street%20art%20with%20vibrant%20colors%2C%20professional%20mural%20artist%20with%20paint%20brushes%20and%20scaffolding%2C%20beautiful%20outdoor%20wall%20art%20in%20progress&width=400&height=300&seq=mural1&orientation=landscape',
      icon: 'brush'
    },
    {
      title: 'Jewellery Illustration',
      description: 'Detailed technical and artistic illustrations of jewelry designs with precision and elegance.',
      image: 'https://readdy.ai/api/search-image?query=detailed%20jewelry%20design%20illustration%20with%20technical%20drawings%2C%20elegant%20ring%20and%20necklace%20sketches%20on%20paper%2C%20professional%20jewelry%20designer%20workspace%20with%20drawing%20tools%20and%20reference%20materials&width=400&height=300&seq=jewelry1&orientation=landscape',
      icon: 'gem'
    },
    {
      title: 'Product Painting',
      description: 'Custom product artwork and illustrations that bring commercial items to life through artistic interpretation.',
      image: 'https://readdy.ai/api/search-image?query=product%20painting%20and%20illustration%20artwork%2C%20commercial%20items%20rendered%20in%20watercolor%20and%20acrylic%20paint%2C%20professional%20product%20designer%20workspace%20with%20reference%20objects%20and%20art%20supplies&width=400&height=300&seq=product1&orientation=landscape',
      icon: 'package'
    }
  ];

  const specialServices = [
    {
      title: 'Engraving',
      description: 'Precision engraving on various materials including metal, wood, and glass.',
      icon: 'zap'
    },
    {
      title: 'Heat Foiling',
      description: 'Elegant foil applications that add luxury and sophistication to any project.',
      icon: 'flame'
    },
    {
      title: 'Beads Making',
      description: 'Handcrafted beads and jewelry components created with artisanal techniques.',
      icon: 'circle'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative Arts
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=artistic%20creative%20workspace%20with%20paint%20brushes%2C%20canvas%2C%20calligraphy%20pens%2C%20watercolor%20paints%2C%20modern%20art%20studio%20with%20natural%20lighting%2C%20creative%20mess%20of%20art%20supplies%2C%20inspiring%20artistic%20environment&width=1920&height=1080&seq=hero-bg&orientation=landscape')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-white">Expression</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              With a deep love for creativity and expression, I have dedicated my life to capturing 
              the beauty and complexity of the world around us through various art forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/portfolio" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                View My Work
              </Link>
              <Link href="/contact" className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Artistic Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From traditional calligraphy to modern digital art, each piece is crafted with passion and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${servicesVisible ? `translate-y-0 opacity-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Specialized Techniques
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced artistic techniques for unique and personalized creations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <div 
                key={index}
                className={`text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 ${aboutVisible ? `translate-y-0 opacity-100 transition-all duration-700 delay-${index * 200}` : 'translate-y-20 opacity-0'}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i className={`ri-${service.icon}-line text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Passion for
                </span>
                <br />
                <span className="text-white">Artistic Creation</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every stroke, every line, every color choice is a deliberate expression of creativity. 
                I specialize in bringing traditional art forms into the modern world while preserving 
                their authentic beauty and cultural significance.
              </p>
              <div className="space-y-4">
                {['Arabic & English Calligraphy', 'Digital Art Creation', 'Custom Illustrations'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                <span>Learn More About My Journey</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-300 ${aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=artist%20hands%20creating%20beautiful%20calligraphy%20artwork%20with%20traditional%20brush%20and%20ink%2C%20detailed%20artistic%20process%2C%20elegant%20workspace%20with%20art%20supplies%2C%20warm%20lighting%20creating%20artistic%20atmosphere&width=600&height=500&seq=about-artist&orientation=landscape"
                  alt="Artistic Process"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need custom artwork, illustrations, or specialized artistic services, 
            I'm here to bring your vision to life.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Arts
              </h3>
              <p className="text-gray-400">
                Dedicated to capturing beauty and complexity through various artistic expressions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Calligraphy</li>
                <li>Digital Art</li>
                <li>Mural Painting</li>
                <li>Illustrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Specialties</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Engraving</li>
                <li>Heat Foiling</li>
                <li>Beads Making</li>
                <li>Custom Art</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <i className="ri-mail-line text-white"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creative Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}