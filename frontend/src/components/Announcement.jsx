import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn, FaCalendarAlt, FaClock, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const iconMap = {
  urgent: <FaExclamationTriangle className="text-2xl" />,
  info: <FaInfoCircle className="text-2xl" />,
  success: <FaCheckCircle className="text-2xl" />
};

const Announcements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [apiError, setApiError] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost/api/announcements.php')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setApiError(data.error);
          setAnnouncements([]);
        } else {
          setAnnouncements(data);
          setApiError(null);
        }
      })
      .catch(err => {
        setApiError('Failed to fetch announcements: ' + err.message);
        setAnnouncements([]);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full mb-6">
            <FaBullhorn className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-700 font-semibold">Latest Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Announcements
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest news, updates, and important information from Graystone Institute of the Philippines.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="space-y-8">
          {apiError ? (
            <div className="text-center text-red-500 text-xl py-12">
              {apiError}
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center text-gray-500 text-xl py-12">
              There is no announcement
            </div>
          ) : (
            announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className={`group relative bg-gradient-to-br ${announcement.bgGradient || 'from-gray-50 to-gray-100'} rounded-2xl border-2 ${announcement.borderColor || 'border-gray-300'} shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon and Type */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                      <div className={`${announcement.iconColor || 'text-gray-600'} transform group-hover:scale-110 transition-transform duration-300`}>
                        {iconMap[announcement.type] || <FaInfoCircle className="text-2xl" />}
                      </div>
                      <span className={`${announcement.iconColor || 'text-gray-600'} text-sm font-bold uppercase tracking-wider`}>
                        {announcement.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {announcement.title}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {announcement.content}
                      </p>

                      {/* Date and Time */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-gray-500" />
                          <span className="font-medium">{formatDate(announcement.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-gray-500" />
                          <span className="font-medium">{announcement.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              </div>
            ))
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
        </div>
      </div>
    </div>
  );
};

export default Announcements;