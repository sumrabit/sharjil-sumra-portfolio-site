
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-playfair font-bold text-2xl mb-2">Sharjil Sumra</h3>
            <p className="text-gray-400">WordPress Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://wa.me/923027385128"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sea-green-400 transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Sharjil Sumra. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-playfair italic">
              Designed & Developed by Sharjil Sumra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
