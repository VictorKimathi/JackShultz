import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SearchIcon, PenToolIcon, LayersIcon, TargetIcon } from 'lucide-react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import Testimonials from './Testimonials';
const Home = () => {
  // Sample featured projects
  const featuredProjects = [{
    id: 'wanderwise-hidden-gems',
    title: 'U.S. Hidden Gems: Beyond the Tourist Trail',
    category: 'Longform Feature',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "An in-depth exploration of America's lesser-known destinations."
  }, {
    id: 'globepath-island-hopping',
    title: "Island Hopping: Caribbean's Best Kept Secrets",
    category: 'Destination Guide',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'A comprehensive guide to the hidden treasures of Caribbean islands.'
  }, {
    id: 'midwest-road-trips',
    title: 'Midwest Road Trips: Routes Less Traveled',
    category: 'Brand Content',
    image: 'https://images.unsplash.com/photo-1533567555600-7cf53e131d22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: "Branded content showcasing unique road trip itineraries through America's heartland."
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Travel writing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jack Shultz: Confident Travel Content Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Over a decade of transforming destinations into engaging stories
              for digital and print.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as={Link} to="/portfolio" variant="primary" size="large">
                View My Portfolio
              </Button>
              <Button as={Link} to="/contact" variant="outline" size="large" className="bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Professional Summary Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Approach to Travel Copywriting
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm an experienced travel copywriter with over a decade creating
                longform features, destination guides, brand content, and
                service-driven articles. My work combines engaging storytelling
                with strategic SEO to help travel brands connect with their
                audiences.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Skilled in brand voice development and deadline-driven
                collaboration, I deliver content that inspires action while
                maintaining the unique character of each travel brand I work
                with.
              </p>
              <Button as={Link} to="/about" variant="outline">
                Learn More About Me{' '}
                <ArrowRightIcon size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jack Shultz - Travel Copywriter" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Core Skills Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            My Core Skills
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Specialized expertise that helps travel brands create content that
            engages, informs, and converts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Skill 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <SearchIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Travel SEO & Editorial Writing
              </h3>
              <p className="text-gray-600">
                Creating content that ranks well and engages readers with
                strategic keyword integration and compelling narratives.
              </p>
            </div>
            {/* Skill 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <PenToolIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Destination Research & Storytelling
              </h3>
              <p className="text-gray-600">
                Transforming destinations into memorable stories through
                thorough research and firsthand experiences.
              </p>
            </div>
            {/* Skill 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <LayersIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Brand Voice Development
              </h3>
              <p className="text-gray-600">
                Crafting and maintaining consistent, distinctive voices for
                travel brands across all content channels.
              </p>
            </div>
            {/* Skill 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#FF6900] bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <TargetIcon size={24} className="text-[#FF6900]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Content Strategy
              </h3>
              <p className="text-gray-600">
                Developing comprehensive content plans that align with business
                goals and audience needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Travel Features & Brand Content
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            A selection of my recent work for leading travel publications and
            brands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => <ProjectCard key={project.id} {...project} />)}
          </div>
          <div className="mt-12 text-center">
            <Button as={Link} to="/portfolio" variant="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </section> */}
      <Testimonials />
      {/* Call to Action Section */}
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
export default Home;