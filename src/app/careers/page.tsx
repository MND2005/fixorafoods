import { Award, BrainCircuit, Building, GraduationCap, Handshake, HeartHandshake, Leaf, Lightbulb, Mail, MapPin, Recycle, TrendingUp, UserCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function CareersPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-64">
        <Image
          src="https://dairyconsultant.co.uk/images/photos/photo1.png"
          alt="Team of people collaborating"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="team collaboration"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Careers at Fixora food solutions ( pvt) ltd</h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">Join our team and be part of a culture that values dedication, teamwork, and excellence. Great food starts with great people.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Building the Future of Food Together</h2>
            <p className="text-lg text-muted-foreground">
              At Fixora food solutions ( pvt) ltd, we believe that great food starts with great people. Our team is the heart of everything we do, from crafting delicious products to delivering exceptional service.
            </p>
          </section>

          <section className="mb-12">
             <h2 className="text-3xl font-bold font-headline text-center mb-8">Life at Fixora food solutions ( pvt) ltd</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Collaborative Environment</h3>
                <p className="text-muted-foreground mt-1">Work alongside passionate colleagues who support and inspire each other.</p>
              </div>
              <div className="flex flex-col items-center">
                <GraduationCap className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
                <p className="text-muted-foreground mt-1">We invest in your development through training, workshops, and career advancement programs.</p>
              </div>
              <div className="flex flex-col items-center">
                <Lightbulb className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Innovation Driven</h3>
                <p className="text-muted-foreground mt-1">We encourage creativity and fresh ideas to make a real impact.</p>
              </div>
              <div className="flex flex-col items-center">
                <HeartHandshake className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Work-Life Balance</h3>
                <p className="text-muted-foreground mt-1">Flexible work arrangements and wellness initiatives to help you thrive.</p>
              </div>
               <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Community Focus</h3>
                <p className="text-muted-foreground mt-1">Participate in company-led social responsibility projects that give back.</p>
              </div>
               <div className="flex flex-col items-center">
                <TrendingUp className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Career Growth</h3>
                <p className="text-muted-foreground mt-1">Clear career progression paths and opportunities to advance within the organization.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Integrity</h3>
                  <p className="mt-1 text-muted-foreground">We conduct business with honesty and transparency in all our interactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Leaf className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quality</h3>
                  <p className="mt-1 text-muted-foreground">We are committed to delivering excellence in everything we do.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <UserCheck className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Customer Centricity</h3>
                  <p className="mt-1 text-muted-foreground">Our customers are at the heart of our decision-making process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Recycle className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sustainability</h3>
                  <p className="mt-1 text-muted-foreground">We are dedicated to environmentally responsible practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <BrainCircuit className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="mt-1 text-muted-foreground">We embrace new technologies and creative solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Handshake className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Diversity, Equity & Inclusion</h3>
                  <p className="mt-1 text-muted-foreground">We foster an inclusive environment that values diverse perspectives.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">Current Opportunities</h2>
            <Card className="bg-muted">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold font-headline mb-2">Exciting Opportunities Coming Soon</h3>
                <p className="text-muted-foreground mb-6">As we continue to grow and expand our operations, we'll be opening new positions across various departments. Stay tuned for opportunities in engineering, sales, marketing, operations, and more.</p>
                <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">Engineering</Badge>
                    <Badge variant="secondary">Sales & Marketing</Badge>
                    <Badge variant="secondary">Operations</Badge>
                    <Badge variant="secondary">Quality Assurance</Badge>
                    <Badge variant="secondary">Customer Service</Badge>
                    <Badge variant="secondary">Finance</Badge>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="text-center bg-card border p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold font-headline mb-2">Ready to Join Our Team?</h2>
            <p className="text-muted-foreground mb-6">Even if you don't see a perfect match right now, we'd love to hear from you. Send us your resume and let us know how you'd like to contribute to our mission.</p>
            <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="mailto:hr@fixorafoods.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Your Resume
                    </Link>
                </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
