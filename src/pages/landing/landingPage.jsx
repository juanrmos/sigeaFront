import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-teal-600">S.I.D.E.A.</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition">CONÓCENOS</a>
            <a href="#certifications" className="text-gray-700 hover:text-teal-600 transition">CERTIFICACIONES</a>
            <a href="#programs" className="text-gray-700 hover:text-teal-600 transition">PROGRAMAS</a>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            CREAR CUENTA
          </button>
          <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition">
            INICIAR SESIÓN
          </button>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforma tu futuro con conocimiento innovador
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Descubre una variedad de programas y actividades que te impulsará con certificaciones en tu carrera profesional.
          </p>
          <button className="px-8 py-4 bg-teal-500 text-white text-lg rounded-lg hover:bg-teal-600 transition shadow-lg">
            Explorar Programas
          </button>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-teal-400 rounded-3xl shadow-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-teal-300 to-green-400 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              U.N.A.S – Espacio de Extensión y Formación Continua
            </h2>
            <h3 className="text-2xl font-semibold text-teal-600 mb-6">¿Quiénes somos?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos una iniciativa de la Universidad Nacional Agraria de la Selva, 
              enfocada en el aprendizaje continuo, el intercambio de saberes y la 
              extensión con impacto. Dirigida a estudiantes, profesionales y público 
              en general que buscan crecer y desarrollarse en un entorno de innovación 
              y conocimiento compartido.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-teal-400 rounded-full opacity-20"></div>
              <div className="absolute inset-8 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute inset-16 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-teal-500 rounded-lg shadow-lg"></div>
                  <div className="w-20 h-20 bg-blue-500 rounded-lg shadow-lg"></div>
                  <div className="w-20 h-20 bg-green-500 rounded-lg shadow-lg"></div>
                  <div className="w-20 h-20 bg-teal-600 rounded-lg shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Certifications Carousel
const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certifications = [
    {
      id: 1,
      badge: 'VII PIS 2025',
      title: 'Innovación y Tecnología para la Agricultura Sostenible',
      description: 'Programa especializado en técnicas modernas de agricultura con enfoque sostenible.'
    },
    {
      id: 2,
      badge: 'CERT 2025',
      title: 'Gestión Ambiental y Recursos Naturales',
      description: 'Certificación en manejo responsable de recursos y conservación ambiental.'
    },
    {
      id: 3,
      badge: 'AGRO 2025',
      title: 'Agroecología y Producción Orgánica',
      description: 'Formación en prácticas agroecológicas y producción sostenible.'
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % certifications.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + certifications.length) % certifications.length);

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">CERTIFICACIONES</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition shadow-lg z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500">
            <div className="perspective-1000">
              <div className="bg-gradient-to-br from-teal-400 to-green-500 rounded-xl p-8 text-white shadow-2xl transform rotate-y-5">
                <div className="text-center mb-6">
                  <div className="inline-block bg-white text-teal-600 px-6 py-3 rounded-full font-bold text-xl mb-4">
                    {certifications[currentIndex].badge}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {certifications[currentIndex].title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {certifications[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition shadow-lg z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Programs Section
const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const programs = [
    {
      id: 1,
      title: 'Agricultura de Precisión con Drones',
      image: 'bg-gradient-to-br from-blue-400 to-teal-500'
    },
    {
      id: 2,
      title: 'Biotecnología Agrícola',
      image: 'bg-gradient-to-br from-green-400 to-teal-500'
    },
    {
      id: 3,
      title: 'Gestión Sostenible del Agua',
      image: 'bg-gradient-to-br from-teal-400 to-blue-500'
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % programs.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + programs.length) % programs.length);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">PROGRAMAS ACTIVOS</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition shadow-lg z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`h-96 ${programs[currentIndex].image} flex items-center justify-center relative`}>
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold text-teal-600">U.N.A.S.</span>
              </div>
              <h3 className="text-4xl font-bold text-white text-center px-8">
                {programs[currentIndex].title}
              </h3>
            </div>
          </div>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 transition shadow-lg z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {programs.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Lucía',
      role: 'Estudiante',
      text: 'Una experiencia agradable y participativa. Los programas son muy completos y los instructores excelentes.'
    },
    {
      id: 2,
      name: 'Helen',
      role: 'Estudiante',
      text: '¡Inscripciones rápidas, sencillas y accesibles! El proceso fue muy fácil y el contenido de calidad.'
    },
    {
      id: 3,
      name: 'Daira',
      role: 'Estudiante',
      text: '¡Certificaciones muy variadas e inmediatas! Gran variedad de opciones para especializarse.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RESEÑAS</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-teal-500 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 text-lg">{review.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-400 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">S.I.D.E.A.</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-teal-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">Acerca de</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Contacto</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Programas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">Certificaciones</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Cursos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Talleres</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Términos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 U.N.A.S. - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Certifications />
      <Programs />
      <Reviews />
      <Footer />
      
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-5 {
          transform: rotateY(5deg);
        }
      `}</style>
    </div>
  );
}

export default LandingPage;