import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, LayoutIcon, SearchIcon, PenToolIcon, MailIcon, NewspaperIcon } from 'lucide-react';
import Button from '../components/Button';
const Services = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Expertise: Content Solutions for Travel Brands
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Specialized writing services tailored to the unique needs of travel
            brands, destinations, and publications.
          </p>
        </div>
      </section>
      {/* Services Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <BookOpenIcon size={24} className="text-[#FF6900]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Longform Content & Features
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                In-depth articles and features that engage readers and establish
                your brand as an authority in the travel space. I specialize in
                crafting narratives that combine personal experience, expert
                insights, and practical information.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Destination deep-dives and city guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>
                    Thematic travel features (food, adventure, culture)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Travel trend analysis and expert commentary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>
                    Personal travel narratives and experiential content
                  </span>
                </li>
              </ul>
              <Link to="/portfolio?category=longform" className="text-[#FF6900] font-medium hover:underline inline-flex items-center">
                View Related Portfolio Pieces
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Longform Content Writing" className="rounded-lg shadow-lg" />
            </div>
          </div>
          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Brand & Marketing Copywriting" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <LayoutIcon size={24} className="text-[#FF6900]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Brand & Marketing Copywriting
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Compelling copy that captures your brand's unique voice and
                inspires travelers to choose your destination, product, or
                service. I focus on creating content that converts while
                maintaining authenticity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Website copy and landing pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Brochure and print collateral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Social media content and ad copy</span>
                </li>
              </ul>
              <Link to="/portfolio?category=brand" className="text-[#FF6900] font-medium hover:underline inline-flex items-center">
                View Related Portfolio Pieces
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <SearchIcon size={24} className="text-[#FF6900]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  SEO & Digital Content Strategy
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Strategic content that ranks well and drives organic traffic
                while engaging your audience. I blend SEO best practices with
                compelling storytelling to create content that performs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>SEO-optimized destination guides and articles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Content strategy development and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Blog content and editorial calendars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6900] mr-2">•</span>
                  <span>Content optimization and refreshes</span>
                </li>
              </ul>
              <Link to="/portfolio?category=destination" className="text-[#FF6900] font-medium hover:underline inline-flex items-center">
                View Related Portfolio Pieces
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SEO & Digital Content Strategy" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Travel Content?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create engaging travel content that resonates
            with your audience and drives results.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="large">
            Let's Discuss Your Project
          </Button>
        </div>
      </section>
    </div>;
};
export default Services;