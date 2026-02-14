import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import CursorTracker from "@/components/CursorTracker";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowRight, 
  Award, 
  Code, 
  Palette,
  Terminal,
  Smartphone,
  Globe,
  Loader2,
  ChevronDown,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";

const certificates = [
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

export default function LandingPage() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const titleLetters = "Devi Selvakumar".split("");

  return (
    <div className="min-h-screen bg-mesh text-foreground overflow-x-hidden overflow-y-auto snap-y snap-mandatory">
      <CursorTracker />
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden snap-start snap-always">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-accent/20 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10"
        />

        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-accent text-3xl text-primary block mb-4">
                { "Hello, I'm ".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-flex relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent blur-sm opacity-50">
                    {titleLetters.map((char, i) => (
                      <motion.span key={`blur-${i}`} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="relative bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {titleLetters.map((char, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="inline-block cursor-default"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                >
                  ECE Student <br />
                </motion.span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient hologram-glow">
                  Web Developer & Tech Enthusiast
                </span>
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
              
              <div className="flex flex-wrap gap-4">
                <Link to="projects" smooth={true} offset={-80}>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-xl relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">View My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
                  </motion.button>
                </Link>
                <a href="/devi_resume.pdf" download="Devi_Selvakumar_Resume.pdf">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(14, 165, 233, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform relative" />
                    <span className="relative">Download Resume</span>
                  </motion.button>
                </a>
                <Link to="contact" smooth={true} offset={-80}>
                  <motion.button 
                    whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-primary/30 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-full font-medium hover:text-primary hover:border-primary transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:flex gap-16 items-center justify-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-[350px] flex-shrink-0"
            >
               <div className="relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse -z-10" />
                 <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 border-4 border-white/50 dark:border-gray-700/50 backdrop-blur-sm hologram-glow hover:scale-105">
                   <motion.img 
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.3 }}
                     src="/images/profile_pic.png" 
                     alt="Devi Selvakumar" 
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                   
                   <div className="absolute bottom-8 left-8 text-white">
                     <p className="font-accent text-2xl drop-shadow-lg">ECE Student & Web Developer</p>
                   </div>
                 </div>
               </div>

               {/* Decorative Elements */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-accent/40 to-orange-500/40 rounded-full blur-2xl -z-10" 
               />
               <motion.div 
                 animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-primary/40 to-purple-500/40 rounded-full blur-2xl -z-10" 
               />
            </motion.div>

            {/* Animated Text Stats - Typewriter Style */}
            <div className="flex flex-col gap-8">
              {/* CGPA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <motion.svg
                  width="180"
                  height="60"
                  viewBox="0 0 180 60"
                  className="overflow-visible drop-shadow-lg"
                >
                  <defs>
                    <filter id="glow1">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.text
                    x="10"
                    y="35"
                    className="font-display font-bold"
                    fontSize="32"
                    fill="url(#gradient1)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.1 }}
                  >
                    {["8", ".", "5"].map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.1 }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                  <motion.text
                    x="90"
                    y="35"
                    className="font-sans"
                    fontSize="16"
                    fill="#6b7280"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.1 }}
                  >
                    {["C", "G", "P", "A"].map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.1 }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative cursor-pointer"
              >
                <motion.svg
                  width="200"
                  height="60"
                  viewBox="0 0 200 60"
                  className="overflow-visible"
                >
                  <motion.text
                    x="10"
                    y="35"
                    className="font-display font-bold"
                    fontSize="32"
                    fill="url(#gradient2)"
                  >
                    {["6", "+"].map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.1 }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                  <motion.text
                    x="80"
                    y="35"
                    className="font-sans"
                    fontSize="16"
                    fill="#6b7280"
                  >
                    {["P", "r", "o", "j", "e", "c", "t", "s"].map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 + i * 0.05, duration: 0.1 }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative cursor-pointer"
              >
                <motion.svg
                  width="240"
                  height="60"
                  viewBox="0 0 240 60"
                  className="overflow-visible"
                >
                  <motion.text
                    x="10"
                    y="35"
                    className="font-display font-bold"
                    fontSize="32"
                    fill="url(#gradient3)"
                  >
                    <motion.tspan
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.1 }}
                    >
                      8
                    </motion.tspan>
                  </motion.text>
                  <motion.text
                    x="50"
                    y="35"
                    className="font-sans"
                    fontSize="16"
                    fill="#6b7280"
                  >
                    {["C", "e", "r", "t", "i", "f", "i", "c", "a", "t", "e", "s"].map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.9 + i * 0.05, duration: 0.1 }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50 snap-start snap-always min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="About Me" subtitle="The person behind the pixels" />
          
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-dashed border-primary rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/images/girl_coder.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <h3 className="text-3xl font-display font-semibold dark:text-gray-100">
                Hi, I'm Devi. I create technology solutions that make a difference.
              </h3>
              <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
                An Electronics and Communication Engineering student with a strong interest in technology and innovation. 
                I enjoy creating user-friendly applications and working with modern tools and technologies to develop meaningful solutions. 
                Focused on continuous learning, improving technical abilities, and developing solutions that are both practical and impactful.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {[
                  { title: "Education", items: ["B.E ECE (2023-2027)", "M Kumarasamy College of Engineering", "CGPA: 8.5/10"] },
                  { title: "Experience", items: ["NSIC – IoT in Robotics", "Popular Systems – Electronics Manufacturing"] },
                  { title: "Expertise", items: ["Full Stack Dev", "Digital Electronics", "Problem Solving"] }
                ].map((col, idx) => (
                  <div key={idx} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-primary/10 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary/30 group">
                    <h4 className="font-bold text-foreground dark:text-gray-100 mb-4 border-b border-primary/20 dark:border-gray-700 pb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text group-hover:text-transparent transition-all">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map(item => (
                        <li key={item} className="text-sm text-muted-foreground dark:text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 relative overflow-hidden snap-start snap-always min-h-screen flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeading title="Certifications" subtitle="Continuous Learning" />

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.slice(0, showAllCertificates ? certificates.length : 3).map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/10 dark:border-gray-700 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-2xl group overflow-hidden"
              >
                <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 dark:text-gray-100">{cert.title}</h3>
                <p className="text-muted-foreground dark:text-gray-400 text-sm uppercase tracking-wide">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>

          {!showAllCertificates && certificates.length > 3 && (
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setShowAllCertificates(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Load More Certificates</span>
                <ChevronDown className="w-5 h-5 relative" />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-muted/30 dark:bg-gray-900/30 snap-start snap-always min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Selected Works" subtitle="Things I've built" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Hotel Management System"
                description="Web application for room booking, availability checking, authentication, and booking management."
                image="/images/hotel-management.jpg"
                tags={["JavaScript", "Node.js", "MongoDB"]}
                delay={0}
                link="https://github.com/Git-by-Devi/HOTEL-MANAGEMENT-SYSTEM"
              />
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Staff Info & Leave Portal"
                description="Role-based system for managing leave, tasks, approvals using React and Supabase."
                image="/images/staff-portal.jpg"
                tags={["React", "TypeScript", "PostgreSQL"]}
                delay={0.2}
                link="https://github.com/Git-by-Devi/STAFF-INFO-AND-LEAVE-PORTAL-SYSTEM"
              />
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Library Management System"
                description="Full-stack system to manage books, students, transactions and authentication."
                image="/images/library-system.jpg"
                tags={["Python", "MySQL", "Flask"]}
                delay={0.4}
                link="https://github.com/Git-by-Devi/library-management-system"
              />
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Safety First Initiative"
                description="IC555 based road safety system that detects vehicles and triggers alerts near construction zones."
                image="/images/safety-initiative.jpg"
                tags={["Arduino", "C++", "IoT"]}
                delay={0}
              />
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Drip Bag Monitoring System"
                description="Healthcare system to alert nurses when IV fluid reaches critical level using alerts."
                image="/images/drip-bag-system.jpg"
                tags={["Arduino", "C++", "Healthcare"]}
                delay={0.2}
              />
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="hologram-glow rounded-2xl overflow-hidden">
              <ProjectCard
                title="Smart Fire Survivor Detection"
                description="Fire detection system with automatic extinguishing and mobile alert features."
                image="/images/fire-detection.jpg"
                tags={["Arduino", "C++", "Firebase"]}
                delay={0.4}
                link="https://github.com/Git-by-Devi/SMART-FIRE-SURVIVOR-DETECTION-SYSTEM"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="py-24 bg-white/50 dark:bg-gray-900/50 snap-start snap-always min-h-screen flex items-center">
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
      <section id="contact" className="py-24 relative snap-start snap-always min-h-screen flex items-center">
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
                  className="block w-full py-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white text-center font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
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
