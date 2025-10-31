export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = 'en'

export const translations = {
  en: {
    // Personal info
    'personal.name': 'Pablo P Varela',
    'personal.title': 'Full Stack Developer',
    'personal.location': 'València',
    'personal.country': 'Spain',
    
    // Navigation
    'nav.language.english': 'English version',
    'nav.language.spanish': 'Spanish version',
    
    // Theme
    'theme.light': 'Light theme',
    'theme.dark': 'Dark theme',
    
    // Print
    'print.button': 'Print',
    'print.tooltip.title': 'For best results:',
    'print.tooltip.lightTheme': 'Light theme',
    'print.tooltip.a4Paper': 'A4 paper size',
    'print.tooltip.fitToPage': 'Scale: Fit to page width',
    'print.tooltip.noMargins': 'Margins: None',
    'print.tooltip.noHeaders': 'Uncheck "Print headers and footers"',
    'print.tooltip.noBackground': 'Uncheck "Print backgrounds"',
    
    // Sections
    'section.experience': 'Experience',
    'section.education': 'Education',
    'section.skills': 'Skills',
    'section.skills.core': 'Core',
    'section.skills.secondary': 'Secondary',
    'section.other': 'Other',
    
    // Time
    'time.years': 'years',
    'time.months': 'months',
    'time.currently': 'Currently',
    'time.today': 'Today',
    'time.at': ' at ',
    
    // Months
    'month.jan': 'Jan',
    'month.feb': 'Feb',
    'month.mar': 'Mar',
    'month.apr': 'Apr',
    'month.may': 'May',
    'month.jun': 'Jun',
    'month.jul': 'Jul',
    'month.aug': 'Aug',
    'month.sep': 'Sep',
    'month.oct': 'Oct',
    'month.nov': 'Nov',
    'month.dec': 'Dec',
    
    // Companies
    'company.maze': 'Maze',
    'company.prezly': 'Prezly',
    'company.sourcefabric': 'Sourcefabric',
    'company.stang': 'Stang Decision Systems',
    
    // Positions
    'position.senior.fullstack': 'Senior Full Stack Developer',
    'position.senior.frontend': 'Senior Frontend Developer',
    'position.fullstack': 'Full Stack Web Developer',
    
    // Locations
    'location.remote': 'Remote',
    'location.remote.100': '100% Remote',
    'location.marquette': 'Marquette, Michigan (USA) and remote',
    
    // Job descriptions
    'job.maze.description': "Joined an **early stage startup** which I helped grow to be what it is today. I've worked on the **most important part of the product** (unmoderated studies on the web) and helped build the new **Mobile App from scratch**",
    'job.maze.tech': 'TS, ReactJS, React Native, GraphQL, NodeJS, Neo4J, PostgreSQL',
    'job.prezly.description': 'Helped build their new **CMS-powered frontends from scratch**',
    'job.prezly.tech': 'Typescript, ReactJS, NextJS',
    'job.sourcefabric.description': 'Contributed heavily to the **new editor** of the open source CMS for journalists trusted by **national news agencies** and independent organisations all around the world',
    'job.sourcefabric.tech': 'Typescript, ReactJS',
    'job.stang.description': 'Part of a team of **3 developers**, we built a tool to **automate anonymous hiring** for companies',
    'job.stang.tech': 'PHP, JS, HTML/CSS, MySQL',
    
    // Education
    'education.keepcoding': 'KeepCoding',
    'education.keepcoding.degree': 'Full Stack Javascript',
    'education.usc.degree': 'Computer Science',
    
    // Skills
    'skill.javascript': 'Javascript',
    'skill.typescript': 'Typescript',
    'skill.react': 'ReactJS',
    'skill.nextjs': 'NextJS',
    'skill.git': 'Git',
    'skill.macos': 'macOS',
    'skill.nodejs': 'NodeJS',
    'skill.github': 'GitHub',
    'skill.linux': 'Linux',
    'skill.mysql': 'Mysql',
    'skill.mongodb': 'MongoDB',
    'skill.electron': 'Electron',
    'skill.sql': 'SQL',
    'skill.neo4j': 'Neo4J',
    'skill.neovim': 'Neovim',
    'skill.figma': 'Figma',
    'skill.lua': 'Lua',
    'skill.swift': 'Swift',
    'skill.tailwind': 'Tailwind',
    
    // Other section
    'other.content': `Two native languages (**Spanish** and **Galician**) and advanced **English**.

Comfortable with **graphic design tools** (Figma, Photoshop, Pixelmator...).

**Most of my career has been remote.**`,
    
    // Footer
    'footer.cv.source': 'This CV is live on',
  },
  es: {
    // Personal info
    'personal.name': 'Pablo P Varela',
    'personal.title': 'Full Stack Developer',
    'personal.location': 'València',
    'personal.country': 'España',
    
    // Navigation
    'nav.language.english': 'English version',
    'nav.language.spanish': 'Versión en español',
    
    // Theme
    'theme.light': 'Tema claro',
    'theme.dark': 'Tema oscuro',
    
    // Print
    'print.button': 'Imprimir',
    'print.tooltip.title': 'Para mejores resultados:',
    'print.tooltip.lightTheme': 'Tema claro',
    'print.tooltip.a4Paper': 'Tamaño de papel A4',
    'print.tooltip.fitToPage': 'Escala: Ajustar al ancho de página',
    'print.tooltip.noMargins': 'Márgenes: Ninguno',
    'print.tooltip.noHeaders': 'Desmarcar "Imprimir encabezados y pies de página"',
    'print.tooltip.noBackground': 'Desmarcar "Imprimir fondos"',
    
    // Sections
    'section.experience': 'Experiencia',
    'section.education': 'Educación',
    'section.skills': 'Habilidades',
    'section.skills.core': 'Principales',
    'section.skills.secondary': 'Secundarias',
    'section.other': 'Otros',
    
    // Time
    'time.years': 'años',
    'time.months': 'meses',
    'time.currently': 'Actualmente',
    'time.today': 'Hoy',
    'time.at': ' en ',
    
    // Months
    'month.jan': 'Ene',
    'month.feb': 'Feb',
    'month.mar': 'Mar',
    'month.apr': 'Abr',
    'month.may': 'May',
    'month.jun': 'Jun',
    'month.jul': 'Jul',
    'month.aug': 'Ago',
    'month.sep': 'Sep',
    'month.oct': 'Oct',
    'month.nov': 'Nov',
    'month.dec': 'Dic',
    
    // Companies
    'company.maze': 'Maze',
    'company.prezly': 'Prezly',
    'company.sourcefabric': 'Sourcefabric',
    'company.stang': 'Stang Decision Systems',
    
    // Positions
    'position.senior.fullstack': 'Senior Full Stack Developer',
    'position.senior.frontend': 'Senior Frontend Developer',
    'position.fullstack': 'Full Stack Web Developer',
    
    // Locations
    'location.remote': 'Remoto',
    'location.remote.100': '100% Remoto',
    'location.marquette': 'Marquette, Michigan (EEUU) y remoto',
    
    // Job descriptions
    'job.maze.description': "Me uní a una **'early stage' startup** que ayudé a crecer hasta lo que es hoy. He trabajado en la **parte más importante del producto** (unmoderated studies en la web) y ayudé a construir la nueva **aplicación móvil desde cero**",
    'job.maze.tech': 'TS, ReactJS, React Native, GraphQL, NodeJS, Neo4J, PostgreSQL',
    'job.prezly.description': 'Ayudé a construir sus nuevos **frontends desde cero**, impulsados port su CMS',
    'job.prezly.tech': 'Typescript, ReactJS, NextJS',
    'job.sourcefabric.description': 'Contribuí significativamente al **nuevo editor** del CMS de software libre para periodistas, utilizado por **agencias nacionales** y organizaciones independientes en todo el mundo',
    'job.sourcefabric.tech': 'Typescript, ReactJS',
    'job.stang.description': 'Parte de un equipo de **3 desarrolladores**, construímos una herramienta para **automatizar la búsqueda anónima de empleo** para empresas',
    'job.stang.tech': 'PHP, JS, HTML/CSS, MySQL',
    
    // Education
    'education.keepcoding': 'KeepCoding',
    'education.keepcoding.degree': 'Full Stack Javascript',
    'education.usc.degree': 'Ingeniería Informática',
    
    // Skills
    'skill.javascript': 'Javascript',
    'skill.typescript': 'Typescript',
    'skill.react': 'ReactJS',
    'skill.nextjs': 'NextJS',
    'skill.git': 'Git',
    'skill.macos': 'macOS',
    'skill.nodejs': 'NodeJS',
    'skill.github': 'GitHub',
    'skill.linux': 'Linux',
    'skill.mysql': 'Mysql',
    'skill.mongodb': 'MongoDB',
    'skill.electron': 'Electron',
    'skill.sql': 'SQL',
    'skill.neo4j': 'Neo4J',
    'skill.neovim': 'Neovim',
    'skill.figma': 'Figma',
    'skill.lua': 'Lua',
    'skill.swift': 'Swift',
    'skill.tailwind': 'Tailwind',
    
    // Other section
    'other.content': `Dos lenguajes nativos (**castellano** y **gallego**) y nivel avanzado de **inglés**.

Cómodo con **apps de diseño gráfico** (Figma, Photoshop, Pixelmator...).

**La mayor parte de mi carrera ha sido en remoto.**`,
    
    // Footer
    'footer.cv.source': 'CV directo desde',
  },
} as const

export type TranslationKey = keyof typeof translations.en