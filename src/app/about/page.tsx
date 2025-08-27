import { Award, BrainCircuit, Handshake, Heart, Leaf, Lightbulb, Recycle, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-64 md:h-80">
        <Image
          src="https://www.acquisition-international.com/wp-content/uploads/2023/03/AdobeStock_576980630-2.jpg"
          alt="Diverse team working together"
          fill
          className="object-cover z-0"
          data-ai-hint="team meeting"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">About Fixora Food Solutions (Pvt) Ltd</h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">"Healthy Foods, Happy Lives"</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          
          <section className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Story</h2>
            <p className="text-center text-muted-foreground text-lg max-w-4xl mx-auto">
              Fixora Food Solutions (Pvt) Ltd was founded with a clear mission: to deliver safe, nutritious, and innovative food solutions to every household. With a strong Sri Lankan heritage and a future-forward mindset, we proudly serve a growing range of products across the dairy, beverages, spices, and processed food categories. Fixora food solutions ( pvt) ltd is not just a brand; it's a promise of nourishment, reliability, and growth. Whether you're a customer, distributor, or business partner, we welcome you to join our journey toward a healthier tomorrow.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center">
             <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the most trusted food brand for healthy, quality food and reliable service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide nutritious, safe, and high-quality food and beverages through innovation, modern technology, and responsible practices, building trust with every product we deliver.</p>
              </CardContent>
            </Card>
          </section>
          
          <section className="bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-center mb-8" style={{color: 'hsl(var(--primary))'}}>Our Core Pillars</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold">Trusted Quality</h3>
                <p className="text-muted-foreground mt-1">Every product is crafted using the highest industry standards with a focus on safety, nutrition, and taste.</p>
              </div>
              <div className="flex flex-col items-center">
                <Lightbulb className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold">Innovation & Technology</h3>
                <p className="text-muted-foreground mt-1">We are powered by Industry 4.0 technologies, enabling efficient processes, smart logistics, and digital-driven customer engagement.</p>
              </div>
              <div className="flex flex-col items-center">
                <Recycle className="w-12 h-12 text-accent mb-3" />
                <h3 className="text-xl font-bold">Sustainable Impact</h3>
                <p className="text-muted-foreground mt-1">From empowering local farmers to reducing our environmental footprint, we are committed to making a lasting positive impact.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-10" style={{color: 'hsl(var(--primary))'}}>Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Award className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Integrity</h3>
                  <p className="mt-1 text-muted-foreground">We conduct business with honesty, transparency, and ethical practices in all our interactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Leaf className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quality</h3>
                  <p className="mt-1 text-muted-foreground">We are committed to delivering products and services that meet the highest standards of excellence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Users className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Customer Centricity</h3>
                  <p className="mt-1 text-muted-foreground">Our customers are at the heart of everything we do, driving our innovation and service delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sustainability</h3>
                  <p className="mt-1 text-muted-foreground">We are dedicated to environmentally responsible practices and sustainable business operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <BrainCircuit className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="mt-1 text-muted-foreground">We embrace new technologies and creative solutions to continuously improve our offerings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Handshake className="w-8 h-8 text-accent"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Diversity & Inclusion</h3>
                  <p className="mt-1 text-muted-foreground">We foster an inclusive environment that values diverse perspectives and equal opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-6" style={{color: 'hsl(var(--primary))'}}>Our Offerings</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-full px-5 py-2 font-medium text-sm md:text-base">Dairy Machinery, Equipment & Accessories</div>
              <div className="bg-secondary text-secondary-foreground rounded-full px-5 py-2 font-medium text-sm md:text-base">Business Consultancy for Food Entrepreneurs</div>
              
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
