import React from 'react';
import { Cookie, Mail, Phone, ArrowLeft, Settings, BarChart3, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const PoliticaCookies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Cookie className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 mt-1">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introdução */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. O que são Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os cookies são pequenos ficheiros de texto que são colocados no seu computador, tablet ou telemóvel quando 
                visita um website. Os cookies são amplamente utilizados para fazer com que os websites funcionem de forma 
                mais eficiente e para fornecer informações aos proprietários do site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O website da <strong>Mário Simões Gomes & Gomes, Lda</strong> (MSGG) utiliza cookies para melhorar a sua 
                experiência de navegação, personalizar conteúdo e analisar o tráfego do site. Esta política explica quais 
                os cookies que utilizamos e para que fins.
              </p>
            </section>

            {/* 2. Tipos de Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <p className="text-gray-700 mb-6">
                Utilizamos os seguintes tipos de cookies no nosso website:
              </p>

              {/* Cookie Essencial */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 rounded-xl mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.1. Cookies Essenciais (Necessários)</h3>
                    <p className="text-gray-700 mb-3">
                      Estes cookies são estritamente necessários para o funcionamento do website e não podem ser desativados. 
                      Permitem funcionalidades básicas como navegação segura e acesso a áreas protegidas.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Cookies Essenciais Utilizados:</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <div className="font-semibold text-gray-900">msgg_cookie_consent</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <strong>Finalidade:</strong> Armazena as suas preferências de consentimento de cookies
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Duração:</strong> Permanente (até ser eliminado manualmente)
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Fornecedor:</strong> MSGG (próprio)
                          </div>
                        </div>

                        <div className="border-l-4 border-blue-600 pl-4">
                          <div className="font-semibold text-gray-900">session_id</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <strong>Finalidade:</strong> Identifica a sua sessão de navegação
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Duração:</strong> Sessão (eliminado ao fechar o navegador)
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Fornecedor:</strong> MSGG (próprio)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-200 px-4 py-2 rounded-lg mt-4 inline-block">
                      <span className="text-sm font-semibold text-blue-900">✓ Sempre Ativos - Não requerem consentimento</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies Funcionais */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6 rounded-xl mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.2. Cookies Funcionais</h3>
                    <p className="text-gray-700 mb-3">
                      Estes cookies permitem que o website se lembre de escolhas que faz (como o seu idioma ou região) 
                      e forneça funcionalidades melhoradas e mais personalizadas.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Cookies Funcionais Utilizados:</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-purple-600 pl-4">
                          <div className="font-semibold text-gray-900">language_preference</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <strong>Finalidade:</strong> Guarda a sua preferência de idioma
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Duração:</strong> 1 ano
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Fornecedor:</strong> MSGG (próprio)
                          </div>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <div className="font-semibold text-gray-900">theme_preference</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <strong>Finalidade:</strong> Guarda preferências visuais do utilizador
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Duração:</strong> 1 ano
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Fornecedor:</strong> MSGG (próprio)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-200 px-4 py-2 rounded-lg mt-4 inline-block">
                      <span className="text-sm font-semibold text-purple-900">Requer consentimento do utilizador</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies Analytics */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.3. Cookies de Analytics (Análise)</h3>
                    <p className="text-gray-700 mb-3">
                      Estes cookies permitem-nos reconhecer e contar o número de visitantes e ver como os visitantes 
                      se movem pelo site. Isto ajuda-nos a melhorar a forma como o nosso website funciona, por exemplo, 
                      garantindo que os utilizadores encontram facilmente o que procuram.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Cookies de Analytics Utilizados:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-orange-600 pl-4">
                          <div className="font-semibold text-gray-900">Vercel Analytics</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <strong>Finalidade:</strong> Monitorização de desempenho do website, velocidade de carregamento 
                            e métricas de utilização
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Cookies:</strong> __vercel_*, _vercel_analytics_*
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Duração:</strong> Sessão a 1 ano
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Fornecedor:</strong> Vercel Inc. (terceiro)
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Mais informações:</strong>{' '}
                            <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                              vercel.com/docs/analytics/privacy-policy
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-200 px-4 py-2 rounded-lg mt-4 inline-block">
                      <span className="text-sm font-semibold text-orange-900">Requer consentimento do utilizador</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Finalidades */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Para que Utilizamos os Cookies?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Funcionalidade do Site</h4>
                  <p className="text-sm text-gray-700">
                    Garantir que o website funciona corretamente e que consegue navegar e utilizar todas as funcionalidades.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Preferências</h4>
                  <p className="text-sm text-gray-700">
                    Lembrar as suas escolhas e preferências para melhorar a sua experiência de navegação.
                  </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Análise Estatística</h4>
                  <p className="text-sm text-gray-700">
                    Compreender como os visitantes utilizam o site para melhorar o conteúdo e funcionalidades.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Desempenho</h4>
                  <p className="text-sm text-gray-700">
                    Monitorizar o desempenho do website e identificar problemas técnicos.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Gestão de Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Como Gerir as suas Preferências de Cookies</h2>
              <p className="text-gray-700 mb-4">
                Pode gerir ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no seu 
                computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Através do Nosso Banner de Cookies:</h3>
                <p className="text-gray-700 mb-4">
                  Na sua primeira visita ao nosso website, apresentamos um banner de cookies onde pode escolher:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Aceitar Todos:</strong> Aceita todos os tipos de cookies</li>
                  <li><strong>Apenas Essenciais:</strong> Aceita apenas cookies estritamente necessários</li>
                  <li><strong>Personalizar:</strong> Escolhe individualmente quais categorias de cookies aceitar</li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <strong>Nota:</strong> Para alterar as suas preferências a qualquer momento, elimine o cookie 
                    "msgg_cookie_consent" do seu navegador e recarregue a página. O banner aparecerá novamente.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Através das Definições do Navegador:</h3>
                <p className="text-gray-700 mb-4">
                  Pode configurar o seu navegador para bloquear ou alertá-lo sobre cookies. Aqui estão links para 
                  instruções dos navegadores mais comuns:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/pt-PT/kb/ativar-desativar-cookies" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline">
                      Safari (macOS)
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/pt-pt/HT201265" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline">
                      Safari (iOS)
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                       target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-sm text-gray-700">
                    <strong>Atenção:</strong> Se desativar os cookies, algumas funcionalidades do website podem não 
                    funcionar corretamente. No entanto, os cookies essenciais permanecerão ativos para garantir o 
                    funcionamento básico do site.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Cookies de Terceiros */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies de Terceiros</h2>
              <p className="text-gray-700 mb-4">
                Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Não temos 
                controlo sobre estes cookies e não podemos aceder aos dados que eles armazenam.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-3">Terceiros Utilizados:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                    <div>
                      <strong className="text-gray-900">PostHog:</strong>
                      <span className="text-gray-700 ml-2">Plataforma de análise de produto e comportamento do utilizador</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                    <div>
                      <strong className="text-gray-900">Vercel:</strong>
                      <span className="text-gray-700 ml-2">Plataforma de hospedagem e analytics de desempenho</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                    <div>
                      <strong className="text-gray-900">WhatsApp (Meta):</strong>
                      <span className="text-gray-700 ml-2">Serviço de mensagens (quando opta por nos contactar via WhatsApp)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. Base Legal */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Base Legal</h2>
              <p className="text-gray-700">
                A utilização de cookies no nosso website baseia-se em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                <li>
                  <strong>Consentimento:</strong> Para cookies funcionais e de analytics, obtemos o seu consentimento 
                  explícito através do nosso banner de cookies
                </li>
                <li>
                  <strong>Interesse legítimo:</strong> Para cookies essenciais, baseamo-nos no nosso interesse legítimo 
                  em fornecer um website funcional e seguro
                </li>
              </ul>
            </section>

            {/* 7. Direitos do Utilizador */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Os Seus Direitos</h2>
              <p className="text-gray-700 mb-4">Em relação aos cookies, tem o direito de:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Retirar o Consentimento</h4>
                  <p className="text-sm text-gray-700">
                    Pode retirar o seu consentimento a qualquer momento, eliminando os cookies ou alterando as 
                    definições do navegador
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Aceder aos Dados</h4>
                  <p className="text-sm text-gray-700">
                    Pode ver quais os cookies armazenados no seu dispositivo através das definições do navegador
                  </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Eliminar Cookies</h4>
                  <p className="text-sm text-gray-700">
                    Pode eliminar todos os cookies do seu navegador a qualquer momento
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Reclamar</h4>
                  <p className="text-sm text-gray-700">
                    Pode apresentar reclamação junto da CNPD se considerar que os seus direitos não foram respeitados
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Atualizações */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Atualizações da Política de Cookies</h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Cookies periodicamente para refletir alterações nas nossas práticas 
                ou na legislação. Recomendamos que reveja esta página regularmente. A data da última atualização está 
                indicada no topo desta página.
              </p>
            </section>

            {/* 9. Mais Informações */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Mais Informações sobre Cookies</h2>
              <p className="text-gray-700 mb-4">
                Para mais informações sobre cookies e como funcionam, pode consultar:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline">
                    AllAboutCookies.org
                  </a>
                </li>
                <li>
                  <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline">
                    Your Online Choices
                  </a>
                </li>
                <li>
                  <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline">
                    Comissão Nacional de Proteção de Dados (CNPD)
                  </a>
                </li>
              </ul>
            </section>

            {/* 10. Contacto */}
            <section className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacte-nos</h2>
              <p className="text-gray-700 mb-4">
                Para qualquer questão sobre esta Política de Cookies ou sobre a utilização de cookies no nosso website, 
                não hesite em contactar-nos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={24} />
                  <a href="mailto:geral@mariosgomes.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    geral@mariosgomes.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-600" size={24} />
                  <a href="tel:+351219673174" className="text-orange-600 hover:text-orange-800 font-medium transition-colors">
                    219 673 174
                  </a>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <strong>Mário Simões Gomes & Gomes, Lda</strong><br />
                NIF: 502 446 366<br />
                <a 
                  href="https://www.google.com/maps/place/Mario+Sim%C3%B5es+Gomes+%26+Gomes/@38.8473229,-9.3446913,286m/data=!3m1!1e3!4m6!3m5!1s0xd1ed0c15c971977:0xb0211568ab965f15!8m2!3d38.84657!4d-9.3454409!16s%2Fg%2F11bbrt7t4l?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Av. Combatentes do Ultramar, Arm. A - Lameiras, 2715-776 Terrugem
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
