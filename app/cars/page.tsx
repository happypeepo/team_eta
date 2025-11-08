"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import carsData from "@/data/cars.json";

export default function CarsPage() {
  const [selectedCar, setSelectedCar] = useState<typeof carsData[0] | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Cars"
          subtitle="Innovation meets efficiency. Explore our fleet of sustainable vehicles designed for Shell Eco-marathon."
        />

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <StaggerItem key={car.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hover:glow-hover transition-all cursor-pointer overflow-hidden">
                  <div className="relative w-full h-48 bg-secondary/50">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-sm">Car Image</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{car.name}</CardTitle>
                        <CardDescription className="mt-1">{car.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">{car.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Power:</span>
                        <span>{car.specs.power}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Weight:</span>
                        <span>{car.specs.weight}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Range:</span>
                        <span>{car.specs.range}</span>
                      </div>
                    </div>
                    {car.achievements.length > 0 && (
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {car.achievements[0]}
                        </span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => setSelectedCar(car)}
                      className="w-full"
                      variant="outline"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>

      {/* Car Details Dialog */}
      <Dialog open={!!selectedCar} onOpenChange={() => setSelectedCar(null)}>
        {selectedCar && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl">{selectedCar.name}</DialogTitle>
              <DialogDescription>{selectedCar.category}</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="relative w-full h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Car Image</span>
              </div>
              <p className="text-muted-foreground">{selectedCar.description}</p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Engine:</span>
                      <span>{selectedCar.specs.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power:</span>
                      <span>{selectedCar.specs.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span>{selectedCar.specs.weight}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Top Speed:</span>
                      <span>{selectedCar.specs.topSpeed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Range:</span>
                      <span>{selectedCar.specs.range}</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedCar.achievements.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedCar.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

