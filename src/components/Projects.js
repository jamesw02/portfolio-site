import React from 'react';
import website from '../assets/website.png'; // Adjust the path to your photo
import limbus from '../assets/limbus.jpg'; // Adjust the path to your photo

const Projects = () => {
  return (
    <div id="projects" className="p-20">
      <div className="flex flex-row items-center mb-5">
        <h1 className="font-bold text-2xl">PROJECTS</h1>
        <div className="flex-grow h-px bg-gray-400 ml-4"></div>
      </div>
      <div className="relative flex flex-col md:flex-row items-stretch p-6">
        {/* Photo on the left */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img src={website} alt="Project" className="w-full h-full object-cover max-w-xs rounded-lg shadow-lg" />
        </div>
        {/* Project details on the right */}
        <div className="relative flex-1 bg-gray-800 opacity-100 p-4 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl mb-1 font-bold">Personal Website</h2>
            <p className="text-gray-300 mb-4">
              A webpage built using React and TailwindCSS.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center justify-center bg-white bg-opacity-15 border-white border-2 text-white font-bold py-2 px-4 rounded">
              React
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-15 border-white border-2 text-white font-bold py-2 px-4 rounded">
              TailwindCSS
            </div>
          </div>
          
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row items-stretch p-6">
        {/* Photo on the left */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <img src={limbus} alt="Project" className="w-full h-full object-cover max-w-xs rounded-lg shadow-lg" />
        </div>
        {/* Project details on the right */}
        <div className="relative flex-1 bg-gray-800 opacity-100 p-4 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-xl mb-1 font-bold">Limbus Roster</h2>
            <p className="text-gray-300 mb-4">
              A passion project built using React and TailwindCSS alongside Node.js and MongoDB. It allows users to track their account's progress in a game and share it with others with a link.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center justify-center bg-white bg-opacity-15 border-white border-2 text-white font-bold py-2 px-4 rounded">
              React, TailwindCSS
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-15 border-white border-2 text-white font-bold py-2 px-4 rounded">
              Node.js, Express, MongoDB
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
