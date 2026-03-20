import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultorButton from './ConsultorButton';
import BlogRecommendationsSection, { RecommendationItem } from './BlogRecommendationsSection';

type BlogSection = {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    highlight?: string;
};

type BlogArticleTemplateProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt: string;
    accentClass: string;
    accentSoftClass: string;
    intro: string[];
    sections: BlogSection[];
    ctaTitle: string;
    ctaText: string;
    recommendations: RecommendationItem[];
};

const useScrollAnimation = () => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    return { setRef, isVisible };
};

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { setRef, isVisible } = useScrollAnimation();
    return (
        <div
            ref={setRef}
            className={`scroll-animate ${isVisible ? 'animate-in' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

const BlogArticleTemplate: React.FC<BlogArticleTemplateProps> = ({
    title,
    subtitle,
    imageUrl,
    imageAlt,
    accentClass,
    accentSoftClass,
    intro,
    sections,
    ctaTitle,
    ctaText,
    recommendations,
}) => {
    return (
        <div className="min-h-screen bg-white">
            <section className="relative py-20 bg-gradient-to-br from-red-700 via-red-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 ${accentSoftClass}`}></div>
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar para Home
                        </Link>

                        <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
                            Blog Talentos
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{title}</h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <AnimatedSection>
                            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
                                <img src={imageUrl} alt={imageAlt} className="w-full h-64 md:h-96 object-cover" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <div className="prose prose-lg max-w-none mb-12">
                                {intro.map((paragraph, index) => (
                                    <p
                                        key={`${title}-intro-${index}`}
                                        className={index === 0 ? 'text-xl text-gray-700 leading-relaxed mb-8' : 'text-gray-600 leading-relaxed mb-8'}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </AnimatedSection>

                        {sections.map((section, index) => (
                            <AnimatedSection key={`${title}-section-${index}`} delay={0.15 + index * 0.05}>
                                <div className={`rounded-2xl p-8 mb-12 ${index % 2 === 0 ? `${accentClass} text-white` : 'bg-gray-50 text-gray-900'}`}>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>

                                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                                        <p
                                            key={`${title}-section-${index}-paragraph-${paragraphIndex}`}
                                            className={index % 2 === 0 ? 'text-white/85 leading-relaxed mb-6' : 'text-gray-600 leading-relaxed mb-6'}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                    {section.bullets && section.bullets.length > 0 && (
                                        <div className={`grid gap-3 ${section.bullets.length > 4 ? 'md:grid-cols-2' : ''}`}>
                                            {section.bullets.map((bullet, bulletIndex) => (
                                                <div
                                                    key={`${title}-section-${index}-bullet-${bulletIndex}`}
                                                    className={`flex items-start gap-3 rounded-xl p-4 ${
                                                        index % 2 === 0 ? 'bg-white/10 border border-white/10' : 'bg-white border border-gray-200'
                                                    }`}
                                                >
                                                    <span className={`mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0 ${index % 2 === 0 ? 'bg-white' : 'bg-red-600'}`}></span>
                                                    <span className={index % 2 === 0 ? 'text-white/90 text-sm' : 'text-gray-700 text-sm'}>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.highlight && (
                                        <div className={`mt-8 rounded-xl border-l-4 p-5 ${index % 2 === 0 ? 'border-white bg-white/10 text-white' : 'border-red-600 bg-white text-gray-700'}`}>
                                            {section.highlight}
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}

                        <AnimatedSection delay={0.45}>
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 sm:p-10 text-center text-white shadow-lg">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
                                <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">{ctaText}</p>
                                <ConsultorButton variant="light" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </article>

            <BlogRecommendationsSection items={recommendations} />
        </div>
    );
};

export default BlogArticleTemplate;
