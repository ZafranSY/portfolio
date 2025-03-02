import Image from 'next/image';
import { TbWorld } from 'react-icons/tb';
import ZafranPic from '../../public/zafran-pic.jpg';
import SocMed from './component/SocMed';
import ProjectCard from './component/projectCard';
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
            />
            <SocMed
              title="Instagram"
              desc="Just for fun"
              icon={FaInstagramSquare}
            />
            <SocMed
              title="Github"
              desc="Code repositories for my projects"
              icon={FaGithub}
            />
            <SocMed
              title="Linkedin"
              desc="Professional life"
              icon={FaLinkedin}
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
        </div>
      </div>
    </div>
  );
}
