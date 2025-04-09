/**
 * Skills Configuration
 *
 * Contains skills categorized by type with detailed summaries.
 */
export const skills = {
  keySkills: {
    title: "Key Technical Skills",
    description: "Core competencies and specialized expertise",
    items: [
      {
        name: "Machine Learning & AI",
        icon: "/images/skills/ai.svg",
        summary:
          "Architected intensive technical workshops on end-to-end data engineering pipelines. Developed RAG-based learning platforms using semantic chunking with OpenAI embeddings and Pinecone vector database, achieving 92% retrieval accuracy and 73% reduced query latency in the Learn Lab project.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Natural Language Processing (NLP)",
        icon: "/images/skills/nlp.svg",
        summary:
          "Developed intelligent content generation systems with specialized agents using LangGraph for orchestration. Implemented multi-agent frameworks and RAG systems with multi-vector database strategies (Pinecone/ChromaDB) that transformed PDFs into diverse learning materials in the Learn Lab project.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Data Engineering & Big Data",
        icon: "/images/skills/bigdata.svg",
        summary:
          "Engineered data pipelines using Apache Airflow, Snowflake/Snowpark Python, and DBT transformations. Implemented serverless data processing workflows with S3, Lambda, and DynamoDB, designing efficient event-driven pipelines that processed 200GB+ daily data while reducing processing latency by 65%.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Cloud Computing & MLOps",
        icon: "/images/skills/cloud.svg",
        summary:
          "Architected secure AWS infrastructure utilizing VPC, EC2 Auto Scaling, and IAM role-based policies following least privilege principles, reducing monthly compute costs by 28% while maintaining 99.9% application uptime across multiple availability zones. Implemented container orchestration and cloud-native deployments.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Deep Learning & Neural Networks",
        icon: "/images/skills/neuralnetwork.svg",
        summary:
          "Engineered a hybrid CNN-RNN-LSTM model for precipitation prediction by integrating satellite cloud images and meteorological data. Developed image captioning systems employing ResNet50-based CNNs for feature extraction and RNNs with Bahdanau Attention for sequential text generation.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Computer Vision",
        icon: "/images/skills/computervision.svg",
        summary:
          "Developed CNN-based models for dual classification of gender and emotion from images. Built image classification, object detection, and segmentation models. Created image captioning systems with ResNet50 and attention mechanisms for feature extraction and sequential text generation.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Software Development",
        icon: "/images/skills/software.svg",
        summary:
          "Architected scalable full-stack applications with Next.js frontend and FastAPI backend, implementing real-time WebSocket notifications, JWT authentication, and distributed processing. Developed Java Swing-based Energy Grid Management System with advanced analytics and user-friendly features.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Database Management",
        icon: "/images/skills/database.svg",
        summary:
          "Implemented vector databases (Pinecone, ChromaDB) for similarity search in RAG applications. Worked with relational databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB, Redis) for various projects, including metadata indexing and document storage in financial research platforms.",
        proficiency: 100,
        visible: true,
      },
      {
        name: "Data Analysis & Visualization",
        icon: "/images/skills/dataanalysis.svg",
        summary:
          "Conducted data preprocessing including tokenization, sequence padding, and embedding for NLP projects. Implemented advanced data preprocessing techniques for neural networks, including wind vector creation, cyclic date-time features, and feature engineering for precipitation prediction models.",
        proficiency: 100,
        visible: true,
      },
    ],
  },

  // Keep the existing categories for the detailed skills section
  dataEngineering: {
    title: "Data Engineering & Tools",
    items: [
      { name: "Python", icon: "/images/skills/python.svg" },
      { name: "Apache Airflow", icon: "/images/skills/airflow.svg" },
      { name: "Snowflake", icon: "/images/skills/snowflake.svg" },
      { name: "DBT", icon: "/images/skills/dbt.svg" },
      { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
      { name: "MySQL", icon: "/images/skills/mysql.svg" },
      { name: "Redis", icon: "/images/skills/redis.svg" },
      { name: "Vector Databases", icon: "/images/skills/vectordatabase.svg" },
      { name: "Pinecone", icon: "/images/skills/pinecone.svg" },
      { name: "Pandas", icon: "/images/skills/pandas.svg" },
      { name: "NumPy", icon: "/images/skills/numpy.svg" },
      { name: "Matplotlib", icon: "/images/skills/matplotlib.svg" },
      { name: "Seaborn", icon: "/images/skills/seaborn.svg" },
      { name: "Advanced Excel", icon: "/images/skills/excel.svg" },
    ],
    visible: true,
  },
  machineLearning: {
    title: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", icon: "/images/skills/tensorflow.svg" },
      { name: "PyTorch", icon: "/images/skills/pytorch.svg" },
      { name: "OpenAI", icon: "/images/skills/openai.svg" },
      { name: "Hugging Face", icon: "/images/skills/hugging-face.svg" },
      { name: "LangChain", icon: "/images/skills/langchain.svg" },
      { name: "LangGraph", icon: "/images/skills/langgraph.svg" },
      { name: "NumPy", icon: "/images/skills/numpy.svg" },
      { name: "Pandas", icon: "/images/skills/pandas.svg" },
      { name: "Scikit-learn", icon: "/images/skills/scikit-learn.svg" },
      { name: "Dask", icon: "/images/skills/dask.svg" },
      { name: "CNN", icon: "/images/skills/cnn.svg" },
      { name: "RNN", icon: "/images/skills/rnn.svg" },
      { name: "LSTM", icon: "/images/skills/lstm.svg" },
      { name: "Transformers", icon: "/images/skills/transformers.svg" },
      { name: "Llamaindex", icon: "/images/skills/llamaindex.svg" },
      { name: "OpenCV", icon: "/images/skills/opencv.svg" },
      { name: "MCP server integrations", icon: "/images/skills/mcp.svg" },
      { name: "LiteLLM", icon: "/images/skills/litellm_logo.svg" },
      { name: "CrewAI", icon: "/images/skills/crewai.svg" },
    ],
    visible: true,
  },
  cloud: {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/images/skills/aws.svg" },
      { name: "GCP", icon: "/images/skills/gcp.svg" },
      { name: "Docker", icon: "/images/skills/docker.svg" },
      { name: "Kubernetes", icon: "/images/skills/kubernetes.svg" },
      { name: "Terraform", icon: "/images/skills/terraformio.svg" },
      { name: "Ansible", icon: "/images/skills/ansible.svg" },
      { name: "CI/CD", icon: "/images/skills/cicd.svg" },
      { name: "Git", icon: "/images/skills/git.svg" },
      { name: "GitHub Actions", icon: "/images/skills/githubactions.svg" },
      { name: "Jenkins", icon: "/images/skills/jenkins.svg" },
      { name: "Kafka", icon: "/images/skills/apache_kafka.svg" },
      { name: "Snowpark", icon: "/images/skills/snowpark.svg" },
      { name: "Linux", icon: "/images/skills/linux.svg" },
      { name: "Windows", icon: "/images/skills/windows.svg" },
      { name: "Shell Scripts", icon: "/images/skills/shellscripts.svg" },
    ],
    visible: true,
  },
  webDevelopment: {
    title: "Web Development",
    items: [
      { name: "FastAPI", icon: "/images/skills/fastapi.svg" },
      { name: "Streamlit", icon: "/images/skills/streamlit.svg" },
      { name: "Java", icon: "/images/skills/java.svg" },
      { name: "R", icon: "/images/skills/r.svg" },
    ],
    visible: true,
  },
  otherTools: {
    title: "Other Tools",
    items: [
      { name: "AutoCAD", icon: "/images/skills/autocad.svg" },
      { name: "Staad Pro", icon: "/images/skills/staadpro.svg" },
      { name: "Etabs", icon: "/images/skills/etabs.svg" },
    ],
    visible: false,
  },
}
