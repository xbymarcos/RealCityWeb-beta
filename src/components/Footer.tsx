import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RealCity Dev</span>
            </div>
            <p className="mt-4 text-gray-600">
              Professional FiveM development services specializing in custom scripts and QBCore servers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} RealCity Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}