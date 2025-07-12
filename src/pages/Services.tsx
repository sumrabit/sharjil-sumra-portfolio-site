
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code2, Palette, ShoppingCart, User, Zap, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "WordPress Web Design",
      description: "Custom WordPress websites built from scratch with modern design principles and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Themes"],
      price: "Starting from $500"
    },
    {
      icon: User,
      title: "Blog or Portfolio Setup",
      description: "Professional blog and portfolio websites to showcase your work and share your expertise.",
      features: ["Content Management", "Social Integration", "Comment System", "Newsletter Setup"],
      price: "Starting from $300"
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Website Setup",
      description: "Complete WooCommerce stores with payment gateways, inventory management, and order tracking.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Mobile Optimized"],
      price: "Starting from $800"
    },
    {
      icon: Palette,
      title: "Elementor Customization",
      description: "Advanced Elementor page builder customizations to create unique, pixel-perfect designs.",
      features: ["Custom Widgets", "Advanced Layouts", "Animation Effects", "Mobile Responsive"],
      price: "Starting from $200"
    }
  ];

  const additionalServices = [
    { icon: Zap, service: "Website Speed Optimization", description: "Improve your site's loading time" },
    { icon: HeadphonesIcon, service: "Ongoing Maintenance", description: "Keep your website updated and secure" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sea-green-50 to-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="italic">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional WordPress development services to bring your digital vision to life.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-sea-green-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sea-green-600 font-semibold">{service.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-sea-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-sea-green-500 hover:bg-sea-green-600">
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((item) => (
                <div key={item.service} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-sea-green-50 transition-colors">
                  <div className="w-10 h-10 bg-sea-green-100 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-sea-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.service}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="text-center animate-fade-in">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-12">
              My <span className="italic">Process</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "We discuss your needs and goals" },
                { step: "2", title: "Planning", desc: "I create a detailed project plan" },
                { step: "3", title: "Development", desc: "Building your website with care" },
                { step: "4", title: "Launch", desc: "Going live and ongoing support" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-sea-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
