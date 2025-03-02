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
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white my-5">
      <div className="p-6">
        {/* Top row with image/org name and date */}
        <div className="w-full flex items-center justify-between mb-3 flex-row">
          <div className="flex items-center flex-row gap-3">
            {image && (
              <div className="flex-shrink-0">
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="logo"
                  className="rounded-md"
                />
              </div>
            )}
            <p className="font-medium text-sm sm:text-base">{uniName}</p>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
            {date}
          </div>
        </div>

        {/* Title/Role */}
        <div className="mb-3">
          <p className="text-sm sm:text-base font-semibold text-gray-900">
            {title}
          </p>
        </div>

        {/* Description */}
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Education;
