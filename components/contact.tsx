'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { client } from '@/lib/amplify-client';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'This field is required' }),
  lastName: z.string().min(1, { message: 'This field is required' }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  message: z.string().min(1, { message: 'This field is required' }).max(500),
});

const defaultValues: z.infer<typeof formSchema> = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onTouched',
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitting(true);

      const { data, errors } = await client.queries.sendContactEmail({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      });

      if (errors && errors.length > 0) {
        console.error(errors);
        toast.error('Something went wrong while sending your message.');
        return;
      }

      if (!data?.success) {
        toast.error(data?.message ?? 'Failed to send your message. Please try again.');
        return;
      }

      toast.success('Message sent!', {
        description: data.message,
      });
      form.reset(defaultValues);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-full rounded-xl border border-border/60 bg-card/60 shadow-sm">
      <CardHeader className="border-b border-border/60 pb-4">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Please, fill out the form below and I&apos;ll get back to you as soon as possible.
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <div className="min-h-[1.25rem]">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <div className="min-h-[1.25rem]">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <div className="min-h-[1.25rem]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="resize-none" />
                  </FormControl>
                  <div className="min-h-[1.25rem]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" size="sm" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
