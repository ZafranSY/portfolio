import React from 'react';
import Image from 'next/image';
type projectProps = {
  title: string;
  simple_desc: string;
  full_desc: string;
  date: string;
  link: string;
  image: string;
};

const projectCard: React.FC<projectProps> = ({
  title,
  simple_desc,
  full_desc,
  date,
  link,
  image,
}) => {
  const getYoutubeLinkId = (url: string): string | null => {
    try {
      const parseUrl = new URL(url);
      if (parseUrl.hostname === 'youtu.be') {
        return parseUrl.pathname.substring(1);
      } else if (parseUrl.hostname.includes('youtube.com')) {
        return parseUrl.searchParams.get('v');
      }
    } catch (error) {
      console.error('Invalid Youtube URL: ', url);
    }
    return null;
  };

  const videoId = getYoutubeLinkId(link);

  return (
    <div className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="p-6">
        {/* Header with logo/image and title */}

        {/* Header with logo/image and title */}
        <div className="w-full flex items-center gap-4 mb-4">
          <div className="h-fit w-12 md:w-15 rounded-lg flex items-center justify-center">
            {/* Placeholder for logo or icon */}
            <Image
              src={image}
              width={50}
              height={20}
              alt="dsa"
              className="rounded-lg sm:w-lg"
            />
          </div>
          {/*this si for the title and date*/}
          <div className="w-full flex flex-col  justify-between ">
            <div className="flex justify-between items-center gap-4">
              <div className="">
                <h2 className="text-sm xsm:text-xl sm:text-xl font-bold">
                  {title}
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{date}</div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">{simple_desc}</p>
            </div>
          </div>
        </div>

        {/* Project description */}
        <div className="mb-4 text-gray-700 text-xs sm:text-base">
          <p>{full_desc}</p>
        </div>

        {/* Video embed */}
        {videoId ? (
          <div className="relative w-full pt-[56.25%]">
            {' '}
            {/* 16:9 aspect ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-red-500">Invalid YouTube link provided.</p>
        )}

        {/* Tags/categories */}
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            Startup
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            Design tool
          </span>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
