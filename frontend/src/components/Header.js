import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Produtos', id: 'produtos' },
    { label: 'Loja', id: 'loja' },
    { label: 'Marcas', id: 'marcas' },
    { label: 'Testemunhos', id: 'testemunhos' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Contactos', id: 'contactos' }
  ];

  return (
    <header className={`header-fixed ${isScrolled ? 'header-shadow' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://customer-assets.emergentagent.com/job_823a2b97-7844-41bb-82d6-c92e96ffdff3/artifacts/8podbrez_LOGO%20MSGG.png" 
              alt="MSGG Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Pedir Orçamento Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              className="btn-gradient-blue text-white"
              onClick={() => scrollToSection('contactos')}
            >
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t mobile-menu">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full btn-gradient-blue text-white mt-4"
              onClick={() => window.open('https://wa.me/351913253290?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
            >
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;