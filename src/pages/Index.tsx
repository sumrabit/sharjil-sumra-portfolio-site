
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, ShoppingCart, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sea-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="italic">Designing</span> for<br />
                Amazing<br />
                People
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
                Hi, I'm Sharjil Sumra — a passionate freelance WordPress developer specializing in blogs, eCommerce, and portfolios.
              </p>
              <p className="text-gray-500 mb-8">
                Crafting user interfaces for over 2 years as WordPress developer
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild className="bg-sea-green-500 hover:bg-sea-green-600">
                  <Link to="/contact">
                    Hire Me! <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* Client testimonial indicator */}
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-sea-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-sea-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-sea-green-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">15+ Happy Clients</span>
              </div>
            </div>

            {/* Right Content - Profile Image with Floating Tags */}
            <div className="lg:w-1/2 relative flex justify-center animate-slide-in-right">
              <div className="relative">
                {/* Main circular profile image */}
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-sea-green-100 to-sea-green-200">
                  <img 
                    src="https://i.postimg.cc/90LSfDFc/Whats-App-Image-2025-07-11-at-6-10-02-PM-removebg-preview-1.png"
                    alt="Sharjil Sumra - WordPress Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating skill tags */}
                <div className="floating-tag top-12 right-8">
                  UI/UX Designer
                </div>
                <div className="floating-tag top-32 -left-8 bg-gradient-to-r from-blue-400 to-blue-500">
                  WordPress Developer
                </div>
                <div className="floating-tag bottom-32 right-12 bg-gradient-to-r from-green-400 to-green-500">
                  Elementor Expert
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-sea-green-200 rounded-full -z-10 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-200 rounded-full -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-12">
            My Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Code2 className="h-12 w-12 text-sea-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900">WordPress</h3>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-sea-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900">Elementor</h3>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <ShoppingCart className="h-12 w-12 text-sea-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900">eCommerce</h3>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <User className="h-12 w-12 text-sea-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900">Portfolios</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling banner */}
      <div className="bg-gray-900 text-white py-4 overflow-hidden">
        <div className="flex animate-pulse space-x-8 text-lg font-medium">
          <span className="flex items-center space-x-2">
            <span>Discover</span>
            <div className="w-1 h-1 bg-sea-green-400 rounded-full"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Design</span>
            <div className="w-1 h-1 bg-sea-green-400 rounded-full"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Develop</span>
            <div className="w-1 h-1 bg-sea-green-400 rounded-full"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Deploy</span>
            <div className="w-1 h-1 bg-sea-green-400 rounded-full"></div>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
