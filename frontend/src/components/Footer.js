import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
              alt="MSGG Logo" 
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

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="flex items-start gap-3">
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
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mário Simões Gomes & Gomes, Lda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;