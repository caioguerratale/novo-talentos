import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg 
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Dados dos profissionais terceirizados
const profissionais = [
    { nome: 'Recepcionista', icon: '👋', cor: 'from-rose-500 to-pink-600' },
    { nome: 'Copeira', icon: '☕', cor: 'from-amber-500 to-orange-600' },
    { nome: 'Logística', icon: '📦', cor: 'from-blue-500 to-indigo-600' },
    { nome: 'Portaria', icon: '🚪', cor: 'from-slate-500 to-gray-600' },
    { nome: 'Manutenção e Zeladoria', icon: '🔧', cor: 'from-emerald-500 to-teal-600' },
    { nome: 'Limpeza e Conservação', icon: '✨', cor: 'from-cyan-500 to-blue-600' },
    { nome: 'Construção', icon: '🏗️', cor: 'from-yellow-500 to-amber-600' },
    { nome: 'Controle de Acesso', icon: '🔐', cor: 'from-purple-500 to-violet-600' },
    { nome: 'Motoristas', icon: '🚗', cor: 'from-red-500 to-rose-600' },
    { nome: 'Profissionais de TI', icon: '💻', cor: 'from-indigo-500 to-purple-600' },
    { nome: 'Jardinagem', icon: '🌿', cor: 'from-green-500 to-emerald-600' },
    { nome: 'Administrativos', icon: '📋', cor: 'from-sky-500 to-blue-600' },
];

// Benefícios
const beneficios = [
    { titulo: 'Recrutamento e Seleção', desc: 'Dos melhores profissionais para a sua necessidade.' },
    { titulo: 'Banco de Dados', desc: 'Com profissionais de diversas funções prontos para atuar.' },
    { titulo: 'Cobertura Completa', desc: 'De afastamentos, faltas, férias e licenças.' },
    { titulo: 'EPIs e Uniformes', desc: 'Equipamentos de proteção e uniformes incluídos.' },
    { titulo: 'Rotinas de RH', desc: 'Administração completa referente aos profissionais.' },
    { titulo: 'Supervisão Talentos', desc: 'Aumento de produtividade e qualidade nas funções.' },
    { titulo: 'Capacitação', desc: 'Atualização das competências dos terceirizados.' },
    { titulo: 'Satisfação Garantida', desc: 'Com os profissionais terceirizados.' },
];

// Modalidades de contrato
const modalidades = [
    {
        titulo: 'Terceirização Efetiva por Tempo Indeterminado',
        subtitulo: 'A modalidade mais utilizada no Brasil',
        descricao: 'Trata-se da modalidade de contratação mais amplamente utilizada no Brasil, muitas vezes chamada também de "efetiva", "CLT" ou "celetista".',
        indicacoes: [
            'Atividades com necessidade contínua de mão de obra por mais de seis meses',
            'Contratação de profissionais especializados e retenção de conhecimento',
            'Terceirização dos processos de contratação, administração e desligamento',
            'Diluição de custos de contratação (exames admissionais, uniformes, EPIs, etc.)',
        ],
        cor: 'bg-gradient-to-br from-red-600 to-red-800',
        destaque: true,
    },
    {
        titulo: 'Terceirização Efetiva por Tempo Determinado',
        subtitulo: 'Para projetos com prazo definido',
        descricao: 'Modalidade de trabalho indicada quando há boa previsibilidade do período pelo qual o trabalhador será necessário à empresa.',
        indicacoes: [
            'Atividades com necessidade contínua por até dois anos',
            'Alta previsibilidade de data para finalização',
            'Normalmente usada para projetos com mão de obra especializada',
        ],
        cor: 'bg-gradient-to-br from-slate-700 to-slate-900',
        destaque: false,
    },
    {
        titulo: 'Contrato Temporário',
        subtitulo: 'Para demandas transitórias',
        descricao: 'Modalidade indicada para atender à necessidade transitória de substituição de pessoal regular e permanente ou acréscimo extraordinário de serviços.',
        indicacoes: [
            'Atividades com necessidade de mão de obra por menos de seis meses',
            'Aumento de quadro em demandas especiais',
            'Cobertura de férias e licenças',
            'Menores custos com encargos e provisões',
        ],
        cor: 'bg-gradient-to-br from-amber-600 to-orange-700',
        destaque: false,
        badge: 'A Talentos é habilitada!',
    },
];

