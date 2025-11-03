import React from 'react';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" size={18} />
          Voltar ao Site
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
              <p className="text-gray-600 mt-1">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introdução */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                A <strong>Mário Simões Gomes & Gomes, Lda</strong> (doravante "MSGG", "nós" ou "nosso") respeita a sua privacidade 
                e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, 
                utilizamos, armazenamos e protegemos as suas informações pessoais, em conformidade com o Regulamento Geral 
                sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e a legislação portuguesa aplicável.
              </p>
            </section>

            {/* 2. Identificação do Responsável */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Identificação do Responsável pelo Tratamento</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-3">Mário Simões Gomes & Gomes, Lda</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <strong>NIF:</strong> 502 446 366
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <a 
                      href="https://www.google.com/maps/place/Mario+Sim%C3%B5es+Gomes+%26+Gomes/@38.8473229,-9.3446913,286m/data=!3m1!1e3!4m6!3m5!1s0xd1ed0c15c971977:0xb0211568ab965f15!8m2!3d38.84657!4d-9.3454409!16s%2Fg%2F11bbrt7t4l?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Av. Combatentes do Ultramar, Arm. A - Lameiras, 2715-776 Terrugem
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <a href="mailto:geral@mariosgomes.com" className="text-blue-600 hover:underline">
                      geral@mariosgomes.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <a href="tel:+351219673174" className="text-blue-600 hover:underline">
                      +351 219 673 174
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Dados Recolhidos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Dados Pessoais Recolhidos</h2>
              <p className="text-gray-700 mb-4">Recolhemos os seguintes tipos de dados pessoais:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">3.1. Dados Fornecidos por Si</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Nome completo</strong></li>
                    <li><strong>Endereço de email</strong></li>
                    <li><strong>Número de telefone</strong> (opcional)</li>
                    <li><strong>Mensagem</strong> com o conteúdo do pedido ou questão</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Estes dados são recolhidos quando utiliza o nosso formulário de contacto ou quando nos contacta 
                    através de WhatsApp, email ou telefone.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">3.2. Dados Recolhidos Automaticamente</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Endereço IP</strong></li>
                    <li><strong>Tipo de navegador</strong> e versão</li>
                    <li><strong>Sistema operativo</strong></li>
                    <li><strong>Páginas visitadas</strong> e tempo de permanência</li>
                    <li><strong>Preferências de cookies</strong></li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Estes dados são recolhidos através de cookies e ferramentas de analytics (PostHog e Vercel Analytics) 
                    para melhorar a experiência do utilizador e otimizar o desempenho do site.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Finalidades */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalidades do Tratamento de Dados</h2>
              <p className="text-gray-700 mb-4">Os seus dados pessoais são utilizados para as seguintes finalidades:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Responder a Pedidos</h4>
                  <p className="text-sm text-gray-700">
                    Processar e responder aos seus pedidos de orçamento, informações sobre produtos e serviços.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Comunicação Comercial</h4>
                  <p className="text-sm text-gray-700">
                    Enviar informações sobre produtos, serviços e promoções (apenas com o seu consentimento).
                  </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Melhorar o Site</h4>
                  <p className="text-sm text-gray-700">
                    Analisar a utilização do site para melhorar a experiência do utilizador e otimizar funcionalidades.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cumprimento Legal</h4>
                  <p className="text-sm text-gray-700">
                    Cumprir obrigações legais, regulamentares e fiscais aplicáveis à nossa atividade.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Base Legal */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base Legal para o Tratamento</h2>
              <p className="text-gray-700 mb-4">O tratamento dos seus dados pessoais baseia-se em:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Consentimento:</strong> quando nos fornece os seus dados através do formulário de contacto</li>
                <li><strong>Interesse legítimo:</strong> para melhorar os nossos serviços e otimizar o site</li>
                <li><strong>Execução de contrato:</strong> quando necessário para responder aos seus pedidos comerciais</li>
                <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei</li>
              </ul>
            </section>

            {/* 6. Partilha de Dados */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partilha de Dados com Terceiros</h2>
              <p className="text-gray-700 mb-4">
                A MSGG <strong>não vende, aluga ou partilha</strong> os seus dados pessoais com terceiros para fins comerciais. 
                No entanto, poderá haver partilha limitada nos seguintes casos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>WhatsApp (Meta):</strong> quando opta por contactar-nos via WhatsApp, os dados são processados 
                  pela plataforma WhatsApp de acordo com a sua política de privacidade
                </li>
                <li>
                  <strong>Ferramentas de Analytics:</strong> utilizamos PostHog e Vercel Analytics para análise estatística 
                  do tráfego do site (dados anonimizados sempre que possível)
                </li>
                <li>
                  <strong>Obrigações legais:</strong> se formos obrigados por lei ou ordem judicial
                </li>
              </ul>
            </section>

            {/* 7. Retenção de Dados */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Período de Conservação dos Dados</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-3">
                  Os seus dados pessoais são conservados apenas pelo período necessário para as finalidades para 
                  as quais foram recolhidos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Dados de contacto:</strong> conservados enquanto mantiver interesse nos nossos serviços 
                    ou até solicitar a eliminação
                  </li>
                  <li>
                    <strong>Dados de analytics:</strong> conservados por um período máximo de 26 meses (conforme recomendação CNPD)
                  </li>
                  <li>
                    <strong>Preferências de cookies:</strong> conservadas no seu navegador até as eliminar manualmente
                  </li>
                  <li>
                    <strong>Dados fiscais e contabilísticos:</strong> conservados pelo período legalmente exigido (10 anos)
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. Direitos do Titular */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Os Seus Direitos</h2>
              <p className="text-gray-700 mb-4">
                Em conformidade com o RGPD, tem os seguintes direitos relativamente aos seus dados pessoais:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito de Acesso</h4>
                    <p className="text-sm text-gray-700">Obter confirmação sobre quais dados pessoais tratamos sobre si</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito de Retificação</h4>
                    <p className="text-sm text-gray-700">Corrigir dados pessoais inexatos ou incompletos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito ao Apagamento ("Direito a Ser Esquecido")</h4>
                    <p className="text-sm text-gray-700">Solicitar a eliminação dos seus dados pessoais</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito à Limitação do Tratamento</h4>
                    <p className="text-sm text-gray-700">Restringir o processamento dos seus dados em certas circunstâncias</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito à Portabilidade</h4>
                    <p className="text-sm text-gray-700">Receber os seus dados num formato estruturado e legível por máquina</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito de Oposição</h4>
                    <p className="text-sm text-gray-700">Opor-se ao tratamento dos seus dados pessoais em determinadas situações</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    7
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito de Retirar o Consentimento</h4>
                    <p className="text-sm text-gray-700">Retirar o seu consentimento a qualquer momento, sem afetar a legalidade do tratamento anterior</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    8
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direito de Reclamação</h4>
                    <p className="text-sm text-gray-700">Apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD)</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                <p className="font-semibold text-gray-900 mb-2">Como exercer os seus direitos:</p>
                <p className="text-gray-700 mb-3">
                  Para exercer qualquer um dos direitos acima, contacte-nos através de:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:geral@mariosgomes.com" className="text-blue-600 hover:underline">
                      geral@mariosgomes.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="tel:+351219673174" className="text-blue-600 hover:underline">+351 219 673 174</a>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  Responderemos ao seu pedido no prazo máximo de 30 dias.
                </p>
              </div>
            </section>

            {/* 9. Segurança */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Segurança dos Dados</h2>
              <p className="text-gray-700 mb-4">
                A MSGG implementa medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra 
                acesso não autorizado, alteração, divulgação ou destruição:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encriptação SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro com acesso restrito</li>
                <li>Políticas de segurança internas e formação de colaboradores</li>
                <li>Backups regulares e procedimentos de recuperação</li>
                <li>Monitorização contínua de ameaças e vulnerabilidades</li>
              </ul>
            </section>

            {/* 10. Transferências Internacionais */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Transferências Internacionais de Dados</h2>
              <p className="text-gray-700">
                Os seus dados pessoais podem ser transferidos para fora da União Europeia através das ferramentas de analytics 
                que utilizamos (PostHog e Vercel). Estas transferências são realizadas em conformidade com o RGPD, através de 
                garantias adequadas, como cláusulas contratuais tipo aprovadas pela Comissão Europeia.
              </p>
            </section>

            {/* 11. Menores */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dados de Menores</h2>
              <p className="text-gray-700">
                O nosso site não é dirigido a menores de 16 anos. Não recolhemos intencionalmente dados pessoais de menores 
                sem o consentimento dos pais ou responsáveis legais. Se tomarmos conhecimento de que recolhemos dados de um 
                menor sem autorização, eliminaremos esses dados imediatamente.
              </p>
            </section>

            {/* 12. Alterações */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Alterações à Política de Privacidade</h2>
              <p className="text-gray-700">
                A MSGG reserva-se o direito de atualizar esta Política de Privacidade periodicamente para refletir alterações 
                nas nossas práticas ou na legislação aplicável. Qualquer alteração será publicada nesta página com a data de 
                última atualização. Recomendamos que reveja esta política regularmente.
              </p>
            </section>

            {/* 13. Contacto CNPD */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Autoridade de Controlo</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Se considerar que os seus direitos não foram respeitados, pode apresentar reclamação junto da:
                </p>
                <div className="font-semibold text-gray-900 mb-2">
                  Comissão Nacional de Proteção de Dados (CNPD)
                </div>
                <div className="space-y-1 text-gray-700">
                  <p>Av. D. Carlos I, 134, 1º</p>
                  <p>1200-651 Lisboa</p>
                  <p>Tel: +351 213 928 400</p>
                  <p>Email: geral@cnpd.pt</p>
                  <p>Website: <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cnpd.pt</a></p>
                </div>
              </div>
            </section>

            {/* 14. Contacto */}
            <section className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contacte-nos</h2>
              <p className="text-gray-700 mb-4">
                Para qualquer questão sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, 
                não hesite em contactar-nos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={24} />
                  <a href="mailto:geral@mariosgomes.com" className="text-blue-600 hover:underline font-medium">
                    geral@mariosgomes.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-600" size={24} />
                  <a href="tel:+351219673174" className="text-orange-600 hover:text-orange-800 font-medium transition-colors">
                    +351 219 673 174
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
