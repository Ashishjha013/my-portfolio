import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Pedro brings clarity and precision to every project. His ability to break down complex problems and deliver clean, scalable solutions makes him a highly reliable engineer.',
    author: 'Sarah Mitchell',
    role: 'Head of Engineering',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote:
      'Pedro consistently delivered high-quality work under tight deadlines. His professionalism, ownership, and attention to detail significantly improved our development workflow.',
    author: 'Daniel Foster',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    quote:
      'Pedro played a key role in strengthening our frontend architecture. His expertise in modern JavaScript and React helped us build a faster, more maintainable product.',
    author: 'Olivia Parker',
    role: 'Frontend Lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    quote:
      'Beyond strong technical skills, Pedro is an excellent communicator and team player. He takes ownership, asks the right questions, and consistently delivers value.',
    author: 'Ethan Reynolds',
    role: 'Founder & Technical Advisor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      />
      
      {/* Section Header */}
      <div
        className="text-center max-w-3xl 
        mx-auto mb-16"
      >
        <span
          className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
        >
          What People Say
        </span>
        <h2
          className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
        >
          Kind words from{' '}
          <span
            className="font-serif italic 
            font-normal text-white"
          >
            amazing people.
          </span>
        </h2>
      </div>
    </section>
  );
};
