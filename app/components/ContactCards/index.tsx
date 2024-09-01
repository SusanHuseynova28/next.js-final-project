import React from "react";
import { FiHeadphones, FiPhone } from "react-icons/fi";

export default function ContactCards() {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 w-[480px] shadow-md flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FiHeadphones className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <p className="text-gray-600 mb-4 text-center text-xs">
            Contact our fast support team
          </p>
          <a
            href="mailto:bluebsupport@mail.com"
            className="text-blue-600 font-medium text-xs"
          >
            bluebsupport@mail.com
          </a>
        </div>

        <div className="bg-white p-8 w-[480px] shadow-md flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FiPhone className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Phone</h3>
          <p className="text-gray-600 mb-4 text-center text-xs">
            Mon–Fri from 9am to 6pm.
          </p>
          <a
            href="tel:+19387407555"
            className="text-blue-600 font-medium text-xs"
          >
            +1-938-740-7555
          </a>
        </div>
      </div>
    </div>
  );
}
