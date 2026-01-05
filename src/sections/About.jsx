import { Code2, Rocket, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing clean, readable code with a focus on structure and maintainability.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Focusing on efficient APIs and simple optimizations for better performance.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Comfortable collaborating with Git/GitHub and learning through feedback.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously learning backend best practices by building real projects.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning by building,
              <br />
              <span className="font-serif italic font-normal text-white">real-world projects.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate backend-focused developer who enjoys understanding how things work
                behind the scenes. My journey started with curiosity about APIs, databases, and
                authentication systems.
              </p>
              <p>
                Instead of only learning concepts, I focus on building real projects that follow
                real-world backend practices.
              </p>
              {/* <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p> */}
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build clean, reliable applications while continuously improving my
                backend and full-stack skills by working on real-world projects."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
