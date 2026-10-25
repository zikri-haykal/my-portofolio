// ============================================================
//  All portfolio content lives here. Update this file only.
//  TODO(owner): replace contact values marked TODO with real links.
// ============================================================

export const site = {
  name: 'Zikri Haykal',
  role: 'Software Developer',
  openToWork: true, // set false to hide the availability badge
  email: 'zikrihaykal@example.com', // TODO: real email
  linkedin: 'https://www.linkedin.com/in/zikrihaykal', // TODO: verify
  github: 'https://github.com/zikri-haykal',
  cv: '/cv-zikri-haykal.pdf', // TODO: put the PDF in /public
  photo: '/photo.jpg', // TODO: put your portrait (4:5 ratio) at /public/photo.jpg
  location: 'Pekanbaru, Riau — Indonesia',
};

export const stats = [
  { value: '3.70', label: 'GPA / 4.00', note: 'D4 Teknik Informatika, Politeknik Caltex Riau' },
  { value: '2', label: 'Internship organizations', note: 'BRIN & PTPN' },
  { value: '5+', label: 'IT tickets / day', note: 'Handled as IT Support at PTPN — not projects built' },
];

export type Experience = {
  org: string;
  full: string;
  role: string;
  period: string;
  points: string[];
  projects: string[];
  /** Documentation photos — put files in /public/experience/<org>/ */
  gallery: { src: string; caption: string }[];
};

export const experiences: Experience[] = [
  {
    org: 'BRIN',
    full: 'Badan Riset dan Inovasi Nasional',
    role: 'Software Developer Intern',
    period: 'Internship',
    points: [
      'Reengineered the SpaceMap information website.',
      'Migrated the codebase from Bootstrap 4 to Bootstrap 5.',
      'Built Landsat Scene Downloader, a Python & Tkinter desktop app.',
      'Integrated the USGS M2M API and collaborated within the dev team.',
    ],
    projects: ['spacemap', 'landsat-downloader'],
    gallery: [
      // TODO: replace with your real files & captions
      { src: '/experience/brin/1.jpg', caption: 'Team at BRIN' },
      { src: '/experience/brin/2.jpg', caption: 'SpaceMap reengineering session' },
      { src: '/experience/brin/3.jpg', caption: 'Landsat Scene Downloader demo' },
    ],
  },
  {
    org: 'PTPN',
    full: 'PT Perkebunan Nusantara',
    role: 'Software Development & IT Support Intern',
    period: 'Internship',
    points: [
      'Developed the Meeting Calculator feature for the Online Accommodation system.',
      'Contributed to the backend of a soil fertility monitoring website.',
      'Handled 5+ IT Support tickets per day.',
    ],
    projects: ['akomodasi-ptpn', 'soil-monitoring'],
    gallery: [
      { src: '/experience/ptpn/1.jpg', caption: 'Team at PTPN' },
      { src: '/experience/ptpn/2.jpg', caption: 'Meeting Calculator feature review' },
      { src: '/experience/ptpn/3.jpg', caption: 'IT Support duty' },
    ],
  },
];

export const skills: { group: string; items: string[]; learning?: boolean }[] = [
  { group: 'Core', items: ['Laravel', 'PHP', 'Python', 'MySQL', 'JavaScript'] },
  { group: 'Web Development', items: ['Laravel', 'HTML', 'CSS', 'Bootstrap'] },
  { group: 'Programming', items: ['PHP', 'Python', 'JavaScript', 'Java', 'Kotlin'] },
  { group: 'Desktop & API', items: ['Tkinter', 'CustomTkinter', 'USGS M2M API'] },
  { group: 'Networking', items: ['IP Addressing', 'Switching', 'Routing', 'LAN Configuration', 'Cisco Packet Tracer'] },
  { group: 'Tools', items: ['VS Code', 'Git / GitHub', 'Google Colab', 'Jupyter Notebook', 'Tableau'] },
  { group: 'Data & AI', items: ['Machine Learning', 'Deep Learning', 'Data Analytics'], learning: true },
];

