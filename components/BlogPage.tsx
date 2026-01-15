import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hook for scroll animations
const useScrollAnimation = () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);
    return { setRef, isVisible };
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
    const { setRef, isVisible } = useScrollAnimation();
    return (<div ref={setRef} className={`scroll-animate ${isVisible ? 'animate-in' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>);
};

// Lista de artigos do blog
const blogArticles = [
    {
        id: 1,
        titulo: 'Pesquisa de clima organizacional: como transformar feedbacks em oportunidades',
        resumo: 'Manter a equipe engajada é um dos principais desafios no crescimento de empresas. Afinal, a satisfação do colaborador impacta diretamente na sua performance. Com profissionais desmotivados, há queda na produtividade, na retenção de talentos e, consequentemente, nos resultados do seu negócio.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        url: '/blog/pesquisa-de-clima-organizacional',
        categoria: 'Clima Organizacional',
        cor: 'red'
    },
    {
        id: 2,
        titulo: 'Gestão de talentos inteligente: como desenvolver times de alta performance',
        resumo: 'Coordenar pessoas com estratégia é uma das formas mais inteligentes de impulsionar resultados. Com a gestão de talentos, sua empresa trabalha o desenvolvimento humano, extraindo o potencial máximo de cada colaborador.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        url: '/blog/gestao-de-talentos',
        categoria: 'Gestão de Pessoas',
        cor: 'blue'
    },
    {
        id: 3,
        titulo: 'Terceirização de mão de obra: agilidade operacional para sua empresa',
        resumo: 'A terceirização de mão de obra é uma solução estratégica, ideal para empresas que buscam otimizar seus processos, focar no core business e melhorar a produtividade.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
        url: '/blog/terceirizacao-de-mao-de-obra',
        categoria: 'Terceirização',
        cor: 'orange'
    },
    {
        id: 4,
        titulo: 'Recrutamento e seleção estratégico: como atrair os melhores talentos',
        resumo: 'Atrair os melhores talentos é mais do que divulgar vagas e selecionar currículos. As contratações assertivas iniciam antes mesmo das entrevistas, por meio de processos bem estruturados de recrutamento e seleção.',
        imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/recrutamento-e-selecao-estrategico-como-atrair-os-melhores-talentos/',
        categoria: 'Recrutamento',
        cor: 'emerald',
        external: true
    },
    {
        id: 5,
        titulo: 'O papel da liderança assertiva no ambiente de trabalho',
        resumo: 'Em um cenário corporativo, cada vez mais dinâmico e competitivo, a liderança assertiva é aquela que se destaca pelo olhar curioso às tendências, pela cooperação entre equipe e humanização nos processos.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/o-papel-da-lideranca-assertiva-no-ambiente-de-trabalho/',
        categoria: 'Liderança',
        cor: 'purple',
        external: true
    },
    {
        id: 6,
        titulo: 'Consultoria de RH: conheça os principais benefícios para sua empresa',
        resumo: 'A busca por profissionais capacitados se torna ainda mais desafiadora com as mudanças no mercado de trabalho. Com aumento de exigência e expectativas no recrutamento, a gestão de recursos humanos passa a ser indispensável.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/consultoria-de-rh-conheca-os-principais-beneficios-para-sua-empresa/',
        categoria: 'Consultoria RH',
        cor: 'indigo',
        external: true
    },
    {
        id: 7,
        titulo: 'As habilidades profissionais em alta para 2025',
        resumo: 'O mercado de trabalho irá se transformar nos próximos cinco anos, sendo a inteligência artificial uma das grandes responsáveis por essa evolução. Profissionais precisarão se adaptar às novas demandas.',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/as-habilidades-profissionais-em-alta-para-2025/',
        categoria: 'Carreira',
        cor: 'cyan',
        external: true
    },
    {
        id: 8,
        titulo: 'Saúde mental no trabalho: como a consultoria de RH auxilia na prevenção de afastamentos',
        resumo: 'A saúde mental no trabalho tornou-se um dos principais desafios para as organizações. Em 2024, houve o crescimento de 68% nos casos de afastamentos por transtornos psicológicos.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/saude-mental-no-trabalho-como-a-consultoria-de-rh-auxilia-na-prevencao-de-afastamentos/',
        categoria: 'Saúde Mental',
        cor: 'teal',
        external: true
    },
    {
        id: 9,
        titulo: 'Terceirização de Mão de Obra: Dicas para Contratar com Segurança',
        resumo: 'Conheça os principais cuidados para contratar empresas de terceirização com segurança e proteger sua empresa de riscos trabalhistas e financeiros.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/terceirizacao-de-mao-de-obra-dicas-para-contratar-com-seguranca/',
        categoria: 'Terceirização',
        cor: 'amber',
        external: true
    },
    {
        id: 10,
        titulo: 'Como Reter Talentos nas Empresas',
        resumo: 'Conheça estratégias inovadoras para reter talentos. Descubra como construir uma cultura organizacional sólida e evitar a rotatividade na sua empresa.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        url: 'https://talentosconsultoria.com.br/blog/como-reter-talentos-nas-empresas/',
        categoria: 'Retenção',
        cor: 'rose',
        external: true
    },
];

const corMap: { [key: string]: { bg: string; text: string; hover: string } } = {
    red: { bg: 'bg-red-100', text: 'text-red-700', hover: 'group-hover:bg-red-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', hover: 'group-hover:bg-blue-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', hover: 'group-hover:bg-orange-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', hover: 'group-hover:bg-emerald-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', hover: 'group-hover:bg-purple-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', hover: 'group-hover:bg-indigo-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700', hover: 'group-hover:bg-cyan-600' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-700', hover: 'group-hover:bg-teal-600' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-700', hover: 'group-hover:bg-amber-600' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-700', hover: 'group-hover:bg-rose-600' },
};

const BlogCard: React.FC<{ article: typeof blogArticles[0]; index: number }> = ({ article, index }) => {
    const cores = corMap[article.cor] || corMap.red;
    
    const CardContent = (
        <>
            <div className="relative overflow-hidden">
                <img 
                    src={article.imageUrl} 
                    alt={article.titulo} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className={`${cores.bg} ${cores.text} text-xs font-semibold px-3 py-1 rounded-full`}>
                        {article.categoria}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {article.titulo}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.resumo}
                </p>
                <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Leia mais
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </>
    );

    if (article.external) {
        return (
            <AnimatedSection delay={0.05 * index}>
                <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block h-full"
                >
                    {CardContent}
                </a>
            </AnimatedSection>
        );
    }

    return (
        <AnimatedSection delay={0.05 * index}>
            <Link 
                to={article.url}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block h-full"
            >
                {CardContent}
            </Link>
        </AnimatedSection>
    );
};

const BlogPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link 
                            to="/" 
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar para Home
                        </Link>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Blog da Talentos
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            Conteúdos sobre gestão de pessoas, RH estratégico, liderança e tendências do mercado de trabalho.
                        </p>
                    </div>
                </div>
            </section>

            {/* Artigos em Destaque */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Artigo Principal */}
                    <AnimatedSection>
                        <Link 
                            to={blogArticles[0].url}
                            className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-12"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={blogArticles[0].imageUrl} 
                                        alt={blogArticles[0].titulo} 
                                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                                            Destaque
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <span className="text-red-600 text-sm font-semibold mb-3">
                                        {blogArticles[0].categoria}
                                    </span>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                                        {blogArticles[0].titulo}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {blogArticles[0].resumo}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                                        Leia o artigo completo
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>

                    {/* Grid de Artigos */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogArticles.slice(1).map((article, index) => (
                            <BlogCard key={article.id} article={article} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Quer receber mais conteúdos como esses?
                            </h2>
                            <p className="text-white/80 mb-8 max-w-xl mx-auto">
                                Entre em contato com a Talentos Consultoria e descubra como podemos ajudar sua empresa a crescer.
                            </p>
                            <a 
                                href="https://wa.me/5521967155476"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            >
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;



