import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Button from '../components/Button';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect: Your Next Travel Content Project Awaits
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Reach out to discuss your travel content needs, from longform
            features to brand voice development and SEO-optimized destination
            guides.
          </p>
        </div>
      </section>
      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>
              {submitSuccess ? <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p>
                    Thank you for reaching out. I'll respond to your inquiry as
                    soon as possible.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent" placeholder="Project Inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6900] focus:border-transparent" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <div>
                    <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>}
            </div>
            {/* Contact Information */}
            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 mb-8">
                  I'm available for freelance assignments, long-term
                  collaborations, and content strategy consultations. Reach out
                  with your project details, and let's craft compelling stories
                  together.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail size={24} className="mr-4 text-[#FF6900] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a href="mailto:jackshultz967@gmail.com" className="text-gray-700 hover:text-[#FF6900]">
                        jackshultz967@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={24} className="mr-4 text-[#FF6900] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <a href="tel:2254819327" className="text-gray-700 hover:text-[#FF6900]">
                        225-481-9327
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={24} className="mr-4 text-[#FF6900] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Location
                      </h3>
                      <p className="text-gray-700">
                        Hubertus, WI, USA
                        <br />
                        <span className="text-gray-600">
                          (Serving clients globally)
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Linkedin size={24} className="mr-4 text-[#FF6900] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        LinkedIn
                      </h3>
                      <a href="#" className="text-gray-700 hover:text-[#FF6900]">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="mb-4">
                  I respond to all inquiries within 24 hours during business
                  days. Your project is important to me, and I'm committed to
                  providing prompt, professional service.
                </p>
                <p>
                  For urgent matters, please call directly or indicate "Urgent"
                  in your email subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What types of travel content do you specialize in?
              </h3>
              <p className="text-gray-700">
                I specialize in longform features, destination guides, brand
                content, SEO-optimized articles, email campaigns, and print
                materials for travel brands, publications, and tourism boards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How do you typically structure your pricing?
              </h3>
              <p className="text-gray-700">
                I offer project-based pricing for most assignments, with rates
                based on the scope, complexity, and timeline. For ongoing
                collaborations, I also provide monthly retainer options. Contact
                me for a custom quote.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What is your typical turnaround time?
              </h3>
              <p className="text-gray-700">
                Turnaround times vary by project scope. Typically, shorter
                articles (under 1,000 words) take 3-5 business days, while more
                extensive projects like longform features may require 1-2 weeks.
                Rush services are available upon request.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer content strategy services?
              </h3>
              <p className="text-gray-700">
                Yes, I provide comprehensive content strategy services for
                travel brands, including editorial calendar development, SEO
                strategy, content audits, and brand voice guidelines. These can
                be standalone services or part of a larger content creation
                package.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;