import React from 'react';
import { IconType } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

type cardProps = {
  title: string;
  desc: string;
  icon: IconType;
  link: string;
};
const SocMed: React.FC<cardProps> = ({ title, desc, icon: Icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-between my-3 p-4 bg-white hover:text-black rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="text-2xl">{Icon && <Icon />}</div>
          <div>
            <p className="font-semibold text-black">{title}</p>
            <p className="text-gray-500">{desc}</p>
          </div>
        </div>

        <div className="text-gray-400 text-3xl ">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </a>
  );
};

export default SocMed;
