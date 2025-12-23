import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

// Etapas do diagnóstico
const etapasDiagnostico = [
    { titulo: 'Levantamento dos objetivos organizacionais', icon: '🎯' },
    { titulo: 'Levantamento dos objetivos do RH', icon: '📋' },
    { titulo: 'Engajamento dos gestores', icon: '👥' },
    { titulo: 'Mapeamento de processos e controles', icon: '🗺️' },
    { titulo: 'Análise de métricas e indicadores', icon: '📊' },
    { titulo: 'Planos de ação', icon: '✅' },
];

// 7 Módulos da Estruturação
const modulos = [
    {
        numero: 1,
        titulo: 'Recrutamento e Seleção',
        icon: '🔍',
        itens: [
            'Definição de perfil socioeconômico para cada cargo/função',
            'Formação do "Banco de Talentos"',
            'Construção de material para "Venda da Vaga"',
            'Identificação dos melhores meios para divulgação das vagas',
            'Fluxo de Seleção',
            'Exames médicos personalizados para cada vaga',
            'Gestão sobre os resultados estatísticos',
        ],
    },
    {
        numero: 2,
        titulo: 'Integração e Treinamento',
        icon: '🎓',
        itens: [
            'Matriz de Habilidades',
            'Processo de Integração',
            'Cronograma de treinamento',
            'Acompanhamento do novo funcionário',
            'Gestão sobre os resultados estatísticos',
        ],
    },
    {
        numero: 3,
        titulo: 'Acompanhamento e Retenção',
        icon: '📈',
        itens: [
            'Monitoramento do desempenho',
            'Plano de desenvolvimento',
            'Pesquisa de Clima (engagement)',
            'Gestão de absenteísmo',
            'Avaliação de desempenho',
            'Mapeamento de oportunidades',
            'Fluxo de promoção',
            'Gestão sobre os resultados estatísticos',
        ],
    },
    {
        numero: 4,
        titulo: 'Remuneração e Benefícios',
        icon: '💰',
        itens: [
            'Monitoramento da pontualidade e da correção do pagamento',
            'Critérios e gerenciamento dos benefícios',
            'Plano de cargos e salários',
            'Remuneração variável',
            'Análise do mercado de trabalho compatível',
            'Modelo de contracheque',
            'Rotina para saneamento de dúvidas',
            'Gestão sobre os resultados estatísticos',
        ],
    },
    {
        numero: 5,
        titulo: 'Motivacional',
        icon: '🌟',
        itens: [
            'Programa de incentivos',
            'Aniversariantes do mês',
            'Destaques do mês',
            'Reconhecimento por tempo de casa',
            'Eventos de valorização de responsabilidade sócio ambiental',
            'Ações de valorização e integração da equipe e liderança',
            'Gestão sobre resultados estatísticos',
        ],
    },
    {
        numero: 6,
        titulo: 'Controle de Jornada',
        icon: '⏰',
        itens: [
            'Controle de ponto',
            'Correção das folhas de ponto',
            'Gestão de horas extras',
            'Controle do banco de horas',
            'Dimensionamento de equipe',
            'Gestão sobre os resultados estatísticos',
        ],
    },
    {
        numero: 7,
        titulo: 'Desligamento',
        icon: '📝',
        itens: [
            'Procedimento por modalidade',
            'Treinamento da cadeia envolvida',
            'Fluxo de desligamento',
            'Entrevista de desligamento',
            'Ações corretivas e tratamento de anomalias',
            'Gestão sobre os resultados estatísticos',
        ],
    },
];

// Vantagens
const vantagens = [
    { titulo: 'Auditoria Externa', desc: 'Imparcialidade e transparência na identificação de falhas e necessidades de ajustes no RH.' },
    { titulo: 'Novas Ferramentas', desc: 'Implementação de controles e práticas seguindo as tendências em gestão de pessoas.' },
    { titulo: 'Consultores Experientes', desc: 'Mais de 20 anos de mercado, atualizados em treinamentos constantes.' },
    { titulo: 'Estratégias Inovadoras', desc: 'Acesso a estratégias de atração e retenção de talentos.' },
    { titulo: 'Orientação Trabalhista', desc: 'Orientações personalizadas sobre adequações à legislação.' },
    { titulo: '+10 Anos de Experiência', desc: 'Solucionamos desafios de RH em empresas de todos os portes.' },
];

// Como pode ajudar
const beneficios = [
    { titulo: 'Aumentar motivação', desc: 'Motivação de equipes', icon: '💪' },
    { titulo: 'Employer Branding', desc: 'Melhorar percepção do mercado', icon: '🏆' },
    { titulo: 'Produtividade', desc: 'Aumentar produtividade dos colaboradores', icon: '📈' },
    { titulo: 'Clima Organizacional', desc: 'Melhorar o clima na empresa', icon: '☀️' },
    { titulo: 'Decisões Baseadas em Dados', desc: 'Cultura de indicadores de RH', icon: '📊' },
    { titulo: 'Atrair Talentos', desc: 'Selecionar os melhores profissionais', icon: '🎯' },
    { titulo: 'Reduzir Turnover', desc: 'Reduzir passivos trabalhistas', icon: '📉' },
    { titulo: 'Reduzir Faltas', desc: 'Diminuir absenteísmo', icon: '✅' },
    { titulo: 'Remuneração', desc: 'Definir salários e modelos', icon: '💰' },
    { titulo: 'Cargos e Carreiras', desc: 'Definir competências e planos', icon: '🛤️' },
    { titulo: 'Liderança', desc: 'Desenvolver líderes e equipes', icon: '👔' },
    { titulo: 'E-Social', desc: 'Resolver problemas de compliance', icon: '📋' },
];

