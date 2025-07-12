
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Blog Layout",
      description: "A fast, responsive blog site made with Elementor featuring clean typography and modern design principles.",
      image: "photo-1461749280684-dccba630e2f6",
      tags: ["WordPress", "Elementor", "Blog", "Responsive"],
      category: "Blog Design"
    },
    {
      id: 2,
      title: "Online Store for Local Business",
      description: "Full WooCommerce integration with custom product pages, payment gateways, and inventory management.",
      image: "photo-1560472354-b33ff0c44a43",
      tags: ["WordPress", "WooCommerce", "eCommerce", "Payment Integration"],
      category: "eCommerce"
    },
    {
      id: 3,
      title: "Clean Portfolio Website",
      description: "Elegant personal branding design with portfolio showcase, contact forms, and smooth animations.",
      image: "photo-1507003211169-0a1dd7228f2d",
      tags: ["WordPress", "Portfolio", "Personal Branding", "Animation"],
      category: "Portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sea-green-50 to-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="italic">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent WordPress projects, featuring blogs, eCommerce stores, and portfolio websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-sea-green-100 to-sea-green-200 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-sea-green-100 text-sea-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-sea-green-500 hover:bg-sea-green-600 flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Like what you see?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing for your business or personal brand.
            </p>
            <Button asChild className="bg-sea-green-500 hover:bg-sea-green-600">
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
