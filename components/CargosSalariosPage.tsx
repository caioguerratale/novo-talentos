import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
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

// O que você terá acesso
const informacoesAcesso = [
    { titulo: 'Mapeamento de Cargos e Salários', desc: 'Mapeamento completo dos cargos e salários da sua empresa', icon: '📋' },
    { titulo: 'Diferenciais como Empregadora', desc: 'Mapeamento dos diferenciais da sua empresa como empregadora', icon: '⭐' },
    { titulo: 'Comparação de Mercado', desc: 'Comparação de salários, benefícios, remuneração variável e incentivos das empresas do mercado', icon: '📊' },
];

// Benefícios
const beneficios = [
    { titulo: 'Práticas Salariais', desc: 'Fique atualizado sobre as práticas salariais de mercado', icon: '💰' },
    { titulo: 'Atrair Talentos', desc: 'Otimize a sua estratégia de remuneração para atrair os melhores talentos', icon: '🎯' },
    { titulo: 'Estrutura Organizacional', desc: 'Compreenda melhor a estrutura e o organograma da sua empresa', icon: '🏢' },
    { titulo: 'Retenção de Profissionais', desc: 'Elabore planos de ajuste salarial, desenvolvimento e sucessão', icon: '🤝' },
];

// FAQ
const faqItems = [
    {
        pergunta: 'O que é o plano de cargos e salários?',
        resposta: 'O plano de cargos e salários é um instrumento que estabelece as funções, qualificações necessárias e faixas salariais dentro de uma organização. Sua principal finalidade é estruturar e uniformizar os cargos disponíveis, além de assegurar que a remuneração oferecida seja compatível com as práticas do mercado, promovendo equidade e atração de talentos.',
    },
    {
        pergunta: 'Que informações são apresentadas no plano de cargos e salários?',
        resposta: 'Ao contratar a consultoria de cargos e salários com a Talentos Consultoria, você terá acesso às seguintes informações: mapeamento dos cargos e salários da sua empresa; mapeamento dos diferenciais da sua empresa como empregadora; comparação com salários, benefícios, remuneração variável e incentivos das empresas no mercado.',
    },
    {
        pergunta: 'Quais são os benefícios do planejamento de cargos e salários?',
        resposta: 'Os principais benefícios incluem: ficar atualizado sobre as práticas salariais de mercado; compreender melhor a estrutura e o organograma da sua empresa; otimizar a estratégia de remuneração para atrair os melhores talentos; elaborar planos de ajuste salarial, de desenvolvimento de pessoal e de sucessão, visando a retenção de profissionais.',
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

const CargosSalariosPage: React.FC = () => {
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
                            Consultoria especializada
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Cargos e<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Salários
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Analise o cenário salarial do mercado para planejar e definir o <strong className="text-white">posicionamento de remuneração ideal</strong> da sua empresa.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="https://wa.me/5521967155476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-1">
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8.300</div>
                                <div className="text-white/60 text-sm">Contratações</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">99,78%</div>
                                <div className="text-white/60 text-sm">Satisfação</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que é Cargos e Salários?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            O <strong className="text-red-600">plano de cargos e salários</strong> é um instrumento que estabelece as funções, qualificações necessárias e faixas salariais dentro de uma organização. Sua principal finalidade é estruturar e uniformizar os cargos disponíveis, além de assegurar que a remuneração oferecida seja compatível com as práticas do mercado.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            A elaboração de um plano de cargos e salários permite às empresas conhecerem o seu <strong className="text-gray-800">posicionamento salarial atual em relação ao mercado</strong> e planejarem seu posicionamento ideal.
                        </p>
                        
                        <div className="inline-flex items-center gap-3 bg-amber-50 text-amber-800 px-6 py-4 rounded-xl border border-amber-200">
                            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Promova equidade e atração de talentos com remuneração competitiva.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* O QUE VOCÊ TERÁ ACESSO */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">CONSULTORIA</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como a Sua Empresa se Compara Com os Concorrentes?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ao contratar a consultoria de cargos e salários, você terá acesso a:</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {informacoesAcesso.map((item, index) => (
                            <div key={item.titulo} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.titulo}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">BENEFÍCIOS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefícios da Consultoria de Cargos e Salários</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {beneficios.map((item, index) => (
                            <div key={item.titulo} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.titulo}</h3>
                                <p className="text-white/70 text-sm">{item.desc}</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Saiba Mais Sobre Cargos e Salários</h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Utilize informações precisas sobre o mercado para definir a remuneração de cada cargo da sua empresa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a
                                href="https://wa.me/5521967155476"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Fale com um Consultor
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
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

export default CargosSalariosPage;

