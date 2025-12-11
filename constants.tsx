import React from 'react';
import { Service } from './types';

// Icons (Heroicons)
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.998a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.996-1.858l6.002-3.001a2.25 2.25 0 012.25 0l6.002 3.001a2.25 2.25 0 01.996 1.858z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25l-3.75-1.875L8.25 11.25V5.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25v6z" />
  </svg>
);

const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BuildingOfficeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V3.75h7.5V21M8.25 3.75h7.5m-7.5 0V3m7.5 0V3m0 0h-7.5" />
    </svg>
);

const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

const CurrencyDollarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const ArrowPathIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-11.667-11.667l3.181 3.183a8.25 8.25 0 0111.667 0l3.181-3.183m-11.667 11.667l-3.181-3.183a8.25 8.25 0 01-3.181-11.667l3.181-3.183" />
    </svg>
);

const WrenchScrewdriverIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.527-1.032.288-2.357-.635-3.28zM11.42 15.17L5.877 21m6.491-9.332l.243.292c.527 1.032.288 2.357-.635 3.28zM9.003 15.17l-2.496-3.03c-.527-1.032-.288-2.357.635-3.28z" />
    </svg>
);

const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.505 17.168 3 13.586 3 9.75a9 9 0 1118 0c0 3.836-1.505 7.418-3.75 9.541z" />
    </svg>
);

// Build a path that respects Vite's base without requiring an absolute URL.
const resolveLogo = (file: string) => `${import.meta.env.BASE_URL}logos/${file}`;

export const services: Service[] = [
  {
    id: 1,
    slug: 'terceirizacao-de-mao-de-obra',
    title: 'Terceirização de Mão de Obra',
    shortDescription: 'Foco no seu negócio principal enquanto cuidamos da gestão de pessoal.',
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
  },
  {
    id: 2,
    slug: 'recrutamento-e-selecao',
    title: 'Recrutamento e Seleção',
    shortDescription: 'Encontramos os melhores talentos para a sua empresa.',
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
  },
    {
    id: 3,
    slug: 'estruturacao-do-rh',
    title: 'Estruturação do RH',
    shortDescription: 'Implementamos ou otimizamos o departamento de RH da sua empresa.',
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
  },
   {
    id: 4,
    slug: 'mapeamento-e-descricao-de-cargos',
    title: 'Mapeamento e Descrição de Cargos',
    shortDescription: 'Clareza nas responsabilidades e competências de cada função.',
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
  },
  {
    id: 5,
    slug: 'cargos-e-salarios',
    title: 'Cargos e Salários',
    shortDescription: 'Estruture uma política de remuneração justa e competitiva.',
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
  },
  {
    id: 6,
    slug: 'pesquisa-de-clima-organizacional',
    title: 'Pesquisa de Clima Organizacional',
    shortDescription: 'Entenda a percepção dos seus colaboradores e melhore o ambiente de trabalho.',
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
  },
   {
    id: 7,
    slug: 'outplacement',
    title: 'Outplacement',
    shortDescription: 'Apoio e orientação para profissionais em transição de carreira.',
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
  },
  {
    id: 8,
    slug: 'projetos-customizados',
    title: 'Projetos Customizados',
    shortDescription: 'Soluções de RH sob medida para as necessidades da sua empresa.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>Entendemos que cada organização é única. Por isso, desenvolvemos projetos de RH totalmente personalizados para atender às suas demandas específicas. Seja qual for o seu desafio em gestão de pessoas, nós temos a solução.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Exemplos de Projetos:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Programas de avaliação de desempenho.</li>
                <li>Desenvolvimento de lideranças.</li>
                <li>Programas de integração de novos colaboradores (onboarding).</li>
                <li>Planejamento de sucessão.</li>
                <li>Mapeamento de competências.</li>
            </ul>
        </div>
    ),
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/projetos-customizados-1.jpg',
  },
  {
    id: 9,
    slug: 'consultoria-de-rh',
    title: 'Consultoria de RH',
    shortDescription: 'Expertise para alavancar a gestão de pessoas na sua organização.',
    longDescription: (
        <div className="space-y-4 text-gray-700">
            <p>Nossa consultoria de RH atua como um parceiro estratégico, oferecendo diagnósticos, recomendações e suporte na implementação das melhores práticas de gestão de pessoas. Ajudamos a alinhar as estratégias de RH com os objetivos de negócio da sua empresa.</p>
            <h3 className="text-xl font-semibold text-gray-800 pt-4">Áreas de Atuação:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Diagnóstico organizacional e planejamento estratégico de RH.</li>
                <li>Desenvolvimento de cultura e valores.</li>
                <li>Gestão de mudanças organizacionais.</li>
                <li>Políticas de remuneração e benefícios.</li>
                <li>Otimização de processos e indicadores de RH.</li>
            </ul>
        </div>
    ),
    icon: <LightBulbIcon className="w-10 h-10 text-orange-500" />,
    imageUrl: 'https://talentosconsultoria.com.br/wp-content/uploads/2020/08/consultoria-de-rh-1.jpg',
  }
];

