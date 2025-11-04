import React from 'react';
import { ArrowLeft, Building2, FileText, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InformacoesLegais = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Informações Legais</h1>

          {/* Identificação da Empresa */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Identificação da Empresa</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Denominação Social:</p>
                  <p>Mário Simões Gomes & Gomes, Lda.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-1">NIF:</p>
                  <p className="text-blue-600 font-mono">[NIF DA EMPRESA]</p>
                  <p className="text-xs text-gray-500 mt-1">* Por favor, preencher com o NIF correto</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Capital Social:</p>
                  <p className="text-blue-600">[CAPITAL SOCIAL] €</p>
                  <p className="text-xs text-gray-500 mt-1">* Por favor, preencher com o capital social</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">Matrícula/Registo:</p>
                  <p className="text-blue-600">[NÚMERO DE MATRÍCULA]</p>
                  <p className="text-xs text-gray-500 mt-1">* Número de registo na Conservatória</p>
                </div>

                <div className="md:col-span-2">
                  <p className="font-semibold text-gray-900 mb-1">Conservatória do Registo Comercial:</p>
                  <p className="text-blue-600">[CONSERVATÓRIA - ex: Sintra]</p>
                  <p className="text-xs text-gray-500 mt-1">* Conservatória onde a empresa está registada</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sede Social */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-orange-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Sede Social</h2>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <p>Estrada da Portela de Carnaxide, 117</p>
              <p>2635-543 Rio de Mouro</p>
              <p>Sintra, Portugal</p>
            </div>
          </section>

          {/* Contactos */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Contactos</h2>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <a href="tel:+351219673174" className="hover:text-blue-600 transition-colors">
                  +351 219 673 174
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <a href="mailto:geral@mariosgomes.com" className="hover:text-blue-600 transition-colors">
                  geral@mariosgomes.com
                </a>
              </div>
            </div>
          </section>

          {/* Atividade */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-purple-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Atividade</h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed">
              <p>Comércio de tintas, vernizes e produtos relacionados para repintura automóvel e construção civil.</p>
              <p className="mt-3">Com mais de 35 anos de experiência no mercado, representando as principais marcas do sector.</p>
            </div>
          </section>

          {/* Livro de Reclamações */}
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Livro de Reclamações Eletrónico</h3>
            <p className="text-gray-700 mb-4">
              Em conformidade com a legislação portuguesa, disponibilizamos acesso ao Livro de Reclamações Eletrónico.
            </p>
            <a 
              href="https://www.livroreclamacoes.pt/Inicio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Aceder ao Livro de Reclamações
              <ArrowLeft className="rotate-180" size={18} />
            </a>
          </section>

          {/* Resolução de Litígios */}
          <section className="mt-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Resolução Alternativa de Litígios</h3>
            <p className="text-gray-700 mb-2">
              Caso não seja possível resolver um litígio de consumo diretamente connosco, pode recorrer a uma Entidade de Resolução Alternativa de Litígios.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Plataforma Europeia de Resolução de Litígios Online:</strong>
            </p>
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </section>

          {/* Nota de Atualização */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformacoesLegais;
