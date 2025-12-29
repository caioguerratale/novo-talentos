import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultorButton from './ConsultorButton';

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

// Tipos de profissionais que recrutamos
const tiposProfissionais = [
    { nome: 'Executivos e Diretores', icon: '👔', desc: 'C-levels e alta gestão' },
    { nome: 'Gerentes e Supervisores', icon: '📊', desc: 'Liderança e especialistas' },
    { nome: 'Profissionais de TI', icon: '💻', desc: 'Desenvolvedores e analistas' },
    { nome: 'Administrativos', icon: '📋', desc: 'Comercial, compras, marketing' },
    { nome: 'Técnicos', icon: '🔧', desc: 'Jurídico, saúde e segurança' },
    { nome: 'Operacionais', icon: '🏭', desc: 'Limpeza, segurança, logística' },
];

// 7 Passos do processo
const passos = [
    {
        numero: 1,
        titulo: 'Definições',
        descricao: 'Junto com o cliente, definimos os cargos, condições das ofertas, perfis ideais e prazos de contratações.',
        icon: '🎯',
    },
    {
        numero: 2,
        titulo: 'Divulgação das Vagas',
        descricao: 'A divulgação pode ser interna, externa ou mista, utilizando os melhores canais de recrutamento.',
        icon: '📢',
    },
    {
        numero: 3,
        titulo: 'Recepção de Currículos',
        descricao: 'Recebemos as aplicações e analisamos os currículos individualmente – um trabalho que economiza tempo do seu RH.',
        icon: '📥',
    },
    {
        numero: 4,
        titulo: 'Validação',
        descricao: 'Entramos em contato com os candidatos selecionados para confirmar informações e validar competências.',
        icon: '✅',
    },
    {
        numero: 5,
        titulo: 'Seleção',
        descricao: 'Aplicamos entrevistas por competências, dinâmicas de grupo e provas de conhecimento específico.',
        icon: '🔍',
    },
    {
        numero: 6,
        titulo: 'Contratação',
        descricao: 'Assinatura de contrato, onboarding do candidato selecionado e feedback aos demais participantes.',
        icon: '🤝',
    },
    {
        numero: 7,
        titulo: 'Relatório',
        descricao: 'Emissão de relatório final com dados importantes sobre o processo de recrutamento realizado.',
        icon: '📊',
    },
];

// Vantagens
const vantagens = [
    { titulo: 'Consultoria para Perfis', desc: 'Definição de perfis ideais para as vagas' },
    { titulo: 'Ampla Base de Currículos', desc: 'Divulgação nos melhores canais' },
    { titulo: 'Processo Ágil', desc: 'Recrutamento e seleção eficiente' },
    { titulo: 'Equipe Especializada', desc: 'Dedicada ao seu projeto' },
    { titulo: 'Metodologia Eficaz', desc: 'Técnicas modernas de seleção' },
    { titulo: 'Expertise em Divulgação', desc: 'Atraímos os melhores candidatos' },
    { titulo: 'Alta Satisfação', desc: '99,78% de satisfação nas contratações' },
    { titulo: 'Relatório Completo', desc: 'Dados importantes do processo' },
];

