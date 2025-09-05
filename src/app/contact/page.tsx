import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our products, services, or business opportunities. We're here to help you succeed.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                    We'd love to hear from you. Whether you have questions about our products, need technical support, or want to explore business partnerships, our team is ready to assist.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">127/10, Mattegoda<br />Kottawa, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <a href="mailto:info@fixorafood.lk" className="text-muted-foreground hover:text-primary transition-colors">info@fixorafood.lk</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-4 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">WhatsApp</h3>
                      <p className="text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-full min-h-[300px] bg-muted/50 rounded-lg">
                <p className="text-muted-foreground font-medium text-lg">Contact form coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <section className="mt-16 text-center bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-headline mb-2">Find Us</h2>
            <p className="text-muted-foreground mb-4">Visit our office in Kottawa, Sri Lanka</p>
             <div className="aspect-video bg-background border rounded-lg overflow-hidden">
                <iframe 
                    src="https://maps.google.com/maps?q=6.8282819,79.965266&hl=es;z=14&amp;output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
             <p className="text-muted-foreground mt-4">127/10, Mattegoda, Kottawa, Sri Lanka</p>
        </section>

      </div>
    </div>
  );
}
