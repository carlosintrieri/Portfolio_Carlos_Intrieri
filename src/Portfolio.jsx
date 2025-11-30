import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
    const [currentLang, setCurrentLang] = useState('pt');
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [typewriterText, setTypewriterText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [formStatus, setFormStatus] = useState('');
    const observerRef = useRef();

    const translations = {
        pt: {
            nav: {
                home: "Home",
                about: "Sobre",
                skills: "Skills",
                experience: "Experiência",
                projects: "Projetos",
                contact: "Contato"
            },
            hero: {
                greeting: "Olá, eu sou",
                name: "Carlos Intrieri",
                title: "Desenvolvedor de Software & Filósofo",
                subtitle: "Criando experiências digitais únicas com código e reflexão",
                cta: "Vamos conversar",
                typewriterTexts: [
                    "Desenvolvedor de Software & Filósofo",
                    "Desenvolvedor de Software",
                    "Filósofo & Programador",
                    "Criador de Soluções Digitais"
                ]
            },
            about: {
                title: "Sobre Mim",
                description: "Sou Carlos Intrieri, uma combinação única de filósofo e desenvolvedor. Minha jornada começou na filosofia, onde aprendi a questionar, analisar e buscar a essência das coisas. Essa base filosófica se tornou minha maior força no desenvolvimento de software.",
                passion: "Paixão pelo Conhecimento",
                passionDesc: "Vivo pelo aprendizado contínuo, sempre buscando novas tecnologias e metodologias.",
                philosophy: "Pensamento Crítico",
                philosophyDesc: "Aplico o rigor filosófico na resolução de problemas complexos de programação.",
                wine: "Sommelier de Vinhos",
                wineDesc: "Especialista em vinhos, aplicando a mesma precisão na degustação e no código.",
                music: "Entusiasta Musical",
                musicDesc: "A música inspira minha criatividade e ritmo de desenvolvimento."
            },
            skills: {
                title: "Minhas Competências"
            },
            experience: {
                title: "Experiência Profissional",
                experiences: [
                    {
                        period: "2024 - Atual",
                        role: "Estudante de Desenvolvimento de Software Multiplataforma",
                        company: "FATEC São José dos Campos",
                        description: "Curso superior em tecnologia com ênfase em desenvolvimento de software, banco de dados, metodologias ágeis e programação multiplataforma."
                    },
                    {
                        period: "2022 - 2023",
                        role: "Técnico em Desenvolvimento de Sistemas",
                        company: "ETEC Machado de Assis",
                        description: "Formação técnica em desenvolvimento de sistemas com foco em linguagens de programação diversas e metodologias de desenvolvimento."
                    },
                    {
                        period: "2015 - 2017",
                        role: "Bacharel em Filosofia",
                        company: "Faculdade Dehoniana",
                        description: "A filosofia me ensinou a pensar criticamente, questionar pressupostos e buscar a essência dos problemas. Esta base filosófica tornou-se fundamental no meu desenvolvimento como programador."
                    }
                ]
            },
            projects: {
                title: "Projetos em Destaque",
                viewProject: "Ver Projeto",
                viewCode: "Ver Código",
                viewDetails: "Ver Detalhes",
                closeModal: "Fechar",
                partner: "Parceiro",
                period: "Período",
                role: "Função",
                technologies: "Tecnologias",
                description: "Descrição",
                contributions: "Contribuições",
                hardSkills: "Hard Skills",
                softSkills: "Soft Skills",
                projects: [
                    {
                        id: "smartfarm",
                        title: "SmartFarm",
                        subtitle: "Sistema de Monitoramento para Estufa Inteligente",
                        description: "Sistema desenvolvido para monitoramento de estufa inteligente, onde dados vindos da estufa são armazenados e analisados em tempo real.",
                        partner: "FATEC + Equipe I9",
                        period: "3º Semestre - 2024",
                        role: "Scrum Master & Full Stack Developer",
                        mediaType: "video",
                        media: [
                            "/smart_farm_1.gif"
                        ],
                        technologies: [
                            { name: "HTML5", color: "#e34c26" },
                            { name: "CSS3", color: "#1572b6" },
                            { name: "JavaScript", color: "#f7df1e" },
                            { name: "Flask", color: "#000000" },
                            { name: "Python", color: "#3776ab" }
                        ],
                        longDescription: "Este projeto foi realizado para a FATEC junto à equipe I9 para simular um ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo era desenvolver um sistema para monitoramento de uma estufa inteligente, onde dados vindos desta estufa pudessem ser armazenados e analisados.",
                        contributions: "Atuei como Product Owner, sendo responsável pela criação do Product Backlog e organização dos sprints. Realizei a prototipação do projeto e desenvolvimento tanto no front-end quanto no back-end, criando funcionalidades de processamento de dados da estufa e sua exibição na interface gráfica.",
                        hardSkills: "Utilizei CSS e HTML na estruturação das páginas, JavaScript para obtenção de dados do backend e criação de filtros, e Flask para renderização de páginas e CRUD dos dados das estufas.",
                        softSkills: "Desenvolvi habilidades de comunicação como PO, mantendo contato constante com o cliente e ajudando colegas com dificuldades no desenvolvimento."
                    },
                    {
                        id: "syntax",
                        title: "Syntax",
                        subtitle: "Sistema de Construção de uma Aplicação de Tarefas",
                        description: "Sistema desenvolvido para armazenamento de listas de tarefas, projetos, calendário e gráficos, todos voltados para a criação de tarefas.",
                        partner: "GSW",
                        period: "3º Semestre - 2024",
                        role: "Full Stack Developer",
                        mediaType: "image",
                        media: [
                            "/YNTAX.png"
                        ],
                        technologies: [
                            { name: "React", color: "#61DAFB" },
                            { name: "Typescript", color: "#3178C6" },
                            { name: "Tailwind CSS", color: "#38BDF8" },
                            { name: "Spring Boot", color: "#6DB33F" },
                            { name: "MongoDB", color: "#4DB33D" }
                        ],
                        longDescription: "O desenvolvimento do sistema seguiu rigorosamente práticas modernas de metodologias ágeis, semelhantes ao processo utilizado na criação de aplicações de gerenciamento de tarefas de alta eficiência. Trabalhamos com ciclos iterativos curtos, definição clara de backlog, priorização orientada ao valor entregável e reuniões constantes de alinhamento, como dailies, sprint planning, reviews e retrospectivas. Esse fluxo permitiu que cada funcionalidade fosse planejada, construída e refinada de forma incremental, garantindo adaptação rápida às necessidades do cliente e entregas contínuas.",
                        contributions: "Minhas contribuições foram decisivas para garantir um projeto eficaz e alinhado ao objetivo do cliente. Atuei tanto no backend quanto no frontend, entregando funcionalidades completas e estáveis, além de colaborar ativamente na prototipação e integração das partes do sistema. Como membro proativo da equipe, incentivei o engajamento do grupo, ajudei a manter o ritmo das entregas e contribuí para um ambiente colaborativo e motivado.",
                        hardSkills: "No desenvolvimento, utilizei React aliado ao Tailwind CSS para construir interfaces responsivas e dinâmicas, com boa escalabilidade visual. Todo o front-end foi estruturado em TypeScript, garantindo tipagem forte e maior segurança no código. No back-end, empregamos Spring Boot para criação de APIs robustas e performáticas, integradas ao MongoDB, que permitiu um armazenamento flexível e eficiente dos dados capturados em tempo real.",
                        softSkills: "Aprimorei minhas habilidades colaborativas atuando de forma integrada tanto no front-end quanto no back-end, sempre com postura proativa para resolver impedimentos e apoiar o time. Desenvolvi ainda maior capacidade de comunicação, alinhamento técnico e cooperação durante as sprints, contribuindo para o fluxo contínuo e harmônico do projeto."
                    },
                    {
                        id: "invsort",
                        title: "Inv.Sort",
                        subtitle: "Sistema Para Gestão de Estoque",
                        description: "Aplicação web para gerenciamento de estoque empresarial com análise de dados, controle de produtos e relatórios avançados.",
                        partner: "FATEC",
                        period: "2º Semestre - 2024",
                        role: "Full Stack Developer",
                        mediaType: "carousel",
                        media: [
                            "/inv_sort1.png"
                        ],
                        technologies: [
                            { name: "React", color: "#61dafb" },
                            { name: "Tailwind CSS", color: "#06b6d4" },
                            { name: "Express.js", color: "#000000" },
                            { name: "Prisma ORM", color: "#2d3748" },
                            { name: "Axios", color: "#5a29e4" }
                        ],
                        longDescription: "Sistema criado para simular um ambiente real de desenvolvimento com metodologia ágil. O objetivo era criar uma aplicação web capaz de armazenar dados para uma empresa de estoque fictícia, bem como realizar análise e gerenciamento destes dados.",
                        contributions: "Atuei como desenvolvedor full stack, criando interface moderna e responsiva com React e Tailwind CSS. Desenvolvi componentes como dashboard de gerenciamento, tabelas dinâmicas com filtros e formulários com validação. No back-end, trabalhei com Express.js e Prisma ORM.",
                        hardSkills: "Construção de interfaces dinâmicas com React, estilização moderna com Tailwind CSS, integração com APIs usando Axios, e desenvolvimento de rotas REST com Express.js e Prisma ORM.",
                        softSkills: "Desenvolvi persistência e capacidade de trabalho em equipe, mantendo entregas dentro do prazo mesmo com desafios organizacionais durante as sprints."
                    }
                ]
            },
            contact: {
                title: "Vamos Construir Algo Juntos",
                subtitle: "Estou sempre aberto para discutir novas oportunidades e projetos interessantes",
                name: "Nome",
                email: "Email",
                subject: "Assunto",
                message: "Mensagem",
                send: "Enviar Mensagem",
                contactInfo: "Informações de Contato",
                location: "Localização",
                info: {
                    location: "Caçapava, SP - Brasil",
                    email: "carlos.intrieri@fatec.sp.gov.br"
                }
            }
        },
        en: {
            nav: {
                home: "Home",
                about: "About",
                skills: "Skills",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact"
            },
            hero: {
                greeting: "Hello, I'm",
                name: "Carlos Intrieri",
                title: "Software Developer & Philosopher",
                subtitle: "Creating unique digital experiences with code and reflection",
                cta: "Let's talk",
                typewriterTexts: [
                    "Software Developer & Philosopher",
                    "Software Developer",
                    "Philosopher & Programmer",
                    "Digital Solutions Creator"
                ]
            },
            about: {
                title: "About Me",
                description: "I'm Carlos Intrieri, a unique combination of philosopher and developer. My journey began in philosophy, where I learned to question, analyze and seek the essence of things. This philosophical foundation became my greatest strength in software development.",
                passion: "Passion for Knowledge",
                passionDesc: "I live for continuous learning, always seeking new technologies and methodologies.",
                philosophy: "Critical Thinking",
                philosophyDesc: "I apply philosophical rigor in solving complex programming problems.",
                wine: "Wine Sommelier",
                wineDesc: "Wine expert, applying the same precision in tasting and in code.",
                music: "Music Enthusiast",
                musicDesc: "Music inspires my creativity and development rhythm."
            },
            skills: {
                title: "My Skills"
            },
            experience: {
                title: "Professional Experience",
                experiences: [
                    {
                        period: "2024 - Current",
                        role: "Multiplatform Software Development Student",
                        company: "FATEC São José dos Campos",
                        description: "Higher technology course with emphasis on software development, databases, agile methodologies and multiplatform programming."
                    },
                    {
                        period: "2022 - 2023",
                        role: "Systems Development Technician",
                        company: "ETEC Machado de Assis",
                        description: "Technical training in systems development with focus on diverse programming languages and development methodologies."
                    },
                    {
                        period: "2015 - 2017",
                        role: "Bachelor in Philosophy",
                        company: "Faculdade Dehoniana",
                        description: "Philosophy taught me to think critically, question assumptions and seek the essence of problems. This philosophical foundation became fundamental in my development as a programmer."
                    }
                ]
            },
            projects: {
                title: "Featured Projects",
                viewProject: "View Project",
                viewCode: "View Code",
                viewDetails: "View Details",
                closeModal: "Close",
                partner: "Partner",
                period: "Period",
                role: "Role",
                technologies: "Technologies",
                description: "Description",
                contributions: "Contributions",
                hardSkills: "Hard Skills",
                softSkills: "Soft Skills",
                projects: [
                    {
                        id: "smartfarm",
                        title: "SmartFarm",
                        subtitle: "Smart Greenhouse Monitoring System",
                        description: "System developed for smart greenhouse monitoring, where data from the greenhouse is stored and analyzed in real time.",
                        partner: "FATEC + Team I9",
                        period: "3rd Semester - 2024",
                        role: "Scrum Master & Full Stack Developer",
                        mediaType: "video",
                        media: [
                            "/smart_farm_1.gif"
                        ],
                        technologies: [
                            { name: "HTML5", color: "#e34c26" },
                            { name: "CSS3", color: "#1572b6" },
                            { name: "JavaScript", color: "#f7df1e" },
                            { name: "Flask", color: "#000000" },
                            { name: "Python", color: "#3776ab" }
                        ],
                        longDescription: "This project was carried out for FATEC with team I9 to simulate a real development environment using agile methodology. The goal was to develop a system for monitoring a smart greenhouse, where data from this greenhouse could be stored and analyzed.",
                        contributions: "I acted as Product Owner, responsible for creating the Product Backlog and organizing sprints. I performed project prototyping and development both in front-end and back-end, creating greenhouse data processing functionalities and their display in the graphical interface.",
                        hardSkills: "Used CSS and HTML in page structuring, JavaScript for obtaining backend data and creating filters, and Flask for page rendering and greenhouse data CRUD.",
                        softSkills: "Developed communication skills as PO, maintaining constant contact with the client and helping colleagues with development difficulties."
                    },
                    {
                        id: "syntax",
                        title: "Syntax",
                        subtitle: "Task Management Application System",
                        description: "System developed for storing task lists, projects, calendar and charts, all focused on task creation.",
                        partner: "GSW",
                        period: "3rd Semester - 2024",
                        role: "Full Stack Developer",
                        mediaType: "image",
                        media: [
                            "/YNTAX.png"
                        ],
                        technologies: [
                            { name: "React", color: "#61DAFB" },
                            { name: "Typescript", color: "#3178C6" },
                            { name: "Tailwind CSS", color: "#38BDF8" },
                            { name: "Spring Boot", color: "#6DB33F" },
                            { name: "MongoDB", color: "#4DB33D" }
                        ],
                        longDescription: "The system development strictly followed modern agile methodology practices, similar to the process used in creating high-efficiency task management applications. We worked with short iterative cycles, clear backlog definition, deliverable value-oriented prioritization, and constant alignment meetings such as dailies, sprint planning, reviews, and retrospectives.",
                        contributions: "My contributions were decisive in ensuring an effective project aligned with the client's goal. I worked on both backend and frontend, delivering complete and stable functionalities, in addition to actively collaborating on prototyping and system parts integration. As a proactive team member, I encouraged group engagement, helped maintain delivery pace, and contributed to a collaborative and motivated environment.",
                        hardSkills: "In development, I used React combined with Tailwind CSS to build responsive and dynamic interfaces with good visual scalability. The entire front-end was structured in TypeScript, ensuring strong typing and greater code security. On the back-end, we employed Spring Boot to create robust and high-performance APIs, integrated with MongoDB, which allowed flexible and efficient storage of real-time captured data.",
                        softSkills: "I improved my collaborative skills by working in an integrated way on both front-end and back-end, always with a proactive attitude to solve impediments and support the team. I developed even greater communication capacity, technical alignment, and cooperation during sprints, contributing to the continuous and harmonious project flow."
                    },
                    {
                        id: "invsort",
                        title: "Inv.Sort",
                        subtitle: "Inventory Management System",
                        description: "Web application for business inventory management with data analysis, product control and advanced reporting.",
                        partner: "FATEC",
                        period: "2nd Semester - 2024",
                        role: "Full Stack Developer",
                        mediaType: "carousel",
                        media: [
                            "/inv_sort1.png"
                        ],
                        technologies: [
                            { name: "React", color: "#61dafb" },
                            { name: "Tailwind CSS", color: "#06b6d4" },
                            { name: "Express.js", color: "#000000" },
                            { name: "Prisma ORM", color: "#2d3748" },
                            { name: "Axios", color: "#5a29e4" }
                        ],
                        longDescription: "System created to simulate a real development environment with agile methodology. The goal was to create a web application capable of storing data for a fictional inventory company, as well as performing analysis and management of this data.",
                        contributions: "I acted as a full stack developer, creating a modern and responsive interface with React and Tailwind CSS. I developed components such as management dashboard, dynamic tables with filters and forms with validation. In the back-end, I worked with Express.js and Prisma ORM.",
                        hardSkills: "Building dynamic interfaces with React, modern styling with Tailwind CSS, API integration using Axios, and REST route development with Express.js and Prisma ORM.",
                        softSkills: "Developed persistence and teamwork ability, maintaining deliveries on schedule even with organizational challenges during sprints."
                    }
                ]
            },
            contact: {
                title: "Let's Build Something Together",
                subtitle: "I'm always open to discussing new opportunities and interesting projects",
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                contactInfo: "Contact Information",
                location: "Location",
                info: {
                    location: "Caçapava, SP - Brazil",
                    email: "carlos.intrieri@fatec.sp.gov.br"
                }
            }
        }
    };

    const t = translations[currentLang];

    // Typewriter effect
    useEffect(() => {
        const texts = t.hero.typewriterTexts;
        const currentText = texts[currentTextIndex];
        let currentChar = 0;

        const typeWriter = () => {
            if (currentChar <= currentText.length) {
                setTypewriterText(currentText.slice(0, currentChar));
                currentChar++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }, 2000);
            }
        };

        setTypewriterText('');
        const timer = setTimeout(typeWriter, 500);
        return () => clearTimeout(timer);
    }, [currentTextIndex, currentLang]);

    // Intersection Observer
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observerRef.current?.observe(section));

        return () => observerRef.current?.disconnect();
    }, []);

    // Skills Data
    const skillsData = [
        {
            category: 'Frontend', skills: [
                { name: 'HTML5', level: 93, icon: '🌐' },
                { name: 'CSS3', level: 90, icon: '🎨' },
                { name: 'JavaScript', level: 85, icon: '⚡' },
                { name: 'TypeScript', level: 80, icon: '📝' },
                { name: 'React', level: 88, icon: '⚛️' },
                { name: 'Bootstrap', level: 85, icon: '🎯' }
            ]
        },
        {
            category: 'Backend', skills: [
                { name: 'Python', level: 85, icon: '🐍' },
                { name: 'Django', level: 75, icon: '🎸' },
                { name: 'Node.js', level: 82, icon: '🟢' },
                { name: 'Express', level: 78, icon: '🚂' },
                { name: 'JavaScript', level: 85, icon: '⚡' },
                { name: 'TypeScript', level: 80, icon: '📝' },
                { name: 'Java', level: 72, icon: '☕' },
                { name: 'Spring Boot', level: 70, icon: '🍃' },
                { name: 'REST APIs', level: 85, icon: '🔌' }
            ]
        },
        {
            category: 'Database', skills: [
                { name: 'MySQL', level: 95, icon: '🗄️' },
                { name: 'PostgreSQL', level: 88, icon: '🐘' },
                { name: 'MongoDB', level: 75, icon: '🍃' }
            ]
        },
        {
            category: 'DevOps', skills: [
                { name: 'Docker', level: 80, icon: '🐳' },
                { name: 'Linux', level: 90, icon: '🐧' },
                { name: 'AWS', level: 65, icon: '☁️' },
                { name: 'Git', level: 92, icon: '📚' }
            ]
        }
    ];

    // Logo do Leão
    const LionLogo = () => (
        <div className="flex items-center justify-center my-12">
            <div className="relative">
                <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-2xl">
                    <defs>
                        <radialGradient id="lionGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.2)" />
                            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                        </radialGradient>
                        <linearGradient id="maneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="55" fill="url(#lionGradient)" stroke="url(#lionGradient)" strokeWidth="2" />
                    <path d="M60 15 C45 15, 30 25, 25 40 C20 35, 15 40, 18 50 C10 45, 5 55, 12 65 C5 65, 8 75, 18 75 C15 85, 25 95, 40 90 C45 100, 55 95, 60 85 C65 95, 75 100, 80 90 C95 95, 105 85, 102 75 C112 75, 115 65, 108 65 C115 55, 110 45, 102 50 C105 40, 100 35, 95 40 C90 25, 75 15, 60 15" fill="url(#maneGradient)" />
                    <circle cx="60" cy="55" r="18" fill="#fbbf24" />
                    <ellipse cx="48" cy="45" rx="6" ry="8" fill="#f59e0b" />
                    <ellipse cx="72" cy="45" rx="6" ry="8" fill="#f59e0b" />
                    <circle cx="54" cy="52" r="2.5" fill="#1f2937" />
                    <circle cx="66" cy="52" r="2.5" fill="#1f2937" />
                    <circle cx="54.5" cy="51.5" r="0.8" fill="white" />
                    <circle cx="66.5" cy="51.5" r="0.8" fill="white" />
                    <path d="M60 58 L57 62 L63 62 Z" fill="#d97706" />
                    <path d="M60 62 Q55 66 50 64" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M60 62 Q65 66 70 64" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <line x1="35" y1="58" x2="45" y2="60" stroke="#d97706" strokeWidth="1" />
                    <line x1="35" y1="62" x2="45" y2="62" stroke="#d97706" strokeWidth="1" />
                    <line x1="75" y1="60" x2="85" y2="58" stroke="#d97706" strokeWidth="1" />
                    <line x1="75" y1="62" x2="85" y2="62" stroke="#d97706" strokeWidth="1" />
                </svg>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        style={{ fontFamily: 'Brush Script MT, cursive' }}>
                        Carlos Intrieri
                    </div>
                </div>
            </div>
        </div>
    );

    // Componente do Carrossel de Imagens
    const ImageCarousel = ({ images, projectId }) => {
        const currentIndex = currentImageIndex[projectId] || 0;

        const nextImage = () => {
            setCurrentImageIndex(prev => ({
                ...prev,
                [projectId]: (currentIndex + 1) % images.length
            }));
        };

        const prevImage = () => {
            setCurrentImageIndex(prev => ({
                ...prev,
                [projectId]: currentIndex === 0 ? images.length - 1 : currentIndex - 1
            }));
        };

        if (images.length === 1) {
            return (
                <img
                    src={images[0]}
                    alt={`${projectId} preview`}
                    className="w-full h-full object-cover"
                />
            );
        }

        return (
            <div className="relative w-full h-full">
                <img
                    src={images[currentIndex]}
                    alt={`${projectId} preview ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />

                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [projectId]: index }))}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Componente de Vídeo/GIF
    const VideoPlayer = ({ src, alt }) => (
        <div className="w-full h-full">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );

    return (
        <div className={`min-h-screen transition-all duration-300 ${isDarkTheme
            ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white'
            : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 text-gray-900'
            }`}>

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isDarkTheme ? 'bg-black/20 backdrop-blur-lg' : 'bg-white/20 backdrop-blur-lg'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                CI
                            </div>
                            <div className="hidden md:flex space-x-6">
                                {Object.entries(t.nav).map(([key, value]) => (
                                    <a
                                        key={key}
                                        href={`#${key}`}
                                        className={`hover:text-purple-400 transition-colors duration-200 text-sm font-medium ${!isDarkTheme ? 'text-purple-700' : ''}`}
                                    >
                                        {value}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setCurrentLang(currentLang === 'pt' ? 'en' : 'pt')}
                                className="px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-sm text-white"
                            >
                                {currentLang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
                            </button>
                            <button
                                onClick={() => setIsDarkTheme(!isDarkTheme)}
                                className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                            >
                                {isDarkTheme ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <p className={`text-lg mb-4 ${isDarkTheme ? 'text-purple-300' : 'text-purple-600'}`}>
                            {t.hero.greeting}
                        </p>
                        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                            {t.hero.name}
                        </h1>
                        <div className="text-2xl md:text-3xl mb-6 h-16 flex items-center justify-center">
                            <span className={`border-r-2 border-purple-400 pr-1 ${isDarkTheme ? '' : 'text-purple-700'}`}>
                                {typewriterText}
                            </span>
                        </div>
                        <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-white"
                        >
                            {t.hero.cta}
                        </a>
                        <a
                            href="#projects"
                            className={`px-8 py-3 border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold ${isDarkTheme ? 'text-white' : 'text-purple-700'}`}
                        >
                            {currentLang === 'pt' ? 'Ver Projetos' : 'View Projects'}
                        </a>
                    </div>

                    <LionLogo />

                    {/* Redes Sociais */}
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="https://github.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section - COM SUA FOTO */}
            <section id="about" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-center lg:text-left">
                            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {t.about.title}
                            </h2>
                            <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                                {t.about.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {[
                                    { title: t.about.passion, desc: t.about.passionDesc, icon: '🎯' },
                                    { title: t.about.philosophy, desc: t.about.philosophyDesc, icon: '🧠' },
                                    { title: t.about.wine, desc: t.about.wineDesc, icon: '🍷' },
                                    { title: t.about.music, desc: t.about.musicDesc, icon: '🎵' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-xl ${isDarkTheme ? 'bg-gray-700/50' : 'bg-white/70'} hover:transform hover:scale-105 transition-all duration-300`}
                                    >
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className="text-lg font-semibold mb-2 text-purple-400">{item.title}</h3>
                                        <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform rotate-3 blur-xl opacity-50"></div>
                                <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-purple-400">
                                    <img
                                        src="/carlos_photo.png"
                                        alt="Carlos Intrieri"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t.skills.title}
                    </h2>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {skillsData.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className={`p-6 rounded-xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
                            >
                                <h3 className="text-xl font-bold mb-6 text-purple-400 text-center">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg">{skill.icon}</span>
                                                    <span className={`text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                                                </div>
                                                <span className="text-xs text-purple-400">{skill.level}%</span>
                                            </div>
                                            <div className={`w-full h-2 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-300'} rounded-full overflow-hidden`}>
                                                <div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: visibleSections.has('skills') ? `${skill.level}%` : '0%'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t.experience.title}
                    </h2>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

                        <div className="space-y-12">
                            {t.experience.experiences.map((exp, index) => (
                                <div key={index} className="relative flex items-start space-x-6">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <div className={`flex-1 p-6 rounded-xl ${isDarkTheme ? 'bg-gray-700/50' : 'bg-white/70'} hover:transform hover:scale-105 transition-all duration-300`}>
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-purple-400">{exp.role}</h3>
                                                <p className={`text-lg font-medium ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{exp.company}</p>
                                            </div>
                                            <span className={`text-sm mt-2 md:mt-0 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                                        </div>
                                        <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - CARDS EXPANDIDOS (SEM MODAL) */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t.projects.title}
                    </h2>

                    <div className="space-y-12">
                        {t.projects.projects.map((project) => (
                            <div
                                key={project.id}
                                className={`rounded-xl overflow-hidden ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm shadow-xl`}
                            >
                                {/* Header com Imagem */}
                                <div className="h-64 relative overflow-hidden">
                                    {project.mediaType === 'video' ? (
                                        <VideoPlayer src={project.media[0]} alt={project.title} />
                                    ) : (
                                        <ImageCarousel images={project.media} projectId={project.id} />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-purple-300">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Conteúdo Completo */}
                                <div className="p-8 space-y-6">
                                    {/* Info Grid */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className={`p-4 rounded-lg ${isDarkTheme ? 'bg-gray-700/50' : 'bg-white/70'}`}>
                                            <div className="text-sm text-purple-400 font-semibold mb-1">🏢 {t.projects.partner}</div>
                                            <div className="font-bold">{project.partner}</div>
                                        </div>
                                        <div className={`p-4 rounded-lg ${isDarkTheme ? 'bg-gray-700/50' : 'bg-white/70'}`}>
                                            <div className="text-sm text-purple-400 font-semibold mb-1">📅 {t.projects.period}</div>
                                            <div className="font-bold">{project.period}</div>
                                        </div>
                                        <div className={`p-4 rounded-lg ${isDarkTheme ? 'bg-gray-700/50' : 'bg-white/70'}`}>
                                            <div className="text-sm text-purple-400 font-semibold mb-1">👨‍💻 {t.projects.role}</div>
                                            <div className="font-bold">{project.role}</div>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-xl font-bold text-purple-400 mb-3">🛠️ {t.projects.technologies}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                                                    style={{ backgroundColor: tech.color }}
                                                >
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Long Description */}
                                    <div>
                                        <h4 className="text-2xl font-bold text-purple-400 mb-3">{t.projects.description}</h4>
                                        <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {project.longDescription}
                                        </p>
                                    </div>

                                    {/* Contributions */}
                                    <div className={`p-6 rounded-lg ${isDarkTheme ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                                        <h4 className="text-2xl font-bold text-purple-400 mb-3">{t.projects.contributions}</h4>
                                        <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {project.contributions}
                                        </p>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className={`p-6 rounded-lg ${isDarkTheme ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                                            <h4 className="text-xl font-bold text-blue-400 mb-3 flex items-center">
                                                <span className="mr-2">💻</span> {t.projects.hardSkills}
                                            </h4>
                                            <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {project.hardSkills}
                                            </p>
                                        </div>
                                        <div className={`p-6 rounded-lg ${isDarkTheme ? 'bg-pink-900/20' : 'bg-pink-50'}`}>
                                            <h4 className="text-xl font-bold text-pink-400 mb-3 flex items-center">
                                                <span className="mr-2">🤝</span> {t.projects.softSkills}
                                            </h4>
                                            <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {project.softSkills}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Botão Ver Código */}
                                    <div className="flex justify-center pt-6">
                                        <a
                                            href={
                                                project.id === 'syntax' ? 'https://github.com/Syntax-Fatec-SJC' :
                                                    project.id === 'smartfarm' ? 'https://github.com/carlosintrieri/DSM1-SmartFarm-Primeira-API' :
                                                        'https://github.com/carlosintrieri/DSM2-inv.sort-Segunda-API'
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-white flex items-center gap-3 shadow-lg"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            {t.projects.viewCode}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-4 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t.contact.title}
                        </h2>
                        <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6 text-center">
                            <h3 className="text-2xl font-bold text-purple-400 mb-6">{t.contact.contactInfo}</h3>

                            <div className="space-y-6 flex flex-col items-center">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{t.contact.location}</h4>
                                        <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.info.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>Email</h4>
                                        <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{t.contact.info.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <h4 className={`font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
                                    {currentLang === 'pt' ? 'Redes Sociais' : 'Social Networks'}
                                </h4>
                                <div className="flex justify-center space-x-4">
                                    <a href="https://github.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/in/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com/carlosintrieri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setFormStatus('sending');

                                // Usando EmailJS
                                const form = e.target;
                                const templateParams = {
                                    from_name: form.name.value,
                                    from_email: form.email.value,
                                    subject: form.subject.value,
                                    message: form.message.value,
                                    to_email: 'carlos.intrieri@fatec.sp.gov.br'
                                };

                                // Enviar via EmailJS
                                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        service_id: 'service_portfolio',
                                        template_id: 'template_portfolio',
                                        user_id: 'YOUR_PUBLIC_KEY',
                                        template_params: templateParams
                                    })
                                })
                                    .then(() => {
                                        setFormStatus('success');
                                        form.reset();
                                        setTimeout(() => setFormStatus(''), 5000);
                                    })
                                    .catch(() => {
                                        setFormStatus('error');
                                        setTimeout(() => setFormStatus(''), 5000);
                                    });
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{t.contact.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                                        placeholder={t.contact.name}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{t.contact.email}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className={`w-full px-4 py-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                                        placeholder={t.contact.email}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{t.contact.subject}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                                    placeholder={t.contact.subject}
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>{t.contact.message}</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none`}
                                    placeholder={t.contact.message}
                                ></textarea>
                            </div>

                            {formStatus === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                                    ✅ {currentLang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                                    ❌ {currentLang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Try again.'}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'sending'
                                    ? (currentLang === 'pt' ? '📧 Enviando...' : '📧 Sending...')
                                    : `📨 ${t.contact.send}`
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 px-4 ${isDarkTheme ? 'bg-black/50' : 'bg-gray-900/50'} text-center`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">
                                © 2025 Carlos Intrieri. {currentLang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                                {currentLang === 'pt' ? 'Sobre' : 'About'}
                            </a>
                            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                                {currentLang === 'pt' ? 'Projetos' : 'Projects'}
                            </a>
                            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                                {currentLang === 'pt' ? 'Contato' : 'Contact'}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;





