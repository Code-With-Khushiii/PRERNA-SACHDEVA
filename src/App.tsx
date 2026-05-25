import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Mail, Menu, Phone, Target, TrendingUp, Users, X } from 'lucide-react';

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
    'Business Analyst with experience translating operational and research data into actionable insights through SQL, Python, Tableau, and Power BI across 100K+ records and multi-source datasets. Delivered 15% reduction in operational inefficiencies and 35% improvement in reporting workflow efficiency by analyzing business data, automating reporting processes, and building decision-ready dashboards. Brings hands-on exposure to statistical analysis, business intelligence, machine learning, and stakeholder collaboration to support data-driven business decisions and scalable analytics solutions.';

  const experience = [
    {
      company: 'Stony Brook Hospitals',
      role: 'Senior Research Aide',
      location: 'Stony Brook, NY',
      dates: 'Aug 2025 - Present',
      highlights: [
        'Performed statistical analysis on exposure and health data related to WTC participants, quantifying toxin and metal exposure levels and evaluating correlations with disease prevalence.',
        'Analyzed research datasets and structured findings into clear analytical outputs that supported evidence-based interpretation, reporting accuracy, and publication-ready documentation.',
        'Collaborated with faculty researchers to interpret results, synthesize insights, and translate complex analytical findings into actionable research narratives for ongoing health exposure studies.',
      ],
    },
    {
      company: 'Stony Brook University',
      role: 'Research Assistant',
      location: 'Stony Brook, NY',
      dates: 'Aug 2025 - Dec 2025',
      highlights: [
        'Developed StockAgent, an LLM-based simulator to model investor trading behavior under external market factors, executing a structured 4-phase workflow to replicate real-world trading scenarios.',
        'Evaluated LLMs including GPT and Gemini for trading behavior, profitability, and test data leakage, strengthening model assessment rigor across AI-driven financial simulation workflows.',
      ],
    },
    {
      company: 'Shree Spring Industries',
      role: 'Data Analyst',
      location: 'India',
      dates: 'Jun 2023 - Jul 2024',
      highlights: [
        'Assessed production and inventory data to identify process inefficiencies, delivering a 15% improvement in operational efficiency through business-focused reporting and performance analysis.',
        'Cleaned, transformed, and validated 100,000+ records using Python and SQL, strengthening data accuracy and supporting reliable reporting, planning, and operational decision-making.',
        'Automated weekly reporting workflows and analytics processes, improving reporting efficiency by 35% and enabling faster, more consistent business insights for stakeholders.',
      ],
    },
  ];

  const projects = [
    {
      title: 'MediMind Multi-Agent Diagnostic System',
      subtitle: 'AI Healthcare Project',
      category: 'Multi-Agent AI',
      introduction:
        'Built a multi-agent diagnostic system for parallel analysis of medical reports across multiple healthcare specialties.',
      problem:
        'Medical report interpretation across specialties can be slow and fragmented, limiting timely and structured diagnostic support.',
      objective:
        'Design an AI-driven workflow that speeds diagnostic processing while producing clear, structured recommendations for clinical support.',
      methodology: [
        'Pioneered a 3-agent system to run cardiology, psychology, and respiratory analysis in parallel.',
        'Used threaded execution to improve diagnostic processing speed and support scalable orchestration.',
        'Designed the architecture to scale from 3 specialties to 6+ specialties.',
      ],
      results: [
        'Improved diagnostic processing speed by about 50%.',
        'Generated summarized outputs with the top 3 diagnostic recommendations.',
      ],
      conclusion:
        'Demonstrated scalable multi-agent healthcare analysis with structured decision support outputs.',
    },
    {
      title: 'Credit Risk Analysis Model',
      subtitle: 'Machine Learning Risk Modeling',
      category: 'Predictive Analytics',
      introduction:
        'Built classification models to assess loan default risk using large-scale financial application data.',
      problem:
        'Loan approval processes require more reliable default prediction to reduce false approvals and strengthen lending decisions.',
      objective:
        'Improve credit risk evaluation by applying classification models to 50,000+ loan applications.',
      methodology: [
        'Analyzed 50,000+ loan applications using Python-based data workflows.',
        'Built Logistic Regression, Random Forest, and XGBoost models for risk assessment.',
        'Compared performance to improve prediction quality and reduce approval risk.',
      ],
      results: ['Improved prediction accuracy by 12%.', 'Reduced false approvals by 18%.'],
      conclusion:
        'Delivered a more reliable, data-driven lending risk workflow using scalable classification models.',
    },
    {
      title: 'Multi-Agent Financial Analysis Platform',
      subtitle: 'Real-Time Stock Analytics Platform',
      category: 'Financial Analytics',
      introduction:
        'Developed a multi-agent platform for real-time stock analysis and investment recommendation workflows.',
      problem:
        'Investors need timely and structured views of stock metrics, market news, and company fundamentals to make faster decisions.',
      objective:
        'Create a scalable financial analytics workflow using agents, live APIs, and LLM-powered reasoning.',
      methodology: [
        'Built the platform using Gemini API and LangChain.',
        'Integrated market data APIs and financial news APIs for live analysis.',
        'Processed stock metrics, market news, and company fundamentals into recommendation workflows.',
      ],
      results: [
        'Enabled real-time stock analysis through integrated live data workflows.',
        'Created a scalable foundation for investment recommendation support.',
      ],
      conclusion:
        'Showcased multi-agent orchestration for financial analytics and decision support.',
    },
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming',
      skills: ['Python', 'SQL', 'R'],
    },
    {
      icon: TrendingUp,
      title: 'Data Visualization & BI',
      skills: ['Tableau', 'Power BI', 'Microsoft Excel', 'Seaborn', 'Matplotlib'],
    },
    {
      icon: Users,
      title: 'Analysis & ML',
      skills: ['Data Analysis', 'Statistical Analysis', 'A/B Testing', 'Hypothesis Testing', 'Classification', 'Clustering', 'Regression', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'NLP', 'LLMs'],
    },
    {
      icon: Target,
      title: 'Databases & Tools',
      skills: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'AWS (Glue, S3)', 'Snowflake', 'BigQuery'],
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
      title: 'Google Data Analytics',
      platform: 'Google',
      description: 'Certification covering data cleaning, analysis, visualization, and business insight generation.',
    },
    {
      title: 'Microsoft Generative AI for Data Analysis',
      platform: 'Microsoft',
      description: 'Focused on applying generative AI capabilities in data analysis workflows.',
    },
    {
      title: 'Microsoft Power BI Data Analysis',
      platform: 'Microsoft',
      description: 'Certification in Power BI reporting, dashboards, and analytical modeling.',
    },
    {
      title: 'Tableau Desktop Specialist',
      platform: 'Tableau',
      description: 'Validated Tableau skills for building dashboards and visual analysis workflows.',
    },
    {
      title: 'Machine Learning Fundamentals Micro-Credential',
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
              Data Analyst | Business Intelligence & Analytics | SQL, Python, Tableau, Power BI
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

          <div className="grid lg:grid-cols-3 gap-8">
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
              Data analysis, visualization, machine learning, and analytics tooling expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              Let&apos;s connect for data analyst, business intelligence, and analytics opportunities.
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
            � 2026 Prerna Sachdeva � Data Analyst & Business Intelligence.
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
