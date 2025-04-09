/**
 * Experience Configuration
 *
 * Contains work experience details.
 */
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

/**
 * Education Configuration
 *
 * Contains education details.
 */
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
