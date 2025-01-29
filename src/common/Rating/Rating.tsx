import React from 'react';
import RatingSvgStar from './RatingSvgStar/RatingSvgStar';

interface RatingProps {
  rating: string;
}

const Rating = ({ rating }: RatingProps) => {
  const roundedRating = Math.round(parseInt(rating) / 2);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const fillColor = roundedRating >= starNumber ? '#FFB219' : '#CED2DA';

    return <RatingSvgStar key={index} fillColor={fillColor} />;
  });

  return <div>{stars}</div>;
};

export default Rating;
