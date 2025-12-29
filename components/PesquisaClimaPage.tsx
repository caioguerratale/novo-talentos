import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultorButton from './ConsultorButton';

const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Etapas do processo
const etapasProcesso = [
    { titulo: 'Planejamento', desc: 'Definição de objetivos e customização do questionário', icon: '📋' },
    { titulo: 'Aplicação', desc: 'Aplicação da pesquisa online ou física com sigilo', icon: '📝' },
    { titulo: 'Tabulação', desc: 'Análise estatística dos dados coletados', icon: '📊' },
    { titulo: 'Resultados', desc: 'Apresentação dos resultados e planos de ação', icon: '📈' },
];

// Dimensões avaliadas
const dimensoesAvaliadas = [
    { titulo: 'Liderança', icon: '👔' },
    { titulo: 'Comunicação', icon: '💬' },
    { titulo: 'Remuneração', icon: '💰' },
    { titulo: 'Desenvolvimento', icon: '📚' },
    { titulo: 'Ambiente de Trabalho', icon: '🏢' },
    { titulo: 'Trabalho em Equipe', icon: '🤝' },
    { titulo: 'Reconhecimento', icon: '🏆' },
    { titulo: 'Qualidade de Vida', icon: '⚖️' },
];

// Benefícios
const beneficios = [
    'Identificar o nível de satisfação dos colaboradores',
    'Mapear pontos fortes e oportunidades de melhoria',
    'Tomar decisões baseadas em dados',
    'Aumentar o engajamento das equipes',
    'Reduzir turnover e absenteísmo',
    'Melhorar a produtividade geral',
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é pesquisa de clima organizacional?',
        resposta: 'A Pesquisa de Clima Organizacional é uma ferramenta estratégica para medir o nível de satisfação e engajamento dos colaboradores. Através de um diagnóstico preciso, identificamos pontos fortes e oportunidades de melhoria na gestão de pessoas e no ambiente de trabalho.',
    },
    {
        pergunta: 'Como funciona o processo da pesquisa?',
        resposta: 'O processo inclui: customização do questionário conforme a realidade da empresa; aplicação da pesquisa (online ou física) com garantia de sigilo; tabulação e análise estatística dos dados; e apresentação dos resultados com recomendações de planos de ação.',
    },
    {
        pergunta: 'A pesquisa é sigilosa?',
        resposta: 'Sim! Garantimos total sigilo nas respostas dos colaboradores. Isso é fundamental para obter respostas honestas e um diagnóstico preciso da realidade organizacional.',
    },
];

const FAQItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-0">
        <button onClick={onClick} className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200">
            <span className="font-semibold text-gray-800 pr-4">{item.pergunta}</span>
            <ChevronDownIcon isOpen={isOpen} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="px-6 text-gray-600 leading-relaxed">{item.resposta}</p>
        </div>
    </div>
);

const PesquisaClimaPage: React.FC = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            {/* HERO */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Diagnóstico organizacional
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Pesquisa de Clima<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Organizacional
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Meça o nível de <strong className="text-white">satisfação e engajamento</strong> dos seus colaboradores para tomar decisões estratégicas.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <ConsultorButton variant="light" />
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-white/60 text-sm">Sigilo garantido</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8</div>
                                <div className="text-white/60 text-sm">Dimensões avaliadas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            {/* INTRODUÇÃO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que fazer Pesquisa de Clima?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            O <strong className="text-gray-800">engajamento e o clima organizacional</strong> são alguns dos fatores que mais impactam na satisfação e produtividade dos colaboradores de uma empresa.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            A maneira mais efetiva de se medir esses indicadores é através da <strong className="text-red-600">pesquisa de clima organizacional</strong>. Por meio dessa pesquisa, é possível coletar dados concretos sobre a satisfação e o engajamento dos colaboradores e identificar os principais problemas de gestão.
                        </p>
                    </div>
                </div>
            </section>

            {/* ETAPAS DO PROCESSO */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">PROCESSO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona?</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {etapasProcesso.map((etapa, index) => (
                            <div key={etapa.titulo} className="relative">
                                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">{etapa.icon}</div>
                                    <div className="text-red-600 font-bold text-sm mb-2">Etapa {index + 1}</div>
                                    <h3 className="font-bold text-gray-800 mb-2">{etapa.titulo}</h3>
                                    <p className="text-gray-600 text-sm">{etapa.desc}</p>
                                </div>
                                {index < etapasProcesso.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <svg className="w-6 h-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIMENSÕES AVALIADAS */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">DIMENSÕES</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que Avaliamos?</h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">Analisamos múltiplas dimensões do ambiente de trabalho</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {dimensoesAvaliadas.map((dim) => (
                            <div key={dim.titulo} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                                <div className="text-3xl mb-2">{dim.icon}</div>
                                <h3 className="font-semibold text-white text-sm">{dim.titulo}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">BENEFÍCIOS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vantagens da Pesquisa de Clima</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {beneficios.map((beneficio, index) => (
                                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                                    <CheckCircleIcon />
                                    <span className="text-gray-700">{beneficio}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">FAQ</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {faqItems.map((item, index) => (
                                <FAQItem key={index} item={item} isOpen={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} />
                            ))}
                        </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Faça uma Pesquisa de Clima</h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Descubra o que seus colaboradores realmente pensam e tome decisões estratégicas baseadas em dados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <ConsultorButton variant="cta" />
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Conheça todos os nossos serviços de RH</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Oferecemos um portfólio completo de soluções em Recursos Humanos.</p>
                    <button onClick={scrollToServices} className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all duration-300">
                        Ver Todos os Serviços
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PesquisaClimaPage;

