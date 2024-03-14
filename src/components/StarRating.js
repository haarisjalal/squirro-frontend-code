const StarRating = ({ store }) => {
  const totalStars = 5;
  const filledStars = store.attributes.rating;

  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(<span key={i}>&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div className="star">{stars}</div>;
};

export default StarRating;
