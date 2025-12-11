import React, { useEffect, useState } from 'react';
// Fix: Aliased HashRouter to Router to prevent a potential name collision.
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { services, aboutUsText, contactInfo, whatsappLink, clients, blogArticles, testimonials } from './constants';
import { Service } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border-t-4 border-orange-500 h-full">
        <div className="p-6 flex flex-col flex-grow items-center text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{service.shortDescription}</p>
            <Link to={`/servicos/${service.slug}`} className="mt-4 text-red-600 hover:text-red-800 font-semibold self-center text-sm">
                Saiba mais &rarr;
            </Link>
        </div>
    </div>
);

const BlogArticleCard: React.FC<{ article: typeof blogArticles[0] }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="overflow-hidden">
             <img src={article.imageUrl} alt={article.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{article.title}</h3>
            <p className="text-gray-600 flex-grow mb-4 text-sm leading-relaxed">{article.excerpt}</p>
            <a href={article.url} className="text-red-600 hover:text-red-800 font-semibold self-start mt-auto group-hover:text-orange-500 transition-colors duration-300">
                Leia mais <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
        </div>
    </div>
);


// Hero Image Card Component
const HeroImageCard: React.FC<{ imageUrl: string; className?: string }> = ({ imageUrl, className = '' }) => (
    <div className={`rounded-3xl overflow-hidden bg-gray-200 shadow-lg ${className}`}>
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
);

// Client Card Component for grid display
const ClientCard: React.FC<{ client: typeof clients[0] }> = ({ client }) => (
    <div className="bg-gray-200 rounded-3xl p-8 flex items-center justify-center aspect-[4/3] hover:bg-gray-300 transition-colors duration-300 hover:shadow-md flex-shrink-0 w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
        <img 
            src={client.logoUrl} 
            alt={client.name} 
            className="max-h-14 max-w-[80%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
    </div>
);

