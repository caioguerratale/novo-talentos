import React from 'react';
import { Link } from 'react-router-dom';

const BlogEmConstrucaoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Animação Profissional - Documento em construção */}
                <div className="mb-12 flex justify-center">
                    <div className="relative w-72 h-72">
                        {/* Círculo de fundo com gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-full opacity-50"></div>
                        
                        {/* Engrenagens rotativas de fundo */}
                        <svg className="absolute top-4 right-4 w-16 h-16 text-gray-200 animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                            <path fillRule="evenodd" d="M9.024 2.783a1 1 0 01.864-.5h4.224a1 1 0 01.864.5l.707 1.224a1 1 0 00.864.5h.894a1 1 0 01.866.5l2.112 3.66a1 1 0 010 1l-2.112 3.66a1 1 0 01-.866.5h-.894a1 1 0 00-.864.5l-.707 1.224a1 1 0 01-.864.5H9.888a1 1 0 01-.864-.5l-.707-1.224a1 1 0 00-.864-.5h-.894a1 1 0 01-.866-.5l-2.112-3.66a1 1 0 010-1l2.112-3.66a1 1 0 01.866-.5h.894a1 1 0 00.864-.5l.707-1.224z" clipRule="evenodd"/>
                        </svg>
                        
                        <svg className="absolute bottom-8 left-2 w-10 h-10 text-gray-200 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                            <path fillRule="evenodd" d="M9.024 2.783a1 1 0 01.864-.5h4.224a1 1 0 01.864.5l.707 1.224a1 1 0 00.864.5h.894a1 1 0 01.866.5l2.112 3.66a1 1 0 010 1l-2.112 3.66a1 1 0 01-.866.5h-.894a1 1 0 00-.864.5l-.707 1.224a1 1 0 01-.864.5H9.888a1 1 0 01-.864-.5l-.707-1.224a1 1 0 00-.864-.5h-.894a1 1 0 01-.866-.5l-2.112-3.66a1 1 0 010-1l2.112-3.66a1 1 0 01.866-.5h.894a1 1 0 00.864-.5l.707-1.224z" clipRule="evenodd"/>
                        </svg>

                        {/* Documento principal */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                {/* Sombra do documento */}
                                <div className="absolute inset-0 bg-gray-300 rounded-lg transform translate-x-2 translate-y-2 blur-sm"></div>
                                
                                {/* Documento */}
                                <div className="relative w-40 h-52 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                                    {/* Header do documento */}
                                    <div className="h-12 bg-gradient-to-r from-red-600 to-red-700 flex items-center px-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Conteúdo do documento - linhas sendo escritas */}
                                    <div className="p-4 space-y-3">
                                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-loading-bar" style={{ width: '90%' }}></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-loading-bar" style={{ width: '75%', animationDelay: '0.2s' }}></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-loading-bar" style={{ width: '85%', animationDelay: '0.4s' }}></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-loading-bar" style={{ width: '60%', animationDelay: '0.6s' }}></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-100 rounded-full"></div>
                                        <div className="h-2.5 bg-gray-100 rounded-full w-3/4"></div>
                                    </div>

                                    {/* Ícone de edição */}
                                    <div className="absolute bottom-3 right-3">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partículas flutuantes */}
                        <div className="absolute top-16 left-8 w-3 h-3 bg-red-400 rounded-full opacity-60 animate-float" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute top-24 right-12 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-float" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                        <div className="absolute bottom-20 right-8 w-2.5 h-2.5 bg-red-300 rounded-full opacity-60 animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
                    </div>
                </div>

                {/* Mensagem */}
                <div className="max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
                        Em desenvolvimento
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Conteúdo em Preparação
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Nossa equipe está desenvolvendo este artigo com o cuidado e a qualidade que você merece. 
                        Em breve, traremos insights valiosos para a gestão de pessoas da sua empresa.
                    </p>

                    {/* Indicador de progresso elegante */}
                    <div className="max-w-sm mx-auto mb-10">
                        <div className="flex items-center justify-between text-sm mb-3">
                            <span className="text-gray-500 font-medium">Progresso do artigo</span>
                            <span className="text-red-600 font-semibold">65%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-full transition-all duration-1000"
                                style={{ width: '65%' }}
                            ></div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/blog" 
                            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Voltar ao Blog
                        </Link>
                        <Link 
                            to="/" 
                            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-3.5 px-8 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Ir para Home
                        </Link>
                    </div>
                </div>

                {/* Sugestões */}
                <div className="mt-16 pt-10 border-t border-gray-200 max-w-3xl mx-auto">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                        Artigos disponíveis para leitura
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link 
                            to="/blog/pesquisa-de-clima-organizacional" 
                            className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-300">
                                <svg className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                Pesquisa de Clima
                            </span>
                        </Link>
                        
                        <Link 
                            to="/blog/gestao-de-talentos" 
                            className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-300">
                                <svg className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                Gestão de Talentos
                            </span>
                        </Link>
                        
                        <Link 
                            to="/blog/terceirizacao-de-mao-de-obra" 
                            className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-300">
                                <svg className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                                Terceirização
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogEmConstrucaoPage;
