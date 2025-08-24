import { Award, BrainCircuit, Building, GraduationCap, Handshake, HeartHandshake, Leaf, Lightbulb, Mail, TrendingUp, UserCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CareersPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-64 md:h-80">
        <Image
          src="https://www.zwirnerequipment.com/images/headers/about-us-header.jpg"
          alt="Team of people collaborating"
          fill
          className="object-cover z-0"
          data-ai-hint="team collaboration"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Careers at Fixora Food Solutions</h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">Great food starts with great people. Join our mission.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto space-y-16">

          <section className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Build the Future of Food With Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Fixora Food Solutions, we believe our team is the heart of our success. We're looking for passionate, innovative, and dedicated individuals to help us craft delicious products and deliver exceptional service.
            </p>
          </section>

          <section>
             <h2 className="text-3xl font-bold font-headline text-center mb-10 text-primary">Life at Fixora</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                  <CardTitle className="text-xl">Collaborative Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Work alongside passionate colleagues who support and inspire each other.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
                  <CardTitle className="text-xl">Career Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We invest in your development through training, workshops, and advancement programs.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-accent mx-auto mb-3" />
                  <CardTitle className="text-xl">Innovation Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We encourage creativity and fresh ideas to make a real impact on the food industry.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                 <CardHeader>
                    <HeartHandshake className="w-12 h-12 text-accent mx-auto mb-3" />
                    <CardTitle className="text-xl">Work-Life Balance</CardTitle>
                 </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Flexible work arrangements and wellness initiatives to help you thrive in and out of work.</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                 <CardHeader>
                    <Building className="w-12 h-12 text-accent mx-auto mb-3" />
                    <CardTitle className="text-xl">Community Focus</CardTitle>
                 </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Participate in company-led social responsibility projects that give back to our community.</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                 <CardHeader>
                    <GraduationCap className="w-12 h-12 text-accent mx-auto mb-3" />
                    <CardTitle className="text-xl">Continuous Learning</CardTitle>
                 </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Stay ahead of the curve with access to the latest industry knowledge and skill development.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-center mb-10 text-primary">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Award className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Integrity</h3>
                  <p className="mt-1 text-muted-foreground">We conduct business with honesty and transparency in all our interactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Leaf className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quality</h3>
                  <p className="mt-1 text-muted-foreground">We are committed to delivering excellence in everything we do.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <UserCheck className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Customer Centricity</h3>
                  <p className="mt-1 text-muted-foreground">Our customers are at the heart of our decision-making process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <BrainCircuit className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="mt-1 text-muted-foreground">We embrace new technologies and creative solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Handshake className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Diversity & Inclusion</h3>
                  <p className="mt-1 text-muted-foreground">We foster an inclusive environment that values diverse perspectives.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-8 text-primary">Current Opportunities</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold font-headline mb-4">Exciting Roles Coming Soon</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">As we continue to grow and expand our operations, we'll be opening new positions across various departments. Stay tuned for opportunities in engineering, sales, marketing, operations, and more.</p>
                <div className="flex flex-wrap justify-center gap-3">
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
            <h2 className="text-2xl font-bold font-headline mb-4">Don't See a Fit? Get in Touch!</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We are always looking for talented individuals. If you're passionate about the food industry, send us your resume and tell us how you can contribute to our mission.</p>
            <Button asChild size="lg">
                <Link href="mailto:hr@fixorafoods.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Your Resume
                </Link>
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
}

    