import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Announcement = () => {
    return(
        <div >
            <div className='bg-gray-100 w-full max-w-auto mx-auto py-4 px-8 text-center'>
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">Announcement</h2>
                <p className="font-light text-gray-500 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, adipisci! Sunt, sit? Voluptatibus, quas voluptates repellat dolore harum iste quos nostrum impedit assumenda earum! Necessitatibus nesciunt dicta provident expedita quasi.</p>
            </div>
        </div>
    );
};

export default Announcement;


