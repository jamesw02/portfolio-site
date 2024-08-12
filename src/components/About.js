import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import photo from '../assets/rock.png';

const About = () => {
  return (
    <div id="about" className="p-20">
      <h1 className="mb-2 text-xl text-gray-400">Hi, I'm</h1>
      <h2 className="mb-2 text-6xl"><span className="bg-gray-800 font-bold">James Wang</span></h2>
      <h3 className="mb-2 text-3xl">
        I study Computer Science at <a href="https://www.queensu.ca" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-gray-300">Queen's University</a>, Kingston.
      </h3>
      <p className="mb-2 text-xl text-gray-400">Welcome to my personal website!</p>
      <div className="flex">
        <a
          href="../assets/James_Wang_Resume_Aug11.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 flex items-center h-12 bg-white border-white bg-opacity-15 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Resume / CV
        </a>
        <a
          href="https://www.linkedin.com/in/james-wang-14964b319/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 flex items-center h-12 bg-white border-white bg-opacity-15 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/jamesw02"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 flex items-center h-12 bg-white border-white bg-opacity-15 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <div className="mt-32">
        <div className="flex flex-row items-center">
          <h1 className="font-bold text-2xl">ABOUT ME</h1>
          <div className="flex-grow h-px bg-gray-400 ml-4"></div>
        </div>
        <div className="relative flex flex-col md:flex-row mt-4">
          <div className="flex-1">
            <p className="text-gray-300">
              Hi there. My name is James and I'm a student at Queen's University. I decided to study Computer Science because I found the idea of being able to make anything I desire digitally to be very appealing.
              <br /> <br />
              My strong points are effective communication and collaboration in a team, I will not hesitate to ask for clarifications and to follow instructions to a tee. I admittedly don't have a lot of practical experience, but I'm always eager to learn and pick up new technologies and skills if it means getting the job done.
              
              <br /> <br />
              Here is a photo of me making a wooden box, you can scroll down to learn about my skills and work experiences. In my free time, I like to chase frogs at night.
            </p>
          </div>
          <div className="relative flex-shrink-0 mt-4 md:mt-0 md:ml-4">
            <div className="absolute inset-0 transform -translate-x-2 -translate-y-2 bg-gray-800 border-2 border-white rounded-lg"></div>
            <img src={photo} alt="Me" className="saturate-60 w-full h-auto max-w-xs rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-2 hover:translate-x-2 hover:scale-105 hover:filter hover:saturate-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
