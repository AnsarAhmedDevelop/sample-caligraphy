'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setPortfolioVisible(true), 500);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'calligraphy', name: 'Calligraphy' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'digital', name: 'Digital Art' },
    { id: 'mural', name: 'Murals' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'product', name: 'Products' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Arabic Calligraphy Masterpiece',
      category: 'calligraphy',
      image: 'https://readdy.ai/api/search-image?query=elegant%20arabic%20calligraphy%20artwork%20with%20gold%20ink%20on%20dark%20paper%2C%20traditional%20islamic%20calligraphy%20with%20beautiful%20curves%20and%20flourishes%2C%20artistic%20arabic%20text%20with%20decorative%20elements%20and%20geometric%20patterns&width=500&height=600&seq=portfolio-cal1&orientation=portrait',
      description: 'Traditional Arabic script with modern artistic interpretation'
    },
    {
      id: 2,
      title: 'Vibrant Abstract Expression',
      category: 'abstract',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20abstract%20painting%20with%20flowing%20colors%2C%20dynamic%20brushstrokes%20in%20purple%20pink%20and%20blue%2C%20modern%20abstract%20art%20on%20canvas%2C%20expressive%20contemporary%20artwork%20with%20rich%20textures%20and%20movement&width=500&height=600&seq=portfolio-abs1&orientation=portrait',
      description: 'Emotional abstract piece exploring color and movement'
    },
    {
      id: 3,
      title: 'Digital Portrait Art',
      category: 'digital',
      image: 'https://readdy.ai/api/search-image?query=stunning%20digital%20portrait%20artwork%2C%20modern%20digital%20illustration%20with%20vibrant%20colors%2C%20professional%20digital%20painting%20technique%2C%20contemporary%20portrait%20art%20with%20artistic%20lighting%20effects&width=500&height=600&seq=portfolio-dig1&orientation=portrait',
      description: 'Modern digital illustration with artistic flair'
    },
    {
      id: 4,
      title: 'English Calligraphy Design',
      category: 'calligraphy',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20english%20calligraphy%20lettering%20with%20flourishes%2C%20elegant%20hand%20lettering%20on%20textured%20paper%2C%20modern%20calligraphy%20with%20decorative%20elements%2C%20artistic%20typography%20design%20with%20flowing%20script&width=500&height=600&seq=portfolio-cal2&orientation=portrait',
      description: 'Elegant English lettering with decorative flourishes'
    },
    {
      id: 5,
      title: 'Urban Mural Art',
      category: 'mural',
      image: 'https://readdy.ai/api/search-image?query=colorful%20mural%20painting%20on%20building%20wall%2C%20urban%20street%20art%20with%20vibrant%20colors%20and%20creative%20design%2C%20large%20scale%20wall%20art%20with%20artistic%20patterns%2C%20professional%20mural%20artwork%20in%20outdoor%20setting&width=500&height=600&seq=portfolio-mur1&orientation=portrait',
      description: 'Large-scale wall mural bringing life to urban spaces'
    },
    {
      id: 6,
      title: 'Jewelry Design Illustration',
      category: 'jewelry',
      image: 'https://readdy.ai/api/search-image?query=detailed%20jewelry%20design%20illustration%2C%20elegant%20ring%20and%20necklace%20technical%20drawings%2C%20precious%20gemstone%20illustrations%20with%20artistic%20rendering%2C%20professional%20jewelry%20design%20sketches%20with%20watercolor%20accents&width=500&height=600&seq=portfolio-jew1&orientation=portrait',
      description: 'Detailed jewelry illustrations with precision and beauty'
    },
    {
      id: 7,
      title: 'Abstract Color Flow',
      category: 'abstract',
      image: 'https://readdy.ai/api/search-image?query=abstract%20art%20with%20flowing%20colors%20and%20organic%20shapes%2C%20fluid%20art%20painting%20with%20gradient%20colors%2C%20modern%20abstract%20canvas%20with%20smooth%20color%20transitions%2C%20contemporary%20art%20with%20dynamic%20movement&width=500&height=600&seq=portfolio-abs2&orientation=portrait',
      description: 'Fluid abstract composition exploring color relationships'
    },
    {
      id: 8,
      title: 'Product Painting Collection',
      category: 'product',
      image: 'https://readdy.ai/api/search-image?query=product%20painting%20artwork%20of%20luxury%20items%2C%20artistic%20rendering%20of%20commercial%20products%20in%20watercolor%20style%2C%20creative%20product%20illustration%20with%20artistic%20interpretation%2C%20professional%20product%20art%20with%20detailed%20shading&width=500&height=600&seq=portfolio-prod1&orientation=portrait',
      description: 'Artistic interpretation of commercial products'
    },
    {
      id: 9,
      title: 'Digital Concept Art',
      category: 'digital',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20digital%20concept%20art%2C%20sci-fi%20digital%20illustration%20with%20vibrant%20colors%2C%20modern%20digital%20artwork%20with%20creative%20lighting%2C%20professional%20digital%20painting%20with%20artistic%20vision&width=500&height=600&seq=portfolio-dig2&orientation=portrait',
      description: 'Futuristic digital artwork with creative vision'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creative Arts
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/portfolio" className="text-purple-400">Portfolio</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of artistic works showcasing creativity across various mediums and styles
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={`group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${portfolioVisible ? `translate-y-0 opacity-100 transition-all duration-700 delay-${index * 100}` : 'translate-y-20 opacity-0'}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Inspired by My Work?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next creative project. Whether it's a custom piece or a large-scale commission, I'm here to bring your vision to life.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Commission Custom Art
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