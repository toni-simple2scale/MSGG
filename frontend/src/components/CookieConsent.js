import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Shield, Settings, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CookieConsent = () => {
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false
  });

  useEffect(() => {
    // Don't show banner on policy pages
    const currentPath = location.pathname;
    if (currentPath.includes('/politica-privacidade') || currentPath.includes('/politica-cookies')) {
      setShowBanner(false);
      return;
    }

    // Check if consent exists
    const consent = localStorage.getItem('msgg_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [location.pathname]);

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      functional: true,
      analytics: true
    };
    localStorage.setItem('msgg_cookie_consent', JSON.stringify(allPreferences));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleAcceptEssential = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false
    };
    localStorage.setItem('msgg_cookie_consent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('msgg_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Block body scroll when modal is open
  useEffect(() => {
    if (showBanner) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showBanner]);

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop Blur */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]" />

      {/* Cookie Consent Modal */}
      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4">
        <Card className="max-w-4xl w-full shadow-2xl border-none max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-t-3xl sm:rounded-2xl">
          <CardHeader className="relative pb-4 flex-shrink-0">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="text-orange-600" size={28} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Valorizamos a sua Privacidade
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Utilizamos cookies para melhorar a sua experiência no nosso site, analisar o tráfego e personalizar conteúdo. 
                  Pode escolher quais categorias de cookies aceitar. Os cookies essenciais são necessários para o funcionamento 
                  do site e não podem ser desativados.
                </p>
              </div>
              <button
                onClick={handleAcceptEssential}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 overflow-y-auto flex-1" style={{ WebkitOverflowScrolling: 'touch' }}>
            {!showCustomize ? (
              <>
                {/* Cookie Categories Preview */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="text-blue-600" size={20} />
                      <h4 className="font-semibold text-gray-900">Essenciais</h4>
                    </div>
                    <p className="text-sm text-gray-600">Necessários para o funcionamento do site</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="text-purple-600" size={20} />
                      <h4 className="font-semibold text-gray-900">Funcionais</h4>
                    </div>
                    <p className="text-sm text-gray-600">Melhoram a experiência do utilizador</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="text-orange-600" size={20} />
                      <h4 className="font-semibold text-gray-900">Analytics</h4>
                    </div>
                    <p className="text-sm text-gray-600">Ajudam-nos a melhorar o site</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-base font-semibold"
                  >
                    Aceitar Todos
                  </Button>
                  <Button
                    onClick={handleAcceptEssential}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 hover:bg-gray-50 py-6 text-base font-semibold"
                  >
                    Apenas Essenciais
                  </Button>
                  <Button
                    onClick={handleCustomize}
                    variant="outline"
                    className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-6 text-base font-semibold"
                  >
                    Personalizar
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Detailed Preferences */}
                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Shield className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies Essenciais</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Estes cookies são necessários para o funcionamento básico do site. Incluem cookies de sessão, 
                            autenticação e preferências essenciais. Não podem ser desativados.
                          </p>
                          <span className="text-xs text-blue-700 font-medium">Sempre Ativos</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div 
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      preferences.functional 
                        ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500' 
                        : 'bg-white border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => togglePreference('functional')}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Settings className={`mt-1 flex-shrink-0 ${preferences.functional ? 'text-purple-600' : 'text-gray-400'}`} size={24} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies Funcionais</h4>
                          <p className="text-sm text-gray-600">
                            Permitem funcionalidades melhoradas e personalização, como vídeos, chat ao vivo e preferências de idioma.
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.functional ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'
                        }`}>
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div 
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      preferences.analytics 
                        ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500' 
                        : 'bg-white border-gray-200 hover:border-orange-300'
                    }`}
                    onClick={() => togglePreference('analytics')}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <BarChart3 className={`mt-1 flex-shrink-0 ${preferences.analytics ? 'text-orange-600' : 'text-gray-400'}`} size={24} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Analytics</h4>
                          <p className="text-sm text-gray-600">
                            Ajudam-nos a compreender como os visitantes interagem com o site, recolhendo e reportando informação de forma anónima.
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? 'bg-orange-600 justify-end' : 'bg-gray-300 justify-start'
                        }`}>
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 text-base font-semibold"
                  >
                    Guardar Preferências
                  </Button>
                  <Button
                    onClick={() => setShowCustomize(false)}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 hover:bg-gray-50 py-6 text-base font-semibold"
                  >
                    Voltar
                  </Button>
                </div>
              </>
            )}

            {/* Footer Links */}
            <div className="text-center text-sm text-gray-600 pt-4 border-t">
              Ao continuar a navegar, concorda com a nossa{' '}
              <a href="/politica-privacidade" className="text-blue-600 hover:underline font-medium">
                Política de Privacidade
              </a>
              {' '}e{' '}
              <a href="/politica-cookies" className="text-blue-600 hover:underline font-medium">
                Política de Cookies
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CookieConsent;
