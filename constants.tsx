import React from 'react';
import { Service } from './types';

// Icons (Heroicons)
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
  </svg>
);

const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const BuildingOfficeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3M10.5 18h3M7.125 10.5v3M16.875 10.5v3" />
    </svg>
);

const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
);

const CurrencyDollarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
);

const ArrowPathIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25l-4.5 4.5 4.5 4.5M16.5 8.25l4.5 4.5-4.5 4.5M3 12.75h7.5M13.5 12.75H21" />
    </svg>
);

const WrenchScrewdriverIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.505 17.168 3 13.586 3 9.75a9 9 0 1118 0c0 3.836-1.505 7.418-3.75 9.541z" />
    </svg>
);

// Build a path that respects Vite's base without requiring an absolute URL.
const resolveLogo = (file: string) => `${import.meta.env.BASE_URL}logos.clientes/${file}`;

export const services: Service[] = [
  {
    id: 1,
    slug: 'terceirizacao-de-mao-de-obra',
    title: 'Terceirização de Mão de Obra',
    shortDescription: 'Contratar profissionais terceirizados para as mais diversas áreas pode ser a solução ideal para empresas que precisam concentrar energia em seus core businesses. A Talentos Consultoria é parceira ideal para entender as suas necessidades e contratar a mão de obra do jeito que você precisa. Oferecemos as modalidades: Efetiva por tempo indeterminado, Efetiva por tempo determinado e Temporária.',
    longDescription: (
      <div className="space-y-4 text-gray-700">
        <p>A terceirização de mão de obra permite que sua empresa foque em seu negócio principal, enquanto a Talentos Consultoria cuida de todas as rotinas de administração de pessoal, desde o recrutamento até o desligamento do profissional, seguindo as normas da CLT e exigências sindicais.</p>
        <h3 className="text-xl font-semibold text-gray-800 pt-4">Nossos Serviços Incluem:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Recrutamento e seleção de profissionais qualificados.</li>
          <li>Administração completa do contrato de trabalho (admissão, documentação, etc.).</li>
          <li>Processamento da folha de pagamento, encargos e benefícios.</li>
          <li>Controle de ponto, férias, e afastamentos.</li>
          <li>Representação junto a sindicatos e órgãos governamentais.</li>
          <li>Consultoria trabalhista e previdenciária.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 pt-4">Vantagens:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Redução de custos operacionais e de estrutura de RH.</li>
          <li>Maior agilidade na contratação e substituição de pessoal.</li>
          <li>Segurança jurídica e conformidade com a legislação.</li>
          <li>Foco total no core business da sua empresa.</li>
        </ul>
      </div>
    ),
    icon: <BriefcaseIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/terceirizacao-de-mao-de-obra-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Home/Terceirização de mao de obra.png`,
  },
  {
    id: 2,
    slug: 'recrutamento-e-selecao',
    title: 'Recrutamento e Seleção',
    shortDescription: 'Contratar as pessoas certas é um dos principais pilares para o crescimento e sucesso de uma empresa. Desde 2011 no mercado, tendo realizado mais de 8.300 contratações, somos referência em consultoria de recrutamento e seleção no Brasil. Temos experiência em atendimento a diversos tipos de necessidades, de pequenas e grandes empresas, incluindo posições de liderança e cargos operacionais.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>Com um processo de recrutamento e seleção bem estruturado, identificamos e atraímos os profissionais mais qualificados e alinhados à cultura da sua organização. Utilizamos as mais modernas técnicas e ferramentas para garantir a melhor escolha.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Nosso Processo:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Alinhamento de perfil da vaga com o gestor.</li>
                <li>Divulgação estratégica em diversos canais.</li>
                <li>Triagem de currículos e hunting ativo.</li>
                <li>Entrevistas por competências e dinâmicas de grupo.</li>
                <li>Aplicação de testes técnicos e comportamentais.</li>
                <li>Verificação de referências profissionais.</li>
                <li>Apresentação dos finalistas e suporte na decisão.</li>
            </ul>
        </div>
    ),
    icon: <UserGroupIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/recrutamento-e-selecao-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Home/Recrutamento seleção.png`,
  },
    {
    id: 3,
    slug: 'estruturacao-do-rh',
    title: 'Estruturação do RH',
    shortDescription: 'Uma das vantagens de se contratar uma consultoria em Recursos Humanos é poder contar com uma visão profissional e imparcial sobre o RH da sua empresa. A Estruturação do RH é o serviço de consultoria da Talentos que analisa os processos e controles do seu RH, avaliando métricas de desempenho da equipe, apontando problemas e indicando soluções para melhorar a produtividade do setor.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>A Talentos Consultoria auxilia sua empresa na implantação ou reestruturação do departamento de Recursos Humanos, tornando-o um parceiro estratégico para o negócio. Desenvolvemos políticas, processos e ferramentas para uma gestão de pessoas eficiente e alinhada aos objetivos da organização.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Etapas do Projeto:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Diagnóstico da situação atual do RH.</li>
                <li>Definição de políticas de RH (recrutamento, treinamento, cargos e salários, etc.).</li>
                <li>Desenvolvimento de manuais de normas e procedimentos.</li>
                <li>Implementação de ferramentas de gestão (avaliação de desempenho, pesquisa de clima).</li>
                <li>Treinamento da equipe interna para a condução dos novos processos.</li>
            </ul>
        </div>
    ),
    icon: <BuildingOfficeIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/estruturacao-do-rh-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Home/Estruturação RH.png`,
  },
   {
    id: 4,
    slug: 'mapeamento-e-descricao-de-cargos',
    title: 'Mapeamento e Descrição de Cargos',
    shortDescription: 'O mapeamento de cargos é a descrição de cada posição de trabalho que existe na empresa, com as suas competências, habilidades requeridas, responsabilidades e salário correspondente. Ajuda as empresas a desenvolverem e contratarem pessoas, focando na melhor adequação dos perfis às exigências dos cargos. Como resultado, sua empresa terá melhor clima organizacional e equipes mais produtivas.',
    longDescription: (
         <div className="space-y-4 text-gray-700">
            <p>O mapeamento e a descrição de cargos são a base para diversos subsistemas de RH. Nosso trabalho consiste em identificar, analisar e registrar as atribuições, responsabilidades, requisitos e competências de cada cargo na estrutura organizacional, proporcionando clareza e alinhamento.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Benefícios:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Facilita o recrutamento e seleção, focando nos requisitos certos.</li>
                <li>Base para a estruturação de planos de cargos e salários.</li>
                <li>Orienta programas de treinamento e desenvolvimento.</li>
                <li>Serve como insumo para a avaliação de desempenho.</li>
                <li>Define claramente as expectativas para os colaboradores.</li>
            </ul>
        </div>
    ),
    icon: <DocumentTextIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/mapeamento-e-descricao-de-cargos-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Módulos RS/Integração e Treinamento.jpg`,
  },
  {
    id: 5,
    slug: 'cargos-e-salarios',
    title: 'Cargos e Salários',
    shortDescription: 'O plano de cargos e salários é um instrumento que estabelece as funções, qualificações necessárias e faixas salariais dentro de uma organização. Permite às empresas conhecerem seu posicionamento salarial atual em relação ao mercado e planejarem seu posicionamento ideal. Com ele, os gestores contam com mais critérios para definir a remuneração, traçar estratégias para atrair e manter profissionais qualificados.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>Desenvolvemos e implementamos Planos de Cargos e Salários que promovem a equidade interna e a competitividade externa. Uma política de remuneração bem definida é fundamental para atrair, reter e motivar talentos.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Nossa Metodologia:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Descrição e avaliação dos cargos.</li>
                <li>Pesquisa salarial de mercado.</li>
                <li>Definição das faixas salariais.</li>
                <li>Criação de políticas de remuneração e promoção.</li>
                <li>Comunicação e implantação do plano.</li>
            </ul>
        </div>
    ),
    icon: <CurrencyDollarIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/cargos-e-salarios-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Módulos RS/Remuneração e Benefícios.jpeg`,
  },
  {
    id: 6,
    slug: 'pesquisa-de-clima-organizacional',
    title: 'Pesquisa de Clima Organizacional',
    shortDescription: 'O engajamento e o clima organizacional são alguns dos fatores que mais impactam na satisfação e produtividade dos colaboradores de uma empresa. A maneira mais efetiva de se medir esses indicadores é através da pesquisa de clima organizacional. Por meio dessa pesquisa, é possível coletar dados concretos sobre a satisfação e o engajamento dos colaboradores e identificar os principais problemas de gestão.',
    longDescription: (
       <div className="space-y-4 text-gray-700">
            <p>A Pesquisa de Clima Organizacional é uma ferramenta estratégica para medir o nível de satisfação e engajamento dos colaboradores. Através de um diagnóstico preciso, identificamos pontos fortes e oportunidades de melhoria na gestão de pessoas e no ambiente de trabalho.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Processo:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Customização do questionário conforme a realidade da empresa.</li>
                <li>Aplicação da pesquisa (online ou física) com garantia de sigilo.</li>
                <li>Tabulação e análise estatística dos dados.</li>
                <li>Apresentação dos resultados e recomendações de planos de ação.</li>
            </ul>
        </div>
    ),
    icon: <ChartBarIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/pesquisa-de-clima-organizacional-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Home/Pesquisa de clima.png`,
  },
   {
    id: 7,
    slug: 'outplacement',
    title: 'Outplacement',
    shortDescription: 'Outplacement é o programa de Recursos Humanos que objetiva amenizar o impacto das demissões e facilitar a transição de carreira dos profissionais desligados. Para o profissional, transforma a difícil experiência em oportunidade de reflexão e crescimento. Para a empresa, melhora a imagem no mercado, o clima entre colaboradores remanescentes e reduz riscos com processos trabalhistas.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>Oferecemos suporte a profissionais desligados da empresa, auxiliando em sua recolocação no mercado de trabalho. Este serviço humaniza o processo de demissão, preserva a imagem da empresa e oferece um direcionamento de carreira para o profissional.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">O Programa Inclui:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Aconselhamento e planejamento de carreira.</li>
                <li>Elaboração de currículo e perfil em redes profissionais.</li>
                <li>Treinamento para entrevistas e networking.</li>
                <li>Mapeamento de oportunidades de mercado.</li>
                <li>Suporte emocional durante a transição.</li>
            </ul>
        </div>
    ),
    icon: <ArrowPathIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/outplacement-1.jpg',
    bgImage: `${import.meta.env.BASE_URL}Home/Outplacement.png`,
  },
];

