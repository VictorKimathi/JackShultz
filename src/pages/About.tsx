import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, GlobeIcon, ClockIcon } from 'lucide-react';
import Button from '../components/Button';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Jack Shultz: A Decade of Travel Storytelling
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Experienced travel copywriter with a passion for creating compelling
            narratives that inspire wanderlust and drive action.
          </p>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jack Shultz - Travel Copywriter" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Professional Journey
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over a decade of experience in travel copywriting, I've had
                the privilege of crafting compelling narratives for leading
                travel brands, publications, and destinations worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey began at Midwest Journeys Quarterly, where I
                developed my skills in regional travel writing. From there, I
                moved to GlobePath Digital Media, expanding my expertise to
                include digital content strategy and SEO-optimized travel
                guides. Most recently, at Wanderwise Magazine, I've specialized
                in longform features that blend storytelling with practical
                travel advice.
              </p>
              <p className="text-lg text-gray-700">
                Throughout my career, I've maintained a commitment to authentic
                storytelling, meticulous research, and content that serves both
                readers and clients alike. My work combines creative flair with
                strategic thinking to deliver travel content that inspires
                action.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Career Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Career Highlights
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {/* Item 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6900]"></div>
                  <span className="text-sm font-semibold text-[#FF6900] block mb-2">
                    2018 - Present
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Senior Travel Writer
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">
                    Wanderwise Magazine
                  </h4>
                  <p className="text-gray-600">
                    Lead writer for longform features, destination guides, and
                    travel trend analysis. Developed the magazine's SEO
                    strategy, resulting in a 45% increase in organic traffic.
                  </p>
                </div>
                <div className="md:pl-12">
                  <img src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Wanderwise Magazine" className="rounded-lg shadow-md" />
                </div>
              </div>
              {/* Item 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center mt-12">
                <div className="md:pl-12 order-2 md:order-1">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="GlobePath Digital Media" className="rounded-lg shadow-md" />
                </div>
                <div className="mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6900]"></div>
                  <span className="text-sm font-semibold text-[#FF6900] block mb-2">
                    2014 - 2018
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Content Strategist & Travel Writer
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">
                    GlobePath Digital Media
                  </h4>
                  <p className="text-gray-600">
                    Developed comprehensive content strategies for travel
                    clients. Created SEO-optimized destination guides, brand
                    content, and marketing materials for hotels, tour operators,
                    and tourism boards.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center mt-12">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6900]"></div>
                  <span className="text-sm font-semibold text-[#FF6900] block mb-2">
                    2010 - 2014
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Regional Travel Writer
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">
                    Midwest Journeys Quarterly
                  </h4>
                  <p className="text-gray-600">
                    Wrote regional travel features focusing on Midwest
                    destinations. Conducted interviews, researched locations,
                    and developed a distinctive voice for the publication's
                    regional content.
                  </p>
                </div>
                <div className="md:pl-12">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Midwest Journeys Quarterly" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy/Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            My Professional Values
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            The core principles that guide my approach to travel copywriting and
            content creation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpenIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authenticity in Storytelling
              </h3>
              <p className="text-gray-600">
                I believe in creating content that reflects the true essence of
                a destination or experience, avoiding clichés and superficial
                descriptions in favor of genuine insights and observations.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <GlobeIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                I combine creative writing with strategic thinking, using
                research, SEO best practices, and audience analytics to create
                content that not only engages but also performs measurably well.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <ClockIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reliability & Excellence
              </h3>
              <p className="text-gray-600">
                I pride myself on delivering high-quality content on time, every
                time. My clients can count on me for meticulous research,
                polished writing, and a collaborative approach to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Jack has a remarkable ability to capture the essence of a
                destination. His writing is not only engaging but also
                strategically crafted to perform well in search. Our organic
                traffic increased by 35% after implementing his content
                strategy."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">
                  Digital Content Manager, GlobePath Digital Media
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Working with Jack has been a game-changer for our magazine. His
                features consistently rank among our most-read articles, and he
                has an uncanny ability to deliver exactly what our readers want.
                Always on deadline, always exceptional quality."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-gray-600 text-sm">
                  Editor-in-Chief, Wanderwise Magazine
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-[#FF6900]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Jack developed our brand voice from the ground up. His ability
                to understand our values and translate them into compelling copy
                has been instrumental in establishing our identity in the
                competitive travel market."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Emma Rodriguez</h4>
                <p className="text-gray-600 text-sm">
                  Marketing Director, Adventure Seekers Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's create travel content that inspires your audience and drives
            results for your brand.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="large">
            Contact Me
          </Button>
        </div>
      </section>
    </div>;
};
export default About;