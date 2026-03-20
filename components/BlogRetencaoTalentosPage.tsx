import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogRetencaoTalentosPage: React.FC = () => (
    <BlogArticleTemplate
        title="Como Reter Talentos nas Empresas"
        subtitle="Reter talentos reduz custos, fortalece a cultura organizacional e cria equipes mais estáveis, produtivas e engajadas."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
        imageAlt="Retenção de talentos nas empresas"
        accentClass="bg-gradient-to-br from-rose-700 to-red-800"
        accentSoftClass="bg-rose-300"
        intro={[
            'A retenção de talentos é um dos pilares do sucesso organizacional e também um dos maiores desafios dos RHs. Quando a empresa enfrenta dificuldade para manter profissionais qualificados, uma série de consequências negativas pode surgir, desde aumento de custos até instabilidade na equipe.',
            'Mais do que evitar turnover, reter talentos significa construir um ambiente em que as pessoas desejam permanecer, se desenvolver e contribuir para os objetivos do negócio.',
        ]}
        sections={[
            {
                title: 'Por que a baixa retenção é prejudicial para as empresas',
                paragraphs: [
                    'Quando um colaborador deixa a empresa, a primeira consequência é o custo financeiro. Repor um profissional envolve processo seletivo, tempo de entrevistas, integração e treinamento, além da perda de produtividade até a adaptação completa do novo integrante.',
                    'A alta rotatividade também afeta o conhecimento acumulado, a cultura organizacional, a estabilidade da equipe e a capacidade de alcançar objetivos com consistência.',
                ],
                bullets: [
                    'Custos elevados com recrutamento, seleção e treinamento de novos colaboradores.',
                    'Perda de conhecimento e experiência acumulada dentro da operação.',
                    'Impacto na cultura organizacional e na estabilidade da equipe.',
                    'Dificuldade maior para alcançar objetivos com continuidade e previsibilidade.',
                ],
            },
            {
                title: 'Benefícios de uma estratégia forte de retenção',
                paragraphs: [
                    'Quando a empresa valoriza a permanência dos profissionais, os colaboradores tendem a se sentir parte essencial do time. Esse vínculo fortalece o sentimento de pertencimento e aumenta o engajamento com as metas da organização.',
                ],
                bullets: [
                    'Aumento da satisfação e do engajamento dos colaboradores.',
                    'Melhoria da qualidade dos relacionamentos internos e da colaboração.',
                    'Redução de custos operacionais associados ao turnover.',
                    'Melhor atendimento ao cliente, inovação e criatividade em equipes mais estáveis.',
                    'Fortalecimento da marca empregadora no mercado.',
                ],
            },
            {
                title: 'Como reter talentos e aumentar a satisfação dos colaboradores',
                paragraphs: [
                    'Reter talentos depende de ações consistentes de cultura, liderança, desenvolvimento e reconhecimento. Empresas que escutam suas equipes, estruturam bem cargos e salários e oferecem perspectiva de crescimento criam um ambiente mais saudável e sustentável.',
                    'Nesse processo, a consultoria de RH pode apoiar diagnósticos, estratégias e estruturas que ajudam a reduzir rotatividade e elevar a satisfação do time.',
                ],
                highlight:
                    'Retenção de talentos não é resultado de uma ação isolada, mas da combinação entre cultura organizacional sólida, liderança preparada e gestão de pessoas coerente com a realidade do negócio.',
            },
        ]}
        ctaTitle="Quer reduzir turnover e fortalecer seu time?"
        ctaText="A Talentos Consultoria ajuda sua empresa a estruturar estratégias de retenção com foco em cultura, desenvolvimento, remuneração e engajamento."
        recommendations={[
            {
                title: 'Cargos e Salários',
                description: 'Estruture remuneração e crescimento para aumentar motivação, permanência e percepção de justiça interna.',
                url: '/servicos/cargos-e-salarios',
                accent: 'red',
                icon: 'chart',
            },
            {
                title: 'Recrutamento e Seleção',
                description: 'Contrate profissionais mais aderentes à cultura da empresa e reduza riscos de rotatividade futura.',
                url: '/servicos/recrutamento-e-selecao',
                accent: 'orange',
                icon: 'search',
            },
        ]}
    />
);

export default BlogRetencaoTalentosPage;
