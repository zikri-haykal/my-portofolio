// ============================================================
//  All portfolio content lives here. Update this file only.
// ============================================================

export const site = {
  name: 'Zikri Haykal',
  fullName: 'Muhammad Zikri Haykal',
  role: 'Software Developer',
  headline: 'Web & Mobile Developer | Backend Systems | Exploring Machine Learning',
  openToWork: true, // set false to hide the availability badge
  email: 'zikrihaikalpku01@gmail.com',
  phone: '+62 822-6067-8461',
  linkedin: 'https://www.linkedin.com/in/muhammad-zikri-haykal',
  github: 'https://github.com/zikri-haykal',
  cv: '/cv-zikri-haykal.pdf', // TODO: put the PDF in /public
  photo: '/photo.jpg', // TODO: put your portrait (4:5 ratio) at /public/photo.jpg
  location: 'Pekanbaru, Riau, Indonesia',
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
    full: 'Badan Riset dan Inovasi Nasional RI',
    role: 'Software Engineer (Intern)',
    period: 'Aug 2025 – Dec 2025',
    points: [
      'Reengineered the SPACeMAP website, transitioning visual identity and web architecture from LAPAN to BRIN corporate standards.',
      'Modernized UI components and responsiveness through Bootstrap 4 to Bootstrap 5 migration.',
      'Developed the Landsat Collection Automation GUI desktop app (Python & Tkinter) with USGS M2M API integration.',
      'Streamlined satellite remote sensing data retrieval, replacing manual EarthExplorer workflows.',
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
    full: 'PT Perkebunan Nusantara IV (Persero)',
    role: 'Software Engineer (Intern)',
    period: 'Feb 2026 – Jun 2026',
    points: [
      'Developed the Meeting Calculator interactive feature for the Online Accommodation platform for automated cost estimation and approval.',
      'Engineered server-side architecture, database structures, and processing logic for the Soil Fertility Monitoring website.',
      'Delivered daily operational IT Support resolving 5+ hardware, software, and networking tickets.',
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

export type Certification = {
  title: string;
  issuer: string;
  type?: string;
  credentialId?: string;
  date?: string;
  image: string;
  file?: string;
  description: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Sertifikasi Profesi BNSP: Programmer',
    issuer: 'BNSP — LSP Politeknik Caltex Riau',
    type: 'Professional Certification (BNSP)',
    credentialId: 'No. 005/SK-LSP/PCR/2026',
    date: 'August 2026',
    image: '/certs/thumbs/SK_Penetapan_Uji_Kompetensi.png',
    file: '/certs/SK_Penetapan_Uji_Kompetensi_Programmer_BNSP.pdf',
    description: 'Official national competency decree from Badan Nasional Sertifikasi Profesi (BNSP) through LSP PCR awarding KOMPETEN status for the professional Programmer scheme.',
    url: '/certs/SK_Penetapan_Uji_Kompetensi_Programmer_BNSP.pdf',
  },
  {
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    type: 'Professional Certification',
    credentialId: '2407NA9067',
    date: 'July 2024',
    image: '/certs/thumbs/MTCNA.png',
    file: '/certs/MTCNA.pdf',
    description: 'Official international networking certification covering MikroTik RouterOS architecture, routing protocols, firewall filtering & NAT, bridging, wireless, bandwidth management, and troubleshooting.',
    url: 'https://mikrotik.com/certificate/2407NA9067',
  },
  {
    title: 'Ethical Hacking Essentials (EHE)',
    issuer: 'EC-Council',
    type: 'Certificate of Achievement',
    credentialId: '344440',
    date: 'July 2024',
    image: '/certs/EHE-Eccouncil.png',
    file: '/certs/EHE-Eccouncil.png',
    description: 'Information security and ethical hacking fundamentals, vulnerability assessment, penetration testing concepts, malware threats, and web application security countermeasures.',
    url: '/certs/EHE-Eccouncil.png',
  },
  {
    title: 'Network Defense Essentials (NDE)',
    issuer: 'EC-Council',
    type: 'Certificate of Achievement',
    credentialId: '344443',
    date: 'July 2024',
    image: '/certs/NDE-Eccouncil.png',
    file: '/certs/NDE-Eccouncil.png',
    description: 'Comprehensive network security controls, defensive protocols, stateful firewalls, intrusion detection & prevention systems (IDS/IPS), VPNs, and defense-in-depth strategies.',
    url: '/certs/NDE-Eccouncil.png',
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    type: 'Course Certificate',
    credentialId: '2267fac8-bd48-464e-af42-fd84df6f6f43',
    date: 'February 2024',
    image: '/certs/thumbs/CCNA-_Introduction_to_Networks_certificate_zikri22ti-mahasiswa-pcr-ac-id_2267fac8-bd48-464e-af42-fd84df6f6f43.png',
    file: '/certs/CCNA-_Introduction_to_Networks_certificate_zikri22ti-mahasiswa-pcr-ac-id_2267fac8-bd48-464e-af42-fd84df6f6f43.pdf',
    description: 'Network architecture, models, protocols, IPv4 & IPv6 addressing schemes, Ethernet operations, media, and fundamental router/switch configuration.',
    url: '/certs/CCNA-_Introduction_to_Networks_certificate_zikri22ti-mahasiswa-pcr-ac-id_2267fac8-bd48-464e-af42-fd84df6f6f43.pdf',
  },
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    type: 'Course Certificate',
    credentialId: '05d306b1-b0a0-4a68-8a8e-050f2c3d61f9',
    date: 'February 2024',
    image: '/certs/thumbs/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_05d306b1-b0a0-4a68-8a8e-050f2c3d61f9.png',
    file: '/certs/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_05d306b1-b0a0-4a68-8a8e-050f2c3d61f9.pdf',
    description: 'VLANs, inter-VLAN routing, Spanning Tree Protocol (STP), EtherChannel link aggregation, DHCPv4/DHCPv6, SLAAC, static routing, and WLAN configuration.',
    url: '/certs/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_05d306b1-b0a0-4a68-8a8e-050f2c3d61f9.pdf',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    type: 'Course Certificate',
    date: 'July 2024',
    image: '/certs/thumbs/Cybersecurity_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_74a8db07-c79d-451e-8e1f-7de90d2fc576.png',
    file: '/certs/Cybersecurity_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_74a8db07-c79d-451e-8e1f-7de90d2fc576.pdf',
    description: 'Tactics, techniques, and procedures used by cyber criminals, cryptography fundamentals, data confidentiality and integrity, and network infrastructure defense.',
    url: '/certs/Cybersecurity_Essentials_certificate_zikri22ti-mahasiswa-pcr-ac-id_74a8db07-c79d-451e-8e1f-7de90d2fc576.pdf',
  },
  {
    title: "Hak Cipta: Website Ma'had Abu Ad Darda'",
    issuer: 'Kemenkumham RI',
    type: 'Intellectual Property (HKI)',
    credentialId: 'No. 000792817',
    date: 'November 2024',
    image: '/certs/thumbs/HakCipta-Mahad.png',
    file: '/certs/HakCipta-Mahad.pdf',
    description: "Official computer program copyright registration granted by Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum dan HAM RI for development of Website Ma'had Abu Ad Darda'.",
    url: '/certs/HakCipta-Mahad.pdf',
  },
  {
    title: 'TOEIC Prediction Test',
    issuer: 'Language Training Institution',
    type: 'Language Proficiency',
    credentialId: 'Score: 755',
    date: 'Listening: 415 · Reading: 340',
    image: '/certs/Toeic_Prediction.jpeg',
    file: '/certs/Toeic_Prediction.jpeg',
    description: 'International communication English test demonstrating high working proficiency with a total score of 755 (Listening: 415, Reading: 340).',
    url: '/certs/Toeic_Prediction.jpeg',
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
  {
    slug: 'mahad-abu-darda',
    index: '07',
    title: "Website Ma'had Abu Ad Darda'",
    category: 'Web Development · Community Service (PKM)',
    summary:
      'Official school website and online admission system developed during PKM Politeknik Caltex Riau, registered under Kemenkumham RI Copyright (HKI No. 000792817).',
    role: 'Backend Developer',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'RBAC'],
    context: 'PKM Politeknik Caltex Riau · Hak Cipta Kemenkumham',
    accent: '#2563EB',
    overview:
      "A comprehensive official school web portal and online student admission platform built for Sekolah Ma'had Abu Ad Darda' to digitize academic information, announcements, and registration.",
    problem:
      'The institution required a centralized digital platform to manage public school information, announcements, and an online registration workflow for prospective students.',
    contribution: [
      'Designed efficient relational database schemas for school data, announcements, users, and online student admissions.',
      'Developed dynamic CRUD operations for dynamic content management including news, admissions, and student records.',
      'Implemented Role-Based Access Control (RBAC) to enforce strict permission boundaries between admins, teachers, and public users.',
      'Engineered User Profile Management supporting profile editing and account management.',
    ],
    implementation: [
      'Backend server-side architecture in PHP / Laravel with structured MySQL database relations.',
      'Role-based middleware and permission gating for distinct user privileges.',
      'Dynamic administrative dashboard for streamlined content updates.',
    ],
    challenges: [
      {
        challenge: 'Enforcing granular security and privacy across multiple administrative and user roles.',
        solution: 'Implemented structured Role-Based Access Control (RBAC) ensuring administrative features remain isolated and authenticated.',
      },
    ],
    outcomes: [
      "Successfully deployed and utilized for Sekolah Ma'had Abu Ad Darda' operations.",
      'Officially registered with Hak Cipta Program Komputer from Kemenkumham RI (No. 000792817).',
    ],
    screenshots: ['/certs/thumbs/HakCipta-Mahad.png'],
  },
];