export const certifications = [
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-itn.jpg', // TODO: add certificate image to /public/certs
    description: 'Network architecture, IP addressing (IPv4/IPv6), Ethernet fundamentals and basic router/switch configuration.',
    url: '',
  },
  {
    title: 'Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-srwe.jpg',
    description: 'VLANs, inter-VLAN routing, STP, EtherChannel, DHCP, static routing and WLAN configuration.',
    url: '',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-cyber.jpg',
    description: 'Security principles, common threats and attacks, cryptography basics and protecting networks and data.',
    url: '',
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  featured?: boolean;
  summary: string;
  role: string;
  stack: string[];
  context?: string;
  accent: string;
  github?: string;
  demo?: string;
  overview: string;
  problem: string;
  contribution: string[];
  implementation: string[];
  challenges: { challenge: string; solution: string }[];
  outcomes: string[];
  screenshots: string[]; // put real screenshots in /public/projects/<slug>/
};

export const projects: Project[] = [
  {
    slug: 'rafalmer',
    index: '01',
    title: 'Rafalmer',
    category: 'E-commerce Web Application',
    featured: true,
    summary:
      'Online store for an MSME built with Laravel using the Prototyping method — catalog, categories, cart, ordering and manual payment confirmation.',
    role: 'Full-stack Developer',
    stack: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
    context: 'Final project',
    accent: '#3AA39F',
    overview:
      'Rafalmer is a web-based online store that helps a local MSME sell its products beyond word of mouth, with a structured catalog and order flow.',
    problem:
      'Orders were handled manually through chat, making stock, order status and payment confirmation hard to track for both seller and customer.',
    contribution: [
      'Gathered requirements and iterated the UI with the owner through prototyping cycles.',
      'Designed the MySQL schema for products, categories, orders, payments and returns.',
      'Implemented customer flows: catalog, cart, checkout and payment proof upload.',
      'Built the admin side for product management and payment verification.',
    ],
    implementation: [
      'Laravel MVC with Blade templates and Bootstrap for responsive layouts.',
      'Eloquent relationships to model orders, order items and payment records.',
      'Manual transfer confirmation flow with status transitions handled server-side.',
    ],
    challenges: [
      {
        challenge: 'Keeping order status consistent between customer and admin.',
        solution: 'Centralized status transitions in the backend and surfaced them through notifications.',
      },
      {
        challenge: 'Changing requirements from the client during development.',
        solution: 'Used the Prototyping method to validate each iteration before building further.',
      },
    ],
    outcomes: [
      'Functional testing passed with Black Box testing.',
      'User Acceptance Testing (UAT) conducted with target users.',
      'Usability score of 86.68%.',
    ],
    screenshots: [],
  },
  {
    slug: 'sweet-sensation',
    index: '02',
    title: 'Sweet Sensation',
    category: 'Android & Machine Learning',
    summary:
      'Educational Android app that predicts apple ripeness using K-Nearest Neighbors and offers an interactive fruit quiz for children.',
    role: 'Android Developer',
    stack: ['Kotlin', 'Android', 'KNN'],
    accent: '#D9822B',
    overview:
      'An Android app combining a simple ML classifier with learning content, making fruit education more interactive for kids.',
    problem: 'Children learn about fruit passively; the app adds an interactive, playful way to explore ripeness and fruit facts.',
    contribution: [
      'Built the Android interface and navigation in Kotlin.',
      'Implemented the KNN-based ripeness prediction flow.',
      'Developed the interactive quiz module.',
    ],
    implementation: [
      'Kotlin Android app with activity-based screens.',
      'K-Nearest Neighbors classification for ripeness levels.',
    ],
    challenges: [
      {
        challenge: 'Making ML output understandable for children.',
        solution: 'Presented predictions as simple, visual ripeness categories.',
      },
    ],
    outcomes: ['Working prototype covering prediction and quiz features.'],
    screenshots: [],
  },
  {
    slug: 'spacemap',
    index: '03',
    title: 'SpaceMap',
    category: 'Website Reengineering · BRIN',
    summary:
      'Reengineered the SpaceMap information website during the BRIN internship, migrating Bootstrap 4 to Bootstrap 5 and refreshing the UI.',
    role: 'Frontend Developer (Intern)',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 4/5'],
    context: 'BRIN internship',
    accent: '#3B6FD9',
    overview: 'SpaceMap is an information website for a BRIN application. The goal was to modernize it without losing content.',
    problem: 'The site relied on Bootstrap 4 with an outdated interface, making maintenance and responsiveness harder.',
    contribution: [
      'Audited existing pages and components.',
      'Migrated markup and utilities from Bootstrap 4 to Bootstrap 5.',
      'Updated the visual interface for a cleaner, more consistent look.',
    ],
    implementation: [
      'Replaced deprecated Bootstrap 4 classes and jQuery-dependent components.',
      'Restructured layouts using Bootstrap 5 grid and utilities.',
    ],
    challenges: [
      {
        challenge: 'Breaking changes between Bootstrap versions.',
        solution: 'Migrated page by page and verified each layout across breakpoints.',
      },
    ],
    outcomes: ['Website running on Bootstrap 5 with an updated interface.'],
    screenshots: [],
  },
  {
    slug: 'landsat-downloader',
    index: '04',
    title: 'Landsat Scene Downloader',
    category: 'Desktop Application · BRIN',
    summary:
      'Python GUI app integrating the USGS M2M API to search and download Landsat 8–9 Collection 2 Level-1 imagery by Path/Row.',
    role: 'Software Developer (Intern)',
    stack: ['Python', 'Tkinter', 'CustomTkinter', 'USGS M2M API'],
    context: 'BRIN internship',
    accent: '#7A5AF8',
    overview: 'A desktop tool that streamlines finding and downloading Landsat scenes for researchers.',
    problem: 'Searching and downloading scenes through the web portal one by one was repetitive and slow.',
    contribution: [
      'Built the GUI with Tkinter and CustomTkinter.',
      'Integrated USGS M2M API authentication, scene search and download requests.',
      'Collaborated with the team on requirements and testing.',
    ],
    implementation: [
      'Path/Row and date based scene search for Landsat 8–9 Collection 2 Level-1.',
      'API calls handled off the UI thread to keep the interface responsive.',
    ],
    challenges: [
      {
        challenge: 'Long-running downloads freezing the GUI.',
        solution: 'Moved network work to background threads with progress feedback.',
      },
    ],
    outcomes: ['Working desktop app used to search and download Landsat scenes.'],
    screenshots: [],
  },
  {
    slug: 'akomodasi-ptpn',
    index: '05',
    title: 'Online Accommodation System',
    category: 'Feature Development · PTPN',
    summary:
      'Contributed the Meeting Calculator feature for cost estimation and approval flow in an online business-trip accommodation system.',
    role: 'Software Developer (Intern)',
    stack: ['Laravel', 'PHP', 'Bootstrap 5'],
    context: 'PTPN internship',
    accent: '#C2410C',
    overview: 'An internal system for managing official-trip accommodation requests at PTPN.',
    problem: 'Meeting cost estimates were calculated manually before approval, slowing the process.',
    contribution: [
      'Developed the Meeting Calculator feature.',
      'Implemented the cost estimation logic and approval flow integration.',
    ],
    implementation: ['Laravel controllers and Blade views styled with Bootstrap 5.'],
    challenges: [
      {
        challenge: 'Fitting a new feature into an existing codebase.',
        solution: 'Followed existing conventions and reused established components.',
      },
    ],
    outcomes: ['Meeting Calculator feature delivered into the system.'],
    screenshots: [],
  },
  {
    slug: 'soil-monitoring',
    index: '06',
    title: 'Soil Fertility Monitoring',
    category: 'Backend Development · PTPN',
    summary: 'Contributed to the backend of a website supporting soil fertility monitoring functionality.',
    role: 'Backend Developer (Intern)',
    stack: ['Backend web development'], // TODO: add actual framework & database
    context: 'PTPN internship',
    accent: '#4D7C0F',
    overview: 'A web platform to support monitoring of soil fertility data in plantation areas.',
    problem: 'Soil fertility data needed a structured system for recording and monitoring.',
    contribution: ['Contributed to backend features supporting the monitoring functionality.'],
    implementation: ['Backend endpoints and data handling for monitoring features.'],
    challenges: [],
    outcomes: ['Backend contributions integrated into the team project.'],
    screenshots: [],
  },
];
