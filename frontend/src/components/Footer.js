import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_823a2b97-7844-41bb-82d6-c92e96ffdff3/artifacts/8podbrez_LOGO%20MSGG.png" 
              alt="MSGG - Mário Simões Gomes & Gomes - Tintas e Vernizes" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Mário Simões Gomes & Gomes, Lda. - Especialistas em tintas e vernizes para repintura automóvel e construção civil com 35 anos de experiência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('marcas')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Marcas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contactos')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+351219673174" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:geral@mariosgomes.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/Mario+Sim%C3%B5es+Gomes+%26+Gomes/@38.8473229,-9.3446913,286m/data=!3m1!1e3!4m6!3m5!1s0xd1ed0c15c971977:0xb0211568ab965f15!8m2!3d38.84657!4d-9.3454409!16s%2Fg%2F11bbrt7t4l?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="flex items-start gap-3 mb-6">
              <Clock size={18} className="mt-0.5 flex-shrink-0" />
              <div className="text-gray-300 text-sm space-y-1">
                <p className="text-gray-300">De segunda a sexta:</p>
                <p className="font-medium text-white">9:00h às 13:00h</p>
                <p className="font-medium text-white">14:00h às 18:00h</p>
                <p className="text-gray-300 mt-3">Sábado:</p>
                <p className="font-medium text-white">9:00h às 13:00h</p>
                <p className="text-gray-300 mt-3">Domingo:</p>
                <p className="font-medium text-white">Encerrado</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold mb-3">Siga-nos</h4>
              <a 
                href="https://www.instagram.com/mariosimoesgomesegomes/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors text-sm"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mário Simões Gomes & Gomes, Lda. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/informacoes-legais" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm underline"
              >
                Informações Legais
              </a>
              <a 
                href="/politica-privacidade" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm underline"
              >
                Política de Privacidade
              </a>
              <a 
                href="/politica-cookies" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm underline"
              >
                Política de Cookies
              </a>
            </div>
          </div>
          
          {/* Livro de Reclamações */}
          <div className="flex justify-center">
            <a 
              href="https://www.livroreclamacoes.pt/Inicio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-md transition-colors shadow-md text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="none"/>
                <path d="M4 4h16v16H4V4z" fill="#E31E24"/>
                <path d="M4 4h16v8H4V4z" fill="#003DA5"/>
                <rect x="6" y="6" width="12" height="2" fill="white"/>
                <rect x="6" y="9" width="12" height="1.5" fill="white"/>
                <rect x="6" y="14" width="12" height="1.5" fill="white"/>
                <rect x="6" y="16.5" width="8" height="1.5" fill="white"/>
              </svg>
              <span className="font-medium">Livro de Reclamações</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;