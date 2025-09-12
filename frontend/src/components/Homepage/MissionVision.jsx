import React, { useEffect, useRef, useState } from 'react';

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState({ mission: false, vision: false });
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observers = [];
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px',
    };

    if (missionRef.current) {
      const missionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, mission: true }));
        }
      }, observerOptions);
      
      missionObserver.observe(missionRef.current);
      observers.push(missionObserver);
    }

    if (visionRef.current) {
      const visionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, vision: true }));
        }
      }, observerOptions);
      
      visionObserver.observe(visionRef.current);
      observers.push(visionObserver);
    }

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className='w-full max-w-auto mx-auto py-8 px-8'>
      {/* Mission Section */}
      <section 
        ref={missionRef}
        className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 rounded-3xl mb-16 overflow-hidden shadow-xl"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-red-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-12">
          <div className={`mt-4 md:mt-0 transform transition-all duration-1000 ${
            isVisible.mission 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-8 opacity-0'
          }`}>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700 font-semibold">Our Mission</span>
              </div>
              <h2 className="mb-6 text-5xl md:text-6xl tracking-tight font-bold text-gray-900 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Mission
              </h2>
            </div>
            <p className="mb-8 text-xl text-gray-700 leading-relaxed">
              We provide quality needs-based learning programs that are geared towards helping students achieve their 
              <span className="font-semibold text-red-600"> professional and career goals</span>.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-500 font-medium">Excellence in Education</span>
            </div>
          </div>
          
          <div className={`relative group transform transition-all duration-1000 ${
            isVisible.mission 
              ? 'translate-x-0 opacity-100 scale-100' 
              : 'translate-x-8 opacity-0 scale-95'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" 
                src="imahe4.png" 
                alt="Mission - Quality Education"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        ref={visionRef}
        className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-red-200/30 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-red-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-12">
          <div className={`relative group transform transition-all duration-1000 ${
            isVisible.vision 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-8 opacity-0 scale-95'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" 
                src="imahe5.png" 
                alt="Vision - Leadership in Training"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          
          <div className={`mt-4 md:mt-0 transform transition-all duration-1000 ${
            isVisible.vision 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-700 font-semibold">Our Vision</span>
              </div>
              <h2 className="mb-6 text-5xl md:text-6xl tracking-tight font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Vision
              </h2>
            </div>
            <p className="mb-8 text-xl text-gray-700 leading-relaxed">
              Graystone Institute of the Philippines (Training & Assessment Center), Inc. envisions to have 
              <span className="font-semibold text-blue-600"> acclaimed students</span> and to be a 
              <span className="font-semibold text-red-600"> leader and management training provider</span>.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
              <span className="text-sm text-gray-500 font-medium">Leadership in Training</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;