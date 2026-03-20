import React from 'react';
import BlogArticleTemplate from './BlogArticleTemplate';

const BlogConsultoriaRHBeneficiosPage: React.FC = () => (
    <BlogArticleTemplate
        title="Consultoria de RH: conheça os principais benefícios para sua empresa"
        subtitle="Com suporte especializado, sua empresa ganha mais previsibilidade, melhora a gestão de pessoas e fortalece resultados com processos mais assertivos."
        imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
        imageAlt="Consultoria de RH"
        accentClass="bg-gradient-to-br from-red-700 to-orange-600"
        accentSoftClass="bg-orange-300"
        intro={[
            'A busca por profissionais capacitados se torna ainda mais desafiadora com as mudanças no mercado de trabalho. Com o aumento das exigências no recrutamento e seleção, a gestão de recursos humanos passa a ser um ponto indispensável para o crescimento saudável das empresas.',
            'Para auxiliar o negócio, a consultoria de RH oferece serviços que tornam as práticas de gestão mais assertivas, atraindo e retendo os melhores profissionais. Com isso, a empresa conta com uma parceira especializada em estratégias mais humanas e eficazes.',
            'Na Talentos Consultoria de RH, a proximidade e a assertividade nos processos tornam a experiência mais sólida e previsível para quem precisa estruturar ou aprimorar a gestão de pessoas.',
        ]}
        sections={[
            {
                title: 'O que faz a consultoria de RH',
                paragraphs: [
                    'A consultoria de recursos humanos atua como parceira estratégica na gestão de pessoas. Ela traz um olhar imparcial às necessidades do negócio, ajudando a melhorar clima organizacional, atrair e reter talentos e potencializar resultados.',
                    'Esse suporte é realizado por especialistas experientes em recursos humanos e departamento pessoal, com atuação prática em processos que exigem organização, análise e tomada de decisão.',
                ],
            },
            {
                title: 'Serviços que apoiam diferentes etapas da gestão',
                paragraphs: [
                    'Os serviços de consultoria envolvem estratégias relacionadas a diferentes momentos da gestão de RH, desde a estruturação do setor até o desligamento humanizado e o redirecionamento profissional.',
                ],
                bullets: [
                    'Estruturação de RH para empresas que desejam organizar o setor e manter autonomia após a implantação.',
                    'Recrutamento e seleção para contratação de profissionais alinhados à cultura organizacional.',
                    'Terceirização de mão de obra para reduzir burocracia e liberar a gestão para o foco no core business.',
                    'Pesquisa de clima para medir satisfação e orientar planos de ação internos.',
                    'Cargos e salários para alinhar funções, qualificações e faixas salariais ao mercado.',
                    'Outplacement para desligamentos mais humanizados e redução de impactos trabalhistas e culturais.',
                ],
            },
            {
                title: 'Principais benefícios para sua empresa',
                paragraphs: [
                    'Com soluções de consultoria bem estruturadas, a empresa melhora sua gestão de pessoas e ganha mais segurança operacional no dia a dia.',
                ],
                bullets: [
                    'Mais tempo para focar na atividade principal, enquanto especialistas cuidam da gestão de pessoas.',
                    'Descentralização de tarefas com apoio técnico de quem realmente entende de RH e departamento pessoal.',
                    'Previsibilidade para o negócio, com processos bem definidos e prevenção de erros.',
                    'Consultoria mais próxima, capaz de ouvir as reais necessidades da empresa e propor soluções aderentes.',
                ],
                highlight:
                    'O papel da consultoria de RH é garantir que as pessoas certas estejam nos lugares certos, extraindo o melhor de cada profissional.',
            },
        ]}
        ctaTitle="Quer uma gestão de pessoas mais estratégica?"
        ctaText="A Talentos Consultoria apoia empresas em diferentes desafios de RH, com processos estruturados, atendimento próximo e soluções ajustadas à realidade do negócio."
        recommendations={[
            {
                title: 'Consultoria de RH',
                description: 'Conte com apoio especializado para estruturar processos, corrigir gargalos e melhorar a gestão de pessoas.',
                url: '/servicos/consultoria-de-rh',
                accent: 'red',
                icon: 'building',
            },
            {
                title: 'Estruturação do RH',
                description: 'Implemente um RH mais organizado, autônomo e alinhado aos objetivos do seu negócio.',
                url: '/servicos/estruturacao-do-rh',
                accent: 'orange',
                icon: 'briefcase',
            },
        ]}
    />
);

export default BlogConsultoriaRHBeneficiosPage;
