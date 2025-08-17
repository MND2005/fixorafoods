import { UtensilsCrossed, GlassWater, Wheat, Milk } from 'lucide-react';
import Image from 'next/image';

export default function FoodsPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-64">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/035/017/371/non_2x/ai-generated-fresh-fruit-and-vegetable-composition-on-a-kitchen-table-photo.jpg"
          alt="Fresh ingredients on a table"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="fresh ingredients"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline drop-shadow-lg">Our Upcoming Food Products</h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">High-quality, nutritious, and great-tasting consumer products, coming soon to your table.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">A Taste of What's to Come</h2>
            <p className="text-lg text-muted-foreground">
              We are passionately developing a new range of consumer products with a focus on freshness, nutrition, and incredible taste. From wholesome dairy to natural juices and delicious sauces, we're committed to bringing trusted quality to your kitchen.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                    <Milk className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-2xl font-bold font-headline">Fresh & Processed Dairy Products</h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Fresh milk</li>
                    <li>Yogurt</li>
                    <li>Drinking yogurt</li>
                    <li>Curd</li>
                    <li>Ice-cream</li>
                    <li>Ghee</li>
                    <li>Cheese</li>
                </ul>
            </div>
             <div className="bg-card p-6 rounded-lg border">
                 <div className="flex items-center mb-4">
                    <GlassWater className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-2xl font-bold font-headline">Natural Fruit Juices</h3>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Orange juice</li>
                    <li>Apple juice</li>
                    <li>Mixed fruit juices</li>
                    <li>Seasonal specialties</li>
                </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border col-span-1 md:col-span-2">
                 <div className="flex items-center mb-4">
                    <UtensilsCrossed className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-2xl font-bold font-headline">Jams and Sauces</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8">
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Fruit jams</li>
                        <li>Preserves</li>
                    </ul>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Cooking sauces</li>
                        <li>Condiments</li>
                    </ul>
                </div>
            </div>
          </section>
          
          <section className="mt-16 text-center bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-headline mb-2">Stay Tuned!</h2>
            <p className="text-muted-foreground">We are working hard to perfect these offerings. Keep an eye on our News & Updates for launch announcements and more details.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
