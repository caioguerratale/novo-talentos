import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogLiderancaAssertivaPage: React.FC = () => (
    <BlogArticleTemplate
        title="O papel da liderança assertiva no ambiente de trabalho"
        subtitle="Lideranças eficientes combinam gestão de talentos, comunicação assertiva e visão estratégica para impulsionar equipes e resultados."
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
        imageAlt="Liderança assertiva no ambiente de trabalho"
        accentClass="bg-gradient-to-br from-red-700 to-orange-600"
        accentSoftClass="bg-orange-300"
        intro={[
            'Em um cenário corporativo cada vez mais dinâmico e competitivo, a liderança assertiva se destaca pelo olhar atento às tendências, pela cooperação entre equipe e pela humanização nos processos e na gestão de talentos.',
            'A responsabilidade de coordenar a atmosfera de um negócio está nas mãos do líder. Ele precisa entender as necessidades da área e da equipe, olhando para além dos números e atuando em atração, retenção e engajamento de profissionais.',
            'Três habilidades aparecem como base de uma liderança eficiente: gestão de talentos, comunicação assertiva e visão estratégica. Com apoio especializado, essas competências se fortalecem e contribuem para a construção de líderes de sucesso.',
        ]}
        sections={[
            {
                title: 'Gestão de talentos como habilidade central',
                paragraphs: [
                    'Liderar envolve entender a equipe e traçar estratégias para atrair, reter e engajar os melhores profissionais disponíveis no mercado. Em um contexto de busca cada vez mais desafiadora por pessoas qualificadas, a gestão de talentos se torna indispensável.',
                    'Ao assumir um cargo de gestão, é importante explorar técnicas de atração de profissionais aderentes à cultura organizacional. São essas pessoas que sustentam a execução dos serviços e representam a empresa em cada processo.',
                ],
                bullets: [
                    'Atração de profissionais mais alinhados à cultura e aos objetivos do negócio.',
                    'Retenção e engajamento por meio de estruturas mais claras de cargos e salários.',
                    'Maior motivação da equipe, com impacto direto na redução da rotatividade.',
                ],
            },
            {
                title: 'Comunicação assertiva fortalece confiança e execução',
                paragraphs: [
                    'Desenvolver uma comunicação assertiva é essencial para transmitir segurança e evitar ruídos na delegação de tarefas. Com direcionamento claro, os colaboradores conseguem executar suas funções com mais consistência.',
                    'Boa comunicação também envolve respeito, clareza e empatia. Quando o líder trabalha sua inteligência emocional, fortalece relacionamentos interpessoais, lida melhor com a pressão e constrói uma liderança mais humanizada.',
                ],
                bullets: [
                    'Mais clareza na distribuição de tarefas e expectativas.',
                    'Fortalecimento da confiança entre gestores e equipe.',
                    'Escuta mais qualificada para compreender a percepção dos colaboradores.',
                ],
            },
            {
                title: 'Visão estratégica para crescer com sustentabilidade',
                paragraphs: [
                    'Entre as habilidades essenciais de um bom líder, a visão estratégica se destaca para quem deseja ganhar vantagem competitiva em um mercado em constante movimento.',
                    'Com o aumento das exigências, líderes precisam identificar desafios, aproveitar oportunidades e estruturar o RH de forma saudável para acompanhar a expansão do negócio. Nesse cenário, uma consultoria de RH pode trazer visão profissional e imparcial para analisar processos, métricas e soluções.',
                ],
                highlight:
                    'Gestores que desejam evoluir sua liderança precisam investir em autodesenvolvimento, cultivar visão estratégica e buscar apoio qualificado para fortalecer suas decisões.',
            },
        ]}
        ctaTitle="Quer fortalecer sua liderança e engajar sua equipe?"
        ctaText="A Talentos Consultoria apoia o desenvolvimento de lideranças mais assertivas, com soluções de gestão de pessoas que melhoram comunicação, estrutura e performance."
        recommendations={[
            {
                title: 'Estruturação do RH',
                description: 'Organize processos, papéis e rotinas para sustentar lideranças mais preparadas e um RH estratégico.',
                url: '/servicos/estruturacao-do-rh',
                accent: 'red',
                icon: 'building',
            },
            {
                title: 'Cargos e Salários',
                description: 'Crie critérios claros de crescimento e remuneração para fortalecer retenção e alinhamento da equipe.',
                url: '/servicos/cargos-e-salarios',
                accent: 'orange',
                icon: 'chart',
            },
        ]}
    />
);

export default BlogLiderancaAssertivaPage;
