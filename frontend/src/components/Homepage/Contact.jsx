import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedStates, setCopiedStates] = useState({});
  const sectionRef = useRef(null);

  const contactDetails = [
    {
        icon: <FaMapMarkerAlt className="text-3xl text-red-600" />,
        title: "Address",
        value: "3rd Floor Maradel Bldg., AB Fernande Avenue, Brgy. Pantal, Dagupan City, Pangasinan 2400, Philippines",
        copyable: true,
        bgGradient: "from-red-50 to-red-100",
        hoverShadow: "hover:shadow-red-200/50"
    },
    {
        icon: <FaPhoneAlt className="text-3xl text-blue-600" />,
        title: "Phone",
        value: (
            <div className="space-y-1">
                <div className="font-medium">(075) 636-6766</div>
                <div className="text-sm">0948-621-6291</div>
                <div className="text-sm">0925-855-2508</div>
            </div>
        ),
        copyable: true,
        copyValue: "(075) 636-6766, 0948-621-6291, 0925-855-2508",
        bgGradient: "from-blue-50 to-blue-100",
        hoverShadow: "hover:shadow-blue-200/50"
    },
    {
        icon: <FaEnvelope className="text-3xl text-green-600" />,
        title: "Email",
        value: "graystoneinstitute@gmail.com",
        copyable: true,
        bgGradient: "from-green-50 to-green-100",
        hoverShadow: "hover:shadow-green-200/50"
    },
    {
        icon: <FaFacebookF className="text-3xl text-indigo-600" />,
        title: "Facebook",
        value: (
            <a
                href="https://www.facebook.com/graystoneofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300 hover:underline"
            >
                graystoneofficial
            </a>
        ),
        copyable: false,
        bgGradient: "from-indigo-50 to-indigo-100",
        hoverShadow: "hover:shadow-indigo-200/50"
    },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [index]: false }));
      }, 2000);
    } catch (err) {
      console.log('Failed to copy text');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4" ref={sectionRef}>
      <div className={`text-center mb-12 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full mb-6">
          <FaEnvelope className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700 font-semibold">Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to start your educational journey? We're here to help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((item, index) => (
          <div
            key={item.title}
            className={`group relative bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 text-center shadow-lg ${item.hoverShadow} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onClick={() => item.copyable && copyToClipboard(item.copyValue || (typeof item.value === 'string' ? item.value : ''), index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="transform group-hover:scale-110 transition-transform duration-300 mb-4">
                {item.icon}
              </div>
              
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                {item.title}
              </h3>
              
              <div className="text-gray-700 text-sm leading-relaxed mb-4">
                {item.value}
              </div>

              {item.copyable && (
                <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {copiedStates[index] ? (
                    <div className="flex items-center text-green-600 text-sm font-semibold">
                      <FaCheck className="w-4 h-4 mr-1" />
                      Copied!
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <FaCopy className="w-3 h-3 mr-1" />
                      Click to copy
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-2 right-2 w-12 h-12 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className={`mt-12 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '600ms' }}>
        <div className="inline-flex flex-wrap gap-4 justify-center">
          <a
            href="tel:(075)636-6766"
            className="group bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/25"
          >
            <FaPhoneAlt className="inline w-4 h-4 mr-2 group-hover:animate-pulse" />
            Call Now
          </a>
          <a
            href="mailto:graystoneinstitute@gmail.com"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25"
          >
            <FaEnvelope className="inline w-4 h-4 mr-2 group-hover:animate-bounce" />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;