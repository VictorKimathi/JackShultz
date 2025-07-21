import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
const Portfolio = () => {
  const categories = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'longform',
    name: 'Longform Features'
  }, {
    id: 'destination',
    name: 'Destination Guides'
  }, {
    id: 'brand',
    name: 'Brand Content'
  }, {
    id: 'email',
    name: 'Email Campaigns'
  }, {
    id: 'print',
    name: 'Print Brochures'
  }, {
    id: 'regional',
    name: 'Regional Columns'
  }];
  const [activeCategory, setActiveCategory] = useState('all');
  // Sample projects data
  const projects = [{
    id: 'wanderwise-hidden-gems',
    title: 'U.S. Hidden Gems: Beyond the Tourist Trail',
    category: 'longform',
    categoryDisplay: 'Longform Feature',
    client: 'Wanderwise Magazine',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "An in-depth exploration of America's lesser-known destinations."
  }, {
    id: 'globepath-island-hopping',
    title: "Island Hopping: Caribbean's Best Kept Secrets",
    category: 'destination',
    categoryDisplay: 'Destination Guide',
    client: 'GlobePath Digital Media',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A comprehensive guide to the hidden treasures of Caribbean islands.'
  }, {
    id: 'midwest-road-trips',
    title: 'Midwest Road Trips: Routes Less Traveled',
    category: 'brand',
    categoryDisplay: 'Brand Content',
    client: 'Midwest Journeys Quarterly',
    image: 'https://images.unsplash.com/photo-1533567555600-7cf53e131d22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "Branded content showcasing unique road trip itineraries through America's heartland."
  }, {
    id: 'wanderwise-national-parks',
    title: "National Parks: America's Greatest Treasures",
    category: 'longform',
    categoryDisplay: 'Longform Feature',
    client: 'Wanderwise Magazine',
    image: 'https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "A deep dive into the history and beauty of America's national parks."
  }, {
    id: 'globepath-europe-train',
    title: 'Europe by Train: The Ultimate Itinerary',
    category: 'destination',
    categoryDisplay: 'Destination Guide',
    client: 'GlobePath Digital Media',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A comprehensive guide to exploring Europe via its extensive rail network.'
  }, {
    id: 'travel-monthly-newsletter',
    title: 'Summer Escapes: Monthly Newsletter Series',
    category: 'email',
    categoryDisplay: 'Email Campaign',
    client: 'Travel Monthly',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A series of email newsletters highlighting summer travel destinations.'
  }, {
    id: 'midwest-fall-foliage',
    title: "Fall Foliage: New England's Colorful Season",
    category: 'print',
    categoryDisplay: 'Print Brochure',
    client: 'Midwest Journeys Quarterly',
    image: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A print brochure showcasing the best spots for viewing fall colors.'
  }, {
    id: 'local-explorer-midwest',
    title: 'Hidden Midwest: Small Town Treasures',
    category: 'regional',
    categoryDisplay: 'Regional Column',
    client: 'Local Explorer Magazine',
    image: 'https://images.unsplash.com/photo-1531761535398-849473552e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A regular column exploring charming small towns across the Midwest.'
  }, {
    id: 'adventure-seekers-guide',
    title: 'Adventure Seekers: Thrill-Seeking Destinations',
    category: 'brand',
    categoryDisplay: 'Brand Content',
    client: 'Adventure Seekers Co.',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "Branded content highlighting the world's top adventure destinations."
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <div className="w-full">
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
              {categories.map(category => <button key={category.id} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-[#FF6900] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category.id)}>
                  {category.name}
                </button>)}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <ProjectCard key={project.id} id={project.id} title={project.title} category={project.categoryDisplay} image={project.image} description={project.description} />)}
          </div>
          {filteredProjects.length === 0 && <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">
                No projects found
              </h3>
              <p className="text-gray-500 mt-2">
                Try selecting a different category
              </p>
            </div>}
        </div>
      </section>
    </div>;
};
export default Portfolio;