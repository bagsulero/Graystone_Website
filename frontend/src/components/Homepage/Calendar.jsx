import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const events = {
    '2025-02-19': [{ title: 'Assessment', description: 'Computer System Servicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, adipisci! Sunt, sit? Voluptatibus, quas voluptates repellat dolore harum iste quos nostrum impedit assumenda earum! Necessitatibus nesciunt dicta provident expedita quasi.' }],
    '2025-02-20': [{ title: 'Assessment', description: 'Event Management Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, adipisci! Sunt, sit? Voluptatibus, quas voluptates repellat dolore harum iste quos nostrum impedit assumenda earum! Necessitatibus nesciunt dicta provident expedita quasi.' }],
    '2025-02-26': [{ title: 'Assessment', description: 'Food and Beverage Services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, adipisci! Sunt, sit? Voluptatibus, quas voluptates repellat dolore harum iste quos nostrum impedit assumenda earum! Necessitatibus nesciunt dicta provident expedita quasi.' }],
  };

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = formatDate(date);
    if (events[formattedDate]) {
      return <div className="bg-amber-700"></div>;
    }
    return null;
  };

  return (
    <div className=''>
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-auto mx-auto py-4 px-8 ">
            <div className="text-center">
                {events[formatDate(date)] ? (
                events[formatDate(date)].map((event, index) => (
                    <div key={index} className="px-4 py-4 pl-16">
                    <h3 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>{event.title}</h3>
                    <p className='mb-6 font-light text-gray-500 md:text-lg '>{event.description}</p>
                    </div>
                ))
                ) : (
                <div className="grid place-items-center min-h-full">
                    <p className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 ">
                      No announcement for this date.
                    </p>
                </div>
                )}
            </div>
            <div className="flex flex-col items-center p-4">
            <Calendar
                onChange={setDate}
                value={date}
                tileContent={tileContent}
                className="border border-gray-300 rounded-lg shadow-md p-2 bg-white"
                tileClassName="hover:bg-blue-200 transition-all rounded-md text-center"
            />
            </div>
            
        </div>
    </div>
  );
};

export default MyCalendar;