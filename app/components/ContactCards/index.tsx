import React from 'react';
import { FiHeadphones, FiPhone } from 'react-icons/fi';

export default function ContactCards() {
  return (
    <div className="flex justify-center   bg-gray-50 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Support Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FiHeadphones className="text-blue-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <p className="text-gray-600 mb-4 text-center">Contact our fast support team</p>
          <a href="mailto:bluebsupport@mail.com" className="text-blue-600 font-medium">
            bluebsupport@mail.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FiPhone className="text-blue-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Phone</h3>
          <p className="text-gray-600 mb-4 text-center">Mon–Fri from 9am to 6pm.</p>
          <a href="tel:+19387407555" className="text-blue-600 font-medium">
            +1-938-740-7555
          </a>
        </div>
      </div>
    </div>
  );
}
