import React, { useEffect, useRef, useState } from 'react';

const Programs = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px',
    };

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        }, observerOptions);
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
         <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto" ref={el => sectionRefs.current[0] = el}>
    <div className={`text-center mb-12 transform transition-all duration-1000 ${
      isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full mb-6">
        <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
        <span className="text-red-700 font-bold text-lg">Academic Excellence</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
        Programs Offered
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Explore our diploma programs designed to lead you to a brighter future.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Program 1 */}
      <div className={`group bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 ${
        isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`} style={{ transitionDelay: '300ms' }}>
        <div className="relative overflow-hidden">
          <img
            className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
            src="imahe6.png"
            alt="Hospitality Management"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              3 Years
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
            THREE-YEAR DIPLOMA IN HOSPITALITY MANAGEMENT TECHNOLOGY
          </h3>
          <p className="text-gray-600 text-lg mb-4">(Leading to BS HOSPITALITY MANAGEMENT)</p>
          <div className="flex items-center justify-between">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300"></div>
            <button className="text-red-600 font-semibold hover:text-red-700 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
      {/* Program 2 */}
      <div className={`group bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 ${
        isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`} style={{ transitionDelay: '500ms' }}>
        <div className="relative overflow-hidden">
          <img
            className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
            src="imahe7.png"
            alt="Information Technology"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              3 Years
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            THREE-YEAR DIPLOMA IN INFORMATION TECHNOLOGY
          </h3>
          <p className="text-gray-600 text-lg mb-4">(Leading to BS INFORMATION TECHNOLOGY)</p>
          <div className="flex items-center justify-between">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300"></div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Image Gallery */}
    <div className={`mt-16 transform transition-all duration-1000 ${
      isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`} style={{ transitionDelay: '700ms' }}>
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Campus Life</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <img
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            src="imahe8.png"
            alt="Gallery Image 1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <img
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            src="imahe9.png"
            alt="Gallery Image 2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <img
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            src="imahe10.png"
            alt="Gallery Image 3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</div>

<div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Short Courses</h2>
      <p className="text-lg text-gray-700">
        Enhance your skills with our short courses designed for career advancement.
      </p>
    </div>

    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Dagupan City, Pangasinan</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Course 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bookkeeping NCII</h3>
        <p className="text-gray-600">409 hours</p>
        <p className="text-gray-500 text-sm">CTPR20170155SOCBKP307046</p>
      </div>
      {/* Course 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Food and Beverage Services NCII</h3>
        <p className="text-gray-600">499 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO.20170155TRSFBS213047</p>
      </div>
      {/* Course 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Food Processing NCII</h3>
        <p className="text-gray-600">773 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20190155PFBFOP215017</p>
      </div>
      {/* Course 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Events Management Services NCIII</h3>
        <p className="text-gray-600">152 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO.20170155TRSEVM307045</p>
      </div>
      {/* Course 5 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Housekeeping NCII</h3>
        <p className="text-gray-600">436 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20240155TRSHSK213025</p>
      </div>
      {/* Course 6 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Housekeeping NCIII</h3>
        <p className="text-gray-600">106 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20170155TRSHSK308049</p>
      </div>
      {/* Course 7 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Visual Graphics Design NCIII</h3>
        <p className="text-gray-600">682 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20170155ICTVGD307050</p>
      </div>
    </div>

    {/* Senior High School Programs */}
    <div className='mt-5'>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Senior High School Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Academic Track */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Academic Track</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accountancy, Business and Management (ABM)</li>
            <li>Humanities and Social Sciences (HUMSS)</li>
          </ul>
        </div>
        {/* Tech-Voc Track */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Tech-Voc Track</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Information and Communication Technology (ICT)</li>
            <li>Home Economics (HE)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">San Jacinto, Pangasinan</h2>
    </div>

    {/* Agroentrepreneurship and Agriculture Programs */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Agriculture and Agroentrepreneurship Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Program 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Agroentrepreneurship NCII</h4>
          <p className="text-gray-600">239 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 20240155AFFAGE217036</p>
        </div>
        {/* Program 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Organic Agriculture Production NCII</h4>
          <p className="text-gray-600">232 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 20210155AFFOAP212012</p>
        </div>
        {/* Program 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Pest and Nutrient Management</h4>
          <p className="text-gray-600">40 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 202201550008</p>
        </div>
        {/* Program 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Production of High-Quality Inbreed Rice, Seed Certification, and Farm Mechanization
          </h4>
          <p className="text-gray-600">96 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 202101550013</p>
        </div>
      </div>
    </div>

    
  </section>
</div>
</div>
<hr/>
<div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-lg mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Apply for Scholarships</h2>
      <p className="text-lg text-gray-700">
        UAQTEA - Libreng edukasyon ang hatid ng Republic Act 10931 o Universal Access to Quality Tertiary Education Act.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Kasama rito ang libreng competency assessment at allowance.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Eligible Requirements</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li>Be a candidate for Senior High School graduation.</li>
        <li>Have no grade lower than 84% with a general average of 84% throughout High School.</li>
        <li>Active involvement in extracurricular and/or community activities.</li>
        <li>In good moral standing with no disciplinary action throughout high school.</li>
      </ul>
    </div>
  </section>

  
</div>



    </div>
  );
};

export default Programs;