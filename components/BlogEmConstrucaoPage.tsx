import React from 'react';
import { Link } from 'react-router-dom';

const BlogEmConstrucaoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Animação de pessoa trabalhando */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Mesa */}
                        <div className="w-64 h-4 bg-amber-600 rounded-t-lg relative z-10"></div>
                        <div className="w-72 h-3 bg-amber-700 rounded-b-lg -mt-1"></div>
                        
                        {/* Computador */}
                        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                            {/* Monitor */}
                            <div className="w-40 h-28 bg-gray-800 rounded-lg flex items-center justify-center shadow-xl">
                                <div className="w-36 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded flex items-center justify-center overflow-hidden">
                                    {/* Linhas de código animadas */}
                                    <div className="space-y-1 w-full px-2">
                                        <div className="h-2 bg-white/40 rounded animate-pulse w-3/4"></div>
                                        <div className="h-2 bg-white/30 rounded animate-pulse w-full" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="h-2 bg-white/40 rounded animate-pulse w-2/3" style={{ animationDelay: '0.4s' }}></div>
                                        <div className="h-2 bg-white/30 rounded animate-pulse w-5/6" style={{ animationDelay: '0.6s' }}></div>
                                        <div className="h-2 bg-white/40 rounded animate-pulse w-1/2" style={{ animationDelay: '0.8s' }}></div>
                                    </div>
                                </div>
                            </div>
                            {/* Base do monitor */}
                            <div className="w-6 h-6 bg-gray-700 mx-auto"></div>
                            <div className="w-16 h-2 bg-gray-600 rounded mx-auto"></div>
                        </div>

                        {/* Pessoa */}
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 ml-20">
                            {/* Cabeça */}
                            <div className="w-12 h-12 bg-amber-200 rounded-full relative animate-bounce" style={{ animationDuration: '3s' }}>
                                {/* Cabelo */}
                                <div className="absolute -top-1 left-1 w-10 h-5 bg-amber-800 rounded-t-full"></div>
                                {/* Olhos */}
                                <div className="absolute top-4 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
                                <div className="absolute top-4 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>
                                {/* Sorriso */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-700 rounded-b-full"></div>
                            </div>
                            {/* Corpo */}
                            <div className="w-10 h-14 bg-red-500 rounded-lg mx-auto -mt-2 relative">
                                {/* Braços digitando */}
                                <div className="absolute -left-6 top-2 w-8 h-3 bg-amber-200 rounded-full origin-right animate-pulse" style={{ animationDuration: '0.5s' }}></div>
                                <div className="absolute -right-4 top-4 w-6 h-3 bg-amber-200 rounded-full origin-left animate-pulse" style={{ animationDuration: '0.7s' }}></div>
                            </div>
                        </div>

                        {/* Teclado */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-x-4">
                            <div className="w-24 h-6 bg-gray-300 rounded shadow-md flex items-center justify-center gap-0.5 px-1">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-3 bg-gray-400 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s`, animationDuration: '0.3s' }}></div>
                                ))}
                            </div>
                        </div>

                        {/* Xícara de café */}
                        <div className="absolute -top-8 -right-8">
                            <div className="w-6 h-6 bg-white rounded-b-lg border-2 border-gray-300 relative">
                                <div className="absolute -right-2 top-1 w-2 h-4 border-2 border-gray-300 rounded-r-full bg-transparent"></div>
                                {/* Vapor */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 space-y-0.5">
                                    <div className="w-1 h-2 bg-gray-200 rounded-full animate-pulse opacity-70"></div>
                                    <div className="w-1 h-2 bg-gray-200 rounded-full animate-pulse opacity-50 ml-1" style={{ animationDelay: '0.3s' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Planta */}
                        <div className="absolute -top-12 -left-12">
                            <div className="w-6 h-5 bg-amber-700 rounded-t-lg"></div>
                            <div className="relative -mt-1">
                                <div className="w-3 h-6 bg-green-500 rounded-full absolute left-0 transform -rotate-12"></div>
                                <div className="w-3 h-8 bg-green-600 rounded-full absolute left-1.5 transform rotate-6"></div>
                                <div className="w-3 h-5 bg-green-500 rounded-full absolute left-3 transform rotate-12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mensagem */}
                <div className="mt-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Artigo em Construção
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Estamos trabalhando para trazer este conteúdo para você em breve! 
                        Nossa equipe está preparando um artigo completo e relevante.
                    </p>

                    {/* Indicador de progresso */}
                    <div className="max-w-md mx-auto mb-8">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                            <span>Progresso</span>
                            <span>Em andamento...</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"
                                style={{ width: '65%' }}
                            ></div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/blog" 
                            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Voltar ao Blog
                        </Link>
                        <Link 
                            to="/" 
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Ir para Home
                        </Link>
                    </div>
                </div>

                {/* Sugestões */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Enquanto isso, confira nossos artigos prontos:</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/blog/pesquisa-de-clima-organizacional" className="text-red-600 hover:text-red-700 hover:underline">
                            Pesquisa de Clima Organizacional
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link to="/blog/gestao-de-talentos" className="text-red-600 hover:text-red-700 hover:underline">
                            Gestão de Talentos
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link to="/blog/terceirizacao-de-mao-de-obra" className="text-red-600 hover:text-red-700 hover:underline">
                            Terceirização de Mão de Obra
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogEmConstrucaoPage;


