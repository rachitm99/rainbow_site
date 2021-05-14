import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';

import thumb from './video.mp4'

const useStyles = makeStyles({
  root: {
    width: 500,
    
    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="video"
          alt="Craft"
          height="300"
          src={thumb}
          title="click to go to video"
          width="500"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    
    </>
  );
}