// FAQ
const faqItems = [
    {
        pergunta: 'Por que terceirizar o recrutamento e seleção?',
        resposta: 'Ao terceirizar, você economiza tempo do RH, ganha agilidade no processo, utiliza novos canais de recrutamento, conta com especialistas, se beneficia de metodologias modernas e reduz a taxa de turnover com contratações mais alinhadas à cultura da empresa.',
    },
    {
        pergunta: 'Quais são as atividades da consultoria em recrutamento e seleção?',
        resposta: 'As atividades incluem: definição da necessidade junto ao cliente, divulgação das vagas, recepção e análise de currículos, validação por telefone, atividades de seleção (entrevistas, dinâmicas, provas), contratação com onboarding, e emissão de relatório final.',
    },
    {
        pergunta: 'Como terceirizar o recrutamento e seleção com a Talentos?',
        resposta: 'O primeiro passo é entrar em contato conosco através do formulário ou por telefone. Nos primeiros contatos, compreendemos sua demanda para gerar uma proposta. Sendo aceita, assinamos contrato e iniciamos as atividades de consultoria.',
    },
    {
        pergunta: 'A Talentos Consultoria atende pequenas empresas?',
        resposta: 'Sim! Oferecemos serviço de recrutamento e seleção para empresas de todos os portes: pequenas, médias e grandes. Nossa equipe está preparada para atender às necessidades específicas de cada cliente.',
    },
    {
        pergunta: 'Vocês trabalham com R&S em todos os níveis hierárquicos?',
        resposta: 'Sim, fazemos recrutamento e seleção para vagas em todos os níveis: C-levels, executivos e diretores; gerentes, supervisores e especialistas; administrativos; técnicos (TI, jurídico, saúde); e operacionais (limpeza, segurança, logística).',
    },
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
const RecrutamentoPage: React.FC = () => {
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
                            Consultoria especializada em R&S
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Recrutamento e<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                Seleção
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            Contrate novos talentos com <strong className="text-white">qualidade e agilidade</strong>. Somos referência em consultoria de recrutamento e seleção no Brasil.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
<ConsultorButton variant="light" />
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+8.300</div>
                                <div className="text-white/60 text-sm">Contratações realizadas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">99,78%</div>
                                <div className="text-white/60 text-sm">De satisfação</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white">+20</div>
                                <div className="text-white/60 text-sm">Anos de experiência</div>
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
                            Referência em Recrutamento e Seleção
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            <strong className="text-gray-800">Contratar as pessoas certas</strong> é um dos principais pilares para o crescimento e sucesso de uma empresa.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Desde <strong className="text-gray-800">2011</strong> no mercado, tendo realizado <strong className="text-red-600">mais de 8.300 contratações</strong>, somos referência em consultoria de recrutamento e seleção no Brasil. Temos experiência em atendimento a diversos tipos de necessidades, de <strong className="text-gray-800">pequenas e grandes empresas</strong>, incluindo posições de liderança e cargos operacionais.
                        </p>
                        
                        <div className="inline-flex items-center gap-3 bg-red-50 text-red-800 px-6 py-4 rounded-xl border border-red-200">
                            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Atendemos demandas simples e também com grandes volumes de vagas.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIPOS DE PROFISSIONAIS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            RECRUTAMOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Selecionamos os Melhores Profissionais
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Recrutamos e selecionamos profissionais para todos os níveis hierárquicos
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {tiposProfissionais.map((tipo, index) => (
                            <div 
                                key={tipo.nome}
                                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tipo.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-1">{tipo.nome}</h3>
                                <p className="text-gray-500 text-sm">{tipo.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7 PASSOS DO PROCESSO */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            METODOLOGIA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Nosso Processo em 7 Passos
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Saiba como funciona a nossa consultoria de recrutamento e seleção
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {passos.slice(0, 6).map((passo, index) => (
                                <div 
                                    key={passo.numero}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                                            {passo.icon}
                                        </div>
                                        <div className="text-3xl font-black text-white/30">{passo.numero}</div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{passo.titulo}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{passo.descricao}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Último passo centralizado */}
                        <div className="mt-6 flex justify-center">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 border border-white/20 max-w-md w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                                        {passos[6].icon}
                                    </div>
                                    <div className="text-3xl font-black text-white/50">{passos[6].numero}</div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{passos[6].titulo}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">{passos[6].descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VANTAGENS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                                VANTAGENS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Por que escolher a Talentos?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                O serviço de recrutamento e seleção da Talentos Consultoria oferece diversas vantagens competitivas para sua empresa.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon />
                                    <span className="text-gray-700">Equipe sênior com mais de 20 anos de mercado</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon />
                                    <span className="text-gray-700">Mais de 8.300 contratações efetivadas</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon />
                                    <span className="text-gray-700">99,78% de satisfação com as contratações</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 italic">*Dados apurados em janeiro de 2024</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {vantagens.map((vantagem, index) => (
                                <div 
                                    key={vantagem.titulo}
                                    className="bg-gray-50 rounded-2xl p-5 hover:bg-red-50 hover:border-red-200 border-2 border-transparent transition-all duration-300"
                                >
                                    <h3 className="font-bold text-gray-800 mb-2 text-sm">{vantagem.titulo}</h3>
                                    <p className="text-gray-600 text-sm">{vantagem.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RECRUTAMENTO PCD */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div className="text-6xl">♿</div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Recrutamento e Seleção de PCD
                            </h2>
                            <p className="text-white/90 leading-relaxed">
                                A <strong>contratação de PCD</strong> – pessoas com deficiência – é uma obrigação legal, porém também é uma responsabilidade social que exige envolvimento do RH para garantir o cumprimento de regras e a devida inclusão. Conte com a Talentos Consultoria para recrutar e selecionar os melhores candidatos PCD para a sua empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ETAPAS PRESENCIAIS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                            ESTRUTURA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Etapas Presenciais em Ambientes Exclusivos
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Na matriz da empresa, no Rio de Janeiro, oferecemos nossas salas e ambientes para as etapas presenciais dos processos de recrutamento e seleção.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src="https://talentosconsultoria.com.br/wp-content/uploads/2020/08/recepcao-talentos-768x512.jpg" 
                                    alt="Recepção do escritório da Talentos Consultoria"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">Recepção</h3>
                                    <p className="text-gray-500 text-sm">Ambiente acolhedor para candidatos</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img 
                                    src="https://talentosconsultoria.com.br/wp-content/uploads/2020/08/salas-de-entrevistas-talentos.jpg" 
                                    alt="Salas de Entrevistas da Talentos Consultoria"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">Salas de Entrevistas</h3>
                                    <p className="text-gray-500 text-sm">Ambientes preparados para seleção</p>
                                </div>
                            </div>
                        </div>
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
                                Tire suas dúvidas sobre recrutamento e seleção
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

            {/* CTA - FALE COM UM CONSULTOR */}
            <section id="solicitar-proposta" className="py-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Solicite uma Proposta de Recrutamento e Seleção
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Quer saber como a gente poderia ajudar a sua empresa? Entre em contato com nossos consultores especializados.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Conheça todos os nossos serviços de RH
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Além do recrutamento e seleção, oferecemos um portfólio completo de soluções em Recursos Humanos para sua empresa.
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

export default RecrutamentoPage;

