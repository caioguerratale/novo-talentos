import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogSaudeMentalTrabalhoPage: React.FC = () => (
    <BlogArticleTemplate
        title="Saúde mental no trabalho: como a consultoria de RH auxilia na prevenção de afastamentos"
        subtitle="O ambiente de trabalho, a qualidade da liderança e a estrutura de gestão influenciam diretamente o bem-estar dos colaboradores e a prevenção de afastamentos."
        imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80"
        imageAlt="Saúde mental no trabalho"
        accentClass="bg-gradient-to-br from-red-700 to-orange-600"
        accentSoftClass="bg-orange-300"
        intro={[
            'A saúde mental no trabalho tornou-se um dos principais desafios para as organizações. Em 2024, houve crescimento de 68% nos casos de afastamentos por transtornos psicológicos em relação ao ano anterior, com ansiedade e depressão entre as principais causas.',
            'Esse cenário reforça como as empresas possuem papel importante no bem-estar do colaborador. O clima organizacional, a forma de liderança e a qualidade das relações internas influenciam diretamente a permanência, a motivação e a produtividade do time.',
            'A consultoria de RH pode auxiliar a empresa na prevenção desses afastamentos, oferecendo suporte tanto para gestores quanto para profissionais, com ferramentas e estratégias voltadas à saúde do ambiente corporativo.',
        ]}
        sections={[
            {
                title: 'O crescimento dos afastamentos e o alerta para as empresas',
                paragraphs: [
                    'Os dados do Ministério da Previdência Social demonstram a crise de saúde mental em crescimento no Brasil. Dentro das organizações, esse cenário exige ações práticas de prevenção e cuidado contínuo.',
                    'Fatores sociais influenciam esse aumento, mas dentro das empresas há medidas capazes de reduzir riscos, acolher profissionais e criar condições mais saudáveis para o trabalho.',
                ],
            },
            {
                title: 'A importância de uma cultura organizacional saudável',
                paragraphs: [
                    'O clima do ambiente de trabalho impacta diretamente a percepção do colaborador sobre a empresa e reflete a qualidade da gestão. Lideranças têm papel essencial na prevenção de problemas, cuidando das pessoas e entendendo que um profissional em sofrimento psíquico é também um talento mal aproveitado.',
                    'Quando o trabalhador está desmotivado, sua performance cai, o engajamento da equipe é afetado e a rotatividade pode crescer. Por isso, é fundamental construir um local mais saudável e acolhedor.',
                ],
                bullets: [
                    'Treinamentos de liderança para tornar a gestão mais humanizada e assertiva.',
                    'Escuta ativa para compreender necessidades e reduzir tensões no dia a dia.',
                    'Medição da satisfação dos colaboradores com feedbacks consistentes.',
                    'Jornadas de trabalho mais realistas, comunicação transparente e remuneração justa.',
                ],
            },
            {
                title: 'Como a consultoria de RH auxilia na prevenção de afastamentos',
                paragraphs: [
                    'Para apoiar decisões assertivas na gestão de pessoas, a Talentos Consultoria oferece processos estruturados, conduzidos por profissionais experientes em recursos humanos e departamento pessoal.',
                    'Com esse suporte, a empresa consegue medir satisfação, identificar pontos críticos e traçar planos estratégicos para manter permanência, motivação e bem-estar nas equipes.',
                ],
                bullets: [
                    'Pesquisa de clima para medir satisfação, identificar pontos de melhoria e orientar ações práticas.',
                    'Cargos e salários para estruturar funções e faixas salariais alinhadas ao mercado, atraindo e retendo talentos.',
                ],
                highlight:
                    'A prevenção de afastamentos passa por liderança preparada, ambiente acolhedor e decisões de RH orientadas por dados e escuta qualificada.',
            },
        ]}
        ctaTitle="Quer transformar o ambiente de trabalho em um espaço mais saudável?"
        ctaText="A Talentos Consultoria apoia sua empresa com soluções que fortalecem o bem-estar dos colaboradores e ajudam a prevenir afastamentos com uma gestão mais humana."
        recommendations={[
            {
                title: 'Pesquisa de Clima Organizacional',
                description: 'Meça a satisfação interna e transforme feedbacks em ações práticas para melhorar o ambiente de trabalho.',
                url: '/servicos/pesquisa-de-clima-organizacional',
                accent: 'red',
                icon: 'heart',
            },
            {
                title: 'Estruturação do RH',
                description: 'Ajuste processos e políticas internas para sustentar uma cultura mais saudável e produtiva.',
                url: '/servicos/estruturacao-do-rh',
                accent: 'orange',
                icon: 'building',
            },
        ]}
    />
);

export default BlogSaudeMentalTrabalhoPage;
