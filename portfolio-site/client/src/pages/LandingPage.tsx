import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { HandwrittenGreeting } from "@/components/HandwrittenGreeting";
import { RotatingRole } from "@/components/RotatingRole";
import { PetalField } from "@/components/PetalField";
import { CertificateFan } from "@/components/CertificateFan";
import { DripBagDemo } from "@/components/DripBagDemo";
import { ProjectArt, type ProjectArtId } from "@/components/ProjectArt";
import { ResumeDrawer } from "@/components/ResumeDrawer";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Stanford Osman Lab Research Study",
    issuer: "Stanford University",
    image: "/images/staford.jpeg"
  },
  {
    title: "Creafeast Paper Presentation",
    issuer: "KPR Institute",
    image: "/images/creafeast_paper_presentation.jpeg"
  },
  {
    title: "German Language Certification",
    issuer: "Language Institute",
    image: "/images/german_certification.png"
  },
  {
    title: "IEEE Workshop",
    issuer: "IEEE KPR",
    image: "/images/ieee_kpr.jpeg"
  },
  {
    title: "Internship Certificate",
    issuer: "Popular Systems",
    image: "/images/internship_popular_systems.jpeg"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    image: "/images/nptel_cloud_computing.png"
  },
  {
    title: "Industrial IoT",
    issuer: "NPTEL",
    image: "/images/nptel_industrial_iot.png"
  },
  {
    title: "Robotics & IoT Internship",
    issuer: "NSIC",
    image: "/images/nsic_robotics_intern_iot.jpeg"
  },
  {
    title: "PCB Design with Altium",
    issuer: "Training Institute",
    image: "/images/pcb_design_altium.jpeg"
  },
  {
    title: "6G Wireless Communication Paper Presentation",
    issuer: "Kanam",
    image: "/images/6g_wirelesee_comm_Paper_presentaion_kanam.jpeg"
  },
  {
    title: "Project Presentation",
    issuer: "BIT",
    image: "/images/BIT_project_presentation.jpeg"
  },
  {
    title: "Daksha Workshop",
    issuer: "KSR",
    image: "/images/Daksha_workshop@ksr.jpeg"
  },
  {
    title: "IEEE Conference Paper Presentation",
    issuer: "IEEE",
    image: "/images/IEEE_Conference_paper_presentation.jpeg"
  },
  {
    title: "Network Security",
    issuer: "NPTEL",
    image: "/images/NPTEL_network_security.jpeg"
  },
  {
    title: "System Design Fundamentals",
    issuer: "Pearson",
    image: "/images/Pearson_system_design_fundamentals.jpeg"
  },
  {
    title: "TCS CodeVita Rank Certificate",
    issuer: "TCS",
    image: "/images/TCS_codevita_rank_cert.jpeg"
  },
  {
    title: "Yugam Hackathon",
    issuer: "Yugam",
    image: "/images/Yugam_hackathon.jpeg"
  }
];

const techStack = {
  row1: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  ],
  row2: [
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
  ]
};

const projects: (ProjectInfo & { category: "web" | "iot" })[] = [
  {
    category: "web",
    title: "Hotel Management System",
    art: "hotel",
    description: "Web application for room booking, availability checking, authentication, and booking management.",
    image: "/images/hotel-management.jpg",
    tags: ["JavaScript", "Node.js", "MongoDB"],
    link: "https://github.com/Git-by-Devi/HOTEL-MANAGEMENT-SYSTEM",
  },
  {
    category: "web",
    title: "Staff Info & Leave Portal",
    art: "staff",
    description: "Role-based system for managing leave, tasks, approvals using React and Supabase.",
    image: "/images/staff-portal.jpg",
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: "https://github.com/Git-by-Devi/STAFF-INFO-AND-LEAVE-PORTAL-SYSTEM",
  },
  {
    category: "web",
    title: "Library Management System",
    art: "library",
    description: "Full-stack system to manage books, students, transactions and authentication.",
    image: "/images/library-system.jpg",
    tags: ["Python", "MySQL", "Flask"],
    link: "https://github.com/Git-by-Devi/library-management-system",
  },
  {
    category: "iot",
    title: "Safety First Initiative",
    art: "safety",
    description: "IC555 based road safety system that detects vehicles and triggers alerts near construction zones.",
    image: "/images/safety-initiative.jpg",
    tags: ["Arduino", "C++", "IoT"],
  },
  {
    category: "iot",
    title: "Drip Bag Monitoring System",
    art: "drip",
    description: "Healthcare system to alert nurses when IV fluid reaches critical level using alerts.",
    image: "/images/drip-bag-system.jpg",
    tags: ["Arduino", "C++", "Healthcare"],
    demo: true,
  },
  {
    category: "iot",
    title: "Smart Fire Survivor Detection",
    art: "fire",
    description: "Fire detection system with automatic extinguishing and mobile alert features.",
    image: "/images/fire-detection.jpg",
    tags: ["Arduino", "C++", "Firebase"],
    link: "https://github.com/Git-by-Devi/SMART-FIRE-SURVIVOR-DETECTION-SYSTEM",
  },
];

