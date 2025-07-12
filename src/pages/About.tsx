
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sea-green-50 to-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="italic">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional websites that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/90LSfDFc/Whats-App-Image-2025-07-11-at-6-10-02-PM-removebg-preview-1.png"
                  alt="Sharjil Sumra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <h2 className="font-playfair text-3xl font-bold text-gray-900">
                Hi, I'm Sharjil Sumra
              </h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a 21-year-old freelance WordPress developer from Pakistan with a passion for creating stunning, 
                responsive websites. I learned WordPress development from Roohan Institute, Multan, and have been 
                crafting unique digital experiences ever since.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey began with a curiosity about web design, which quickly evolved into a deep love for 
                WordPress development. I specialize in creating blogs, eCommerce stores, and portfolio websites 
                that not only look great but also provide excellent user experiences.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-sea-green-500" />
                  <span className="text-gray-700">Pakistan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-sea-green-500" />
                  <span className="text-gray-700">21 Years Old</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-sea-green-500" />
                  <span className="text-gray-700">Roohan Institute</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-sea-green-500" />
                  <span className="text-gray-700">15+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8 text-center">
              My Journey
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sea-green-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Started Learning WordPress</h4>
                  <p className="text-gray-600">Enrolled at Roohan Institute, Multan to master WordPress development</p>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sea-green-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">First Freelance Project</h4>
                  <p className="text-gray-600">Completed my first professional WordPress website project</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sea-green-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Growing My Business</h4>
                  <p className="text-gray-600">Now serving clients worldwide with modern WordPress solutions</p>
                  <p className="text-sm text-gray-500">2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
