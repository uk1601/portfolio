/**
 * Portfolio Configuration
 *
 * This file centralizes all content for the portfolio website.
 * Edit this file to update your information without touching component files.
 */

// Personal Information
export const personalInfo = {
  name: "Uday Kiran Dasari",
  title: "Data Engineer / AI & ML Engineer",
  tagline: "Building intelligent data pipelines and AI solutions that transform raw data into actionable insights",
  about: `I'm a Data Engineer and AI/ML specialist with expertise in designing scalable data architectures, 
  implementing advanced machine learning models, and developing end-to-end AI solutions. With a strong 
  background in cloud technologies and big data frameworks, I help organizations leverage their data 
  to drive innovation and business value.`,
  resumeUrl: "https://drive.google.com/file/d/12vzlO_tJFxcmQ1qlfBBVDcRAkXHZeoxl/view?usp=drive_link", // Path to your resume file
}

// Contact Information
export const contactInfo = {
  emails: [
    "udaykiranchintu16@gmail.com",
    "dasari.uda@northeastern.edu", // Replace with your second email
  ],
  socialMedia: {
    linkedin: "https://linkedin.com/in/udaykiran16", // Replace with your LinkedIn URL
    github: "https://github.com/uk1601", // Replace with your GitHub URL
  },
}

// Projects
export const projects = [
  {
    id: "learn-lab",
    title: "Learn Lab - Multimodal Learning Platform",
    shortDescription: "RAG-based learning platform with semantic chunking and vector database integration",
    preferenceOrder: 1,
    fullDescription: `Engineered a RAG-based learning platform using semantic chunking with OpenAI embeddings 
    and Pinecone vector database that achieved 92% retrieval accuracy and 73% reduced query latency, 
    implementing dynamic thresholding and window-based splits of size 2 that maintained contextual 
    coherence across multiple learning formats.`,
    problemStatement: `Traditional learning platforms struggle with contextual understanding across different 
    content formats, leading to poor retrieval accuracy and slow response times.`,
    solution: `Developed an intelligent content generation system with five specialized agents (podcast, 
    flashcard, quiz, blog, tweet) using LangGraph for agent orchestration that transformed PDFs into 
    diverse learning materials, integrating a multimodal architecture with Upstash semantic caching 
    (97% similarity threshold) that reduced API costs by 41% and improved response times by 78%.`,
    keyLearnings: `Discovered the importance of semantic chunking strategies for maintaining context, 
    the effectiveness of specialized agents for different content types, and the significant 
    performance benefits of implementing proper caching mechanisms.`,
    technologies: ["OpenAI", "Pinecone", "LangGraph", "Next.js", "FastAPI", "Upstash", "AWS S3", "GCP"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Learn+Lab+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Content+Generation+System",
      "/placeholder.svg?height=600&width=800&text=Vector+Database+Integration",
    ],
    githubUrl: "https://github.com/your-username/learn-lab",
    projectUrl: "https://learn-lab-demo.vercel.app",
    visible: true,
  },
  {
    id: "multi-agent-research",
    title: "Multi-Modal and Multi-Agent Research Assistant",
    shortDescription:
      "Distributed multi-agent research system using LangGraph for orchestrating specialized agent nodes",
    preferenceOrder: 2,
    fullDescription: `Engineered a distributed multi-agent research system using LangGraph for orchestrating 
    specialized agent nodes (web search, ArXiv, RAG), implementing state-based workflows and parallel 
    processing that reduced research time by 65% while maintaining 95% semantic relevance for complex 
    financial document analysis.`,
    problemStatement: `Research processes are often time-consuming and inefficient, especially when dealing 
    with multiple sources and complex document analysis.`,
    solution: `Developed an automated document processing pipeline with Airflow orchestrating extraction 
    of multi-modal content (text, tables, images), leveraging OpenAI embeddings and Pinecone vector 
    database to achieve low retrieval times for 4,500+ vectorized elements across diverse document types.`,
    keyLearnings: `Learned the importance of state management in multi-agent systems, the benefits of 
    parallel processing for research tasks, and techniques for maintaining semantic relevance across 
    different document types.`,
    technologies: ["LangGraph", "Airflow", "OpenAI", "Pinecone", "FastAPI", "Docker", "Streamlit"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Multi-Agent+System+Architecture",
      "/placeholder.svg?height=600&width=800&text=Document+Processing+Pipeline",
      "/placeholder.svg?height=600&width=800&text=Research+Assistant+Interface",
    ],
    githubUrl: "https://github.com/your-username/multi-agent-research",
    projectUrl: "https://research-assistant-demo.vercel.app",
    visible: true,
  },
  {
    id: "rag-financial",
    title: "Multi-Modal RAG Application",
    shortDescription: "RAG-based financial research platform with document processing pipeline",
    preferenceOrder: 3,
    fullDescription: `Engineered a RAG-based financial research platform integrating Apache Airflow for 
    orchestrating document scraping workflows, S3 for multi-modal storage, and Snowflake for metadata 
    indexing, achieving 78% faster document processing and enabling semantic search across 200+ 
    financial publications.`,
    problemStatement: `Financial research requires processing large volumes of documents from various 
    sources, making it difficult to extract relevant information efficiently.`,
    solution: `Implemented a robust vector retrieval system leveraging OpenAI embeddings and Pinecone 
    vector database with custom filters for content type (text, tables, images), incorporating 
    specialized query processing logic that improved contextual relevance by 62% while maintaining 
    linear scalability for concurrent user interactions.`,
    keyLearnings: `Discovered effective strategies for multi-modal content processing, the importance 
    of custom filters for different content types, and techniques for maintaining performance with 
    concurrent users.`,
    technologies: ["Apache Airflow", "AWS S3", "Snowflake", "OpenAI", "Pinecone", "FastAPI", "Streamlit", "JWT"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Financial+Research+Platform",
      "/placeholder.svg?height=600&width=800&text=Vector+Retrieval+System",
      "/placeholder.svg?height=600&width=800&text=Document+Processing+Workflow",
    ],
    githubUrl: "https://github.com/your-username/rag-financial",
    projectUrl: "https://financial-rag-demo.vercel.app",
    visible: false,
  },
  {
    id: "doc-processing",
    title: "Automated Document Processing and Querying Platform",
    shortDescription: "Document processing system with Apache Airflow and vector database integration",
    preferenceOrder: 4,
    fullDescription: `Engineered an automated document processing system leveraging Apache Airflow, 
    integrating PyMuPDF and PDF.co API for comprehensive PDF extraction, with MongoDB for document 
    storage and PostgreSQL for user management.`,
    problemStatement: `Manual document processing is time-consuming and error-prone, especially when 
    dealing with complex PDF documents containing various types of information.`,
    solution: `Developed a secure web application using FastAPI for JWT authentication, with Streamlit 
    frontend enabling interactive document querying, summarization, and analysis capabilities.`,
    keyLearnings: `Learned effective strategies for PDF extraction, the importance of proper database 
    selection for different types of data, and techniques for building secure authentication systems.`,
    technologies: [
      "Apache Airflow",
      "PyMuPDF",
      "PDF.co API",
      "MongoDB",
      "PostgreSQL",
      "FastAPI",
      "Streamlit",
      "Docker",
      "GCP",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Document+Processing+System",
      "/placeholder.svg?height=600&width=800&text=PDF+Extraction+Interface",
      "/placeholder.svg?height=600&width=800&text=Query+and+Analysis+Dashboard",
    ],
    githubUrl: "https://github.com/your-username/doc-processing",
    projectUrl: "https://doc-processing-demo.vercel.app",
    visible: false,
  },
  {
    id: "llm-benchmarking",
    title: "LLM Benchmarking Application",
    shortDescription: "Scalable pipeline for benchmarking multiple Large Language Models",
    preferenceOrder: 5,
    fullDescription: `Designed a scalable pipeline leveraging Hugging Face for dataset retrieval, Terraform for Google Cloud infrastructure setup, and PostgreSQL for task metadata storage to benchmark multiple Large Language Models (LLMs).`,
    problemStatement: `Evaluating and comparing the performance of different LLMs is challenging due to the lack of standardized benchmarking tools and infrastructure.`,
    solution: `Developed a multi-page Streamlit interface integrated with FastAPI, enabling LLM querying, annotation workflows, and data visualization of performance metrics.`,
    keyLearnings: `Gained insights into effective LLM evaluation methodologies, infrastructure automation with Terraform, and the importance of structured data storage for complex benchmarking tasks.`,
    technologies: ["Hugging Face", "Terraform", "Google Cloud", "PostgreSQL", "Streamlit", "FastAPI", "OpenAI API"],
    images: [
      "/placeholder.svg?height=600&width=800&text=LLM+Benchmarking+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Performance+Metrics+Visualization",
      "/placeholder.svg?height=600&width=800&text=Model+Comparison+Interface",
    ],
    githubUrl: "https://github.com/your-username/llm-benchmarking",
    projectUrl: "https://llm-benchmark-demo.vercel.app",
    visible: false,
  },
  {
    id: "hybrid-cnn-rnn",
    title: "Hybrid CNN-RNN for Precipitation Prediction",
    shortDescription: "Advanced neural network model combining meteorological data and cloud imagery",
    preferenceOrder: 6,
    fullDescription: `Engineered a hybrid CNN-RNN-LSTM model by integrating satellite cloud images and meteorological data to predict precipitation, utilizing advanced neural network architectures such as Conv3D, LSTM layers, Batch Normalization, Max Pooling, and Dropout for enhanced performance.`,
    problemStatement: `Traditional precipitation prediction models often struggle with integrating different data types and handling the temporal aspects of weather patterns.`,
    solution: `Implemented advanced preprocessing techniques, including wind vector creation, cyclic date-time features, data cleaning, feature engineering, and imputation, ensuring high-quality input data for the model.`,
    keyLearnings: `Addressed class imbalance and dataset size disparities using innovative strategies, achieving reliable and accurate predictions for future precipitation scenarios.`,
    technologies: ["TensorFlow", "Keras", "Conv3D", "LSTM", "Batch Normalization", "Python", "NumPy", "Pandas"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Hybrid+Model+Architecture",
      "/placeholder.svg?height=600&width=800&text=Precipitation+Prediction+Results",
      "/placeholder.svg?height=600&width=800&text=Feature+Engineering+Pipeline",
    ],
    githubUrl: "https://github.com/your-username/hybrid-cnn-rnn",
    projectUrl: "https://precipitation-prediction-demo.vercel.app",
    visible: true,
  },
  {
    id: "image-captioning",
    title: "Image Captioning with CNN and RNN-GRU",
    shortDescription: "Advanced image captioning system using attention mechanisms",
    preferenceOrder: 7,
    fullDescription: `Developed a sophisticated image captioning system employing TensorFlow to integrate ResNet50-based CNNs for feature extraction and RNNs with Bahdanau Attention for sequential text generation, significantly improving the interpretability and relevance of generated captions.`,
    problemStatement: `Generating accurate and contextually relevant captions for images requires complex integration of visual feature extraction and natural language generation.`,
    solution: `Architected and refined data engineering workflows for the COCO 2017 dataset, executing image resizing, normalization, and advanced text tokenization to streamline input processing, thereby boosting model training throughput and accuracy.`,
    keyLearnings: `Orchestrated comprehensive inference protocols that facilitated both directory-based bulk image processing and on-the-fly image captioning from web URLs, showcasing the model's adaptability and scalability in real-world applications.`,
    technologies: [
      "TensorFlow",
      "ResNet50",
      "RNN-GRU",
      "Bahdanau Attention",
      "COCO Dataset",
      "Python",
      "Computer Vision",
      "NLP",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Image+Captioning+System",
      "/placeholder.svg?height=600&width=800&text=Attention+Mechanism+Visualization",
      "/placeholder.svg?height=600&width=800&text=Caption+Generation+Examples",
    ],
    githubUrl: "https://github.com/your-username/image-captioning",
    projectUrl: "https://image-captioning-demo.vercel.app",
    visible: true,
  },
  {
    id: "asteroid-classification",
    title: "Asteroid Data Classification Through Parallel Computing",
    shortDescription: "High-performance asteroid classification using parallel computing techniques",
    preferenceOrder: 8,
    fullDescription: `Implemented parallel computing techniques using Dask and PyTorch, reducing data preprocessing and model training times by up to 8.24x for a comprehensive dataset of 958K asteroid records.`,
    problemStatement: `Processing and analyzing large astronomical datasets is computationally intensive and time-consuming with traditional sequential approaches.`,
    solution: `Enhanced model performance and reliability through advanced data preprocessing, feature extraction, and model building techniques using Dask, Multiprocessing, and PyTorch, utilizing Random Forest, KNN, XGBoost, and Neural Networks.`,
    keyLearnings: `Optimized multi-CPU and GPU resource utilization on Northeastern University's Discovery supercomputer, significantly improving computational efficiency and reducing execution time by over 50%.`,
    technologies: [
      "Dask",
      "PyTorch",
      "Multiprocessing",
      "Random Forest",
      "KNN",
      "XGBoost",
      "Neural Networks",
      "High-Performance Computing",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Parallel+Computing+Architecture",
      "/placeholder.svg?height=600&width=800&text=Asteroid+Classification+Results",
      "/placeholder.svg?height=600&width=800&text=Performance+Optimization+Metrics",
    ],
    githubUrl: "https://github.com/your-username/asteroid-classification",
    projectUrl: "https://asteroid-classification-demo.vercel.app",
    visible: true,
  },
  {
    id: "nlp-text-generation",
    title: "NLP Text Generation with RNN-LSTM Model",
    shortDescription: "Telugu language chatbot using RNN-LSTM architecture",
    preferenceOrder: 9,
    fullDescription: `Engineered a Telugu language chatbot using RNN LSTM architecture with TensorFlow, achieving coherent text generation in Telugu.`,
    problemStatement: `Natural language generation for low-resource languages like Telugu presents unique challenges due to limited training data and complex linguistic structures.`,
    solution: `Implemented advanced data preprocessing techniques, including tokenization, sequence padding, and embedding, to ensure robust model training and accuracy.`,
    keyLearnings: `Developed and demonstrated an end-to-end NLP pipeline with deterministic and probabilistic models, enhancing text generation diversity and translating Telugu text to English, showcasing contextual understanding.`,
    technologies: [
      "TensorFlow",
      "RNN-LSTM",
      "NLP",
      "Tokenization",
      "Embeddings",
      "Telugu Language Processing",
      "Python",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Telugu+Chatbot+Interface",
      "/placeholder.svg?height=600&width=800&text=Text+Generation+Examples",
      "/placeholder.svg?height=600&width=800&text=Translation+Pipeline",
    ],
    githubUrl: "https://github.com/your-username/telugu-text-generation",
    projectUrl: "https://telugu-chatbot-demo.vercel.app",
    visible: true,
  },
  {
    id: "language-translation",
    title: "Language Translation using Transformer Architecture",
    shortDescription: "English to Telugu translation model using Transformer architecture",
    preferenceOrder: 10,
    fullDescription: `Engineered a neural machine translation model leveraging the Transformer architecture, implementing sophisticated mechanisms such as multi-head attention and positional encoding.`,
    problemStatement: `Traditional translation approaches for low-resource language pairs like English-Telugu often produce poor results due to limited parallel corpora and complex linguistic differences.`,
    solution: `Conducted data preprocessing including tokenization and padding and trained the model using the Adam optimizer with dynamic learning rate scheduling and Cross-Entropy Loss for efficient convergence.`,
    keyLearnings: `Implemented and compared Greedy Search and Beam Search decoding strategies, demonstrating enhanced translation accuracy and fluency with Beam Search in practical applications.`,
    technologies: [
      "Transformer Architecture",
      "Multi-head Attention",
      "Positional Encoding",
      "Adam Optimizer",
      "Beam Search",
      "Python",
      "NLP",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Transformer+Architecture",
      "/placeholder.svg?height=600&width=800&text=Translation+Examples",
      "/placeholder.svg?height=600&width=800&text=Attention+Visualization",
    ],
    githubUrl: "https://github.com/your-username/english-telugu-translation",
    projectUrl: "https://translation-model-demo.vercel.app",
    visible: true,
  },
  {
    id: "gender-emotion-classification",
    title: "Unified Gender and Emotion Classification Using CNN",
    shortDescription: "Dual classification model for gender and emotion from facial images",
    preferenceOrder: 11,
    fullDescription: `Developed a CNN-based model for dual classification of gender and emotion from images, achieving high accuracy in emotion detection and implementing techniques like early stopping, model checkpointing, class weighting, and under sampling to enhance model performance and robustness.`,
    problemStatement: `Traditional facial analysis models often treat gender and emotion classification as separate tasks, leading to inefficiencies and potential inconsistencies in predictions.`,
    solution: `Addressed dataset imbalances and enhanced model generalization by integrating emotion detection into gender classification, utilizing a diverse dataset, and experimenting with various CNN architectures to improve prediction accuracy for underrepresented classes, particularly female images.`,
    keyLearnings: `Demonstrated potential applications in facial recognition, social robotics, and sentiment analysis, highlighting the model's capability to provide comprehensive insights into individuals' characteristics depicted in images and identifying areas for further improvement with balanced and augmented datasets.`,
    technologies: [
      "Convolutional Neural Networks",
      "TensorFlow",
      "Keras",
      "Early Stopping",
      "Class Weighting",
      "Computer Vision",
      "Facial Analysis",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Dual+Classification+Model",
      "/placeholder.svg?height=600&width=800&text=Emotion+Detection+Results",
      "/placeholder.svg?height=600&width=800&text=Gender+Classification+Accuracy",
    ],
    githubUrl: "https://github.com/your-username/gender-emotion-classification",
    projectUrl: "https://facial-analysis-demo.vercel.app",
    visible: true,
  },
  {
    id: "energy-grid-management",
    title: "Global Renewable Energy Grid Management System",
    shortDescription: "Java-based energy grid management system with advanced analytics",
    preferenceOrder: 12,
    fullDescription: `Developed and designed a Java Swing-based Energy Grid Management System using NetBeans, focusing on advanced analytics and user-friendly features for renewable energy stakeholders.`,
    problemStatement: `Managing renewable energy grids requires sophisticated tools for monitoring, analysis, and decision-making that traditional energy management systems often lack.`,
    solution: `Implemented role-specific dashboards in the system to foster collaboration and enable real-time monitoring and intuitive data visualization for energy grid operations.`,
    keyLearnings: `Achieved enhanced predictive energy analysis and decision-making in energy management through the employment of a forecasting algorithm and role-specific features.`,
    technologies: [
      "Java",
      "Swing",
      "NetBeans",
      "Object-Oriented Programming",
      "Data Visualization",
      "Forecasting Algorithms",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Energy+Grid+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Role-specific+Interfaces",
      "/placeholder.svg?height=600&width=800&text=Predictive+Analysis+Tools",
    ],
    githubUrl: "https://github.com/your-username/energy-grid-management",
    projectUrl: "https://energy-management-demo.vercel.app",
    visible: false,
  },
  {
    id: "seismic-performance",
    title: "Seismic Performance Comparative Study",
    shortDescription: "Comparative analysis of traditional and modular building seismic performance",
    preferenceOrder: 13,
    fullDescription: `Conducted a comparative study of the seismic performance of a traditional residential building and a modular building, performing response spectrum analysis and pushover analysis on both structures.`,
    problemStatement: `Understanding the seismic behavior differences between traditional and modular construction methods is crucial for developing safer building practices in earthquake-prone regions.`,
    solution: `Used civil engineering software applications like AutoCAD, StaadPro, and Etabs for developing and simulating the seismic environment on the buildings, analyzing multiple parameters to compare performance.`,
    keyLearnings: `Identified key structural differences that affect seismic resilience, providing valuable insights for improving building codes and construction practices in earthquake-prone areas.`,
    technologies: [
      "AutoCAD",
      "StaadPro",
      "Etabs",
      "Response Spectrum Analysis",
      "Pushover Analysis",
      "Structural Engineering",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Building+Models+Comparison",
      "/placeholder.svg?height=600&width=800&text=Seismic+Analysis+Results",
      "/placeholder.svg?height=600&width=800&text=Structural+Performance+Metrics",
    ],
    githubUrl: "https://github.com/your-username/seismic-performance-study",
    projectUrl: "https://seismic-analysis-demo.vercel.app",
    visible: false,
  },
]

