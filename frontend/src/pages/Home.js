import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Star, Package, Truck, Headphones, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { products, testimonials, faqs, brands, aboutInfo, storeImages, contactInfo } from '../mock';

const Home = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    // For demo purposes, open WhatsApp with pre-filled message
    const message = `Olá! Sou ${data.name}. ${data.message}`;
    window.open(`https://wa.me/351913253290?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('A redirecionar para WhatsApp...');
    reset();
    setFormSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 min-h-[85vh] flex items-center mb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542238060-646c7ed65622)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Soluções Completas em
                <span className="text-blue-400"> Tintas</span> e
                <span className="text-orange-400"> Vernizes</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 mb-6 leading-relaxed drop-shadow-lg">
                Especialistas em construção civil e repintura automóvel. Qualidade, variedade e assessoria técnica especializada.
              </p>
              
              {/* Phone Number */}
              <a 
                href="tel:219673174"
                className="inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-white mb-8 hover:text-blue-400 transition-colors drop-shadow-lg"
              >
                <Phone size={32} className="text-blue-400" />
                219 673 174
              </a>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="btn-gradient-blue text-white text-lg px-8 py-6 shadow-2xl"
                  onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-2xl"
                  onClick={() => window.open('https://wa.me/351913253290?text=Olá! Gostaria de mais informações.', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra a nossa ampla gama de produtos para todas as suas necessidades
            </p>
          </div>

          <Tabs defaultValue="construcao" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-12 h-auto">
              <TabsTrigger value="construcao" className="text-base px-8 py-3">Construção Civil</TabsTrigger>
              <TabsTrigger value="automovel" className="text-base px-8 py-3">Automóvel</TabsTrigger>
              <TabsTrigger value="acessorios" className="text-base px-8 py-3">Acessórios</TabsTrigger>
            </TabsList>

            <TabsContent value="construcao">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.construcao.map((product) => (
                  <Card key={product.id} className="product-card">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3">
                        <Package className="text-accent-blue" size={24} />
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="automovel">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.automovel.map((product) => (
                  <Card key={product.id} className="product-card">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-200 rounded-lg flex items-center justify-center mb-3">
                        <Package className="text-accent-red" size={24} />
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="acessorios">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.acessorios.map((product) => (
                  <Card key={product.id} className="product-card">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-lg flex items-center justify-center mb-3">
                        <Package className="text-accent-yellow" size={24} />
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-orange-50 py-8 px-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Entregas Rápidas em Toda a Região</h3>
            <p className="text-gray-600 mb-4">Receba os seus produtos de forma rápida e segura</p>
            <Button className="btn-gradient-orange text-white" onClick={() => window.open('https://wa.me/351913253290?text=Olá! Gostaria de saber sobre entregas.', '_blank')}>
              Saber Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="loja" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">As Nossas Instalações</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Visite a nossa loja física em Terrugem, Sintra, onde encontrará um vasto stock de produtos das melhores marcas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Stock Disponível</h4>
                    <p className="text-gray-600">Grande variedade de produtos sempre disponíveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Assessoria Presencial</h4>
                    <p className="text-gray-600">Equipa pronta a ajudar na escolha dos produtos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-blue mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fácil Acesso</h4>
                    <p className="text-gray-600">Localização estratégica com estacionamento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {storeImages.map((image, index) => (
                <div key={index} className="store-image">
                  <img 
                    src={image} 
                    alt={`Loja MSGG ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marcas Representadas</h2>
            <p className="text-xl text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <Card key={brand.id} className="brand-card text-center">
                <CardHeader>
                  <div className="flex items-center justify-center h-24 mb-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{brand.name}</CardTitle>
                  <CardDescription>{brand.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem os Nossos Clientes</h2>
            <p className="text-xl text-gray-600">A confiança dos nossos clientes é a nossa maior conquista</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Encontre respostas para as dúvidas mais comuns</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white rounded-xl px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          </div>
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">A Nossa História</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{aboutInfo.history}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{aboutInfo.mission}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Os Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {aboutInfo.values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent-blue flex-shrink-0" size={20} />
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contacto</h2>
            <p className="text-xl text-gray-600">Estamos prontos para o ajudar</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contacto brevemente</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="O seu nome"
                    />
                    {errors.name && <span className="text-red-500 text-sm">Campo obrigatório</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email válido obrigatório</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="O seu telefone"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                    {errors.message && <span className="text-red-500 text-sm">Campo obrigatório</span>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-gradient-blue text-white py-6 text-lg"
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Informações de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-500 mt-1">Chamada para rede fixa nacional</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent-purple" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Morada</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="py-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Preferência por WhatsApp?</h4>
                  <p className="text-gray-600 mb-4">Contacte-nos diretamente pelo WhatsApp para respostas rápidas!</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg"
                    onClick={() => window.open('https://wa.me/351913253290?text=Olá! Gostaria de mais informações sobre a MSGG.', '_blank')}
                  >
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.8!2d-9.3633!3d38.8133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ4JzQ4LjAiTiA5wrAyMScxOC4wIlc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MSGG Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;