import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Rating } from '@mui/material';
import ReviewForm from '../ReviewForm/ReviewForm';

import './index.css';

const ReviewSection = ({ bandId }) => {
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage when the component mounts
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (storedReviews[bandId]) {
      setReviews(storedReviews[bandId]);
    } else {
      setReviews([]); // Ensure the reviews state is cleared if no reviews for the current band
    }
  }, [bandId]);

  // Save reviews to localStorage whenever the reviews state changes
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    storedReviews[bandId] = reviews;
    localStorage.setItem('reviews', JSON.stringify(storedReviews));
  }, [reviews, bandId]);

  const handleReviewSubmit = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {reviews.length > 0 && <h2 className='review-title'>REVIEWS</h2>}
      {reviews.map((review, index) => (
        <Box key={index} sx={{ mt: 2, p: 2, border: '2px solid black', borderRadius: 2, width: '350px'}}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Avatar src={review.profilePic} alt={review.userName} />
            <div className='rating'>
              <Typography variant="subtitle1" style={{ color: 'black' }}>{review.userName}</Typography>
              <Rating value={review.rating} readOnly />
            </div>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ color: 'black' }}>{review.comment}</Typography>
        </Box>
      ))}
      <ReviewForm onSubmit={handleReviewSubmit} />
    </Box>
  );
};

export default ReviewSection;