// Experience
export const experiences = [
  {
    title: "Data Engineer (Graduate Teaching and Research Assistant)",
    company: "Northeastern University",
    location: "Boston",
    period: "August 2024  – Present",
    description: `Architected intensive technical workshops for 50 graduate students on end-to-end data 
    engineering pipelines using Snowflake/Snowpark Python, implementing DBT transformations, Jinja 
    templating, and GitHub Actions CI/CD workflows, culminating in a 16-team hackathon developing 
    specialized research assistants with MCP server integrations.`,
    achievements: [
      "Orchestrated advanced lab sessions on RAG implementations with multi-vector database strategies (Pinecone/ChromaDB)",
      "Implemented multi-agent frameworks (LangGraph/CrewAI) and cloud-native deployments using Airflow DAGs",
      "Developed container orchestration and FastAPI/Streamlit applications, driving 95% improvement in project complexity and deployment success rates",
    ],
    visible: true,
  },
  {
    title: "Application Engineering Development (Graduate Teaching Assistant)",
    company: "Northeastern University",
    location: "Boston",
    period: "August 2024 – December 2024",
    description: `Mentored 200+ students in implementing modular Java applications with OOP design patterns, 
    Swing UI architecture, and enterprise-grade features including multi-tier data management, authentication 
    systems, and cross-organizational workflow engines, resulting in 35% higher project evaluation scores.`,
    achievements: [
      "Conducted technical code reviews and architecture evaluations focusing on system scalability",
      "Implemented component decoupling and Java best practices across complex ecosystems",
      "Enabled students to implement advanced security features, analytics dashboards, and notification frameworks",
    ],
    visible: false,
  },
  {
    title: "Cloud Engineer",
    company: "Zitisi Solutions LLP",
    location: "Hyderabad, India",
    period: "August 2021 – June 2023",
    description: `Architected secure AWS infrastructure utilizing VPC, EC2 Auto Scaling, and IAM role-based 
    policies following least privilege principles, reducing monthly compute costs by 28% while maintaining 
    99.9% application uptime across multiple availability zones.`,
    achievements: [
      "Implemented serverless data processing workflows with S3, Lambda, and DynamoDB",
      "Designed efficient event-driven pipelines that processed 200GB+ daily data while reducing processing latency by 65%",
      "Established comprehensive monitoring and disaster recovery solutions utilizing CloudWatch dashboards, SNS notifications, and automated backup procedures",
    ],
    visible: true,
  },
]

