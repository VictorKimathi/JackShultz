import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'longform', name: 'Longform Features' },
    { id: 'destination', name: 'Destination Guides' },
    { id: 'brand', name: 'Brand Content' },
    { id: 'email', name: 'Email Campaigns' },
    { id: 'print', name: 'Print Brochures' },
    { id: 'regional', name: 'Regional Columns' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 'hidden-micro-islands',
      title: 'Hidden Micro‑Islands You Can Only Reach by Kayak or Dinghy',
      category: 'longform',
      categoryDisplay: 'Longform Feature',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: "Some of the world’s most enchanting islands don’t have airports, ferries, or cruise ports...",
      href: 'Hidden_Micro_Islands.pdf'
    },
    {
      id: 'island-hopping-secrets',
      title: "Island Hopping: Caribbean's Best Kept Secrets",
      category: 'destination',
      categoryDisplay: 'Destination Guide',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: "Sleeping in an overwater tent on a remote island offers a unique kind of escape...",
      href: 'What_It’s_Really_Like.pdf'
    },
    {
      id: 'floating-markets',
      title: "Floating Markets and Water-Based Villages Worth Exploring by Canoe",
      category: 'longform',
      categoryDisplay: 'Longform Feature',
      image: 'https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: "Some of the world’s most fascinating communities exist not on land, but above rivers, lakes, and canals...",
      href: 'Floating_Markets_and_Water.pdf'
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Work: Journeys in Content
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Browse through my portfolio of travel copywriting projects, spanning
            longform features, destination guides, brand content, and more.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="py-4 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#FF6900] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.categoryDisplay}
                  image={project.image}
                  description={project.description}
                  href={project.href}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">
                No projects found
              </h3>
              <p className="text-gray-500 mt-2">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
