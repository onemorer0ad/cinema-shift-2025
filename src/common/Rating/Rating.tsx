import React from 'react';

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating / 2);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const fillColor = roundedRating >= starNumber ? '#FFB219' : '#CED2DA';

    return (
      <svg
        key={index}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3449 2.73878C13.6129 2.1982 14.3871 2.1982 14.655 2.73878L17.6943 8.87044C17.8007 9.0851 18.0064 9.23389 18.2443 9.26831L25.0404 10.2516C25.6396 10.3383 25.8788 11.0714 25.4452 11.4922L20.5276 16.265C20.3554 16.4321 20.2768 16.6728 20.3175 16.9088L21.4784 23.6481C21.5807 24.2423 20.9544 24.6954 20.4185 24.4148L14.3399 21.233C14.1271 21.1216 13.8729 21.1216 13.6601 21.233L7.58146 24.4148C7.04556 24.6954 6.41922 24.2423 6.52157 23.6481L7.68248 16.9088C7.72312 16.6728 7.64456 16.4321 7.47239 16.265L2.55471 11.4922C2.12115 11.0714 2.3604 10.3383 2.95955 10.2516L9.75562 9.26831C9.99355 9.23389 10.1992 9.0851 10.3056 8.87044L13.3449 2.73878Z"
          fill={fillColor}
        />
      </svg>
    );
  });

  return <div>{stars}</div>;
};

export default Rating;
