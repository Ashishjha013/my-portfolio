import { ArrowUpRight, Github } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const projects = [
  {
    title: 'Wanderlust – Travel Listings Platform',
    description:
      'A travel listing web application where users can explore destinations and manage listings. Focused on CRUD operations, data relationships, authentication, and clean MVC-based backend design.',
    image: '/projects/wanderlust.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'MVC'],
    link: 'https://wanderlust-oxsv.onrender.com/listings',
    github: 'https://github.com/Ashishjha013/Wanderlust',
  },
  {
    title: 'E-Commerce Web Application',
    subtitle: '(Backend-Focused)',
    description:
      'A full-stack e-commerce platform allowing users to browse products, manage carts, place orders, and authenticate securely.',
    image: '/projects/e-commerce.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://production-ecommerce-api.onrender.com/',
    github: 'https://github.com/Ashishjha013/production-ecommerce-api',
  },
  {
    title: 'Task Management System',
    subtitle: '(Backend-Focused)',
    description:
      'A production-grade backend system with secure authentication, RBAC, caching, and analytics.',
    image: '/projects/task-manager.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Redis', 'REST API'],
    link: 'https://task-manager-6bu9.onrender.com/',
    github: 'https://github.com/Ashishjha013/task-manager-rest-api',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects built to{' '}
            <span className="font-serif italic font-normal text-white">
              learn real-world development.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Real projects focused on backend and full-stack fundamentals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden aspect-16/10 md:aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" /> */}

                {/* Overlay Buttons */}
                <div
                  className="
                    absolute inset-0 flex items-center justify-center gap-4
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  {/* Live Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-full glass
                      bg-primary text-primary-foreground
                      md:bg-transparent md:text-foreground
                      md:hover:bg-primary md:hover:text-primary-foreground
                      transition-all
                    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-full glass
                      bg-primary text-primary-foreground
                      md:bg-transparent md:text-foreground
                      md:hover:bg-primary md:hover:text-primary-foreground
                      transition-all
                    "
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-semibold md:text-foreground md:group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                  {project.subtitle && (
                    <>
                      <br />
                      <span className="text-sm text-muted-foreground font-normal">
                        {project.subtitle}
                      </span>
                    </>
                  )}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-sm border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a href="https://github.com/ashishjha013" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
