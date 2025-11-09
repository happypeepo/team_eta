'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useInView, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";

// Client-side only components
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export interface TimelineItemProps {
  year: number | string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  tagline: string;
  isEven?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TimelineItem({
  year,
  title,
  description,
  highlights,
  image,
  tagline,
  isEven = false,
  isFirst = false,
  isLast = false,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    margin: "-100px 0px -100px 0px", 
    once: true,
    amount: 0.3 
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    isEven ? [100, 0, 0, -100] : [-100, 0, 0, 100]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  // Glow effect when in view
  const glow = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['0 0 0px rgba(34, 211, 238, 0)', '0 0 15px rgba(34, 211, 238, 0.3)', '0 0 15px rgba(34, 211, 238, 0.3)', '0 0 0px rgba(34, 211, 238, 0)']
  );

  // Year indicator animation
  const yearScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const yearOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden"
      data-year={year}
    >

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-0">
        <MotionDiv 
          className={cn(
            "relative max-w-6xl mx-auto",
            isEven ? "lg:pr-1/2" : "lg:pl-1/2"
          )}
          style={{
            opacity,
            x: isEven ? x : undefined,
            y: isEven ? 0 : undefined,
          }}
          initial={false}
        >
          <MotionDiv 
            className={cn(
              "relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/20",
              "transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/40",
              isEven ? "lg:mr-8" : "lg:ml-8"
            )}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-muted/20">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                
                <div className="space-y-2 mb-6">
                  {highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <Icon name="check" className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/20">
                  <p className="text-sm font-medium text-cyan-400">{tagline}</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

interface TimelineProps {
  children: React.ReactNode;
}

interface LineStyle {
  top: string;
  height: string;
}

export function Timeline({ children }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [lineStyle, setLineStyle] = useState<LineStyle>({ top: '0', height: '0' });
  const [lineHeight, setLineHeight] = useState('0%');
  
  // Use a separate ref for the scroll container
  useEffect(() => {
    // Set the scroll container to the window
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const contentSections = timelineRef.current.querySelectorAll('section[data-year]');
      
      contentSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;
        const year = section.getAttribute('data-year');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveYear(year);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll progress for the indicator
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to position the indicator
  const indicatorY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Convert children to array and filter out any null/undefined
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  
  // Extract years for the timeline indicators
  const years = childrenArray
    .filter((child: any) => child?.props?.year)
    .map((child: any) => String(child.props.year));

  // Set up scroll-based active year detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const contentSections = containerRef.current.querySelectorAll('section[data-year]');
      
      contentSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;
        const year = section.getAttribute('data-year');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveYear(year);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [years]);
  
  // Update line height based on scroll
  useEffect(() => {
    const updateLineHeight = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate the visible height of the container
      const containerTop = containerRect.top + scrollY;
      const containerBottom = containerTop + containerRect.height;
      const visibleTop = Math.max(0, scrollY - containerTop);
      const visibleBottom = Math.min(containerRect.height, scrollY + viewportHeight - containerTop);
      
      // Calculate the visible height percentage
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const totalHeight = containerRect.height;
      const newHeight = totalHeight > 0 ? (visibleHeight / totalHeight) * 100 : 0;
      
      setLineHeight(`${Math.min(100, Math.max(0, newHeight))}%`);
    };
    
    // Set initial height
    updateLineHeight();
    
    // Add scroll and resize listeners
    window.addEventListener('scroll', updateLineHeight, { passive: true });
    window.addEventListener('resize', updateLineHeight);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateLineHeight);
      window.removeEventListener('resize', updateLineHeight);
    };
  }, []);

  // Scroll to section when year is clicked
  const scrollToYear = (year: string) => {
    const section = containerRef.current?.querySelector(`[data-year="${year}"]`) as HTMLElement;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - window.innerHeight * 0.3,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Center line with enhanced design */}
      <div 
        className="fixed left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent overflow-hidden z-0"
        style={{
          top: '0',
          height: lineHeight,
          transition: 'height 0.3s ease-out'
        }}
      >
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-24"
          style={{
            y: indicatorY,
            background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.8) 0%, rgba(56, 182, 255, 0.6) 50%, rgba(34, 211, 238, 0.8) 100%)',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)'
          }}
          initial={{ opacity: 0.7 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Year indicators on the side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10 hidden md:flex">
        {years.map((year) => (
          <motion.button
            key={year}
            onClick={() => scrollToYear(year)}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all",
              "border-2 hover:border-cyan-400 hover:bg-cyan-500/10",
              activeYear === year 
                ? "bg-cyan-500 border-cyan-400 text-white scale-110"
                : "bg-background border-cyan-400/30 text-cyan-400"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {year}
          </motion.button>
        ))}
      </div>
      
      {/* Timeline content */}
      <div className="relative z-0 pt-12 pb-24" ref={timelineRef}>
        <div className="container mx-auto px-4">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            
            return React.cloneElement(child as React.ReactElement, {
              isEven: index % 2 === 0,
              isFirst: index === 0,
              isLast: index === React.Children.count(children) - 1,
            });
          })}
        </div>
        
        {/* Conclusion section */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              From Jugaad to Yugant
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every prototype is a step closer to a cleaner, more efficient tomorrow.
            </p>
            <a 
              href="/achievements"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              View Our Achievements
              <Icon name="arrowRight" className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
