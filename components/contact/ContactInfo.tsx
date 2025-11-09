'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactInfo() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Contact Information
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground">
                K. J. Somaiya College of Engineering,<br />
                Vidyanagar, Vidyavihar (East),<br />
                Mumbai-400077,<br />
                Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium">Suhail Shanavas (Team Head):</span><br />
                  <a href="tel:+919503332990" className="hover:text-primary transition-colors">
                    +91 9503332990
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Avanti Biswas (Team Admin):</span><br />
                  <a href="tel:+918657438799" className="hover:text-primary transition-colors">
                    +91 8657438799
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
              <a 
                href="mailto:eta.engg@somaiya.edu" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                eta.engg@somaiya.edu
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Website</h3>
              <a 
                href="https://www.teameta.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                www.teameta.in
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" placeholder="Your name" className="w-full" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
              <Input id="subject" placeholder="Subject" className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <Textarea id="message" placeholder="Your message" rows={5} className="w-full" />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}
