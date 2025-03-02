import Image from 'next/image';
import { TbWorld } from 'react-icons/tb';
import ZafranPic from '../../public/zafran-pic.jpg';
import SocMed from './component/SocMed';
import ProjectCard from './component/projectCard';
import ExtraCocuCard from './component/ExtraCocuCard';
import Education from './component/Education';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Development banner at the top */}
      <div className="p-4 bg-gray-200">
        <p className="text-center text-black">
          This website is still under development
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Header section with profile info */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              Zafran Sakowi
            </h1>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <TbWorld className="mr-1" />
              <p>Johor Bahru, Malaysia</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={ZafranPic}
              width={80}
              height={80}
              alt="Zafran"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="p-6">
          {/* Bio section */}
          <p className="text-gray-900 font-medium mb-4">
            I&apos;m a 21 y/o third-year Software Engineering student,
            developer, and aspiring entrepreneur from Malaysia.
          </p>

          {/* Bullet points */}
          <div className="mb-8">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-gray-700 mt-2 rotate-45 transform flex-shrink-0"></span>
                <span className="text-sm text-gray-700">
                  Creator of &quot;StudySync,&quot; a platform for streamlining
                  academic link management, and &quot;Co-Curricular Activity
                  Management System (CCAMS),&quot; a Laravel-based app
                  optimizing school workflows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-gray-700 mt-2 rotate-45 transform flex-shrink-0"></span>
                <span className="text-sm text-gray-700">
                  Winner of multiple hackathons and contributor to impactful
                  community programs like the IEEE BeST 2023 initiative for
                  science and technology education.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-gray-700 mt-2 rotate-45 transform flex-shrink-0"></span>
                <span className="text-sm text-gray-700">
                  Experienced in designing user-focused tools and systems,
                  including a Web Resume Generator and Takziah Card Generator,
                  highlighting practical problem-solving skills.
                </span>
              </li>
            </ul>
          </div>

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

          {/* Projects section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Currently building
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
          {/* Projects section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Previous projects
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
          {/*Educatoin  section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Education
            </h2>
            <Education
              title="Bachelor of Computer Science ( Software Engineering )"
              uniName="University of Technology Malaysia"
              desc="Coursework includes software development, algorithms, databases, and system design.Achieved strong academic performance and participated in industry-related projects"
              image="/utmLogo.png"
              date="Oct 2022 - July 2026"
            />
            <Education
              title="Physical Science"
              uniName="Matriculation Kelantan"
              desc="Coursework includes software development, algorithms, databases, and system design.Achieved strong academic performance and participated in industry-related projects"
              image="/kmktLogo.png"
              date="July 2021 - July 2022"
            />
            <Education
              title="Pure Science"
              uniName="SMK Bukit Bunga"
              desc="Coursework includes software development, algorithms, databases, and system design.Achieved strong academic performance and participated in industry-related projects"
              image="/smkbbLogo.png"
              date="Jan 2016 - Dec 2020"
            />
          </div>
          {/*Extra cocuriculum section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Extracurricular Activities
            </h2>
            <ExtraCocuCard
              title="HatchQuest @ UTM 2024!"
              desc="pitch Signify, an app translating sign language to improve communication with mute and deaf individuals. Gained insights from startup coaches and entrepreneurs while refining our concept. Developed skills in teamwork, pitching, and innovative problem-solving."
              date="Nov 2024 - Dec 2024"
            />
            <ExtraCocuCard
              title="Jazari Robotic Games"
              desc="Provided academic support in mathematics to peers during matriculation, balancing a tight
                     schedule while honing leadership and teaching skills."
              date="Nov 2022 - Aug 2024"
            />
            <ExtraCocuCard
              title="Jazari Robotic Games"
              desc="Provided academic support in mathematics to peers during matriculation, balancing a tight
                     schedule while honing leadership and teaching skills."
              date="Nov 2022 - Aug 2024"
            />
            <ExtraCocuCard
              title="PAL (Peer Assistant Leadership) Leader"
              desc="Provided academic support in mathematics to peers during matriculation, balancing a tight
                     schedule while honing leadership and teaching skills."
              date="Aug 2022-July 2023"
            />
            <ExtraCocuCard
              title="Technology Community 2.0"
              desc="Competed in a robotics competition, designing and programming a robot to follow a black line.
               Developed skills in problem-solving and robotic systems."
              date="January 2024 - May 2024"
            />
            <ExtraCocuCard
              title="Jazari Recruitment Games 2023 (JRW2023)"
              desc="Served as part of the technical team responsible for venue arrangements, ensuring the smoothexecution of the event."
              date="Aug 2022-July 2023"
            />
          </div>
          {/*Educatoin  section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Work Experience
            </h2>
            <Education
              title="Cashier and Customer Service"
              uniName="A&W Food Services"
              desc="Managed customized orders, coordinated with the kitchen team, and handled high-volume tasks efficiently. Gained practical experience in communication, teamwork, and task prioritization in a fast-paced setting."
              image="/AnwLogo.png"
              date="Aug 2024 - Oct 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
