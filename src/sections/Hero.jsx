import { Button } from '@/components/Button';
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import FloatingDots from '@/components/FloatingDots';
import AnimatedText from '@/components/AnimatedText';

const skills = [
  'JavaScript',
  'Express.js',
  'Node.js',
  'React',
  'TypeScript',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS',
  'Vercel',
  'Tailwind CSS',
  'Git & GitHub',
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* Floating Dots */}
      <FloatingDots
        count={300}
        minRadius={0.4}
        maxRadius={1.4}
        minSpeed={0.15}
        maxSpeed={0.6}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Full-Stack Developer • Backend-Focused
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{' '}
                <AnimatedText
                  texts={['real-world', 'scalable', 'efficient']}
                  typingSpeed={85}
                  deletingSpeed={45}
                  pauseTime={1400}
                />
                <br />
                web applications
                <br />
                <span className="font-serif italic font-normal text-white">
                  with clean logic and scalable systems.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I’m a backend-focused full-stack developer who builds secure APIs, authentication
                systems, and scalable backend applications using Node.js, Express, and MongoDB —
                with modern React frontends.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="/Ashish_Kumar_Jha_Backend_Developer_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border max-w-95 mx-auto">
                <img
                  src="/profile-photo.png"
                  alt="Ashish Jha"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Social Links */}
                <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-5">
                  {[
                    { icon: Github, href: 'https://github.com/ashishjha013' },
                    {
                      icon: Linkedin,
                      href: 'https://www.linkedin.com/in/ashishjha13/',
                    },
                    { icon: Twitter, href: 'https://x.com/aashishjha01' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-2 -left-2 glass rounded-xl px-3 py-2 animate-float animation-delay-500">
                  <div className="text-sm font-semibold text-primary">Project-Based Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with:
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
