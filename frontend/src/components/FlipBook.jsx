import HTMLFlipBook from 'react-pageflip';
import React, { useState, useEffect } from 'react';

const FlipBook = () => {
    const [dimensions, setDimensions] = useState({ width: 500, height: 600 });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                // Mobile
                setDimensions({ width: Math.min(300, screenWidth - 40), height: 360 });
            } else if (screenWidth < 768) {
                // Tablet
                setDimensions({ width: 400, height: 480 });
            } else {
                // Desktop
                setDimensions({ width: 500, height: 600 });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className='w-full max-w-auto mx-auto py-4 px-8'>
            <section className="bg-white">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Catalog</h2>
                    <p className="text-lg text-gray-600">Browse through our detailed program information</p>
                </div>
                <div className="flex justify-center">
                    <HTMLFlipBook 
                        width={dimensions.width} 
                        height={dimensions.height}
                        size="stretch"
                        minWidth={250}
                        minHeight={300}
                        maxWidth={600}
                        maxHeight={720}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="shadow-2xl"
                    >
                <div className="demoPage">
                    <img src="" alt="" />
                </div>
                <div className="demoPage">
                    <img src="EMS1.jpg" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 2" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 3" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 4" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 5" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 6" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 7" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 8" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 9" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 9" />
                </div>
            </HTMLFlipBook>
                </div>
            </section>
        </div>
    );
};

export default FlipBook;