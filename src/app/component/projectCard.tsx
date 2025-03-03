import React from 'react';
import Image from 'next/image';

type ProjectProps = {
  title: string;
  simple_desc: string;
  full_desc: string;
  date: string;
  link?: string;
  image: string;
  technologies?: string[];
  videoLink?: string;
  tags?: string[];
  projectImg?: string; // Make projectImg optional
};

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  simple_desc,
  full_desc,
  date,
  link,
  image,
  technologies = [],
  videoLink,
  tags = ['Project'],
  projectImg,
}) => {
  const getYoutubeLinkId = (url: string): string | null => {
    if (!url) return null;

    try {
      const parseUrl = new URL(url);
      if (parseUrl.hostname === 'youtu.be') {
        return parseUrl.pathname.substring(1);
      } else if (parseUrl.hostname.includes('youtube.com')) {
        return parseUrl.searchParams.get('v');
      }
    } catch {
      console.log('Invalid Youtube URL: ', url);
    }
    return null;
  };

  const videoId = videoLink ? getYoutubeLinkId(videoLink) : null;

  return (
    <div className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white my-5 overflow-hidden">
      <div className="p-6">
        {/* Header with logo/image and title */}
        <div className="w-full flex items-center gap-4 mb-4">
          <div className="h-fit w-12 md:w-16 rounded-lg flex items-center justify-center">
            {/* Project logo/icon */}
            <Image
              src={image}
              width={60}
              height={60}
              alt={title}
              className="rounded-lg object-cover"
            />
          </div>
          {/*Title and date*/}
          <div className="w-full flex flex-col justify-between">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h2 className="text-sm xsm:text-xl sm:text-xl font-bold">
                  {title}
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {date}
              </div>
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

        {/* Technologies used */}
        {technologies.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Conditional rendering for video, image, or link */}
        {videoId ? (
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : videoLink &&
          (videoLink.includes('youtube.com') ||
            videoLink.includes('youtu.be')) ? (
          <p className="text-amber-500 text-sm p-2 bg-amber-50 rounded-md">
            <span className="font-medium">Note:</span> Could not parse the
            YouTube link. Please check the URL format.
          </p>
        ) : (
          <>
            {/* Display larger project image when available */}
            {projectImg && (
              <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src={projectImg}
                  fill
                  alt={title}
                  className="object-cover"
                />
              </div>
            )}

            {/* Visit project link if available */}
            {link && (
              <div className="mb-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Project
                </a>
              </div>
            )}
          </>
        )}

        {/* Tags/categories */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