export const aboutUsText = {
    title: "Sobre a Talentos Consultoria",
    content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>A TALENTOS CONSULTORIA é uma empresa especializada em <strong>gestão de pessoas</strong>, que oferece uma ampla gama de <strong>serviços em recursos humanos</strong>.</p>
            <p>Em busca da excelência, a TALENTOS CONSULTORIA formou uma <strong>equipe de profissionais experientes e capacitados</strong> para desenvolver diversas soluções em recursos humanos, com amplitude de atuação que varia do operacional ao executivo.</p>
            <p>Nosso variado portfólio de serviços em RH proporciona aos clientes <strong>otimização de tempo e recursos</strong>, estimulando que os mesmos concentrem esforços em suas atividades estratégicas (core business) e aumentem a produtividade global dos seus negócios.</p>
        </div>
    )
};

export const historyTimeline = [
    {
        id: 1,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/patricia-ayres-fundadora.jpg`,
        imagePosition: 'left',
        content: (
            <>
                <p>A história da Talentos Consultoria começa em <strong>2011</strong>.</p>
                <p><strong>Patrícia Ayres</strong>, então Gerente Comercial em uma renomada Consultoria de Terceirização de Mão de Obra, recebeu de um de seus clientes mais importantes a demanda de fornecer equipamentos, além de mão de obra.</p>
            </>
        ),
    },
    {
        id: 2,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/processo-de-gente-planejamento-de-rh.jpg`,
        imagePosition: 'right',
        content: (
            <>
                <p>No entanto, <span className="text-red-600">fornecer equipamentos não fazia parte do portfólio da Consultoria</span>, que também não tinha interesse em atender a demanda específica do cliente.</p>
                <p>Diante da oportunidade, <strong>Patrícia Ayres funda a Talentos Consultoria</strong> para suprir a necessidade do cliente, numa decisão estratégica e em comum acordo com a empresa em que trabalhava por mais de 20 anos.</p>
            </>
        ),
    },
    {
        id: 3,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/treinamentos-rh.jpg`,
        imagePosition: 'left',
        content: (
            <>
                <p>Assim, a Talentos Consultoria nasce prestando serviços para uma grande multinacional de bebidas, operando o armazém do centro de distribuição de uma de suas unidades no Rio de Janeiro, fornecendo mão de obra e empilhadeiras.</p>
                <p><span className="text-red-600">Desde então, a Talentos Consultoria não parou mais de crescer.</span></p>
            </>
        ),
    },
    {
        id: 4,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/consultores-da-talentos.jpg`,
        imagePosition: 'right',
        content: (
            <>
                <p><strong>Profissionais experientes</strong> em diferentes áreas de RH se juntaram ao time ao longo dos anos, ampliando cada vez mais o <span className="text-red-600">portfólio de serviços de RH</span> em linha com as necessidades do mercado.</p>
                <p>Reconhecendo a qualidade dos serviços prestados, <strong>novos clientes foram conquistados</strong> ano após ano.</p>
            </>
        ),
    },
    {
        id: 5,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/escritorio-talentos-consultoria-01.jpg`,
        imagePosition: 'left',
        content: (
            <>
                <p>Em <strong>2018</strong>, nos mudamos para um escritório amplo e moderno, para atrair novos talentos e manter o nosso crescimento contínuo, sem perder a qualidade dos nossos serviços.</p>
            </>
        ),
    },
    {
        id: 6,
        imageUrl: `${import.meta.env.BASE_URL}nossa hist/diretores-talentos-consultoria.jpg`,
        imagePosition: 'right',
        content: (
            <>
                <p>Hoje em dia temos uma equipe experiente e comprometida, além de uma excelente estrutura, para atendermos bem clientes de <span className="text-red-600">diversos segmentos e diferentes portes</span>.</p>
            </>
        ),
    },
];

export const testimonials = [
    {
        quote: "A Talentos é uma empresa que tem muito foco no cliente e aderência aos processos internos, sempre entregando resultados de forma consistente e da maneira certa. O diferencial deles está na qualidade das pessoas que eles contratam e no interesse genuíno pelos funcionários.",
        name: "Bruno Melaré",
        title: "Diretoria de Serviço ao Cliente, Ambev",
        imageUrl: `${import.meta.env.BASE_URL}depoimento-bruno.png`,
    },
    {
        quote: "A equipe de profissionais da Talentos é extremamente competente e o compromisso com o cliente se mostra exemplar. A experiência tem sido a melhor possível.",
        name: "Jorge Kreimer",
        title: "Diretor Executivo, Centro da Memória da Eletricidade",
        imageUrl: `${import.meta.env.BASE_URL}depoimento-jorge.png`,
    },
    {
        quote: "É ótimo ter a Talentos atuando no nosso negócio. A cultura de excelência no atendimento ao cliente, o foco constante no desenvolvimento, engajamento e retenção das pessoas é praticado no dia a dia.",
        name: "Márcio Ferreira",
        title: "Regional Operations Manager, Ambev",
        imageUrl: `${import.meta.env.BASE_URL}depoimento-marcio.png`,
    },
    {
        quote: "Estou querendo contratar o serviço de recrutamento de novo. A equipe do RH foi muito assertiva.",
        name: "Matheus Lopes",
        title: "Sócio na Baked Panificadora",
        imageUrl: `${import.meta.env.BASE_URL}Matheus.jpg`,
    }
];

export const clients = [
    // Logos locais (pasta public/logos.clientes)
    { name: 'Ambev', logoUrl: resolveLogo('clientes-ambev.jpg') },
    { name: 'Supermercados Guanabara', logoUrl: resolveLogo('clientes-guanabara.jpg') },
    { name: 'Maersk', logoUrl: resolveLogo('clientes-maersk.jpg') },
    { name: 'Greif', logoUrl: resolveLogo('greif.jpg') },
    { name: 'Ruhrpumpen', logoUrl: resolveLogo('ruhrpumpen.jpg') },
    { name: 'Medka Hospitalar', logoUrl: resolveLogo('medka-hospitalar.jpg') },
    { name: 'Mozak', logoUrl: resolveLogo('mozak.jpg') },
    { name: 'Cartão de Todos', logoUrl: resolveLogo('cartao-de-todos.jpg') },
    { name: 'NIO Digital', logoUrl: resolveLogo('nio-digital.jpg') },
    { name: 'Princesa', logoUrl: resolveLogo('princesa.jpg') },
    { name: 'Delivery Center', logoUrl: resolveLogo('clientes-deliverycenter.jpg') },
    { name: 'Doinet', logoUrl: resolveLogo('clientes-doinet.jpg') },
    { name: 'Exterran', logoUrl: resolveLogo('clientes-exterran.jpg') },
    { name: 'Mylan', logoUrl: resolveLogo('clientes-mylan.jpg') },
    { name: 'Remax', logoUrl: resolveLogo('clientes-remax.jpg') },
    { name: 'Ultracargo', logoUrl: resolveLogo('clientes-ultracargo.jpg') },
    { name: 'Debora Aguiar', logoUrl: resolveLogo('deboraaguiar.jpg') },
    { name: 'Baked', logoUrl: resolveLogo('baked.jpeg') },
    { name: 'Ball', logoUrl: resolveLogo('Ball-1.png') },
    { name: 'Fruto de Goiás', logoUrl: resolveLogo('Fruto de goias.png') },
    { name: 'Microblau', logoUrl: resolveLogo('logotipo-microblau.jpg') },
    { name: 'MRV', logoUrl: resolveLogo('MRV.jpg') },
    { name: 'Technogym', logoUrl: resolveLogo('Technogym.png') },
];


export const blogArticles = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        title: 'Pesquisa de clima organizacional: como transformar feedbacks em oportunidades',
        excerpt: 'Entenda como uma pesquisa de clima bem estruturada pode revelar insights valiosos e se tornar uma ferramenta estratégica para a gestão de pessoas.',
        url: '/blog/pesquisa-de-clima-organizacional',
        isInternal: true
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        title: 'Gestão de talentos inteligente: como desenvolver times de alta performance',
        excerpt: 'Descubra as melhores práticas para identificar, desenvolver e reter talentos, construindo equipes que impulsionam os resultados da sua empresa.',
        url: '/blog/gestao-de-talentos',
        isInternal: true
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
        title: 'Terceirização de mão de obra: agilidade operacional para sua empresa',
        excerpt: 'Saiba como a terceirização pode otimizar processos, reduzir custos e permitir que sua empresa foque no que realmente importa: seu core business.',
        url: '/blog/terceirizacao-de-mao-de-obra',
        isInternal: true
    },
];

export const footerInfo = {
    description: "Consultoria de RH no Rio de Janeiro, que oferece soluções para Recursos Humanos de empresas em todo o Brasil. Atendemos clientes de diferentes portes e segmentos.",
    cnpj: "CNPJ: 14.318.116/0001-88",
};

export const jobLinks = [
    { title: "Consultar Vagas", url: "https://talentosconsultoria.infojobs.com.br/empregos.aspx" },
    { title: "Enviar Currículo", url: "https://talentosconsultoria.infojobs.com.br/empregos.aspx" },
];

export const latestArticles = [
    { title: "Pesquisa de clima organizacional: como transformar feedbacks em oportunidades", url: "/blog/pesquisa-de-clima-organizacional", isInternal: true },
    { title: "Gestão de talentos inteligente: como desenvolver times de alta performance", url: "/blog/gestao-de-talentos", isInternal: true },
    { title: "Terceirização de mão de obra: agilidade operacional para sua empresa", url: "/blog/terceirizacao-de-mao-de-obra", isInternal: true },
    { title: "Recrutamento e seleção estratégico: como atrair os melhores talentos", url: "/blog/em-construcao", isInternal: true },
    { title: "O papel da liderança assertiva no ambiente de trabalho", url: "/blog/em-construcao", isInternal: true },
];

export const legalLinks = [
    { title: "Política de Privacidade", url: "#" },
    { title: "Transparência Social", url: "#" },
];

export const contactInfo = {
    address: "Av. Rio Branco 133 – 20º Andar\nCentro – Rio de Janeiro",
    phone: "(21) 3176-9500",
    email: "contato@talentosconsultoria.com.br"
};

export const socialLinks = {
    linkedin: "https://www.linkedin.com/company/talentos-consultoria-e-negocios/",
    instagram: "https://www.instagram.com/talentosconsultoria/",
    facebook: "https://www.facebook.com/p/Talentos-Consultoria-100063451123419/"
};

export const whatsappLink = "https://wa.me/5521967155476";
