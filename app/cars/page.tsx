'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { carsTimeline } from "@/data/cars-timeline";
import Link from "next/link";
import { Timeline, TimelineItem } from "@/components/timeline/TimelineV2";

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey Through Innovation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              A timeline of Team ETA's evolution from concept to cutting-edge efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline>
        {carsTimeline.map((car, index) => (
          <TimelineItem
            key={car.name}
            year={car.year}
            title={car.name}
            description={car.description}
            highlights={car.highlights}
            image={car.image}
            tagline={car.tagline}
            isEven={index % 2 === 0}
          />
        ))}
      </Timeline>
    </div>
  );
}