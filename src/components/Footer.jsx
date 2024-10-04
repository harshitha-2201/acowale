import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6">Innovating the Future</h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Our Locations</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Acozap</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Acodash</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cloud</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Web Development</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Servers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Newsroom</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Customer Stories</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t border-gray-600 pt-4">
          <p>© 2024 Acowale Technologies Private Limited</p>
          <div className="mt-2">
            <a href="#" className="hover:underline mr-4">Refund Policy</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