// Education
export const education = [
  {
    degree: "Master of Science in Information Systems (Data and ML/AI Specialization)",
    institution: "Northeastern University",
    location: "Boston, MA",
    period: "August 2023 – May 2025",
    gpa: "3.95/4.0",
    visible: true,
  },
  {
    degree: "Bachelor of Technology, Civil Engineering",
    institution: "National Institute of Technology",
    location: "Andhra Pradesh, India",
    period: "August 2017 – June 2021",
    gpa: "",
    visible: true,
  },
]

// Skills with icon mappings (icons will be replaced later)
export const skills = {
  dataEngineering: {
    title: "Data Engineering & Tools",
    items: [
      { name: "Python", icon: "placeholder" },
      { name: "Apache Airflow", icon: "placeholder" },
      { name: "Snowflake", icon: "placeholder" },
      { name: "DBT", icon: "placeholder" },
      { name: "PostgreSQL", icon: "placeholder" },
      { name: "MongoDB", icon: "placeholder" },
      { name: "MySQL", icon: "placeholder" },
      { name: "Redis", icon: "placeholder" },
      { name: "Vector Databases", icon: "placeholder" },
      { name: "Pinecone", icon: "placeholder" },
      { name: "Matplotlib", icon: "placeholder" },
      { name: "Seaborn", icon: "placeholder" },
      { name: "Advanced Excel", icon: "placeholder" },
    ],
    visible: true,
  },
  machineLearning: {
    title: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", icon: "placeholder" },
      { name: "PyTorch", icon: "placeholder" },
      { name: "OpenAI", icon: "placeholder" },
      { name: "Hugging Face", icon: "placeholder" },
      { name: "LangChain", icon: "placeholder" },
      { name: "LangGraph", icon: "placeholder" },
      { name: "NumPy", icon: "placeholder" },
      { name: "Pandas", icon: "placeholder" },
      { name: "Scikit-learn", icon: "placeholder" },
      { name: "Dask", icon: "placeholder" },
      { name: "CNN", icon: "placeholder" },
      { name: "RNN", icon: "placeholder" },
      { name: "LSTM", icon: "placeholder" },
      { name: "Transformers", icon: "placeholder" },
      { name: "Llamaindex", icon: "placeholder" },
      { name: "OpenCV", icon: "placeholder" },
      { name: "MCP server integrations", icon: "placeholder" },
      { name: "LiteLLM", icon: "placeholder" },
      { name: "CrewAI", icon: "placeholder" },
    ],
    visible: true,
  },
  cloud: {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "placeholder" },
      { name: "GCP", icon: "placeholder" },
      { name: "Docker", icon: "placeholder" },
      { name: "Kubernetes", icon: "placeholder" },
      { name: "Terraform", icon: "placeholder" },
      { name: "Ansible", icon: "placeholder" },
      { name: "CI/CD", icon: "placeholder" },
      { name: "Git", icon: "placeholder" },
      { name: "GitHub Actions", icon: "placeholder" },
      { name: "Jenkins", icon: "placeholder" },
      { name: "Kafka", icon: "placeholder" },
      { name: "Snowpark", icon: "placeholder" },
      { name: "Linux", icon: "placeholder" },
      { name: "Windows", icon: "placeholder" },
      { name: "Shell Scripts", icon: "placeholder" },
    ],
    visible: true,
  },
  webDevelopment: {
    title: "Web Development",
    items: [
      { name: "FastAPI", icon: "placeholder" },
      { name: "Streamlit", icon: "placeholder" },
      { name: "Java", icon: "placeholder" },
      { name: "R", icon: "placeholder" },
    ],
    visible: true,
  },
  otherTools: {
    title: "Other Tools",
    items: [
      { name: "AutoCAD", icon: "placeholder" },
      { name: "Staad Pro", icon: "placeholder" },
      { name: "Etabs", icon: "placeholder" },
    ],
    visible: true,
  },
}

