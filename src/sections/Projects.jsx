import { ArrowUpRight, Github } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const projects = [
  {
    title: 'Wanderlust – Travel Listings Platform',
    description:
      'A travel listing web application where users can explore destinations and manage listings. Focused on CRUD operations, data relationships, authentication, and clean MVC-based backend design.',
    image: '/projects/project1.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'MVC'],
    link: 'https://wanderlust-oxsv.onrender.com/listings',
    github: 'https://github.com/Ashishjha013/Wanderlust',
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'A full-stack e-commerce platform allowing users to browse products, manage carts, place orders, and authenticate securely. Built with scalable backend APIs and a responsive frontend interface.',
    image: '/projects/project2.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://production-ecommerce-api.onrender.com/',
    github: 'https://github.com/Ashishjha013/production-ecommerce-api',
  },
  {
    title: 'Task Management System (Backend-Focused)',
    description:
      'A production-grade backend system for managing tasks with secure authentication, role-based access control, caching, and analytics. Designed with clean architecture and real-world backend best practices.',
    image: '/projects/project3.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Redis', 'REST API'],
    link: 'https://task-manager-6bu9.onrender.com/',
    github: 'https://github.com/Ashishjha013/task-manager-rest-api',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="ttext-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects built to
            <span className="font-serif italic font-normal text-white">
              {' '}
              learn real-world development.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent projects built to practice real-world backend and full-stack
            development concepts.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