// FAQ
const faqItems = [
    {
        pergunta: 'Quais são os diferentes tipos de contrato de trabalho terceirizado?',
        resposta: 'Há diferentes tipos de contrato: Efetivo por Tempo Indeterminado (CLT tradicional), Efetivo por Tempo Determinado (até 2 anos com data definida), Temporário (para demandas transitórias de até 6 meses) e Intermitente (para trabalhos descontínuos). Cada modalidade atende a necessidades específicas e a escolha correta evita custos adicionais e complicações legais.',
    },
    {
        pergunta: 'Qual é o melhor tipo de contrato de terceirização de mão de obra?',
        resposta: 'A decisão deve levar em consideração: motivo da contratação, atividade exercida, prazo da contratação e frequência da necessidade do trabalhador. A decisão por um tipo de contrato errado pode acarretar em custos financeiros e complicações legais. A Talentos Consultoria pode ajudar a identificar a melhor opção para sua empresa.',
    },
    {
        pergunta: 'Quais são as vantagens da terceirização de mão de obra?',
        resposta: 'As principais vantagens incluem: mão de obra qualificada, qualificação e treinamentos, redução do quadro de colaboradores, sem vínculo empregatício direto, substituição fácil e rápida, sem necessidade de administração de pessoal, contratações temporárias sem complicações trabalhistas, e ganho de produtividade nas tarefas terceirizadas.',
    },
    {
        pergunta: 'A Talentos Consultoria atende pequenas empresas?',
        resposta: 'Sim! Oferecemos serviço de terceirização de mão de obra para empresas de todos os portes: pequenas, médias e grandes. Nossa equipe está preparada para entender as necessidades específicas de cada cliente e oferecer soluções personalizadas.',
    },
];

// Vantagens principais
const vantagensPrincipais = [
    'Mão de obra qualificada para as funções terceirizadas',
    'A empresa não tem vínculo empregatício com o profissional',
    'Substituição fácil e rápida de terceirizados',
    'Sem necessidade de administração de pessoal',
    'Possibilidade de contratações temporárias',
    'Ganho de produtividade nas tarefas terceirizadas',
];

// Componente FAQ Accordion
const FAQItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-0">
        <button
            onClick={onClick}
            className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
            <span className="font-semibold text-gray-800 pr-4">{item.pergunta}</span>
            <ChevronDownIcon isOpen={isOpen} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="px-6 text-gray-600 leading-relaxed">{item.resposta}</p>
        </div>
    </div>
);

