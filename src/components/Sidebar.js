import React from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaTools, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-[15%] h-screen bg-gray-700 fixed flex flex-col pt-5 space-y-12 justify-center items-center">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="relative cursor-pointer group"
        activeClass="active"
      >
        <div className="icon-wrapper">
          <FaUser className="text-white transition-transform duration-300 group-hover:transform group-hover:translate-x-2 group-hover:scale-110" />
          <div className="left-line"></div>
        </div>
      </Link>
      <Link
        to="experiences"
        smooth={true}
        duration={500}
        className="relative cursor-pointer group"
        activeClass="active"
      >
        <div className="icon-wrapper">
          <FaBriefcase className="text-white transition-transform duration-300 group-hover:transform group-hover:translate-x-2 group-hover:scale-110" />
          <div className="left-line"></div>
        </div>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="relative cursor-pointer group"
        activeClass="active"
      >
        <div className="icon-wrapper">
          <FaProjectDiagram className="text-white transition-transform duration-300 group-hover:transform group-hover:translate-x-2 group-hover:scale-110" />
          <div className="left-line"></div>
        </div>
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="relative cursor-pointer group"
        activeClass="active"
      >
        <div className="icon-wrapper">
          <FaTools className="text-white transition-transform duration-300 group-hover:transform group-hover:translate-x-2 group-hover:scale-110" />
          <div className="left-line"></div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
