import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

const DoctorCard = ({ imgURL, title, name, desc, imgAlt }) => {
  const [liked, setLiked] = useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
  const handleLikeClick = () => {
    alert('Liked');
  };

  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia component='img' height='194' image={imgURL} alt={imgAlt} />
        <CardHeader title={title} subheader={name} />
        <CardContent>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary', textAlign: 'start' }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            sx={{
              color: liked ? 'red' : 'black',
            }}
            aria-label='add to favorites'
            onClick={() => setLiked(!liked)}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default DoctorCard;
