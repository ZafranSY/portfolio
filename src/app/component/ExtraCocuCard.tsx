import React from 'react';

type cocuProps = {
  title: string;
  desc: string;
  date: string;
};
const ExtraCocuCard: React.FC<cocuProps> = ({ title, desc, date }) => {
  return (
    <div className="rounded-xl hover:shadow-lg  shadow-md transition-shadow duration-300 bg-white">
      <div className="p-6">
        <div className="w-full flex items-center gap-4 mb-4"></div>
      </div>
    </div>
  );
};

export default ExtraCocuCard;
