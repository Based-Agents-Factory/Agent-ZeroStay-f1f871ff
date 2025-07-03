import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover</a></li>
              <li><a href="#" className="hover:text-gray-900">Safety information</a></li>
              <li><a href="#" className="hover:text-gray-900">Supporting people with disabilities</a></li>
              <li><a href="#" className="hover:text-gray-900">Cancellation options</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Airbnb.org: disaster relief housing</a></li>
              <li><a href="#" className="hover:text-gray-900">Combating discrimination</a></li>
              <li><a href="#" className="hover:text-gray-900">Supporting people with disabilities</a></li>
              <li><a href="#" className="hover:text-gray-900">Combating discrimination</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-gray-900">Hosting resources</a></li>
              <li><a href="#" className="hover:text-gray-900">Community forum</a></li>
              <li><a href="#" className="hover:text-gray-900">Hosting responsibly</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-900">New features</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Investors</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift cards</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>© 2024 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900">Sitemap</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
              <span>$ USD</span>
            </button>

            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}