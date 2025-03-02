import React from 'react';
import { IconType } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

type cardProps = {
  title: string;
  desc: string;
  icon: IconType;
};
const SocMed: React.FC<cardProps> = ({ title, desc, icon: Icon }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{Icon && <Icon />}</div>
        <div>
          <p className="font-semibold text-black">{title}</p>
          <p className="text-gray-500">{desc}</p>
        </div>
      </div>

      <div className="text-gray-400 text-3xl">
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default SocMed;
