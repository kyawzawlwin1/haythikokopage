import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-28 px-6 sm:px-12 lg:px-20 bg-[#FFFBF1] font-serif">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    
    {/* Left & Center: Services Grid (Takes 2 columns on large screens) */}
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Service 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F3EFE6] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Architectural Design</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Crafting innovative and sustainable designs for residential, commercial, and structural spaces that bring vision to life.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F3EFE6] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Interior Design & Space Planning</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Elevating indoor environments through thoughtful space utilization, bespoke layouts, and contemporary aesthetic elements.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F3EFE6] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3D Visualization & Rendering</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Transforming conceptual blueprints into high-quality, realistic 3D renderings to showcase the final masterpiece beforehand.
          </p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F3EFE6] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Urban Planning & Landscape</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Designing sustainable urban environments and landscapes that harmoniously integrate structures with their natural surroundings.
          </p>
        </div>
      </div>

    </div>

    {/* Right Side: Customer Goal / Description (Takes 1 column on large screens) */}
    <div className="bg-[#FAF6ED] p-8 rounded-2xl border border-[#F3EFE6] shadow-sm lg:sticky lg:top-32">
      <h3 className="text-xs uppercase tracking-widest text-[#6F756B] font-semibold mb-3">My Approach</h3>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">How I want to help customers</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        My goal is to help customers bring their vision to life through powerful and meaningful architectural design. I believe every client deserves a space that reflects their personality, lifestyle, and ambition. I work closely with customers to create modern, intense, and functional designs that not only look impressive but also feel inspiring and comfortable. Customer satisfaction, creativity, and attention to detail are at the center of every project I create.
      </p>
    </div>

  </div>
</div>
  );
};

export default ServicesPage;
