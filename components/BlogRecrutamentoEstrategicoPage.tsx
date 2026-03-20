import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogRecrutamentoEstrategicoPage: React.FC = () => (
    <BlogArticleTemplate
        title="Recrutamento e seleção estratégico: como atrair os melhores talentos"
        subtitle="Contratações assertivas começam antes das entrevistas, com método, alinhamento de perfil e processos pensados para atrair profissionais certos."
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
        imageAlt="Recrutamento e seleção estratégico"
        accentClass="bg-gradient-to-br from-red-700 to-orange-600"
        accentSoftClass="bg-orange-300"
        intro={[
            'Atrair os melhores talentos é mais do que divulgar vagas e selecionar currículos. As contratações assertivas iniciam antes mesmo das entrevistas, por meio de processos bem estruturados de recrutamento e seleção.',
            'Contratar uma empresa de recrutamento e seleção pode ser essencial para auxiliar sua empresa nas reais necessidades de cada vaga. Com o apoio de uma consultoria de RH, o processo ganha visão estratégica, produtividade e menor rotatividade.',
            'Neste artigo, a proposta é mostrar por que o recrutamento e seleção estratégico fortalece os resultados do negócio e como a Talentos Consultoria atua para tornar as contratações mais inteligentes.',
        ]}
        sections={[
            {
                title: 'Benefícios do recrutamento e seleção estratégico',
                paragraphs: [
                    'Investir em uma consultoria de recrutamento e seleção impacta diretamente os resultados do time. O serviço vai além da escolha de currículos e ajuda a construir equipes mais engajadas com o propósito de cada negócio.',
                ],
                bullets: [
                    'Mais tempo para o seu negócio, com mais foco no core business e mais agilidade nas etapas do processo.',
                    'Aumento de produtividade ao contratar profissionais alinhados aos objetivos e à cultura da empresa.',
                    'Redução de turnover, já que a compatibilidade entre perfil e ambiente favorece a permanência.',
                    'Economia a médio e longo prazo, evitando custos com desligamentos, retrabalho e novas contratações.',
                    'Fortalecimento da marca empregadora, com colaboradores mais engajados e melhor experiência para candidatos.',
                    'Apoio de consultores especializados, com experiência prática em recursos humanos e departamento pessoal.',
                ],
            },
            {
                title: 'As cinco etapas de um processo seletivo mais assertivo',
                paragraphs: [
                    'Na Talentos Consultoria, o recrutamento e seleção é estruturado em etapas claras para identificar o perfil ideal, analisar comportamento e competência e entregar finalistas mais aderentes à vaga.',
                ],
                bullets: [
                    'Alinhamento da vaga, definindo competências técnicas e comportamentais com apoio consultivo.',
                    'Divulgação estratégica em canais com maior potencial para encontrar os profissionais certos.',
                    'Seleção com entrevistas por competências, dinâmicas e testes adequados à necessidade do cliente.',
                    'Entrevista final com apresentação de currículos, pareceres e resultados da triagem inicial.',
                    'Contratação com alinhamento da admissão e comunicação aos candidatos participantes do processo.',
                ],
            },
            {
                title: 'Por que a consultoria de RH faz diferença nas contratações',
                paragraphs: [
                    'Na hora de contratar, fatores como porte da empresa, volume de vagas e estruturação do cargo exigem atenção técnica. A consultoria de RH atua como parceira do negócio, adaptando as etapas para atender os objetivos de cada cliente.',
                    'No mercado atual, não basta apenas contratar. É preciso selecionar pessoas que tenham os propósitos certos e realmente agreguem valor à equipe. Líderes que adotam o recrutamento estratégico ganham vantagem competitiva e evitam contratações precipitadas.',
                ],
                highlight:
                    'Contratações assertivas exigem método e experiência. Com apoio especializado, sua empresa reduz erros de seleção e fortalece o crescimento do time.',
            },
        ]}
        ctaTitle="Quer atrair os profissionais certos para sua empresa?"
        ctaText="A Talentos Consultoria estrutura o processo seletivo com visão prática, humana e estratégica para conectar sua empresa aos talentos mais aderentes ao negócio."
        recommendations={[
            {
                title: 'Recrutamento e Seleção',
                description: 'Encontre profissionais alinhados ao perfil da vaga com um processo seletivo estruturado e mais assertivo.',
                url: '/servicos/recrutamento-e-selecao',
                accent: 'orange',
                icon: 'search',
            },
            {
                title: 'Gestão de Talentos',
                description: 'Desenvolva, engaje e retenha colaboradores com estratégias voltadas à alta performance.',
                url: '/blog/gestao-de-talentos',
                accent: 'red',
                icon: 'users',
            },
        ]}
    />
);

export default BlogRecrutamentoEstrategicoPage;
