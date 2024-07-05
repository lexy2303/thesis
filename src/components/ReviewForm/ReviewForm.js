import React, { useState }                from 'react';
import { Box, Button, TextField, Rating } from '@mui/material';

import './index.css';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating]         = useState(0);
  const [comment, setComment]       = useState('');
  const [userName, setUserName]     = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && comment && userName) {
      onSubmit({
        rating,
        comment,
        userName,
        profilePic: profilePic || 'https://via.placeholder.com/50',
        date: new Date().toLocaleDateString(),
      });
      setRating(0);
      setComment('');
      setUserName('');
      setProfilePic('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <div className='subtitle'>
        <h3 className="review-subtitle">LEAVE A REVIEW</h3>
      </div>
      <TextField
        label="USER NAME"
        variant="filled"
        fullWidth
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        sx={{
          mt: 2,
          '& .MuiFilledInput-root': {
            borderRadius: '10px',
            '&:before': {
              borderBottom: 'none',
            },
            '&:after': {
              borderBottom: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
        }}
      />
      <TextField
        label="PROFILE PICTURE URL (optional)"
        fullWidth
        variant='filled'
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
        sx={{
          mt: 2,
          '& .MuiFilledInput-root': {
            borderRadius: '10px',
            '&:before': {
              borderBottom: 'none',
            },
            '&:after': {
              borderBottom: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
        }}
      />
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{
          mt: 2,
          '& .MuiRating-iconEmpty': {
            color: 'black', // color for the empty stars
          },
        }}
      />
      <TextField
        label="COMMENT"
        fullWidth
        variant='filled'
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{
          mt: 2,
          '& .MuiFilledInput-root': {
            borderRadius: '10px',
            '&:before': {
              borderBottom: 'none',
            },
            '&:after': {
              borderBottom: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        className="submit"
        sx={{ mt: 3, textarea: { color: 'black' }, backgroundColor: '#EC5946', borderRadius: '25px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px', width: '120px' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ReviewForm;

