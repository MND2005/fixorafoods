"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ClientOnly } from "@/components/ClientOnly";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters.").max(50),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string({ required_error: "Please select a subject." }),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Check if Firebase is properly initialized
  useEffect(() => {
    if (!db) {
      setFirebaseError("Firebase is not properly initialized. Please check your configuration.");
    }
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitting) return;
    
    if (!db) {
      toast({
        title: "Error",
        description: "Firebase is not properly initialized.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, "contactMessages"), {
        ...values,
        createdAt: new Date(),
      });
      
      console.log("Document written with ID: ", docRef.id);
      setSubmitSuccess(true);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error("Error adding document: ", error);
      
      // Provide more specific error messages
      let errorMessage = "There was a problem sending your message. Please try again.";
      
      if (error.code === "permission-denied") {
        errorMessage = "Unable to send message due to permissions. Please contact the site administrator.";
      } else if (error.code === "unavailable") {
        errorMessage = "Service temporarily unavailable. Please try again later.";
      } else if (error.code) {
        errorMessage = `Error: ${error.code}`;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (firebaseError) {
    return (
      <ClientOnly>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-yellow-700 font-medium">Firebase Configuration Error</span>
          </div>
          <p className="text-yellow-600 text-sm mt-1">
            {firebaseError}
          </p>
        </div>
      </ClientOnly>
    );
  }

  if (submitSuccess) {
    return (
      <ClientOnly>
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for your message. We'll get back to you as soon as possible.
          </p>
          <Button onClick={() => setSubmitSuccess(false)}>Send Another Message</Button>
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+94 XX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                    <SelectItem value="service-support">Service & Support</SelectItem>
                    <SelectItem value="business-partnership">Business Partnership</SelectItem>
                    <SelectItem value="general-question">General Question</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your inquiry or message in detail..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || !db}>
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2" />
                Send Message
              </>
            )}
          </Button>
          {!db && (
            <p className="text-red-500 text-sm text-center">
              Firebase is not initialized. Check your configuration.
            </p>
          )}
        </form>
      </Form>
    </ClientOnly>
  );
}