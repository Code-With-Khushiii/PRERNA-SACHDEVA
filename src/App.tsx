import { useEffect, useState } from 'react';
import { Brain, ChevronDown, Cloud, Code2, Database, Linkedin, Mail, Menu, Mic, Phone, Wrench, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary =
    'AI Engineer with 2+ years of experience developing LLM applications, RAG pipelines, multi-agent systems, and AI-powered workflow automation using Python, LangChain, CrewAI, FastAPI, and vector databases. Engineered a 7-agent financial analysis platform, a 6-agent CRM automation system, and a real-time voice interview coach integrating speech-to-text, text-to-speech, semantic search, and function calling. Experienced in designing agent orchestration workflows, integrating AI and business APIs, implementing asynchronous processing, and supporting local and cloud-based LLM inference.';

  const experience = [
    {
      company: 'Stony Brook Hospitals',
      role: 'Senior Research Aide',
      location: 'Stony Brook, NY',
      dates: 'Aug 2025 - May 2026',
      highlights: [
        'Analyzed and validated healthcare and exposure datasets across 1,000+ World Trade Center participant records using Python, Excel, and statistical methods to identify toxin exposure and disease-prevalence patterns.',
        'Established repeatable data-cleaning and validation workflows for multi-source clinical research data, improving dataset consistency and supporting publication-ready analysis.',
        'Visualized toxin-exposure and disease-prevalence findings through charts, analytical summaries, and research-ready reports, enabling faculty stakeholders to interpret clinical patterns across 1,000+ participant records.',
      ],
    },
    {
      company: 'Stony Brook University',
      role: 'Research Assistant',
      location: 'Stony Brook, NY',
      dates: 'Aug 2025 - May 2026',
      highlights: [
        'Architected StockSage, a multi-agent financial analysis platform using CrewAI to orchestrate 7 specialized AI agents across valuation, fundamentals, sentiment analysis, market research, risk assessment, and cross-agent review workflows.',
        'Integrated 5 LLM providers - Ollama, OpenAI, Gemini, Groq, and Anthropic - with automatic fallback logic, enabling flexible on-premises and cloud inference while maintaining continuity across 7-agent financial analysis workflows.',
        'Engineered a Server-Sent Events pipeline to stream real-time progress, analysis updates, and generated outputs from 7 specialized AI agents to the user interface during multi-stage financial workflows.',
        'Processed stock prices, financial statements, news, Google Trends, insider transactions, and institutional holdings using Python and yfinance to generate structured BUY, HOLD, and SELL recommendations with confidence scores.',
      ],
    },
    {
      company: 'Shree Spring Industries',
      role: 'AI Engineer',
      location: 'India',
      dates: 'Jun 2023 - Jul 2024',
      highlights: [
        'Developed a demand forecasting model using Python and Scikit-learn to analyze 2 operational data sources - historical inventory and production records - strengthening spare-parts planning and identifying potential stockout risks.',
        'Engineered an internal chatbot using LangChain and OpenAI API that enabled operations teams to query 3 business data areas - inventory, orders, and production - through natural-language prompts, reducing manual data retrieval effort.',
        'Automated weekly operational reporting using Python and LLM-based summarization, transforming structured production and inventory data into actionable insights for faster supply-chain decision-making.',
      ],
    },
  ];

  const projects = [
    {
      title: 'AI-Powered CRM with Agentic Workflows',
      subtitle: 'Agentic Sales & Customer Success Platform',
      category: 'Multi-Agent AI',
      introduction:
        'Architected an agentic CRM platform with 6 specialized AI agents automating end-to-end sales and customer relationship workflows.',
      problem:
        'Sales and customer success teams juggle lead qualification, email triage, pipeline tracking, and scheduling across disconnected tools, slowing response times and creating manual overhead.',
      objective:
        'Build an agentic platform that automates lead qualification, email intelligence, pipeline management, customer success, meeting scheduling, and performance analytics.',
      methodology: [
        'Architected 6 specialized AI agents using LangChain, Anthropic Claude, and OpenAI GPT models.',
        'Implemented asynchronous task processing with Celery and Redis for scalable agent execution.',
        'Delivered real-time WebSocket updates alongside Gmail, Google Calendar, and Slack API integrations.',
      ],
      results: [
        'Automated end-to-end sales and customer relationship workflows across 6 functional areas.',
        'Enabled real-time visibility into agent activity and pipeline status via WebSocket updates.',
      ],
      conclusion:
        'Demonstrated a scalable agentic architecture for automating sales and customer success operations.',
    },
    {
      title: 'AI Interview Coach',
      subtitle: 'Real-Time Voice-Based Mock Interview Platform',
      category: 'Voice AI',
      introduction:
        'Built a real-time voice-based AI interview coach that conducts conversational mock interviews with live transcription and structured feedback.',
      problem:
        'Candidates lack accessible, realistic practice for technical interviews that combines natural conversation with context-aware, project-specific questioning.',
      objective:
        'Create a voice-driven interview coach that generates context-aware technical questions and delivers structured feedback in real time.',
      methodology: [
        'Built the voice pipeline using LiveKit Agents SDK, AssemblyAI speech-to-text, Cartesia text-to-speech, and Silero VAD.',
        'Developed a RAG pipeline with ChromaDB and OpenAI embeddings to retrieve project documentation.',
        'Used semantic search and function calling to generate context-aware technical interview questions.',
      ],
      results: [
        'Enabled live transcription and structured feedback during conversational mock interviews.',
        'Generated context-aware technical questions grounded in candidate project documentation.',
      ],
      conclusion:
        'Showcased an end-to-end voice AI system combining speech processing with retrieval-augmented question generation.',
    },
  ];

  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & LLM',
      skills: ['Large Language Models', 'Generative AI', 'Prompt Engineering', 'Retrieval-Augmented Generation', 'Agent Orchestration', 'Multi-Agent Systems', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Gemini API', 'Anthropic Claude', 'Ollama'],
    },
    {
      icon: Code2,
      title: 'Programming & Querying',
      skills: ['Python', 'FastAPI', 'CrewAI', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'LiveKit Agents SDK'],
    },
    {
      icon: Database,
      title: 'Vector Databases & Search',
      skills: ['ChromaDB', 'Pinecone', 'FAISS', 'Semantic Search', 'Vector Embeddings'],
    },
    {
      icon: Cloud,
      title: 'Databases & Cloud',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'BigQuery', 'AWS S3', 'AWS Glue'],
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      skills: ['Celery', 'Redis', 'WebSockets', 'REST APIs', 'Docker', 'Git', 'GitHub', 'VS Code'],
    },
    {
      icon: Mic,
      title: 'Voice AI',
      skills: ['LiveKit', 'AssemblyAI', 'Cartesia TTS', 'Silero VAD', 'Speech-to-Text', 'Text-to-Speech', 'Voice Activity Detection'],
    },
  ];

  const education = [
    {
      school: 'Stony Brook University',
      degree: 'Master of Science in Data Science',
      location: 'New York, USA',
      dates: 'Aug 2024 - May 2026',
      details: 'Graduate focus on data science, analytics, and applied machine learning.',
    },
    {
      school: 'Guru Gobind Singh Indraprastha University',
      degree: 'Bachelor of Technology in Computer Science',
      location: 'Delhi, India',
      dates: 'Aug 2020 - Jun 2024',
      details: 'Undergraduate training in computer science fundamentals, programming, and analytical problem solving.',
    },
  ];

  const certifications = [
    {
      title: 'Google AI Essentials',
      platform: 'Google',
      description: 'Foundational certification focused on practical AI concepts and responsible usage.',
    },
    {
      title: 'Microsoft Generative AI for Data Analysis',
      platform: 'Microsoft',
      description: 'Focused on applying generative AI capabilities in data analysis workflows.',
    },
    {
      title: 'Machine Learning Fundamentals',
      platform: 'Alteryx',
      description: 'Micro-credential in core machine learning concepts and practical applications.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              PRERNA SACHDEVA
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Prerna Sachdeva"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              PRERNA SACHDEVA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              AI Engineer | LLM Applications, RAG & Multi-Agent Systems | Python, LangChain, FastAPI
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              STONY BROOK, NY, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border border-brown text-brown px-10 py-4 font-light tracking-wide hover:bg-brown hover:text-white transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display text-black mb-6 tracking-wide">SUMMARY</h2>
          <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
          <p className="text-lg text-brown leading-relaxed font-light">{summary}</p>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto"></div>
          </div>

          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{job.role}</h3>
                    <p className="text-brown font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light">
                    {job.location} � {job.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-brown rounded-full flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs uppercase tracking-[0.25em] text-brown/70 mb-3">{project.category}</div>
                <h3 className="text-2xl font-display text-black tracking-wide mb-2">{project.title}</h3>
                <p className="text-brown font-medium mb-5">{project.subtitle}</p>
                <p className="text-brown leading-relaxed font-light mb-5">{project.introduction}</p>

                <div className="space-y-4 text-sm text-brown font-light">
                  <div>
                    <span className="font-medium text-black">Problem:</span> {project.problem}
                  </div>
                  <div>
                    <span className="font-medium text-black">Objective:</span> {project.objective}
                  </div>
                  <div>
                    <span className="font-medium text-black">Methodology:</span>
                    <ul className="mt-2 space-y-2">
                      {project.methodology.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-brown rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-black">Results:</span>
                    <ul className="mt-2 space-y-2">
                      {project.results.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-brown rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-medium text-black">Conclusion:</span> {project.conclusion}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              LLM applications, RAG pipelines, multi-agent orchestration, and voice AI tooling expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} � {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let&apos;s connect for AI engineering, LLM applications, and multi-agent systems opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+19292238776" className="text-white/80 font-light hover:text-white transition-colors">
                +1 (929) 223-8776
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/presachdeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:prernaasachdeva15@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">
                prernaasachdeva15@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            � 2026 Prerna Sachdeva � AI Engineer | LLM Applications & Multi-Agent Systems.
          </p>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-brown transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </button>
    </div>
  );
}

export default App;
