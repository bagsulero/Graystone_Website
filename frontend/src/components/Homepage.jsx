import React, { useState, useEffect } from 'react';
import MyCarousel from './Homepage/Carousel';
import MissionVision from './Homepage/MissionVision';
import Announcement from './Homepage/Annoucement';
import MyCalendar from './Homepage/Calendar';
import Programs from './Homepage/Programs';
import Contact from './Homepage/Contact';
import Awards from './Homepage/Awards';
import FlipBook from './FlipBook';
import { FaArrowUp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    const [showButton, setShowButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        AOS.init({ 
            duration: 800, 
            once: true,
            // Respect reduced motion preference
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? true : false
        });
        
        // Simulate loading time then show content
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / documentHeight) * 100;
            
            setShowButton(scrollTop > 300);
            setScrollProgress(progress);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin mx-auto" style={{animationDelay: '-0.5s'}}></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Excellence</h2>
                    <p className="text-gray-600">Preparing your educational journey...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <div data-aos="fade-up">
                <MyCarousel/>
            </div>
            <div data-aos="fade-up">
                <MissionVision/>
            </div>
            <div data-aos="fade-up">
                <Programs/>
            </div>
            <div data-aos="fade-up">
                <Awards/>
            </div>
            <div data-aos="fade-up">
                <Contact/>
            </div>
            
            {/* Enhanced Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp 
                        size={20} 
                        className="transform group-hover:-translate-y-1 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    
                    {/* Scroll progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                            className="stroke-white/20"
                            strokeWidth="2"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="stroke-white transition-all duration-300"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray={`${scrollProgress}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Homepage;