import React from 'react';

type cocuProps = {
  title: string;
  desc: string;
  date: string;
};
const ExtraCocuCard: React.FC<cocuProps> = ({ title, desc, date }) => {
  return (
    <div className="rounded-xl hover:shadow-lg  shadow-md transition-shadow duration-300 bg-white my-5">
      <div className="p-6">
        <div className="w-full flex items-center  gap-4 mb-4">
          <div className="w-full flex items-center justify-between">
            <div className="text-xs sm:text-base font-semibold">
              <h1>{title}</h1>
            </div>
            <div className="text-gray-500 text-meo sm:text-sm">{date}</div>
          </div>
        </div>
        <div className="text-xs sm:text-sm">{desc}</div>
      </div>
    </div>
  );
};

export default ExtraCocuCard;