interface ProjectInfo {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  demo?: boolean;
  art: ProjectArtId;
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "iot", label: "IoT & Electronics" },
] as const;

const ROLES = ["Web Developer", "IoT Builder", "PCB Designer", "Tech Enthusiast"];

const STATS = [
  { value: "8.5", label: "CGPA" },
  { value: String(projects.length), label: "Projects" },
  { value: String(certificates.length), label: "Certificates" },
];

export default function LandingPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [resumeOpen, setResumeOpen] = useState(false);
  const shownProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Hero photo tilts gently toward the cursor
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  return (
    <div className="min-h-screen bg-mesh text-foreground overflow-x-hidden">
      <Navigation />
      <ResumeDrawer open={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/15 via-accent/15 to-accent/20 rounded-full blur-[120px] -z-10"
        />

        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <HandwrittenGreeting text="Hello, I'm Devi Selvakumar" className="text-3xl md:text-4xl block mb-4" />
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  className="block"
                >
                  ECE Student &amp;
                </motion.span>
                <RotatingRole words={ROLES} />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              >
                An Electronics and Communication Engineering student with a passion for creating user-friendly applications
                and working with modern tools to develop meaningful solutions.
              </motion.p>

              {/* One button family: rose primary, gold outline, text link */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="projects" smooth={true} offset={-80}>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <motion.button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 rounded-full font-medium flex items-center gap-2 border-2 border-accent text-foreground hover:bg-accent/15 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Résumé
                </motion.button>
                <Link to="contact" smooth={true} offset={-80} className="cursor-pointer font-medium text-foreground underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary transition-colors">
                  Contact me →
                </Link>
              </div>

              {/* Stats (mobile: shown under the buttons) */}
              <div className="flex md:hidden gap-8 mt-10">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-bold text-primary leading-none">{s.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hidden md:flex gap-14 items-center justify-center">
            {/* Profile photo with drifting petals and a gentle cursor tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[340px] flex-shrink-0"
              style={{ perspective: 900 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                tiltX.set((e.clientX - r.left) / r.width - 0.5);
                tiltY.set((e.clientY - r.top) / r.height - 0.5);
              }}
              onPointerLeave={() => {
                tiltX.set(0);
                tiltY.set(0);
              }}
            >
              <PetalField className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] blur-2xl opacity-40 -z-10" />
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/60 dark:border-gray-700/60"
              >
                <img src="/images/profile_pic.png" alt="Devi Selvakumar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-8 left-8 font-accent text-2xl text-white drop-shadow-lg">ECE Student &amp; Web Developer</p>
              </motion.div>
            </motion.div>

            {/* Stats, in the theme rose and counted from the data */}
            <div className="flex flex-col gap-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                >
                  <p className="font-display text-4xl font-bold text-primary leading-none">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 tracking-wide">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="About Me" subtitle="The person behind the pixels" />

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <Reveal className="md:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-dashed border-primary rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <img src="/images/profile_pic.png" alt="Devi Selvakumar" className="w-full h-full object-cover" style={{ transform: "scale(1.9)", transformOrigin: "50% 30%" }} />
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-8 space-y-8">
              <Reveal>
                <h3 className="text-3xl font-display font-semibold dark:text-gray-100">
                  Hi, I'm Devi. I create technology solutions that make a difference.
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
                  An Electronics and Communication Engineering student with a strong interest in technology and innovation.
                  I enjoy creating user-friendly applications and working with modern tools and technologies to develop meaningful solutions.
                  Focused on continuous learning, improving technical abilities, and developing solutions that are both practical and impactful.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {[
                  { title: "Education", items: ["B.E ECE (2023-2027)", "M Kumarasamy College of Engineering", "CGPA: 8.5/10"] },
                  { title: "Experience", items: ["NSIC – IoT in Robotics", "Popular Systems – Electronics Manufacturing"] },
                  { title: "Expertise", items: ["Full Stack Dev", "Digital Electronics", "Problem Solving"] },
                ].map((col, idx) => (
                  <Reveal key={col.title} delay={0.15 + idx * 0.1}>
                    <div className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-primary/10 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30">
                      <h4 className="font-bold text-foreground dark:text-gray-100 mb-4 border-b border-primary/20 dark:border-gray-700 pb-2">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground dark:text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeading title="Certifications" subtitle="Continuous Learning" />
          <Reveal>
            <CertificateFan items={certificates} />
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-muted/30 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Selected Works" subtitle="Things I've built" />

          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => {
              const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white/70 dark:bg-gray-800/70 border-primary/20 hover:border-primary/50"
                  }`}
                >
                  {f.label} <span className={active ? "opacity-80" : "text-muted-foreground"}>{count}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {shownProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -8 }}
                  className="shimmer-card"
                >
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    tags={p.tags}
                    link={p.link}
                    delay={(i % 3) * 0.1}
                    demo={p.demo ? <DripBagDemo /> : undefined}
                    art={<ProjectArt id={p.art} title={p.title} />}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Tech Stack" subtitle="Technologies I work with" />
          
          <div className="space-y-8">
              {/* Row 1 - Moving Right */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    x: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                  }}
                >
                  {[...techStack.row1, ...techStack.row1, ...techStack.row1].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
                      title={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 - Moving Left */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: ["-50%", "0%"],
                  }}
                  transition={{
                    x: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                  }}
                >
                  {[...techStack.row2, ...techStack.row2, ...techStack.row2].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
                      title={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Let's Connect" subtitle="Start a conversation" />
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Contact Info Sidebar */}
            <div className="bg-primary/10 dark:bg-gray-800 p-10 md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 dark:text-gray-100">Get in touch</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-8">
                  Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and ideas.
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:deviselvakumar2@gmail.com" className="flex items-center gap-3 text-sm font-medium hover:text-primary dark:text-gray-200 transition-colors">
                    <Mail className="w-5 h-5" />
                    deviselvakumar2@gmail.com
                  </a>
                  <div className="flex gap-4 mt-8">
                    <a href="https://www.linkedin.com/in/devi-selvakumar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-foreground dark:text-gray-200 hover:text-primary hover:shadow-md transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/Git-by-Devi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-foreground dark:text-gray-200 hover:text-primary hover:shadow-md transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 md:mt-0">
                <p className="font-accent text-2xl text-primary/80 dark:text-primary">Devi Selvakumar</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:w-2/3">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground dark:text-gray-300">
                  Want to work together or have a question? Feel free to reach out via email or connect on LinkedIn/GitHub!
                </p>
                
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=deviselvakumar2@gmail.com&su=Portfolio Inquiry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-primary text-primary-foreground text-center font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Send Email
                </a>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/devi-selvakumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-blue-600 text-white text-center font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Git-by-Devi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-gray-800 dark:bg-gray-700 text-white text-center font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-gray-900 border-t border-primary/10 py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="font-display text-2xl font-bold mb-4">Devi<span className="text-primary">.</span>Selvakumar</p>
          <p className="text-muted-foreground mb-8 text-sm">
            Designed with <span className="text-red-400">♥</span> and intention.
          </p>
          <div className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Devi Selvakumar Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
