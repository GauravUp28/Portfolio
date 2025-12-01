import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  MapPin,
  Clock,
  ExternalLink,
  Code,
  Server,
  Cpu,
  ChevronDown,
  ChevronUp,
  Mail,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Clock Logic
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'America/Los_Angeles', // Seattle Time
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smooth Scroll
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mimicking the user avatar from screenshot */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
              <img src="/Portfolio.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Gaurav Upadhyay</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            {['About', 'Career', 'Projects', 'Education', 'Skills', 'FAQ', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 p-4 flex flex-col gap-4">
            {['About', 'Career', 'Projects', 'Education', 'Skills', 'FAQ', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-neutral-400 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6">

        {/* HERO SECTION */}
        <section id="me" className="min-h-screen flex flex-col justify-center py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute"></div>
              <div className="relative aspect-rectangle rounded-2xl overflow-hidden">
                {/* NOTE: Update this src to "/profile.jpg" when running locally */}
                <img
                  src="Portfolio.png"
                  alt="Gaurav Upadhyay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-neutral-500 font-medium">I am a</span>
                <h1 className="text-4xl md:text-4xl font-bold tracking-tight bg-clip-text ">
                  Software Development Engineer
                </h1>
              </div>

              <p className="text-neutral-400 text-lg leading-relaxed">
                Renowned for my innovative approach to software engineering, I began my career with a focus on <strong className="text-white">full-stack development</strong>, swiftly establishing my distinctive problem-solving style. My technical success propelled me to lead teams at <strong className="text-white">AWS</strong>, where I drove significant performance improvements. Currently, I continue to innovate and work with <strong className="text-white">AI-powered solutions</strong>, consistently pushing the boundaries of technology.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
                <div>
                  <div className="flex items-center gap-2 text-neutral-500 mb-1 text-sm uppercase tracking-wider font-semibold">
                    <MapPin size={14} /> Based and work in
                  </div>
                  <div className="text-xl font-medium">Seattle</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-neutral-500 mb-1 text-sm uppercase tracking-wider font-semibold">
                    <Clock size={14} /> My current time
                  </div>
                  <div className="text-xl font-medium">{currentTime} Local Time</div>
                </div>
              </div>

              <div className="flex gap-4">
                <SocialButton icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/upgaurav28" />
                <SocialButton icon={<Github size={20} />} href="https://github.com/GauravUp28" />
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden space-y-20">
            {/* Gradient Masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

            {/* Scrolling Content */}
            <div className="flex whitespace-nowrap animate-marquee">
              {/* Repeated 3 times to ensure seamless infinite scroll */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-16 mx-8">
                  {['Java', 'Python', 'TypeScript', 'Kotlin', 'JavaScript', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices', 'React', 'Angular', 'Next.js', 'React Native', 'Expo', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="text-5xl md:text-3xl font-bold text-neutral-800 hover:text-white transition-colors duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Animation Styles */}
          <style>{`
            @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
            animation: marquee 10s linear infinite;
            }
            .animate-marquee:hover {
            animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* --- NEW SECTION: ABOUT DETAILS --- */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-5xl">
            <div className="text-neutral-500 font-medium mb-4 text-sm uppercase tracking-wider">About Me</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">About</h2>
            <p className="text-xl md:text-4xl text-neutral-300 leading-relaxed font-light">
              Full Stack Engineer with <strong className="text-white">4+ years</strong> building scalable, high-availability systems for 1M+ users using <strong className="text-white">Java, Spring Boot, and AWS</strong>. Expert in distributed backend architecture and GenAI integration, driving significant performance optimizations.
            </p>
          </div>
        </section>
        {/* ---------------------------------- */}

        {/* CAREER SECTION */}
        <section id="career" className="min-h-screen flex flex-col justify-center py-20">
          <SectionHeader badge="Career" title="And This Is My" highlight="Career" />

          <div className="space-y-12 mt-16">
            <ExperienceCard
              company="Amazon Web Services"
              logo="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              role="Software Development Engineer"
              period="Jul 2022 - Jun 2025"
              description={[
                "Re-architected the legacy monolithic Managed Notifications workflow across AWS Console Mobile by designing Java and Node.js microservices and S3-backed asset pipelines, enhancing customer experience via real-time delivery and increasing engagement by 83% for 1M+ users.",
                "Led the Services Page API redesign, collaborating with iOS/Android teams to integrate a distributed Node.js backend with S3 metadata management, driving a 93.6% traffic increase on iOS and 83% on Android.",
                "Launched the Universal Linking framework by designing Node.js microservices and a React-based navigation layer that standardized deep-link resolution, increasing Monthly Active Users by 88.2% on iOS and 94.4% on Android.",
                "Improved operational excellence by optimizing a core shared library used by 30 SDK-integrated APIs through service re-architecture and CloudWatch monitoring, reducing latency from 3.3s to 800ms and enhancing reliability for critical workloads.",
                "Mentored 2 new hires through onboarding, design reviews, and deep dives on scalable design patterns and API standards, accelerating ramp-up time and improving ownership of high-impact features.",
                "Built a GenAI-powered RAG query engine using Python, LangChain, ChromaDB, and OpenAI embeddings to automate the analysis of large on-call documents, reducing manual investigation time."
              ]}
              stack={['Java', 'Node.js', 'React', 'AWS', 'Python', 'LangChain', 'ChromaDB', 'OpenAI API', 'RAG']}
            />

            <ExperienceCard
              company="Stanley Law Offices"
              logo="https://ui-avatars.com/api/?name=Stanley+Law&background=fff&color=000" // Placeholder for non-standard logo
              role="Software Engineer Intern"
              period="Jun 2021 - Jun 2022"
              description={[
                "Implemented secure data handling protocols using Java, Spring Boot, and MongoDB, contributing to a 30% reduction in security incidents.",
                "Developed full-stack analytical dashboards using Angular, Spring Boot, and MongoDB/MySQL to automate data workflows for IT/Risk teams, improving efficiency by 25%.",
                "Engineered CI/CD pipelines utilizing Jenkins, GitHub, and containerized builds, reducing deployment time by 30% and enabling rapid rollback strategies."
              ]}
              stack={['Java', 'Spring Boot', 'MongoDB', 'Angular', 'MySQL', 'Jenkins', 'GitHub', 'CI/CD']}
            />
          </div>
        </section>

        {/* WORK / PROJECTS SECTION */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
          <SectionHeader badge="Projects" title="And These Are My" highlight="Projects" />

          <div className="grid gap-24 mt-16">
            <ProjectCard
              title="FindYourCity | AI-Powered Geospatial Game"
              description={[
                "Developed a full-stack geospatial platform with a FastAPI backend and React frontend, implementing Haversine distance algorithms and exponential decay logic for precision scoring.",
                "Integrated OpenAI to generate dynamic, location-specific persona clues and engineered a resilient offline fallback mode to maintain gameplay continuity.",
                "Automated CI/CD workflows using GitHub Actions to prevent backend idle shutdowns and deploy scalable services across Render (Backend) and Vercel (Frontend)."
              ]}
              // NOTE: Update to "/findyourcity.jpg" locally
              image="/FindYourCity.png"
              link="https://findyourcity.vercel.app/"
              stack={['FastAPI', 'React', 'OpenAI', 'GitHub Actions', 'CI/CD', 'Geospatial', 'Haversine Algorithm', 'Render', 'Vercel']}
              align="right"
            />

            <ProjectCard
              title="TypeFury-AI | AI-Driven Gamified Typing Platform"
              description="Developed a reactive full-stack application using Next.js and React, implementing real-time algorithms to compute WPM and accuracy metrics with millisecond-precision feedback. Integrated OpenAI to generate context-aware, infinite typing content, engineering an adaptive difficulty engine that dynamically scales challenge complexity based on user proficiency."
              // NOTE: Update to "/typefury.jpg" locally
              image="/TypeFury.png"
              link="https://typefury-ai.vercel.app/"
              stack={['Next.js', 'React', 'OpenAI', 'WebSocket', 'Vercel', 'GitHub Actions']}
              align="right"
            />
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="min-h-screen flex flex-col justify-center py-20">
          <SectionHeader badge="Education" title="And This Is My" highlight="Education" />

          <div className="grid gap-8 mt-16 max-w-3xl mx-auto w-full">
            <EducationCard
              school="Westcliff University"
              degree="MBA in Business Management"
              date="Expected Jun 2027"
              logo="W"
            />
            <EducationCard
              school="Syracuse University"
              degree="MS in Cybersecurity and Computer Science"
              date="May 2022"
              logo="S"
              color="bg-orange-600"
            />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-400">
              Why me?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white max-w-2xl mx-auto leading-tight">
              Building scalable <span className="text-neutral-500">solutions that transform user experiences</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              title="Backend Development"
              desc="Expertise in building scalable and efficient backend systems using Java, Node.js, and Spring Boot."
              tags={['Java', 'Node.js', 'TypeScript', 'PostgreSQL', 'Render']}
            />
            <SkillCard
              title="Frontend Development"
              desc="Proficient in creating responsive and dynamic user interfaces with modern frameworks."
              tags={['React', 'Angular', 'Next.js', 'React Native', 'Vercel']}
            />
            <SkillCard
              title="AI & Cloud Technologies"
              desc="Skilled in leveraging AI tools and cloud platforms to build innovative solutions."
              tags={['AWS', 'LangChain', 'OpenAI API', 'Docker', 'RAG']}
            />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="min-h-screen flex flex-col justify-center py-20">
          <SectionHeader badge="FAQ" title="Frequently Asked" highlight="Questions" />
          <div className="max-w-2xl mx-auto mt-12 space-y-4 w-full">
            <Accordion question="What inspired you to transition into AI-driven solutions?" answer="Working with large-scale data at AWS made me realize the potential of AI to automate complex analysis, leading me to explore RAG and OpenAI integrations." />
            <Accordion question="How do you approach mentoring new hires in your team?" answer="I focus on scalable design patterns and API standards during onboarding, ensuring new team members not only understand the codebase but also the architectural philosophy behind it." />
            <Accordion question="What's your strategy for optimizing legacy systems?" answer="My approach involves identifying bottlenecks through CloudWatch monitoring, decoupling monolithic architectures into microservices, and implementing caching layers to reduce latency." />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 text-center">
          <SectionHeader badge="Contact" title="Let's Get in" highlight="Touch" />
          <p className="text-neutral-400 mt-6 mb-10 text-lg">Looking forward to connecting and building together.</p>
          <a href="mailto:gauravupadhyay1100@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all transform hover:scale-105">
            Contact me <ExternalLink size={18} />
          </a>

          {/* Footer nested inside Contact Screen or pushed to bottom */}
          <div className="mt-20 border-t border-neutral-900 pt-16 w-full text-left">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <img src="/Portfolio.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Gaurav Upadhyay</div>
                    <div className="text-sm text-neutral-500">Innovative Full-Stack Engineer & AI Enthusiast</div>
                  </div>
                </div>
                <div className="text-neutral-400">gauravupadhyay1100@gmail.com</div>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Navigate</h4>
                <ul className="space-y-3 text-neutral-400">
                  {['About', 'Work', 'Education', 'Contact me'].map(item => (
                    <li key={item}><button onClick={() => scrollTo(item.split(' ')[0].toLowerCase())} className="hover:text-white">{item}</button></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Connect</h4>
                <ul className="space-y-3 text-neutral-400">
                  <li><a href="https://www.linkedin.com/in/upgaurav28" className="flex items-center gap-2 hover:text-white"><Linkedin size={16} /> LinkedIn</a></li>
                  <li><a href="https://github.com/GauravUp28" className="flex items-center gap-2 hover:text-white"><Github size={16} /> GitHub</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-neutral-600 text-sm">
              <div>&copy; 2025 Gaurav Upadhyay. All rights reserved.</div>
              <div className="flex gap-2 items-center mt-4 md:mt-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Open to new opportunities</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// --- Sub Components ---

const SocialButton = ({ icon, href }) => (
  <a
    href={href}
    className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:text-white text-neutral-400 transition-colors"
  >
    {icon}
  </a>
);

const SectionHeader = ({ badge, title, highlight }) => (
  <div className="space-y-6">
    {badge && (
      <span className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-400">
        {badge}
      </span>
    )}
    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
      {title} <span className="text-neutral-500">{highlight}</span>
    </h2>
  </div>
);

const ExperienceCard = ({ company, logo, role, period, description, stack }) => (
  <div className="group relative pl-8 border-l border-neutral-800 hover:border-neutral-700 transition-colors">
    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-blue-500 transition-colors"></div>

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center overflow-hidden">
          <img src={logo} alt={company} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <div className="text-neutral-400">{company}</div>
        </div>
      </div>
      <span className="text-sm font-mono text-neutral-500">{period}</span>
    </div>

    <ul className="space-y-3 text-neutral-400 mb-6 list-disc ml-4 text-base leading-relaxed">
      {description.map((item, idx) => (
        <li key={idx} className="pl-2">{item}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {stack.map(tech => (
        <span key={tech} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description, image, stack, link, align = 'left' }) => (
  <div className={`flex flex-col md:flex-row gap-8 items-start group ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
        {title.split('|')[0]}
        <a href={link} className="opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink size={18} /></a>
      </h3>
      <div className="text-sm font-medium text-blue-400 uppercase tracking-wider">{title.split('|')[1]}</div>
      <p className="text-neutral-400 leading-relaxed text-lg">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map(tech => (
          <span key={tech} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-medium text-neutral-300">
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="flex-1 w-full">
      <div className="relative aspect-rectangle rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-all">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
      </div>
    </div>
  </div>
);

const EducationCard = ({ school, degree, date, logo, color = "bg-blue-600" }) => (
  <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 transition-colors">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-xl font-bold text-white`}>
      {logo}
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-bold text-white">{degree}</h3>
      <div className="text-neutral-400">{school}</div>
    </div>
    <div className="text-sm text-neutral-500 font-mono">{date}</div>
  </div>
);

const SkillCard = ({ title, desc, tags }) => (
  <div className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:bg-neutral-900 transition-all group">
    <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {title.includes('Backend') ? <Server size={24} className="text-purple-400" /> :
        title.includes('Frontend') ? <Code size={24} className="text-blue-400" /> :
          <Cpu size={24} className="text-green-400" />}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-neutral-400 text-sm mb-6 leading-relaxed min-h-[60px]">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-black rounded-full text-xs border border-neutral-800 text-neutral-400 group-hover:border-neutral-600 group-hover:text-white transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-900/50 transition-colors"
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-neutral-500" /> : <ChevronDown className="text-neutral-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-neutral-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default Portfolio;