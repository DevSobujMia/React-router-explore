import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className='ml-10'>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">Subscribe to our newsletter to receive updates and exclusive offers.</p>
            <form>
              <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 focus:outline-none focus:border-white rounded py-2 px-3 mb-2 block w-full"/>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Subscribe</button>
            </form>
          </div>
          <div className="md:col-span-2 lg:col-span-1 ml-24">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi ut quam sagittis vehicula.</p>
          </div>
          <div className="md:col-span-2 lg:col-span-1 ml-24">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 YourWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
