import React, { useState, useCallback, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Star, Package, Truck, Headphones, CheckCircle2, ChevronLeft, ChevronRight, Car, SprayCan, Droplets, Sparkles, Layers, Palette, PaintBucket, Home as HomeIcon, BookOpen, Shield, Zap, Paintbrush, Scissors, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { products, testimonials, faqs, brands, aboutInfo, storeImages, contactInfo } from '../mock';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const getProductIcon = (productId) => {
  const iconMap = {
    // Automóvel
    1: Car, // Tinta Auto
    2: Car, // Tinta Motociclos
    3: Droplets, // Vernizes Auto 2K
    4: Sparkles, // Massas de Polir/Polish/Ceras
    5: Layers, // Betumes e Primários
    6: Palette, // Afinação de Cor Personalizada
    7: Palette, // Afinação Simples com Espectrofotômetro
    // Construção Civil
    8: PaintBucket, // Tintas Interiores
    9: HomeIcon, // Tintas Exteriores
    10: BookOpen, // Catálogos RAL/NCS/Pantone
    11: Layers, // Preparação de Superfícies
    12: Shield, // Isolamentos
    // Sprays
    13: SprayCan, // Sprays Auto
    14: SprayCan, // Sprays Moto
    15: SprayCan, // Sprays com Afinação
    16: SprayCan, // Sprays de Primário
    17: SprayCan, // Sprays Metalomecânica
    18: SprayCan, // Spray de Verniz
    // Acessórios Auto
    19: Package, // Cábine de Pintura
    20: Zap, // Pistolas
    21: Sparkles, // Material Técnico de Polimento
    22: Package, // Compressores
    23: Package, // Filtros
    24: Shield, // Fatos de Pintura
    25: Scissors, // Fitas
    26: Shield, // Máscaras
    27: Shield, // Luvas
    28: Package, // Lixas e Discos
    29: Package, // Mais Opções
    // Acessórios Construção
    30: Paintbrush, // Rolos
    31: Paintbrush, // Trinchas
    32: Paintbrush, // Extensivos
    33: Scissors, // Fita de Pintor
    34: Shield, // Proteções
    35: Shield, // Proteções de Mobiliário
    36: Shield, // Fatos de Pintura
    37: Shield, // Luvas
    38: Package, // Lixas
    39: Package, // Mais Opções
  };
  return iconMap[productId] || Package;
};

const BrandsCarousel = ({ brands }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0">
              <Card className="brand-card text-center h-full">
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
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
        aria-label="Marca anterior"
      >
        <ChevronLeft size={24} className="text-gray-600" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
        aria-label="Próxima marca"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {brands.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-accent-blue w-8' : 'bg-gray-300'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Ir para marca ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsCarousel = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
              <Card className="testimonial-card h-full">
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
                  {testimonial.company && <p className="text-sm text-gray-500">{testimonial.company}</p>}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="text-gray-900" size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Próximo"
      >
        <ChevronRight className="text-gray-900" size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
            }`}
            aria-label={`Ir para testemunho ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    // Show success message
    toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
    reset();
    setFormSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 min-h-[85vh] flex items-center">
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              >
                Especialistas em
                <span className="text-orange-400"> Pintura Automóvel</span>
                <span className="text-white"> e </span>
                <span className="text-blue-400">Construção Civil</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-100 mb-6 leading-relaxed drop-shadow-lg"
              >
                Referência em tintas e vernizes para repintura automóvel e construção civil. 35 anos de experiência, qualidade e assessoria técnica especializada.
              </motion.p>
              
              {/* Contact Info */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8"
              >
                <a 
                  href="tel:+351219673174"
                  className="inline-flex items-center gap-3 text-xl lg:text-2xl font-bold text-white hover:text-blue-400 transition-colors drop-shadow-lg"
                >
                  <Phone size={28} className="text-blue-400" />
                  +351 219 673 174
                </a>
                <a 
                  href="mailto:geral@mariosgomes.com"
                  className="inline-flex items-center gap-3 text-xl lg:text-2xl font-bold text-white hover:text-orange-400 transition-colors drop-shadow-lg"
                >
                  <Mail size={28} className="text-orange-400" />
                  geral@mariosgomes.com
                </a>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <Button 
                  size="lg" 
                  className="btn-gradient-blue text-white text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra a nossa ampla gama de produtos para todas as suas necessidades
            </p>
          </motion.div>

          <Tabs defaultValue="automovel" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 lg:grid-cols-5 mb-12 h-auto">
              <TabsTrigger value="automovel" className="text-base px-6 py-3">Automóvel</TabsTrigger>
              <TabsTrigger value="construcao" className="text-base px-6 py-3">Construção Civil</TabsTrigger>
              <TabsTrigger value="sprays" className="text-base px-6 py-3">Sprays</TabsTrigger>
              <TabsTrigger value="acessoriosAuto" className="text-base px-6 py-3">Acessórios Auto</TabsTrigger>
              <TabsTrigger value="acessoriosConstrucao" className="text-base px-6 py-3">Acessórios CC</TabsTrigger>
            </TabsList>

            <TabsContent value="automovel">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {products.automovel.map((product, index) => {
                  const IconComponent = getProductIcon(product.id);
                  
                  // Special styling for "Mais Opções"
                  if (product.name === "Mais Opções") {
                    return (
                      <motion.div key={product.id} variants={scaleIn} className="md:col-span-2 lg:col-span-4">
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-red-600" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-gray-600">{product.description}</p>
                            </div>
                            <Button 
                              variant="outline" 
                              className="border-red-500 text-red-700 hover:bg-red-500 hover:text-white transition-colors"
                              onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}
                            >
                              Contactar
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div key={product.id} variants={scaleIn}>
                      <Card className="product-card h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="text-accent-red" size={24} />
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            <TabsContent value="construcao">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {products.construcao.map((product) => {
                  const IconComponent = getProductIcon(product.id);
                  return (
                    <motion.div key={product.id} variants={scaleIn}>
                      <Card className="product-card h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="text-accent-blue" size={24} />
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            <TabsContent value="sprays">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.sprays.map((product) => {
                  const IconComponent = getProductIcon(product.id);
                  return (
                    <motion.div key={product.id} variants={scaleIn}>
                      <Card className="product-card h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="text-accent-purple" size={24} />
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            <TabsContent value="acessoriosAuto">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.acessoriosAuto.map((product) => {
                  const IconComponent = getProductIcon(product.id);
                  
                  // Special styling for "Mais Opções"
                  if (product.name === "Mais Opções") {
                    return (
                      <motion.div key={product.id} variants={scaleIn} className="md:col-span-2 lg:col-span-3">
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-yellow-600" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-gray-600">{product.description}</p>
                            </div>
                            <Button 
                              variant="outline" 
                              className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white transition-colors"
                              onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}
                            >
                              Contactar
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div key={product.id} variants={scaleIn}>
                      <Card className="product-card h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="text-accent-yellow" size={24} />
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            <TabsContent value="acessoriosConstrucao">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.acessoriosConstrucao.map((product) => {
                  const IconComponent = getProductIcon(product.id);
                  
                  // Special styling for "Mais Opções"
                  if (product.name === "Mais Opções") {
                    return (
                      <motion.div key={product.id} variants={scaleIn} className="md:col-span-2 lg:col-span-3">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-green-600" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                              <p className="text-gray-600">{product.description}</p>
                            </div>
                            <Button 
                              variant="outline" 
                              className="border-green-500 text-green-700 hover:bg-green-500 hover:text-white transition-colors"
                              onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}
                            >
                              Contactar
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div key={product.id} variants={scaleIn}>
                      <Card className="product-card h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                            <IconComponent className="text-green-600" size={24} />
                          </div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-orange-50 py-8 px-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Entregas Rápidas em Toda a Região</h3>
            <p className="text-gray-600 mb-4">Receba os seus produtos de forma rápida e segura</p>
            <Button className="btn-gradient-orange text-white" onClick={() => document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' })}>
              Saber Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                    <PaintBucket className="text-accent-blue" size={28} />
                  </div>
                  <CardTitle className="text-xl">Vasta Variedade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Produtos de repintura automóvel e construção civil das melhores marcas do mercado.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                    <Truck className="text-accent-orange" size={28} />
                  </div>
                  <CardTitle className="text-xl">Entregas Rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Serviço de entrega rápido e eficiente em toda a região de Lisboa e arredores.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                    <Users className="text-accent-purple" size={28} />
                  </div>
                  <CardTitle className="text-xl">Assessoria Técnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Equipa especializada pronta a aconselhar na escolha dos melhores produtos.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marcas Representadas</h2>
            <p className="text-xl text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <BrandsCarousel brands={brands} />
          </motion.div>
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

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem os Nossos Clientes</h2>
            <p className="text-xl text-gray-600">A confiança dos nossos clientes é a nossa maior conquista</p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
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
      <section id="sobre" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">A Nossa História</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{aboutInfo.history}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">Missão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{aboutInfo.mission}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" 
                  alt="MSGG - Equipa e Instalações" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">35 Anos de Experiência</h3>
                  <p className="text-gray-200">Compromisso com a excelência e qualidade</p>
                </div>
              </div>
            </motion.div>
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
                      <a href="tel:+351219673174" className="text-gray-900 hover:text-blue-600 transition-colors">
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Chamada para rede fixa nacional</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:geral@mariosgomes.com" className="text-gray-900 hover:text-orange-600 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent-purple" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Morada</h4>
                      <a 
                        href="https://www.google.com/maps/place/Mario+Sim%C3%B5es+Gomes+%26+Gomes/@38.8473229,-9.3446913,286m/data=!3m1!1e3!4m6!3m5!1s0xd1ed0c15c971977:0xb0211568ab965f15!8m2!3d38.84657!4d-9.3454409!16s%2Fg%2F11bbrt7t4l?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-purple-600 transition-colors"
                      >
                        {contactInfo.address}
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-green-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-3">Horário de Funcionamento</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">De segunda a sexta</span>
                            <span className="font-medium text-gray-900">9:00h às 13:00h - 14:00h às 18:00h</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Sábado</span>
                            <span className="font-medium text-gray-900">9:00h às 13:00h</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Domingo</span>
                            <span className="font-medium text-red-600">Encerrado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.5128943769598!2d-9.346691323713706!3d38.84732293795594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed0c15c971977%3A0xb0211568ab965f15!2sMario%20Sim%C3%B5es%20Gomes%20%26%20Gomes!5e0!3m2!1spt-PT!2spt!4v1699000000000!5m2!1spt-PT!2spt"
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