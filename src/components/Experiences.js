import React from 'react';

const Experiences = () => {
  return (
    <div id="experiences" className="p-20 relative">
      <div className="flex flex-row items-center mb-5">
        <h1 className="font-bold text-2xl">EXPERIENCES</h1>
        <div className="flex-grow h-px bg-gray-400 ml-4"></div>
      </div>
      <div className="relative flex items-start p-6">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-400"></div>
        {/* Gray bar spanning the full width */}
        <div className="absolute inset-0 bg-gray-800 opacity-25"></div>
        <div className="relative ml-6">
          <h2 className="text-xl mb-1 font-bold">Easy Media Canada</h2>
          <h3 className="text-base mb-2 font-bold text-gray-300">Marketing Associate, Jun. 2022 - Aug. 2022</h3>
          <p>
            • Managed data from web scraping, performed search engine optimization for websites. <br />
            • Utilized graphics design and web design skills to create marketing materials and website layouts. <br />
            • Worked with colleagues to plan and direct several in-person events with 100+ attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
