'use client';
import { useState } from 'react';
import Image from 'next/image';
import { TbWorld } from 'react-icons/tb';
import ZafranPic from '../../public/zafran-pic.jpg';
import SocMed from './component/SocMed';
import ProjectCard from './component/projectCard';
import ExtraCocuCard from './component/ExtraCocuCard';
import Education from './component/Education';
import { FaPenToSquare } from 'react-icons/fa6';

import {
  FaTwitter,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaFolder,
  FaBriefcase,
  FaWrench,
} from 'react-icons/fa';

export default function Home() {
  const [showLogoText, setShowLogoText] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Header with nav links */}
      {/* Custom Navbar - New Implementation */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-600 rounded-full py-2 px-4 shadow-md">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
                title="Home"
              >
                <FaHome />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
                title="Projects"
              >
                <FaFolder />
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
                title="Experience"
              >
                <FaBriefcase />
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
                title="Skills"
              >
                <FaWrench />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-gray-700 transition-all duration-300"
                title="Contact"
              >
                <FaPenToSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Header section with profile info */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Zafran Sakowi</h1>
            <p className="text-lg text-gray-700 mt-1">
              Software Engineer & Entrepreneur
            </p>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <TbWorld className="mr-1" />
              <p>Johor Bahru, Malaysia</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={ZafranPic}
              width={100}
              height={100}
              alt="Zafran"
              className="rounded-full object-cover border-4 border-gray-100 shadow-sm"
            />
          </div>
        </div>

        <div className="p-6">
          {/* Bio section - expanded with more personality */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mb-8">
            <p className="text-gray-900 font-medium mb-4">
              I&apos;m a 21 y/o third-year Software Engineering student at UTM
              with a passion for creating innovative solutions that solve
              real-world problems. I blend technical skills with entrepreneurial
              thinking to build products people love.
            </p>

            {/* Bullet points */}
            <div className="mb-4">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-blue-500 mt-2 rotate-45 transform flex-shrink-0"></span>
                  <span className="text-sm text-gray-700">
                    Creator of &quot;StudySync,&quot; a platform for
                    streamlining academic link management, and
                    &quot;Co-Curricular Activity Management System
                    (CCAMS),&quot; a Laravel-based app optimizing school
                    workflows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-blue-500 mt-2 rotate-45 transform flex-shrink-0"></span>
                  <span className="text-sm text-gray-700">
                    Winner of multiple hackathons and contributor to impactful
                    community programs like the IEEE BeST 2023 initiative for
                    science and technology education.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-blue-500 mt-2 rotate-45 transform flex-shrink-0"></span>
                  <span className="text-sm text-gray-700">
                    Experienced in designing user-focused tools and systems,
                    including a Web Resume Generator and Takziah Card Generator,
                    highlighting practical problem-solving skills.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills section - Added */}
          <div id="skills" className="mt-12 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'JavaScript', level: 'Advanced', percentage: 85 },
                { name: 'React.js', level: 'Intermediate', percentage: 75 },
                { name: 'Next.js', level: 'Intermediate', percentage: 80 },
                { name: 'Laravel', level: 'Intermediate', percentage: 70 },
                { name: 'UI/UX Design', level: 'Intermediate', percentage: 65 },
                { name: 'Tailwind CSS', level: 'Advanced', percentage: 90 },
              ].map((skill, index) => (
                <div key={index} className="p-3 border rounded-lg bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social media links with improved styling */}
          {/* Social media links */}
          <div className="space-y-3 mb-8">
            <SocMed
              title="X.com / Twitter"
              desc="Documenting my journey on building apps and business"
              icon={FaTwitter}
              link="https://x.com/Zhafran_SY"
            />
            <SocMed
              title="Instagram"
              desc="Just for fun"
              icon={FaInstagramSquare}
              link="https://www.instagram.com/zafran_sy?igsh=ZmZ2eTRkc2EzcnRk"
            />
            <SocMed
              title="Github"
              desc="Code repositories for my projects"
              icon={FaGithub}
              link="https://github.com/ZafranSY"
            />
            <SocMed
              title="Linkedin"
              desc="Professional life"
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/zafran-sakowi-065b34215/"
            />
          </div>

          {/* Projects section with improved headings and organization */}
          <div id="projects" className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </span>
              Currently Building
            </h2>
            <ProjectCard
              title="Text Behind Image"
              simple_desc="Create text-behind-image designs easily"
              full_desc="Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has got 300K users, 3 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt."
              date="Since September 2024"
              link="https://www.youtube.com/watch?v=jP4LHn4ePfU"
              image="/zafran-pic.jpg"
            />
            <ProjectCard
              title="Text Behind Image"
              simple_desc="Create text-behind-image designs easily"
              full_desc="Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has got 300K users, 3 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt."
              date="Since September 2024"
              link="https://www.youtube.com/watch?v=jP4LHn4ePfU"
              image="/zafran-pic.jpg"
            />
          </div>

          {/* Previous Projects section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Previous Projects
            </h2>
            <ProjectCard
              title="Text Behind Image"
              simple_desc="Create text-behind-image designs easily"
              full_desc="Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has got 300K users, 3 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt."
              date="Since September 2024"
              link="https://www.youtube.com/watch?v=jP4LHn4ePfU"
              image="/zafran-pic.jpg"
            />
            <ProjectCard
              title="Text Behind Image"
              simple_desc="Create text-behind-image designs easily"
              full_desc="Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has got 300K users, 3 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt."
              date="Since September 2024"
              link="https://www.youtube.com/watch?v=jP4LHn4ePfU"
              image="/zafran-pic.jpg"
            />
          </div>

          {/* Education section with improved headings */}
          <div id="experience" className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
              Education
            </h2>
            <Education
              title="Bachelor of Computer Science (Software Engineering)"
              uniName="University of Technology Malaysia"
              desc="Coursework includes software development, algorithms, databases, and system design. Achieved strong academic performance and participated in industry-related projects. Specialized in web technologies and user experience design."
              image="/utmLogo.png"
              date="Oct 2022 - July 2026"
            />
            <Education
              title="Physical Science"
              uniName="Matriculation Kelantan"
              desc="Completed intensive one-year pre-university program with focus on physics, mathematics, and computer science fundamentals. Developed strong analytical and problem-solving skills that form the foundation of my engineering approach."
              image="/kmktLogo.png"
              date="July 2021 - July 2022"
            />
            <Education
              title="Pure Science"
              uniName="SMK Bukit Bunga"
              desc="Graduated with distinction in mathematics and physics. Participated in national-level science competitions and developed early interest in technology through school programming club."
              image="/smkbbLogo.png"
              date="Jan 2016 - Dec 2020"
            />
          </div>

          {/* Extracurricular Activities section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </span>
              Extracurricular Activities
            </h2>
            <ExtraCocuCard
              title="HatchQuest @ UTM 2024!"
              desc="Pitched Signify, an app translating sign language to improve communication with mute and deaf individuals. Gained insights from startup coaches and entrepreneurs while refining our concept. Developed skills in teamwork, pitching, and innovative problem-solving."
              date="Nov 2024 - Dec 2024"
            />
            <ExtraCocuCard
              title="Jazari Robotic Games"
              desc="Provided academic support in mathematics to peers during matriculation, balancing a tight schedule while honing leadership and teaching skills."
              date="Nov 2022 - Aug 2024"
            />
            <ExtraCocuCard
              title="PAL (Peer Assistant Leadership) Leader"
              desc="Provided academic support in mathematics to peers during matriculation, balancing a tight schedule while honing leadership and teaching skills."
              date="Aug 2022-July 2023"
            />
            <ExtraCocuCard
              title="Technology Community 2.0"
              desc="Competed in a robotics competition, designing and programming a robot to follow a black line. Developed skills in problem-solving and robotic systems."
              date="January 2024 - May 2024"
            />
            <ExtraCocuCard
              title="Jazari Recruitment Games 2023 (JRW2023)"
              desc="Served as part of the technical team responsible for venue arrangements, ensuring the smooth execution of the event."
              date="Aug 2022-July 2023"
            />
          </div>

          {/* Work Experience section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </span>
              Work Experience
            </h2>
            <Education
              title="Cashier and Customer Service"
              uniName="A&W Food Services"
              desc="Managed customized orders, coordinated with the kitchen team, and handled high-volume tasks efficiently. Gained practical experience in communication, teamwork, and task prioritization in a fast-paced setting. Consistently received positive customer feedback for friendly service."
              image="/AnwLogo.png"
              date="Aug 2024 - Oct 2024"
            />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Zafran Sakowi. All rights reserved.
            </p>
            <p className="mt-1">Made with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
