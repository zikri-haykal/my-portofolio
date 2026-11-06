// ============================================================
//  All portfolio content lives here. Update this file only.
// ============================================================

export const site = {
  name: 'Zikri Haykal',
  fullName: 'Muhammad Zikri Haykal',
  role: 'Software Developer',
  headline: 'Software Developer | Web & Mobile Development | Exploring AI & Machine Learning',
  openToWork: true, // set false to hide the availability badge
  email: 'zikrihaikalpku01@gmail.com',
  phone: '+62 822-6067-8461',
  linkedin: 'https://www.linkedin.com/in/muhammad-zikri-haykal',
  github: 'https://github.com/zikri-haykal',
  cv: '/myself/Profile.pdf', // LinkedIn exported profile / CV
  photo: '/myself/myself.webp',
  location: 'Pekanbaru, Riau, Indonesia',
};

export type Experience = {
  org: string;
  full: string;
  role: string;
  period: string;
  points: string[];
  projects: string[];
  /** Real deliverable assets */
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
      { src: '/projects/spacemap.png', caption: 'SPACeMAP — BRIN satellite remote sensing portal reengineering' },
      { src: '/projects/guilandsat.png', caption: 'Landsat Scene Downloader — Tkinter GUI desktop automation' },
      { src: '/documentation/brin-docs-2.webp', caption: 'BRIN — Presentation & review meeting of the SPACeMAP portal reengineering' },
      { src: '/documentation/brin-docs.webp', caption: 'BRIN — Software engineering internship team at BRIN headquarters' },
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
      { src: '/projects/akomodasi-rapat.png', caption: 'Online Accommodation System — Meeting Calculator module' },
      { src: '/projects/kesuburan-tanah.png', caption: 'AgriSmart Palm Oil GIS — Soil Fertility & Plantation Block Monitoring Dashboard' },
      { src: '/documentation/ptpn-documentation.webp', caption: 'PTPN IV — Demonstration and deployment of the Soil Fertility Monitoring platform' },
      { src: '/documentation/Sertifikat_Magang_PTPN_thumb.png', caption: 'PTPN IV — Official Certificate of Completion (Magang Berdampak, Predicate: Sangat Baik)' },
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
  { group: 'Data & AI', items: ['Machine Learning', 'Deep Learning (CNN, ANN, LSTM)', 'NLP (Seq2Seq / NLTK)', 'TensorFlow / Keras', 'Scikit-learn', 'Data Analytics'], learning: true },
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
    title: 'Sertifikat Magang Berdampak: IT & Software Engineering',
    issuer: 'PT Perkebunan Nusantara IV (Persero) Regional III',
    type: 'Internship Certification',
    credentialId: 'No. 3SDM/EX-12/I/2026',
    date: 'July 2026',
    image: '/documentation/Sertifikat_Magang_PTPN_thumb.png',
    file: '/documentation/Sertifikat Magang PTPN.pdf',
    description: 'Official completion certificate for the Magang Berdampak program at PT Perkebunan Nusantara IV Regional III, awarded with predicate "Sangat Baik" for enterprise software engineering and IT support contributions.',
    url: '/documentation/Sertifikat Magang PTPN.pdf',
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
  tier: 'ai-ml' | 'web' | 'other';
  featured?: boolean;
  algorithm?: string;
  highlightMetric?: string;
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
    slug: 'sweet-sensation',
    index: '01',
    title: 'Sweet Sensation',
    category: 'Android & Machine Learning',
    tier: 'ai-ml',
    featured: true,
    algorithm: 'K-Nearest Neighbors (KNN)',
    highlightMetric: 'Multi-Feature Apple Ripeness Classification (Color, Size & Texture)',
    summary:
      'Android-based educational application that implements Machine Learning using the K-Nearest Neighbors (KNN) algorithm to predict apple ripeness based on color, size, and texture features, complete with interactive educational quizzes for children.',
    role: 'Android & ML Developer',
    stack: ['Machine Learning', 'KNN', 'Kotlin', 'Android'],
    context: 'Mobile & Machine Learning Project',
    accent: '#D9822B',
    overview:
      'An educational Android application combining a practical K-Nearest Neighbors (KNN) machine learning classifier with interactive learning modules, turning fruit ripeness identification and nutrition facts into an engaging experience for children.',
    problem:
      'Children typically learn about fruit characteristics passively from static textbooks; the application introduces an interactive, hands-on way to evaluate apple ripeness using real physical attributes and test comprehension through gamified quizzes.',
    contribution: [
      'Architected and built the native Android user interface and multi-screen navigation in Kotlin.',
      'Implemented the K-Nearest Neighbors (KNN) classification workflow evaluating color, size, and texture inputs to predict apple ripeness levels.',
      'Developed the interactive educational fruit quiz module with instant visual feedback for children.',
    ],
    implementation: [
      'Native Kotlin Android application structured with responsive activity-based screens.',
      'K-Nearest Neighbors (KNN) supervised classification pipeline mapping physical fruit attributes (color, size, texture) to discrete ripeness categories.',
    ],
    challenges: [
      {
        challenge: 'Translating numerical KNN classification outputs into an intuitive format for young learners.',
        solution: 'Mapped model predictions into clear, child-friendly visual ripeness stages paired with illustrated educational cards.',
      },
    ],
    outcomes: [
      'Delivered a functional Android ML application integrating KNN apple ripeness prediction and interactive educational quizzes.',
    ],
    screenshots: ['/projects/sweet3.png', '/projects/sweet1.png', '/projects/sweet2.png'],
  },
  {
    slug: 'pekanbaru-house-price-cnn-ann',
    index: '02',
    title: 'Pekanbaru House Price Prediction',
    category: 'Deep Learning · Multimodal CNN & ANN',
    tier: 'ai-ml',
    featured: true,
    algorithm: 'Hybrid 5-Block CNN + MLP (ANN)',
    highlightMetric: '1,465 Scraped Listings (99.co) · 70% Real-World Valuation Accuracy',
    summary:
      'Multimodal deep learning system combining a 5-block Convolutional Neural Network (CNN) for property images and a Multi-Layer Perceptron (ANN) for tabular features scraped from 99.co to predict residential prices in Pekanbaru.',
    role: 'Machine Learning Developer',
    stack: ['Deep Learning', 'CNN', 'ANN', 'Python', 'TensorFlow', 'Scikit-learn', 'Web Scraping'],
    context: 'Deep Learning Project · Politeknik Caltex Riau',
    accent: '#0D9488',
    overview:
      'A multimodal property valuation system designed to estimate residential prices in Pekanbaru, Riau. By fusing visual condition features extracted from house photographs via a CNN with structured tabular attributes (bedrooms, bathrooms, land area, and building area) processed through an ANN (MLP), the hybrid model captures both physical specifications and visual property appeal.',
    problem:
      'Estimating house prices in Pekanbaru using only tabular specifications overlooks visual building condition and exterior quality, while raw listing data suffers from unstructured text formats and heavily skewed price distributions.',
    contribution: [
      'Collected 1,465 Pekanbaru house listings and property images from 99.co via automated web scraping.',
      'Built a tabular preprocessing pipeline to parse Indonesian currency strings ("Rp Juta/Miliar") and area units ("m²") into numeric values, handle missing data with mode imputation, and apply log1p transformation with IQR outlier filtering.',
      'Designed a dual-branch hybrid neural network combining a 5-block CNN (Conv2D, BatchNormalization, ReLU, MaxPooling2D, Dropout 0.3) for 64×64 RGB images and an MLP branch for MinMax-scaled tabular features.',
      'Integrated the trained .keras model into a web application allowing users to upload a house photo and property attributes to get real-time Rupiah price predictions.',
    ],
    implementation: [
      'Hybrid concatenation of CNN image embeddings and MLP tabular representations followed by Dense (64 → 32 → 1 linear) regression layers.',
      'Trained for 100 epochs (batch size 100) using Adam optimizer (lr = 1e-4) with MSE loss and MAE metric, converting log-scale predictions back to Rupiah via np.expm1.',
      'Image preprocessing pipeline using PIL to standardize dimensions to 64×64 pixels and normalize RGB pixel values to [0, 1].',
    ],
    challenges: [
      {
        challenge: 'Highly right-skewed house price distribution with extreme luxury outliers.',
        solution: 'Applied logarithmic transformation (log1p) and IQR-based outlier removal prior to training, then inverted predictions with expm1 to restore Rupiah values.',
      },
      {
        challenge: 'Inconsistent raw text formats for prices ("Rp 980 Juta", "Rp 1,3 Miliar") and land/building measurements.',
        solution: 'Created custom parsing functions (convert_harga and remove_m2) paired with Scikit-learn MinMaxScaler normalization.',
      },
    ],
    outcomes: [
      'Curated and modeled 1,465 Pekanbaru residential property listings (1,155 train / 289 test samples after cleaning).',
      'Achieved 70% prediction accuracy within a 25% real-world price tolerance threshold on unseen Pekanbaru house listings.',
      'Deployed the multimodal CNN + ANN inference pipeline into an interactive web interface.',
    ],
    screenshots: [
      '/projects/dl-pekanbaru.jpeg',
      '/projects/dl-pekanbaru2.jpeg',
      '/projects/dl-pekanbaru3.jpeg',
      '/projects/dl-pekanbaru4.jpeg',
    ],
  },
  {
    slug: 'us-housing-timeseries-lstm',
    index: '03',
    title: 'US Housing Price Forecasting (LSTM)',
    category: 'Deep Learning · Time-Series Forecasting',
    tier: 'ai-ml',
    featured: true,
    algorithm: 'Sequential LSTM (25-Step Sliding Window)',
    highlightMetric: '305 Monthly Timesteps (2000–2025) · R² = 0.92 & 2% MAPE (Texas)',
    summary:
      'Time-series deep learning forecasting system using Long Short-Term Memory (LSTM) networks on Zillow Home Value Index (ZHVI) data (2000–2025) to project 1-month and 12-month housing price trends across five major U.S. states.',
    role: 'Machine Learning Developer',
    stack: ['Deep Learning', 'LSTM', 'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    context: 'Deep Learning Project · Politeknik Caltex Riau',
    accent: '#6366F1',
    overview:
      'A longitudinal real-estate forecasting system built on 25 years of monthly Zillow Home Value Index (ZHVI) time-series data (Jan 2000 – May 2025). The project analyzes historical price trajectories—including the 2008 financial crisis and post-2020 pandemic surge—across the five most populous U.S. states (California, Texas, Florida, New York, and Pennsylvania) and projects 1-month and 12-month future housing values.',
    problem:
      'Housing markets exhibit long-term temporal dependencies, macroeconomic cycles, and regional volatility that require sequence-aware deep learning architectures to model effectively.',
    contribution: [
      'Processed 305 monthly time-series observations (2000–2025) from the Kaggle Zillow Home Value Index (ZHVI) dataset across 51 states, focusing on California, Texas, Florida, New York, and Pennsylvania.',
      'Engineered state-specific MinMaxScaler normalization and a 25-timestep sliding window sequence generator (create_dataset) with an 80/20 chronological train-test split.',
      'Built and trained Sequential LSTM networks (32 LSTM units, 20% Dropout, Dense 16 ReLU, linear output) over 100 epochs with Adam optimizer and MSE loss.',
      'Implemented autoregressive 1-month and 12-month rolling forecast pipelines (June 2025 – May 2026) and surfaced the visualizations in a web interface.',
    ],
    implementation: [
      'Univariate time-series sequence modeling with input shape (25, 1) through LSTM(32), Dropout(0.2), Dense(16, ReLU), and Dense(1) layers.',
      'Multi-metric regression evaluation across all five state models using MSE, RMSE, MAE, MAPE, and R² Score.',
      'Iterative multi-step forecasting feeding each predicted month back into the 25-step sliding window and inverse-transforming scaled outputs.',
    ],
    challenges: [
      {
        challenge: 'Divergent regional market dynamics, such as sharp post-2020 surges in Florida and Texas versus steadier long-term growth in New York and Pennsylvania.',
        solution: 'Trained dedicated per-state MinMaxScalers and specialized sequential models tailored to each state’s historical price distribution.',
      },
    ],
    outcomes: [
      'Achieved R² = 0.92 and 2% MAPE (MAE $6,743) on the Texas housing model and R² = 0.65 with 6% MAPE on the Pennsylvania model.',
      'Generated comparative 12-month projections (2025–2026) identifying potential post-surge market corrections in California, Texas, and Florida versus sustained stability in New York and Pennsylvania.',
    ],
    screenshots: ['/projects/DL-socal.jpeg', '/projects/dl-socal2.jpeg'],
  },
  {
    slug: 'medical-chatbot-seq2seq',
    index: '04',
    title: 'Medical Consultation Chatbot (Seq2Seq)',
    category: 'Natural Language Processing · Seq2Seq LSTM',
    tier: 'ai-ml',
    featured: true,
    algorithm: 'Encoder-Decoder Seq2Seq LSTM (Teacher Forcing)',
    highlightMetric: '981 NIH MedQuAD Q&A Pairs · 80.3% Training Accuracy · BLEU 0.60',
    summary:
      'Generative medical question-answering chatbot built with an Encoder-Decoder Sequence-to-Sequence (Seq2Seq) LSTM architecture trained on NIH MedQuAD / MedlinePlus health topics, deployed on Web (Flask) and Telegram.',
    role: 'NLP & Machine Learning Developer',
    stack: ['Deep Learning', 'Seq2Seq LSTM', 'Python', 'TensorFlow', 'NLTK', 'Flask', 'Telegram Bot API'],
    context: 'NLP Project · Politeknik Caltex Riau',
    accent: '#E11D48',
    overview:
      'An intelligent healthcare consultation chatbot designed to answer user questions regarding common diseases and medical conditions (including diabetes, asthma, dengue fever, and hypothyroidism). Built with a generative Sequence-to-Sequence (Seq2Seq) LSTM architecture trained on curated NIH MedQuAD (MedlinePlus) Q&A pairs, the system synthesizes natural, context-aware medical explanations.',
    problem:
      'Conventional manual medical consultation faces waiting-time and scalability bottlenecks, while static FAQ lookups struggle to respond flexibly to varied natural-language health queries.',
    contribution: [
      'Developed an automated Python XML-to-CSV parser to extract and validate 981 clean medical Q&A pairs from the NIH MedQuAD (MPlus Health Topics) dataset.',
      'Performed Exploratory Data Analysis (character length distributions, KDE plots, top-20 lexical frequencies, and WordClouds) analyzing the asymmetry between short questions (~86 chars) and detailed clinical answers (~896 chars).',
      'Built dual NLTK preprocessing pipelines: lowercasing, punctuation removal, stopword filtering, and WordNet lemmatization for questions, paired with <start>/<end> token wrapping and a 7,366-word Keras Tokenizer for answers.',
      'Constructed and trained a Teacher-Forcing Seq2Seq LSTM model (Embedding 128, Dropout 0.3, LSTM encoder-decoder transferring state_h and state_c context vectors) for 400 epochs, and deployed standalone inference models to a Flask Web UI and Telegram bot.',
    ],
    implementation: [
      'Encoder-Decoder LSTM architecture mapping 6-token padded question sequences to 328-token padded answer sequences via shared context state vectors (state_h, state_c) and Softmax token projection.',
      'Trained over 400 epochs (batch size 16) using Adam (lr = 0.001) and sparse_categorical_crossentropy, serializing encoder/decoder models (.keras / .h5) and pickle tokenizers.',
      'Greedy argmax token-by-token sequence decoding (decode_sequence) integrated with a Flask web application ("Chatbot Medis – Sumber Medline Plus") and Telegram Messenger.',
    ],
    challenges: [
      {
        challenge: 'Significant sequence length disparity between concise symptom/disease queries (6 tokens) and comprehensive medical explanations (up to 328 tokens).',
        solution: 'Applied teacher forcing with one-step shifted target sequences during training and decoupled stateful encoder/decoder models for step-by-step generation during inference.',
      },
    ],
    outcomes: [
      'Improved model training performance from 44.6% initial accuracy (loss 6.83) to 80.3% accuracy (loss 0.81) over 400 epochs.',
      'Evaluated generative output with NLTK smoothed n-gram BLEU metrics (reaching 0.60 overall relevance / BLEU-1: 0.2775) and deployed across Flask Web UI and Telegram.',
    ],
    screenshots: ['/projects/nlp-project.png'],
  },
  {
    slug: 'rafalmer',
    index: '05',
    title: 'Rafalmer',
    category: 'E-commerce Web Application',
    tier: 'web',
    summary:
      'Online store for an MSME built with Laravel using the Prototyping method — structured product catalog, category filtering, shopping cart, checkout flow, and server-side manual payment verification.',
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
    screenshots: ['/projects/rafalmer.png'],
  },
  {
    slug: 'mahad-abu-darda',
    index: '06',
    title: "Website Ma'had Abu Ad Darda'",
    category: 'Web Development · Community Service (PKM)',
    tier: 'web',
    summary:
      'Official school web portal and online student admission system with Role-Based Access Control (RBAC), registered under Kemenkumham RI Copyright (HKI No. 000792817).',
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
    screenshots: ['/projects/mahadabudarda.jpeg', '/certs/thumbs/HakCipta-Mahad.png'],
  },
  {
    slug: 'spacemap',
    index: '07',
    title: 'SpaceMap',
    category: 'Website Reengineering · BRIN',
    tier: 'web',
    summary:
      'Reengineered the SPACeMAP satellite remote sensing portal at BRIN, migrating architecture from Bootstrap 4 to Bootstrap 5 and aligning UI components with BRIN corporate standards.',
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
    screenshots: ['/projects/spacemap.png', '/documentation/brin-docs-2.webp', '/documentation/brin-docs.webp'],
  },
  {
    slug: 'akomodasi-ptpn',
    index: '08',
    title: 'Online Accommodation System',
    category: 'Feature Development · PTPN',
    tier: 'web',
    summary:
      'Engineered the interactive Meeting Calculator module for automated budget estimation and approval workflows within PTPN IV’s enterprise accommodation platform.',
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
    screenshots: ['/projects/akomodasi-rapat.png'],
  },
  {
    slug: 'soil-monitoring',
    index: '09',
    title: 'Soil Fertility Monitoring',
    category: 'Backend & GIS Platform · PTPN',
    tier: 'web',
    summary:
      'Engineered backend endpoints, relational database schemas, and nutrient status processing logic for the AgriSmart Palm Oil GIS soil fertility monitoring dashboard at PTPN IV.',
    role: 'Backend Developer (Intern)',
    stack: ['PHP', 'MySQL', 'Backend API', 'Relational Database'],
    context: 'PTPN internship',
    accent: '#4D7C0F',
    overview: 'A web platform to support monitoring of soil fertility data in plantation areas.',
    problem: 'Soil fertility data needed a structured system for recording and monitoring.',
    contribution: ['Contributed to backend features supporting the monitoring functionality.'],
    implementation: ['Backend endpoints and data handling for monitoring features.'],
    challenges: [],
    outcomes: ['Backend contributions integrated into the team project.'],
    screenshots: ['/projects/kesuburan-tanah.png', '/documentation/ptpn-documentation.webp'],
  },
  {
    slug: 'landsat-downloader',
    index: '10',
    title: 'Landsat Scene Downloader',
    category: 'Desktop Application · BRIN',
    tier: 'other',
    summary:
      'Python desktop automation app integrating the USGS M2M API with multi-threaded background workers to search and batch-download Landsat 8–9 Collection 2 Level-1 imagery by Path/Row.',
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
    screenshots: ['/projects/guilandsat.png'],
  },
];

export const stats = [
  {
    index: '01',
    value: '3.70',
    label: 'GPA',
    note: 'Informatics Engineering',
  },
  {
    index: '02',
    value: String(certifications.length),
    label: 'Certifications',
    note: 'Professional & Technical Certifications',
  },
  {
    index: '03',
    value: String(projects.length),
    label: 'Projects',
    note: 'Software & AI/ML Projects',
  },
  {
    index: '04',
    value: certifications.some((c) => c.title.includes('BNSP') && c.file) ? 'Certified' : 'Verified',
    label: 'BNSP',
    note: 'Professional Certification',
  },
];
