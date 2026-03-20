import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogTerceirizacaoSegurancaPage: React.FC = () => (
    <BlogArticleTemplate
        title="Terceirização de Mão de Obra: Dicas para Contratar com Segurança"
        subtitle="Contratar com segurança exige análise da prestadora, contrato detalhado e acompanhamento contínuo para reduzir riscos trabalhistas e operacionais."
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
        imageAlt="Terceirização de mão de obra com segurança"
        accentClass="bg-gradient-to-br from-amber-600 to-orange-700"
        accentSoftClass="bg-amber-300"
        intro={[
            'A terceirização de mão de obra é uma estratégia eficaz para empresas que desejam otimizar recursos e aumentar a eficiência. Para garantir o sucesso dessa prática, porém, é indispensável tomar cuidados específicos desde a escolha da prestadora até o monitoramento do contrato.',
            'Conhecer os principais cuidados para contratar empresas de terceirização com segurança ajuda a proteger o negócio de riscos trabalhistas e financeiros e melhora a previsibilidade da operação.',
        ]}
        sections={[
            {
                title: 'Verifique a idoneidade da prestadora de serviços',
                paragraphs: [
                    'Antes de fechar qualquer contrato, é crucial pesquisar a reputação da prestadora no mercado. Referências de outras empresas, histórico de atuação e possíveis ações judiciais trabalhistas ajudam a identificar sinais de alerta.',
                    'Também é importante verificar a regularidade da empresa junto a órgãos como Receita Federal e INSS. Empresas com débitos fiscais ou trabalhistas em aberto podem trazer riscos para a contratante.',
                ],
                bullets: [
                    'Analise a reputação da prestadora e sua trajetória no mercado.',
                    'Solicite Certidões Negativas de Débitos e documentos de regularidade fiscal e trabalhista.',
                    'Em contratos temporários, considere empresas com autorização do Ministério do Trabalho.',
                    'Solicite certidão negativa do INSS como parte da checagem documental.',
                ],
            },
            {
                title: 'Cuidados com um contrato de terceirização bem detalhado',
                paragraphs: [
                    'Um contrato bem detalhado é a base para uma relação comercial saudável. O escopo do trabalho deve ser definido com clareza, especificando serviços, locais, frequência e condições da prestação.',
                    'Também é necessário prever prazos, condições de renovação, quantificação dos recursos necessários, perfis desejados e cláusulas de rescisão e penalidades contratuais.',
                ],
                bullets: [
                    'Definição clara do escopo do trabalho para evitar interpretações equivocadas.',
                    'Prazos de início e término, com condições objetivas de renovação.',
                    'Número de profissionais e perfis técnicos necessários para a operação.',
                    'Cláusulas de rescisão e penalidades para proteger ambas as partes.',
                ],
            },
            {
                title: 'Monitoramento contínuo reduz riscos e melhora resultados',
                paragraphs: [
                    'A terceirização com segurança não termina na assinatura do contrato. O acompanhamento contínuo da prestação do serviço é parte essencial para garantir conformidade, qualidade e correções rápidas sempre que necessário.',
                    'Seguir boas práticas desde a análise da prestadora até a fiscalização contratual ajuda a minimizar riscos e aproveitar melhor os benefícios da terceirização.',
                ],
                highlight:
                    'A Talentos Consultoria oferece serviço de terceirização de mão de obra com transparência, conformidade legal e melhores práticas de mercado para atender empresas com qualidade e segurança.',
            },
        ]}
        ctaTitle="Precisa terceirizar com mais segurança?"
        ctaText="A Talentos Consultoria apoia sua empresa com processos transparentes, análise criteriosa e gestão especializada para reduzir riscos e garantir eficiência."
        recommendations={[
            {
                title: 'Terceirização de Mão de Obra',
                description: 'Tenha agilidade operacional com suporte completo na contratação e administração dos profissionais.',
                url: '/servicos/terceirizacao-de-mao-de-obra',
                accent: 'orange',
                icon: 'briefcase',
            },
            {
                title: 'Recrutamento e Seleção',
                description: 'Atraia profissionais aderentes ao perfil da operação com um processo de seleção especializado.',
                url: '/servicos/recrutamento-e-selecao',
                accent: 'red',
                icon: 'search',
            },
        ]}
    />
);

export default BlogTerceirizacaoSegurancaPage;