// Componente principal
const TerceirizacaoPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', empresa: '', funcionarios: '', mensagem: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setSubmitStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            setIsSubmitting(false);
            setFormData({ nome: '', email: '', telefone: '', empresa: '', funcionarios: '', mensagem: '' });
            setTimeout(() => setSubmitStatus(''), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* Background com gradiente e padrão */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    {/* Padrão de pontos */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Solução completa em RH
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Terceirização de<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Mão de Obra
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Terceirize profissionais especializados e conte com a administração completa da <strong className="text-white">Talentos Consultoria</strong>.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a 
                                href="#solicitar-proposta"
                                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-1"
                            >
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8.300</div>
                                <div className="text-white/60 text-sm">Contratações realizadas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+100</div>
                                <div className="text-white/60 text-sm">Clientes atendidos</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* INTRODUÇÃO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Por que terceirizar com a Talentos?
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            <strong className="text-gray-800">Contratar profissionais terceirizados</strong> para as mais diversas áreas pode ser a solução ideal para empresas que precisam concentrar energia em seus <em>core businesses</em>.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            A Talentos Consultoria é parceira ideal para entender as suas necessidades e contratar a mão de obra do jeito que você precisa. Em todas as modalidades, nós cuidaremos da <strong className="text-gray-800">administração dos profissionais</strong>, desde sua seleção, passando pela folha de pagamento, até o seu desligamento.
                        </p>
                        
                        <div className="inline-flex items-center gap-3 bg-amber-50 text-amber-800 px-6 py-4 rounded-xl border border-amber-200">
                            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">O vínculo empregatício e a responsabilidade pelo funcionário terceirizado serão da Talentos Consultoria.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROFISSIONAIS QUE TERCEIRIZAMOS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            NOSSOS SERVIÇOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quais Profissionais Você Deseja Terceirizar?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça os profissionais e os serviços que a Talentos Consultoria terceiriza
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {profissionais.map((prof, index) => (
                            <div 
                                key={prof.nome}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${prof.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative p-6 text-center">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{prof.icon}</div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                                        {prof.nome}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                BENEFÍCIOS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                O que oferecemos à sua empresa
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                O serviço de terceirização de mão de obra da Talentos Consultoria oferece uma solução completa para sua empresa.
                            </p>
                            
                            <div className="space-y-4">
                                {vantagensPrincipais.map((vantagem, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircleIcon />
                                        <span className="text-gray-700">{vantagem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {beneficios.map((beneficio, index) => (
                                <div 
                                    key={beneficio.titulo}
                                    className="bg-gray-50 rounded-2xl p-5 hover:bg-red-50 hover:border-red-200 border-2 border-transparent transition-all duration-300"
                                >
                                    <h3 className="font-bold text-gray-800 mb-2 text-sm">{beneficio.titulo}</h3>
                                    <p className="text-gray-600 text-sm">{beneficio.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MODALIDADES DE CONTRATO */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            TIPOS DE CONTRATO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Modalidades de Contrato de Terceirização
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Oferecemos diferentes modalidades para atender às necessidades específicas da sua empresa
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {modalidades.map((modalidade, index) => (
                            <div 
                                key={modalidade.titulo}
                                className={`relative rounded-3xl overflow-hidden ${modalidade.destaque ? 'md:-mt-4 md:mb-4' : ''}`}
                            >
                                {modalidade.badge && (
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        {modalidade.badge}
                                    </div>
                                )}
                                <div className={`${modalidade.cor} p-8 h-full`}>
                                    <h3 className="text-xl font-bold text-white mb-2">{modalidade.titulo}</h3>
                                    <p className="text-white/70 text-sm mb-4">{modalidade.subtitulo}</p>
                                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{modalidade.descricao}</p>
                                    
                                    <div className="space-y-3">
                                        <p className="text-white/90 font-semibold text-sm">Principais indicações:</p>
                                        {modalidade.indicacoes.map((indicacao, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-white/80 text-sm">{indicacao}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Perguntas Frequentes
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tire suas dúvidas sobre terceirização de mão de obra
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {faqItems.map((item, index) => (
                                <FAQItem 
                                    key={index}
                                    item={item}
                                    isOpen={openFaq === index}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULÁRIO DE CONTATO */}
            <section id="solicitar-proposta" className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden">
                {/* Background decorativo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Solicite uma Proposta de Terceirização
                            </h2>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed">
                                Diga-nos qual é a sua necessidade de mão de obra e deixe que <strong className="text-white">a gente seleciona, contrata e administra</strong> os recursos terceirizados.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-white/90">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Atendemos empresas de todos os portes</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Resposta em até 24 horas úteis</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Proposta personalizada para sua necessidade</span>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-white/80 text-sm mb-2">Se preferir, ligue para:</p>
                                <a href="tel:+552131769500" className="text-2xl font-bold text-white hover:text-amber-300 transition-colors">
                                    (21) 3176-9500
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.nome}
                                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Celular com DDD *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.telefone}
                                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                                        <input
                                            type="text"
                                            value={formData.empresa}
                                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none"
                                            placeholder="Nome da empresa"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nº de Funcionários na Empresa</label>
                                    <select
                                        value={formData.funcionarios}
                                        onChange={(e) => setFormData({ ...formData, funcionarios: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none bg-white"
                                    >
                                        <option value="">Selecione</option>
                                        <option value="1-4">1 a 4</option>
                                        <option value="5-10">5 a 10</option>
                                        <option value="11-20">11 a 20</option>
                                        <option value="21-50">21 a 50</option>
                                        <option value="51-200">51 a 200</option>
                                        <option value="201-500">201 a 500</option>
                                        <option value="500+">Mais de 500</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.mensagem}
                                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 outline-none resize-none"
                                        placeholder="Descreva sua necessidade de mão de obra..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                                </button>

                                {submitStatus && (
                                    <div className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl text-center font-medium">
                                        {submitStatus}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Conheça todos os nossos serviços de RH
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Além da terceirização de mão de obra, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
                    </p>
                    <Link 
                        to="/servicos"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                        Ver Todos os Serviços
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TerceirizacaoPage;

