import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="p-20">
      <div className="flex flex-row items-center mb-5">
          <h1 className="font-bold text-2xl">SKILL SET</h1>
          <div className="flex-grow h-px bg-gray-400 ml-4"></div>
      </div>
      
      <h1 className="text-xl m-5">Programming</h1>
      <div className="flex flex-row ml-5 flex-wrap gap-2">
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Python
        </div>
        <div className=" rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Java
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        C
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        HTML/CSS
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Javascript
        </div>
      </div>

      <h1 className="text-xl m-5 mt-10">Technologies and Frameworks</h1>
      <div className="flex flex-row ml-5 flex-wrap gap-2">
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        React
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        TailwindCSS
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        MongoDB
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Node.js
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Git
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        VS Code
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Microsoft Office/Excel
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Linux
        </div>
      </div>

    <h1 className="text-xl m-5 mt-10">Design</h1>
      <div className="flex flex-row ml-5 flex-wrap gap-2">
          <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
          Adobe Photoshop
          </div>
          <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
          Adobe Illustrator
          </div>
          <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
          Adobe Premier
          </div>
      </div>

    <h1 className="text-xl mt-10 m-5">Relevant Coursework</h1>
      <div className="flex flex-row ml-5 flex-wrap gap-2">
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Data Structures & Algorithms
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Computer Architecture
        </div>
        <div className="rounded-lg border-2 border-gray-400 text-gray-300 bg-transparent hover:bg-gray-200 hover:bg-opacity-25 transition-colors duration-300 p-2">
        Object-Oriented Programming
        </div>
      </div>
      

    </div>
  );
};

export default Skills;