// Componente Módulo Accordion
const ModuloAccordion: React.FC<{ modulo: typeof modulos[0]; isOpen: boolean; onClick: () => void }> = ({ modulo, isOpen, onClick }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
        <button
            onClick={onClick}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                    {modulo.icon}
                </div>
                <div>
                    <span className="text-red-600 text-sm font-semibold">Módulo {modulo.numero}</span>
                    <h3 className="font-bold text-gray-800">{modulo.titulo}</h3>
                </div>
            </div>
            <ChevronDownIcon isOpen={isOpen} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
            <div className="px-6">
                <ul className="space-y-2">
                    {modulo.itens.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

// Componente principal
const EstruturacaoRHPage: React.FC = () => {
    const navigate = useNavigate();
    const [openModulo, setOpenModulo] = useState<number | null>(0);

    const scrollToServices = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('servicos');
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                {/* Background com gradiente */}
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
                            Consultoria estratégica de RH
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Estruturação<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                do RH
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Consultoria para desenvolver e aumentar a <strong className="text-white">eficiência do RH</strong> e alinhá-lo às estratégias da gestão corporativa.
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
                                <div className="text-3xl md:text-4xl font-black text-white">+10</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">7</div>
                                <div className="text-white/60 text-sm">Módulos completos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Personalizado</div>
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
                            Planejamento Estratégico de RH
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Uma das vantagens de se contratar uma <strong className="text-gray-800">consultoria em Recursos Humanos</strong> é poder contar com uma visão profissional e imparcial sobre o RH da sua empresa.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            A <strong className="text-red-600">Estruturação do RH</strong> é o serviço de consultoria da Talentos que analisa os processos e controles do seu RH, avaliando <strong className="text-gray-800">métricas de desempenho</strong> da equipe, apontando problemas e indicando soluções para <strong className="text-gray-800">melhorar a produtividade do setor</strong>.
                        </p>
                        
                        {/* Etapas do Diagnóstico */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                            {etapasDiagnostico.map((etapa, index) => (
                                <div 
                                    key={etapa.titulo}
                                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-red-50 transition-colors duration-300"
                                >
                                    <div className="text-2xl mb-2">{etapa.icon}</div>
                                    <p className="text-sm font-medium text-gray-700">{etapa.titulo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MÓDULOS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            7 MÓDULOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Estruturação e Otimização da Gestão de Pessoas
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Conheça os módulos que irão garantir a aplicação das melhores práticas em todos os fluxos de trabalho do seu RH
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {modulos.map((modulo, index) => (
                            <ModuloAccordion
                                key={modulo.numero}
                                modulo={modulo}
                                isOpen={openModulo === index}
                                onClick={() => setOpenModulo(openModulo === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* POR QUE ESCOLHER */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            DIFERENCIAIS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Por Que Escolher a Talentos Consultoria?
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Escolha a Talentos para reestruturar e otimizar o seu RH
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {vantagens.map((vantagem, index) => (
                            <div 
                                key={vantagem.titulo}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-white mb-2">{vantagem.titulo}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{vantagem.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl">
                            <span className="font-medium">Estruturação do RH é um serviço de consultoria completa que tem como objetivo aumentar a eficiência do seu RH e alinhá-lo às estratégias, missão e visão da empresa.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMO PODE AJUDAR */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            BENEFÍCIOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Como a Estruturação do RH Pode Ajudar?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Melhore a gestão dos recursos humanos da sua empresa
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {beneficios.map((beneficio, index) => (
                            <div 
                                key={beneficio.titulo}
                                className="group bg-gray-50 rounded-2xl p-5 hover:bg-red-50 hover:border-red-200 border-2 border-transparent transition-all duration-300 text-center"
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{beneficio.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-1 text-sm">{beneficio.titulo}</h3>
                                <p className="text-gray-600 text-xs">{beneficio.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ESTATÍSTICAS */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Por Que Escolher a Talentos Consultoria?
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">+20</div>
                                <p className="text-white/80">Anos de mercado</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">+8.300</div>
                                <p className="text-white/80">Contratações efetivadas</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">99,78%</div>
                                <p className="text-white/80">De satisfação</p>
                            </div>
                        </div>
                        <p className="text-center text-white/60 text-sm mt-6">*Dados apurados em janeiro de 2024</p>
                    </div>
                </div>
            </section>

            {/* CTA - FALE COM UM CONSULTOR */}
            <section id="solicitar-proposta" className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Saiba Mais Sobre a Estruturação do RH
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Quer saber como este serviço poderia ser implementado na sua empresa? Entre em contato com nossos consultores especializados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/contato"
                                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a href="tel:+552131769500" className="text-white/80 hover:text-white transition-colors">
                                ou ligue: <span className="font-bold text-white">(21) 3176-9500</span>
                            </a>
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
                        Além da estruturação do RH, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
                    </p>
                    <button 
                        onClick={scrollToServices}
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300"
                    >
                        Ver Todos os Serviços
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default EstruturacaoRHPage;

