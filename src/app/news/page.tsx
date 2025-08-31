
import Image from 'next/image';
import { newsArticles } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-center mb-10">News & Updates</h1>
      <div className="max-w-4xl mx-auto">
        {newsArticles.length > 0 ? (
          <div className="grid gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    data-ai-hint={article.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
                    <CardTitle className="text-2xl font-headline">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.summary}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Newspaper className="mx-auto h-16 w-16 mb-4 text-accent" />
            <h2 className="text-2xl font-semibold mb-2">No News Yet</h2>
            <p>Check back soon for the latest updates and announcements.</p>
          </div>
        )}
      </div>
    </div>
  );
}