// Clients Carousel Component
const ClientsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(clients.length / 4);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 4000);
        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <div className="overflow-hidden">
            <div 
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* Create pages of 4 clients each */}
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                    const pageClients = clients.slice(pageIndex * 4, pageIndex * 4 + 4);
                    return (
                        <div key={pageIndex} className="flex gap-4 flex-shrink-0 w-full justify-center">
                            {pageClients.map(client => (
                                <div 
                                    key={client.name}
                                    className="flex items-center justify-center h-24 w-[calc(25%-12px)] flex-shrink-0"
                                >
                                    <img 
                                        src={client.logoUrl} 
                                        alt={client.name} 
                                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir para página ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Service Card for Grid (Rounded style matching wireframe)
const ServiceGridCard: React.FC<{ service: Service }> = ({ service }) => (
    <Link 
        to={`/servicos/${service.slug}`}
        className="group bg-white/95 rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center p-6 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
        <div className="mb-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
            {React.cloneElement(service.icon as React.ReactElement, { className: 'w-12 h-12' })}
        </div>
        <h3 className="text-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
            {service.title}
        </h3>
    </Link>
);

// Blog Card for new layout
const BlogGridCard: React.FC<{ article: typeof blogArticles[0] }> = ({ article }) => (
    <a 
        href={article.url}
        className="group bg-gray-100 rounded-3xl overflow-hidden aspect-square flex items-end relative hover:shadow-lg transition-all duration-300"
    >
        <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="relative p-5 w-full">
            <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                {article.title}
            </h3>
        </div>
    </a>
);

// Page Components
const HomePage: React.FC = () => (
    <>
        {/* Hero Section - Background Image */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(https://talentosconsultoria.com.br/wp-content/uploads/2020/01/consultores-talentos-768x322.jpg)` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl">
                    <p className="font-bold text-orange-400 uppercase tracking-wider text-sm mb-4">Consultoria de RH</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
                        Conectamos a estratégia do seu negócio aos resultados, através das pessoas.
                    </h1>
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                        Alinhamos cultura, liderança e gestão para que sua empresa tenha um time de alta performance. Conheça a Talentos Consultoria.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            to="/servicos" 
                            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Nossos Serviços
                        </Link>
                        <Link 
                            to="/contato" 
                            className="inline-block bg-white/10 text-white font-bold py-3 px-8 rounded-full border-2 border-white/50 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                        >
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Clientes Section - Carousel with rounded cards */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-gray-800">Alguns Clientes</h3>
                </div>
                <div className="max-w-5xl mx-auto">
                    <ClientsCarousel />
                </div>
            </div>
        </section>

        {/* Services Section - 3 Featured Services */}
        <section className="py-16 bg-gradient-to-r from-red-700 to-red-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-white">Serviços</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {services
                        .filter(service => 
                            ['recrutamento-e-selecao', 'cargos-e-salarios', 'pesquisa-de-clima-organizacional'].includes(service.slug)
                        )
                        .map(service => (
                            <ServiceGridCard key={service.id} service={service} />
                        ))
                    }
                </div>
                <div className="text-center mt-10">
                    <Link 
                        to="/servicos" 
                        className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                    >
                        Venha conhecer nossos serviços
                    </Link>
                </div>
            </div>
        </section>

        {/* Quem Somos Section - Full width with background image */}
        <section className="py-20 relative">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}fundo.jpg)` }}
            >
                <div className="absolute inset-0 bg-white/60"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                        A TALENTOS CONSULTORIA é uma empresa de consultoria de RH no Rio de Janeiro, composta por profissionais com mais de 20 anos de experiência, especializados em Recursos Humanos e com passagens em empresas nacionais e multinacionais. Conectamos a estratégia do seu negócio aos resultados, através das pessoas. Alinhamos cultura, liderança e gestão para que sua empresa tenha um time de alta performance.
                    </p>
                    <Link 
                        to="/sobre" 
                        className="inline-block bg-white text-gray-700 font-semibold py-3 px-8 rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Quem somos
                    </Link>
                </div>
            </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Blog</h2>
                </div>
                <div className="text-center mb-10">
                    <p className="text-gray-600">Últimas Postagens</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {blogArticles.map(article => (
                        <BlogGridCard key={article.title} article={article} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <a 
                        href="#" 
                        className="inline-block text-red-600 font-semibold hover:text-red-700 transition-colors duration-300"
                    >
                        Ver todos os artigos →
                    </a>
                </div>
            </div>
        </section>

        {/* Oportunidades Section - Kept but simplified */}
        <section className="py-16 bg-gradient-to-r from-red-700 to-red-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Oportunidades de Trabalho</h2>
                <p className="max-w-2xl mx-auto mb-8 text-red-100">
                    Confira as vagas abertas, cadastre seu currículo e encontre a oportunidade ideal para sua carreira profissional.
                </p>
                <a 
                    href="https://talentosconsultoria.infojobs.com.br/empregos.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-orange-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                    Ver Vagas
                </a>
            </div>
        </section>
    </>
);

const AboutPage: React.FC = () => (
    <>
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="https://talentosconsultoria.com.br/wp-content/uploads/2020/01/consultores-talentos-768x322.jpg" alt="Equipe da Talentos Consultoria" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{aboutUsText.title}</h1>
                        <div className="prose lg:prose-xl max-w-none">
                            {aboutUsText.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-gray-50 py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">O Que Nossos Clientes Dizem</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">A satisfação dos nossos clientes é o nosso maior ativo e o que nos impulsiona a sermos melhores a cada dia.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 object-cover ring-4 ring-orange-200" />
                            <blockquote className="text-gray-600 italic mb-6 relative">
                                <svg className="w-8 h-8 text-orange-100 absolute top-0 left-0 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.33 8.21C7.58 9.96 6.67 12.15 6.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L15.67 4H9.33v4.21zM22.33 8.21C20.58 9.96 19.67 12.15 19.67 14.67c0 4.14 3.36 7.5 7.5 7.5h.83v-5h-.83c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77L28.67 4H22.33v4.21z" />
                                </svg>
                                <p className="z-10 relative">"{testimonial.quote}"</p>
                            </blockquote>
                            <cite className="not-italic">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800">Nossos Clientes</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Temos a honra de colaborar com empresas de diversos segmentos, construindo parcerias de sucesso.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
                    {clients.map(client => (
                        <div key={client.name} className="flex justify-center">
                            <img src={client.logoUrl} alt={client.name} className="max-h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transform hover:scale-110 transition-all duration-300" />
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                     <Link to="/servicos" className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                        Conheça os nossos serviços
                    </Link>
                </div>
            </div>
        </section>
    </>
);

const ServicesListPage: React.FC = () => (
     <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Nossas Soluções em RH</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore nosso portfólio completo de serviços, desenhados para fortalecer a gestão de pessoas e impulsionar os resultados do seu negócio.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    </div>
);

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Serviço não encontrado</h1>
                <Link to="/servicos" className="text-red-600 hover:underline mt-4 inline-block">Voltar para a lista de serviços</Link>
            </div>
        );
    }

    return (
        <>
            <div className="relative h-64 md:h-80 bg-red-800">
                 <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                 <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">{service.title}</h1>
                 </div>
            </div>
            <div className="bg-white py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto prose lg:prose-lg">
                        {service.longDescription}
                    </div>
                </div>
            </div>
        </>
    );
};

const JobsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<{name: string, email: string, phone: string, cv: File | null}>({ name: '', email: '', phone: '', cv: null });
    const [status, setStatus] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData({ ...formData, cv: file });
            setFileName(file.name);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        // Simulação de envio
        setTimeout(() => {
            console.log('CV Submitted:', formData);
            setStatus('Currículo enviado com sucesso!');
            setFormData({ name: '', email: '', phone: '', cv: null });
            setFileName('');
            setTimeout(() => {
                 setIsModalOpen(false);
                 setStatus('');
            }, 2000);
        }, 1500);
    };
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              setIsModalOpen(false);
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Oportunidades de Carreira</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Confira as vagas abertas e encontre a oportunidade perfeita para o seu desenvolvimento profissional. Você também pode enviar seu currículo para nosso banco de talentos.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="https://talentosconsultoria.infojobs.com.br/empregos.aspx" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 text-lg shadow-md transform hover:scale-105"
                        >
                            Ver Vagas na InfoJobs
                        </a>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 text-lg shadow-md transform hover:scale-105"
                        >
                            Enviar Currículo
                        </button>
                    </div>
                 </div>
            </div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
                    onClick={() => setIsModalOpen(false)}
                    aria-modal="true"
                    role="dialog"
                >
                    <div 
                        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-2xl relative modal-scale-in"
                        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Fechar modal"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Envie seu Currículo</h2>
                        
                        {status === 'Currículo enviado com sucesso!' ? (
                            <div className="text-center py-8">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <p className="text-lg font-medium text-gray-700">{status}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Nome Completo</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">Telefone</label>
                                        <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">E-mail</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="cv-upload-button" className="block text-sm font-medium text-gray-700 mb-1 text-left">Anexar currículo (PDF, DOC, DOCX)</label>
                                        <label id="cv-upload-button" className="relative cursor-pointer bg-white rounded-md border border-gray-300 font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 flex items-center justify-center px-3 py-2">
                                            <span>{fileName || 'Selecionar arquivo'}</span>
                                            <input id="cv" name="cv" type="file" className="sr-only" required accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                        </label>
                                        {fileName && <p className="text-xs text-gray-500 mt-1 text-left">Arquivo: {fileName}</p>}
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" disabled={status === 'Enviando...'} className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        {status === 'Enviando...' ? 'Enviando...' : 'Confirmar Envio'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        // Simulação de envio
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setStatus('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Fale Conosco</h1>
                    <p className="mt-4 text-lg text-gray-600">Tem alguma dúvida ou precisa de uma solução de RH? Entre em contato conosco.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                                Enviar Mensagem
                            </button>
                        </div>
                        {status && <p className="text-center text-gray-600">{status}</p>}
                    </form>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800">Informações de Contato</h3>
                        <div className="space-y-4 text-gray-600">
                            <p className="flex items-start"><strong className="w-24">Endereço:</strong><span className="whitespace-pre-line">{contactInfo.address}</span></p>
                            <p className="flex items-start"><strong className="w-24">Telefone:</strong><a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="text-red-600 hover:underline">{contactInfo.phone}</a></p>
                            <p className="flex items-start"><strong className="w-24">E-mail:</strong><a href={`mailto:${contactInfo.email}`} className="text-red-600 hover:underline">{contactInfo.email}</a></p>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.188443729906!2d-43.18122942375836!3d-22.90642923788574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f3531fe9b%3A0x949c882e334a17de!2sAv.%20Rio%20Branco%2C%20133%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020040-006!5e0!3m2!1spt-BR!2sbr!4v1687448378619!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PageContainer = () => {
    const location = useLocation();
    return (
        <main className="flex-grow">
            <div key={location.pathname} className="page-fade-in">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<AboutPage />} />
                    <Route path="/servicos" element={<ServicesListPage />} />
                    <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
                    <Route path="/vagas" element={<JobsPage />} />
                    <Route path="/contato" element={<ContactPage />} />
                </Routes>
            </div>
        </main>
    );
};

const WhatsappButton: React.FC = () => (
    <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm.787-6.811l1.769.953c1.629.873 3.511 1.353 5.464 1.354 5.419 0 9.81-4.391 9.811-9.81 0-2.656-1.04-5.15-2.88-6.99-1.841-1.841-4.336-2.88-6.99-2.881-5.419 0-9.81 4.392-9.81 9.81.001 2.01.589 3.94 1.66 5.66l.995 1.638-1.037 3.78z"/>
        </svg>
    </a>
);


const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <PageContainer />
                <Footer />
                <WhatsappButton />
            </div>
        </Router>
    );
};

export default App;