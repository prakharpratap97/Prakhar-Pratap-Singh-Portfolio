import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Prakhar Pratap Singh
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        
        </nav>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/prakharpratap97-5190b9b2/"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/prakharpratap97"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/prakharpratap97/"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
