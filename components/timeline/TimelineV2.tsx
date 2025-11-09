// components/timeline/TimelineV2.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import Image from 'next/image';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  tagline: string;
  isEven?: boolean;
}

export function TimelineItem({
  year,
  title,
  description,
  highlights,
  image,
  tagline,
  isEven = false,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const x = useTransform(scrollYProgress, [0, 1], [isEven ? 50 : -50, 0]);

  return (
    <div 
      ref={ref}
      className={cn(
        "relative w-full py-12 px-4 md:px-8",
        isEven ? "md:pl-1/2" : "md:pr-1/2"
      )}
      data-year={year}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 md:left-0 top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-background z-10" />
      
      <motion.div 
        className={cn(
          "relative z-0",
          isEven ? "md:pr-12" : "md:pl-12"
        )}
        style={{ opacity, x }}
      >
        <div className={cn(
          "bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/20",
          "transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/40"
        )}>
          <div className="flex flex-col gap-6">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
                <span className="text-2xl font-bold text-cyan-400">{year}</span>
              </div>
              
              <p className="text-muted-foreground mb-6">{description}</p>
              
              {highlights?.length > 0 && (
                <div className="space-y-3 mb-6">
                  {highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                      <p className="text-foreground/90">{highlight}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {tagline && (
                <div className="pt-4 border-t border-border/20">
                  <p className="text-sm font-medium text-cyan-400">{tagline}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({
    top: '0px',
    height: '0px',
    opacity: 0
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Convert children to array and filter out any null/undefined
  const childrenArray = React.Children.toArray(children).filter(Boolean);

  // Update line position on mount and resize
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;

    const updateLine = () => {
      const container = containerRef.current;
      if (!container) return;

      const firstItem = container.querySelector('[data-year]') as HTMLElement;
      if (!firstItem) return;

      const conclusionSection = container.querySelector('section');
      if (!conclusionSection) return;

      const firstItemRect = firstItem.getBoundingClientRect();
      const conclusionRect = conclusionSection.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Start the line from the first item
      const startY = firstItemRect.top + scrollY + 24;
      // End the line at the conclusion section
      const endY = conclusionRect.top + scrollY - 80;
      
      setLineStyle({
        top: `${startY}px`,
        height: `${Math.max(0, endY - startY)}px`,
        opacity: 1
      });
    };

    // Initial update
    updateLine();
    
    // Update on resize
    const handleResize = () => requestAnimationFrame(updateLine);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Vertical line */}
      <div 
        className="fixed left-1/2 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 z-0"
        style={{
          ...lineStyle,
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div 
          className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyan-400/80 to-transparent"
          style={{ y: lineY }}
        />
      </div>

      {/* Timeline content */}
      <div className="relative z-0 pt-12 pb-24">
        <div className="container mx-auto">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            
            return React.cloneElement(child as React.ReactElement, {
              isEven: index % 2 === 0,
            });
          })}
        </div>

        {/* Conclusion section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                From Jugaad to Yugant
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every prototype is a step closer to a cleaner, more efficient tomorrow.
              </p>
              <a 
                href="/achievements"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                View Our Achievements
                <Icon name="arrowRight" className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}