// Update the themeConfig section with Apple-inspired colors:

// Theme Configuration
export const themeConfig = {
  // Light theme colors - Apple-inspired
  light: {
    primary: "#0066CC", // Apple blue (SF symbols)
    secondary: "#34C759", // Apple green
    accent: "#FF9500", // Apple orange
    background: "#FFFFFF", // Pure white
    text: "#1D1D1F", // Apple dark text
    heroBackground: "#F5F5F7", // Apple light gray
    aboutBackground: "#FFFFFF", // Pure white
    projectsBackground: "#F8F8FA", // Very subtle light gray
    skillsBackground: "#F5F5F7", // Apple light gray
    experienceBackground: "#FAFAFA", // Subtle off-white
    contactBackground: "#F5F5F7", // Apple light gray
  },
  // Dark theme colors - Apple-inspired
  dark: {
    primary: "#0A84FF", // Apple blue (dark mode)
    secondary: "#30D158", // Apple green (dark mode)
    accent: "#FF9F0A", // Apple orange (dark mode)
    background: "#000000", // True black
    text: "#F5F5F7", // Apple light text
    heroBackground: "#000000", // True black
    aboutBackground: "#0C0C0C", // Slightly lighter than true black
    projectsBackground: "#0C0C0C", // Slightly lighter than true black
    skillsBackground: "#000000", // True black
    experienceBackground: "#0C0C0C", // Slightly lighter than true black
    contactBackground: "#000000", // True black
  },
}

// Section visibility
export const sectionVisibility = {
  hero: true,
  about: true,
  projects: true,
  skills: true,
  experience: true,
  education: true,
  contact: true,
}

