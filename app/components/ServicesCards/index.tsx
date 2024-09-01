"use client"
import { useState, useEffect } from 'react';
import useSWR from 'swr';

type Service = {
  id: number;
  icon: string;
  title: string;
  description: string;
  isFree: boolean;
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fetcher function to get data from the API
  const fetcher = (url: string): Promise<Service[]> => fetch(url).then((res) => res.json());

  // Using SWR to fetch data from the db.json file
  const { data } = useSWR<Service[]>('http://localhost:3001/services', fetcher);

  return (
    <section className="p-8 lg:p-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8 lg:gap-20">
          <div className="lg:w-1/2">
            <p className="text-blue-600 uppercase tracking-wide text-xs mb-4">
              What we’re offering
            </p>
            <h2 className="text-xl lg:text-5xl font-semibold text-gray-900 mb-4 lg:w-[40rem]">
              Dealing in all professional IT services.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-600 mt-4 lg:mt-0 lg:w-[35rem]">
              One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-10">
          {data &&
            data.map((service: Service, index: number) => (
              <div
                key={service.id}
                className={`bg-white shadow-md w-full lg:w-[220px] h-auto lg:h-[230px] p-6 transform transition-transform duration-1000 ${
                  isVisible ? `opacity-100 scale-100 delay-${index * 200}` : 'opacity-0 scale-75'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={service.icon} alt={service.title} className="h-8 w-8" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mt-6">{service.title}</h3>
                <p className="text-gray-500 mt-6">{service.description}</p>
                {service.isFree && (
                  <div className="absolute top-4 right-4 text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                    Free!
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
