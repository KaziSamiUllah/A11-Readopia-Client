import StarRatings from "react-star-ratings";

const StarRatingComponent = ({ rating }) => {
  return (
    <div className="flex items-center drop-shadow-lg">      
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="2px"
          isSelectable={false}
        />
      </div>
    
  );
};

export default StarRatingComponent;
