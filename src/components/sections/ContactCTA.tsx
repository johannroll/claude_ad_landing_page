'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/ContactForm';
import { CheckCircle, Clock, HeadphonesIcon, Shield } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: '24-Hour Response',
    description: 'Get a response from our team within one business day',
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: 'Expert Support',
    description: 'Speak directly with our CCM specialists',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'No Obligation',
    description: 'Free consultation with no commitment required',
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Tailored Solutions',
    description: 'Get recommendations specific to your needs',
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-primary">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
              <div className="h-px w-8 bg-primary"></div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Ready to Transform Your Customer Communications?
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Let's discuss how Airdocs can help you deliver exceptional customer
              experiences. Fill out the form below and we'll be in touch shortly.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  What to Expect
                </h3>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-gray-900">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-primary/5 p-6">
                <h4 className="mb-3 font-semibold text-gray-900">
                  Prefer to talk to us directly?
                </h4>
                <p className="mb-4 text-gray-600">
                  Give us a call or send an email:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span>{' '}
                    <a
                      href="tel:+61-2-9999-0000"
                      className="text-primary hover:underline"
                    >
                      +61 2 9999 0000
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{' '}
                    <a
                      href="mailto:sales@airdocs.io"
                      className="text-primary hover:underline"
                    >
                      sales@airdocs.io
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Hours:</span> Mon-Fri, 9am-5pm AEST
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
