import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "imahe2.png",
      title: "Excellence in Education",
      subtitle: "Empowering students with quality learning programs",
      overlay: "bg-gradient-to-r from-blue-900/80 to-red-900/80"
    },
    {
      image: "imahe1.png", 
      title: "Professional Development",
      subtitle: "Building careers through comprehensive training",
      overlay: "bg-gradient-to-r from-red-900/80 to-purple-900/80"
    },
    {
      image: "imahe3.png",
      title: "Innovative Learning",
      subtitle: "Modern approaches to traditional education",
      overlay: "bg-gradient-to-r from-purple-900/80 to-blue-900/80"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={5000}
        transitionTime={800}
        className="w-full max-w-auto mx-auto"
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        renderArrowPrev={(clickHandler, hasPrev) => (
          hasPrev && (
            <button
              onClick={clickHandler}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          hasNext && (
            <button
              onClick={clickHandler}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        )}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative group h-[70vh] md:h-[80vh] lg:h-[90vh]">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover w-full h-full transition-transform duration-[8000ms] group-hover:scale-105" 
            />
            
            {/* Dynamic Gradient Overlay */}
            <div className={`absolute inset-0 ${slide.overlay} transition-opacity duration-1000`} />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transform transition-all duration-1000 ${
                    currentSlide === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: currentSlide === index ? '300ms' : '0ms' }}
                >
                  {slide.title}
                </h1>
                <p 
                  className={`text-xl md:text-2xl lg:text-3xl mb-8 transform transition-all duration-1000 ${
                    currentSlide === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: currentSlide === index ? '600ms' : '0ms' }}
                >
                  {slide.subtitle}
                </p>
                <div 
                  className={`transform transition-all duration-1000 ${
                    currentSlide === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: currentSlide === index ? '900ms' : '0ms' }}
                >
                  <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;