"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Envelope, MapPin, Globe, PaperPlaneTilt, LinkedinLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MotionWrapper } from "@/components/MotionWrapper";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eta.engg@somaiya.edu",
      href: "mailto:eta.engg@somaiya.edu",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.teameta.in",
      href: "https://www.teameta.in",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "K. J. Somaiya School of Engineering, Mumbai",
      href: "#",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/team-eta/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/team_eta_/" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/Team_ETA" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/c/TeamETAKJSCE" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions or want to collaborate? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <MotionWrapper>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : "mt-2"}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : "mt-2"}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500" : "mt-2"}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/50 rounded-md text-green-400"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* Contact Info */}
          <MotionWrapper delay={0.2}>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={index}
                          href={info.href}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                        >
                          <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                              <LinkedinLogo className="h-5 w-5" />
                            </a>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 text-primary transition-colors"
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Placeholder */}
              <Card>
                <CardContent className="p-6">
                  <div className="w-full h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Map Location</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Envelope className="h-5 w-5" />
                        teameta@somaiya.edu
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}

