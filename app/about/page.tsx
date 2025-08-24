'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setSkillsVisible(true), 500);
    setTimeout(() => setJourneyVisible(true), 1000);
  }, []);

  const skills = [
    { name: 'Arabic Calligraphy', level: 95, description: 'Traditional and modern Arabic script mastery' },
    { name: 'English Calligraphy', level: 92, description: 'Elegant lettering and typography design' },
    { name: 'Digital Art', level: 88, description: 'Modern digital illustration techniques' },
    { name: 'Abstract Painting', level: 90, description: 'Expressive color and form exploration' },
    { name: 'Mural Design', level: 85, description: 'Large-scale wall art and environmental design' },
    { name: 'Jewelry Illustration', level: 87, description: 'Technical and artistic jewelry rendering' }
  ];

  const journey = [
    {
      year: '2015',
      title: 'Artistic Beginning',
      description: 'Started my journey with traditional Arabic calligraphy, learning from master calligraphers and developing my unique style.',
      icon: 'ri-brush-line'
    },
    {
      year: '2017',
      title: 'Digital Expansion',
      description: 'Embraced digital art tools and techniques, blending traditional skills with modern technology.',
      icon: 'ri-computer-line'
    },
    {
      year: '2019',
      title: 'Mural Projects',
      description: 'Began creating large-scale mural works, bringing art to public spaces and transforming environments.',
      icon: 'ri-building-line'
    },
    {
      year: '2021',
      title: 'Specialized Techniques',
      description: 'Expanded into engraving, heat foiling, and beads making, offering unique artistic services.',
      icon: 'ri-tools-line'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to evolve and explore new artistic frontiers while maintaining deep respect for traditional crafts.',
      icon: 'ri-star-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold  text-white">
              Creative Arts
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/about" className="text-purple-400">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-white">
                  About My
                </span>
                <br />
                <span className="text-white">Creative Journey</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                With a deep love for creativity and expression, I have dedicated my life to capturing 
                the beauty and complexity of the world around us through various artistic mediums.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My work spans from traditional Arabic and English calligraphy to modern digital art, 
                abstract paintings, and specialized techniques like engraving and heat foiling. Each piece 
                tells a story, conveys emotion, and celebrates the intersection of tradition and innovation.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">9+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Artworks Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=artist%20portrait%20in%20creative%20studio%20workspace%2C%20professional%20artist%20with%20paint%20brushes%20and%20calligraphy%20pens%2C%20artistic%20environment%20with%20canvases%20and%20art%20supplies%2C%20warm%20creative%20lighting%20atmosphere&width=600&height=700&seq=about-portrait&orientation=portrait"
                  alt="Artist Portrait"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className=" text-white">
                My Artistic Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Years of dedication and practice have refined these core artistic abilities
            </p>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transform transition-all duration-700 delay-${index * 150} ${skillsVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <p className="text-gray-300 mb-4">{skill.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 delay-700"
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${journeyVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6 text-white">
              My Creative Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The evolution of my artistic practice over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-16">
              {journey.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative transform transition-all duration-700 delay-${index * 200} ${journeyVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <i className={`${milestone.icon} text-white text-xl`}></i>
                          </div>
                          <div className="text-2xl font-bold text-purple-400">{milestone.year}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-950"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Specialized Techniques
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced artistic methods that set my work apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Engraving',
                description: 'Precise engraving on metal, wood, and glass surfaces using traditional and modern techniques.',
                image: 'https://readdy.ai/api/search-image?query=precision%20engraving%20work%20on%20metal%20surface%2C%20detailed%20engraving%20tools%20and%20technique%2C%20artistic%20metalwork%20with%20intricate%20patterns%2C%20professional%20engraving%20workshop%20environment&width=400&height=300&seq=engraving1&orientation=landscape'
              },
              {
                title: 'Heat Foiling',
                description: 'Elegant foil application techniques that add luxury and sophistication to artistic pieces.',
                image: 'https://readdy.ai/api/search-image?query=heat%20foiling%20technique%20application%20on%20artistic%20work%2C%20gold%20foil%20stamping%20process%2C%20luxury%20finishing%20technique%20with%20metallic%20foil%2C%20professional%20foiling%20equipment%20and%20materials&width=400&height=300&seq=foiling1&orientation=landscape'
              },
              {
                title: 'Beads Making',
                description: 'Handcrafted beads and jewelry components created with traditional artisanal methods.',
                image: 'https://readdy.ai/api/search-image?query=handmade%20beads%20creation%20process%2C%20colorful%20artistic%20beads%20and%20jewelry%20components%2C%20traditional%20beadmaking%20techniques%20with%20tools%20and%20materials%2C%20artisan%20jewelry%20workshop%20setting&width=400&height=300&seq=beads1&orientation=landscape'
              }
            ].map((specialty, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{specialty.title}</h3>
                  <p className="text-gray-300">{specialty.description}</p>
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
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your artistic vision to life? I'd love to discuss your project and explore how we can create something beautiful together.
          </p>
          <Link href="/contact" className="bg-gray-800 hover:text-gray-800 hover:bg-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
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