export const aboutUsText = {
    title: "Sobre a Talentos Consultoria",
    content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Fundada com o propósito de transformar a gestão de pessoas em um diferencial competitivo para as empresas, a <strong>Talentos Consultoria</strong> se consolidou no mercado como uma parceira estratégica em Recursos Humanos.</p>
            <p>Com uma equipe de consultores experientes e apaixonados pelo que fazem, atuamos de forma personalizada, entendendo a fundo a cultura e as necessidades de cada cliente. Nosso objetivo é ir além do tradicional, oferecendo soluções inovadoras e eficazes que impulsionam o crescimento e o desenvolvimento tanto das organizações quanto de seus colaboradores.</p>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nossa Missão</h3>
                <p>Promover o desenvolvimento humano e organizacional através de soluções de RH personalizadas, éticas e de alta performance, gerando valor para nossos clientes, colaboradores e para a sociedade.</p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nossa Visão</h3>
                <p>Ser a consultoria de RH referência no mercado, reconhecida pela excelência de seus serviços, pela inovação em suas práticas e pelo impacto positivo que gera nos negócios de seus clientes.</p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nossos Valores</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Ética e Transparência:</strong> Conduzimos nossos negócios com integridade e clareza.</li>
                    <li><strong>Foco no Cliente:</strong> Entendemos suas dores para entregar as melhores soluções.</li>
                    <li><strong>Excelência:</strong> Buscamos a mais alta qualidade em tudo o que fazemos.</li>
                    <li><strong>Inovação:</strong> Estamos em constante aprendizado e evolução.</li>
                    <li><strong>Valorização das Pessoas:</strong> Acreditamos que as pessoas são o maior ativo das organizações.</li>
                </ul>
            </div>
        </div>
    )
};

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
    }
];

export const clients = [
    // Logos locais (pasta public/logos)
    { name: 'Aloform', logoUrl: resolveLogo('Aloform-Logo.png') },
    { name: 'Supermercados Guanabara', logoUrl: resolveLogo('Guanabara.jpg') },
    { name: 'Ambev', logoUrl: resolveLogo('logo-ambev.jpg') },
    { name: 'Maersk', logoUrl: resolveLogo('maersk-logo.png') },
    { name: 'Club Med', logoUrl: resolveLogo('clubmed-logo.png') },
    { name: 'Coltene', logoUrl: resolveLogo('COLTENE-NORTH-AMERICAN-TEAM-500X500.jpg') },
    { name: 'Kongsberg', logoUrl: resolveLogo('kongsberg.png') },
    { name: 'ABS', logoUrl: resolveLogo('abs.jpg') },
    { name: 'Bunge', logoUrl: resolveLogo('Bunge-lgo.png') },
    { name: 'Greif', logoUrl: resolveLogo('greif-Logo.jpg') },
    { name: 'RP', logoUrl: resolveLogo('Logo_RP.jpg') },
    { name: 'Medika', logoUrl: resolveLogo('Medika-Logo.png') },
    { name: 'Mozak', logoUrl: resolveLogo('Mozak-logo.png') },
    { name: 'Cartão de Todos', logoUrl: resolveLogo('cartao-de-todos.webp') },
    { name: 'NIO Digital', logoUrl: resolveLogo('nio-digital.webp') },
    { name: 'Princesa', logoUrl: resolveLogo('princesa.webp') },
];


export const blogArticles = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        title: 'Pesquisa de clima organizacional: como transformar feedbacks em oportunidades',
        excerpt: 'Entenda como uma pesquisa de clima bem estruturada pode revelar insights valiosos e se tornar uma ferramenta estratégica para a gestão de pessoas.',
        url: '#'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        title: 'Gestão de talentos inteligente: como desenvolver times de alta performance',
        excerpt: 'Descubra as melhores práticas para identificar, desenvolver e reter talentos, construindo equipes que impulsionam os resultados da sua empresa.',
        url: '#'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
        title: 'Terceirização de mão de obra: agilidade operacional para sua empresa',
        excerpt: 'Saiba como a terceirização pode otimizar processos, reduzir custos e permitir que sua empresa foque no que realmente importa: seu core business.',
        url: '#'
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
    { title: "Pesquisa de clima organizacional: como transformar feedbacks em oportunidades", url: "#" },
    { title: "Gestão de talentos inteligente: como desenvolver times de alta performance", url: "#" },
    { title: "Terceirização de mão de obra: agilidade operacional para sua empresa", url: "#" },
    { title: "Recrutamento e seleção estratégico: como atrair os melhores talentos", url: "#" },
    { title: "O papel da liderança assertiva no ambiente de trabalho", url: "#" },
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

export const whatsappLink = "https://wa.me/552131769500"; // Exemplo de número, substitua pelo correto
