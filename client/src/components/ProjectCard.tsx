import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  techIcons?: string[];
  delay?: number;
  link?: string;
}

export function ProjectCard({ title, description, image, tags, techIcons, delay = 0, link }: ProjectCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/5 dark:border-gray-700"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply" />
        {/* Descriptive alt for image search replacement */}
        {/* modern minimalist website interface design showcase */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg text-foreground dark:text-gray-100 hover:text-primary transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors dark:text-gray-100">
          {title}
        </h3>
        <p className="text-muted-foreground dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {techIcons && techIcons.length > 0 ? (
          <div className="flex gap-2">
            {techIcons.map((icon, idx) => (
              <div 
                key={idx} 
                className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-md border border-gray-200 dark:border-gray-600 hover:scale-110 transition-transform"
              >
                <img src={icon} alt="tech" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        ) : tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
