import React from 'react';
import Image from 'next/image';
type eduProps = {
  image: string;
  title: string;
  date: string;
  desc: string;
  uniName: string;
};
const Education: React.FC<eduProps> = ({
  title,
  image,
  date,
  desc,
  uniName,
}) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="p-6">
        <div className="w-full flex items-center justify-between mb-4 flex-row">
          <div className="flex text-xs sm:text-base font-semibold items-center flex-row gap-2">
            <div>
              <Image src={image} width={40} height={40} alt="logo" />
            </div>
            <p>{title}</p>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">{date}</div>
        </div>
        <div className="py-1 text-xs sm:text-sm">
          <p>{uniName}</p>
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Education;
