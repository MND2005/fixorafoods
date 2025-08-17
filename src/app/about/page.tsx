import { Award, BrainCircuit, Handshake, Heart, Leaf, Lightbulb, Recycle, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-64">
        <Image
          src="https://placehold.co/1600x400.png"
          alt="Diverse team working together"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="team meeting"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">About Leo Foods</h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">"Healthy Foods, Happy Lives"</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-4">Our Story</h2>
            <p className="text-center text-muted-foreground text-lg">
              Leo Foods (Pvt) Limited was founded with a clear mission: to deliver safe, nutritious, and innovative food solutions to every household. With a strong Sri Lankan heritage and a future-forward mindset, we proudly serve a growing range of products across the dairy, beverages, spices, and processed food categories. Leo Foods is not just a brand, it's a promise of nourishment, reliability, and growth. Whether you're a customer, distributor, or business partner, we welcome you to join our journey toward a healthier tomorrow.
            </p>
          </section>

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold font-headline mb-6">Our Offerings</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 font-medium">Dairy Machinery, Equipment & Accessories</div>
              <div className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 font-medium">Business Consultancy for Food Entrepreneurs</div>
              <div className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 font-medium">Dairy Products, Fruit-Based Juices, Jams & Sauces</div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-6">Our Commitment</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="text-muted-foreground mt-1">Ensuring the highest safety standards in all our products and services.</p>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Nutritional Excellence</h3>
                <p className="text-muted-foreground mt-1">Delivering products that contribute to healthy and balanced nutrition.</p>
              </div>
              <div className="flex flex-col items-center">
                <Lightbulb className="w-12 h-12 text-primary mb-3" />
                <h3 className="text-xl font-bold">Continuous Innovation</h3>
                <p className="text-muted-foreground mt-1">Embracing new technologies and methods to improve our offerings.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12 bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-center mb-6">Our Three Core Pillars</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Quality</h3>
                <p className="text-muted-foreground">Every product is crafted using the highest industry standards with a focus on safety, nutrition, and taste.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation & Technology</h3>
                <p className="text-muted-foreground">We are powered by Industry 4.0 technologies, enabling efficient processes, smart logistics, and digital-driven customer engagement.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Impact</h3>
                <p className="text-muted-foreground">From empowering local farmers to reducing our environmental footprint, we are committed to making a lasting positive impact.</p>
              </div>
            </div>
          </section>
          
          <section className="grid md:grid-cols-2 gap-8 mb-12">
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

          <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Integrity</h3>
                  <p className="mt-1 text-muted-foreground">We conduct business with honesty, transparency, and ethical practices in all our interactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Leaf className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quality</h3>
                  <p className="mt-1 text-muted-foreground">We are committed to delivering products and services that meet the highest standards of excellence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Customer Centricity</h3>
                  <p className="mt-1 text-muted-foreground">Our customers are at the heart of everything we do, driving our innovation and service delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Recycle className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sustainability</h3>
                  <p className="mt-1 text-muted-foreground">We are dedicated to environmentally responsible practices and sustainable business operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <BrainCircuit className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="mt-1 text-muted-foreground">We embrace new technologies and creative solutions to continuously improve our offerings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <Handshake className="w-8 h-8 text-primary"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Diversity, Equity & Inclusion</h3>
                  <p className="mt-1 text-muted-foreground">We foster an inclusive environment that values diverse perspectives and equal opportunities.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}