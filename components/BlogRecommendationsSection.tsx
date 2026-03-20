import React from 'react';
import { Link } from 'react-router-dom';

type RecommendationIcon = 'chart' | 'search' | 'building' | 'briefcase' | 'users' | 'heart';

type RecommendationItem = {
    title: string;
    description: string;
    url: string;
    accent: 'red' | 'orange';
    icon: RecommendationIcon;
};

type BlogRecommendationsSectionProps = {
    title?: string;
    items: RecommendationItem[];
};

const accentMap = {
    red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        hover: 'group-hover:bg-red-600',
        title: 'group-hover:text-red-600',
    },
    orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        hover: 'group-hover:bg-orange-600',
        title: 'group-hover:text-orange-600',
    },
};

const RecommendationIconSvg: React.FC<{ icon: RecommendationIcon; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
    switch (icon) {
        case 'chart':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            );
        case 'search':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            );
        case 'building':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        case 'briefcase':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2h-3V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v6m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-2.586 2.586a2 2 0 01-1.414.586H8a2 2 0 01-1.414-.586L4 13" />
                </svg>
            );
        case 'users':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            );
        case 'heart':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
    }
};

const BlogRecommendationsSection: React.FC<BlogRecommendationsSectionProps> = ({
    title = 'Soluções que podem ajudar sua empresa',
    items,
}) => (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {items.map((item) => {
                    const accent = accentMap[item.accent];

                    return (
                        <Link
                            key={`${item.title}-${item.url}`}
                            to={item.url}
                            className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${accent.bg} ${accent.hover}`}>
                                <RecommendationIconSvg icon={item.icon} className={`w-7 h-7 transition-colors ${accent.text} group-hover:text-white`} />
                            </div>
                            <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors ${accent.title}`}>
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    </section>
);

export type { RecommendationItem };
export default BlogRecommendationsSection;
