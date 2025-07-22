import React from 'react';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "Jack's ability to capture the essence of a destination is unparalleled. His writing brought our travel guides to life and significantly boosted engagement on our site. A true professional!",
    author: "Sarah Chen",
    title: "Marketing Director, Global Journeys Inc.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    quote: "Working with Jack was a seamless experience. He understood our brand voice instantly and delivered high-quality, SEO-optimized content that exceeded our expectations. Highly recommend!",
    author: "David Lee",
    title: "Content Manager, ExploreAway Travel",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    quote: "The feature article Jack wrote for our magazine was a reader favorite. His vivid descriptions and compelling storytelling transported our audience. We look forward to collaborating again.",
    author: "Maria Rodriguez",
    title: "Editor-in-Chief, Wanderlust Monthly",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: 4,
    quote: "Jack crafted engaging brand content that perfectly showcased our luxury resorts. His understanding of the travel industry and target audience is exceptional.",
    author: "Tom Davies",
    title: "Brand Strategist, Elite Escapes",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 5,
    quote: "From initial brief to final delivery, Jack was a pleasure to work with. The destination guide he produced was not only informative but truly inspiring. Fantastic work!",
    author: "Emily White",
    title: "Product Lead, Adventure Seekers Co.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 6,
    quote: "We needed fresh, engaging content for our blog, and Jack delivered. His articles are well-researched, SEO-friendly, and resonate deeply with our travel community.",
    author: "Chris Johnson",
    title: "Community Manager, Roam & Discover",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
          What My Clients Say 💖
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Hear directly from travel brands and publications who have partnered with me to create impactful content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up"
            >
              <div className="mb-6 flex items-center justify-center md:justify-start">
                <Quote size={40} className="text-[#FF6900] opacity-70" />
              </div>
              <p className="text-lg text-gray-700 italic mb-6 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#FF6900]"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;