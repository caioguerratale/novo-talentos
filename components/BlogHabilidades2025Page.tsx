import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogHabilidades2025Page: React.FC = () => (
    <BlogArticleTemplate
        title="As habilidades profissionais em alta para 2025"
        subtitle="Com a transformação do mercado e o avanço da inteligência artificial, profissionais e empresas precisarão desenvolver competências cada vez mais estratégicas e adaptáveis."
        imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80"
        imageAlt="Habilidades profissionais em alta para 2025"
        accentClass="bg-gradient-to-br from-red-700 to-orange-600"
        accentSoftClass="bg-orange-300"
        intro={[
            'O mercado de trabalho irá se transformar nos próximos cinco anos, sendo a inteligência artificial uma das grandes responsáveis por essa evolução. A partir de agora, tanto profissionais empregados quanto aqueles que buscam uma oportunidade precisarão se adaptar às novas demandas.',
            'Mais do que acompanhar tendências, será necessário desenvolver competências que combinem domínio técnico, pensamento crítico, flexibilidade e capacidade de aprender continuamente.',
            'Para as empresas, compreender essas mudanças é essencial para atrair talentos, preparar lideranças e manter equipes alinhadas a um cenário cada vez mais dinâmico.',
        ]}
        sections={[
            {
                title: 'Por que as habilidades profissionais estão mudando',
                paragraphs: [
                    'As transformações tecnológicas estão acelerando mudanças profundas no mundo do trabalho. Automação, inteligência artificial e novas formas de organização exigem profissionais capazes de responder com rapidez, criatividade e visão prática.',
                    'Nesse contexto, cargos e rotinas se adaptam, e as empresas passam a valorizar pessoas que consigam aprender rápido, colaborar com diferentes áreas e lidar bem com mudanças constantes.',
                ],
            },
            {
                title: 'Competências que tendem a ganhar mais espaço em 2025',
                paragraphs: [
                    'As habilidades mais valorizadas combinam aspectos técnicos e comportamentais. O diferencial estará em profissionais que saibam usar a tecnologia a seu favor sem perder capacidade analítica, relacional e estratégica.',
                ],
                bullets: [
                    'Adaptabilidade para responder a novas ferramentas, fluxos e exigências do mercado.',
                    'Aprendizado contínuo para acompanhar atualizações e manter a empregabilidade em alta.',
                    'Pensamento crítico para analisar cenários, dados e decisões com mais qualidade.',
                    'Comunicação clara para colaborar melhor em times, projetos e ambientes híbridos.',
                    'Criatividade para encontrar soluções práticas diante de desafios novos.',
                    'Inteligência emocional para lidar com pressão, mudanças e relações profissionais.',
                ],
            },
            {
                title: 'Como as empresas podem se preparar para esse cenário',
                paragraphs: [
                    'Além de buscar profissionais preparados, as empresas precisarão investir no desenvolvimento interno das equipes. Isso envolve estrutura, liderança, cultura e processos capazes de acompanhar a evolução das exigências do mercado.',
                    'Com apoio de uma consultoria de RH, é possível identificar lacunas de competências, estruturar cargos, melhorar recrutamento e fortalecer o desenvolvimento dos colaboradores com mais assertividade.',
                ],
                highlight:
                    'Empresas que antecipam essas mudanças conseguem atrair melhor, desenvolver talentos com mais consistência e se posicionar de forma mais competitiva para os próximos anos.',
            },
        ]}
        ctaTitle="Quer preparar sua empresa para as novas exigências do mercado?"
        ctaText="A Talentos Consultoria apoia sua empresa na atração, desenvolvimento e estruturação de equipes mais preparadas para os desafios de 2025."
        recommendations={[
            {
                title: 'Recrutamento e Seleção',
                description: 'Contrate profissionais mais aderentes ao novo cenário do mercado com um processo seletivo estratégico.',
                url: '/servicos/recrutamento-e-selecao',
                accent: 'red',
                icon: 'search',
            },
            {
                title: 'Estruturação do RH',
                description: 'Organize processos, políticas e desenvolvimento interno para sustentar a evolução das equipes.',
                url: '/servicos/estruturacao-do-rh',
                accent: 'orange',
                icon: 'building',
            },
        ]}
    />
);

export default BlogHabilidades2025Page;
