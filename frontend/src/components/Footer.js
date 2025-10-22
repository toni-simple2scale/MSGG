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
              Mário Simões Gomes & Gomes, Lda. - Referência em tintas e vernizes para construção civil e automóvel desde há muitos anos.
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
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 flex-shrink-0" />
              <div className="text-gray-300 text-sm">
                <p>Segunda a Sexta:</p>
                <p className="font-medium text-white">8h30 - 18h00</p>
                <p className="mt-2">Sábado:</p>
                <p className="font-medium text-white">9h00 - 13h00</p>
                <p className="mt-2 text-gray-400">Domingo: Encerrado</p>
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