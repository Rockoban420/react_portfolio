import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {
  Project1,
  Project2,
  QuizGame,
  WeatherApp,
  ExpertGuides,
  ZephyrCove,
  jonesiesjewelry,
} from '../../images'

const MyRootEl = styled('Card') ({
      backgroundColor: '#102932',
});

export const Images = () => {
  const isMobile = useMediaQuery('(min-width:777px)');
  const isTablet = useMediaQuery('(min-width:1450px)');

  return (
    <Grid
      // marginLeft={!isTablet ? 10 : isMobile ? 'auto' : 0}
      // marginRight={!isTablet ? 10 : isMobile ? 'auto' : 0}
      marginX={isTablet ? 50 : isMobile ? 20 : 10}
      // width={isTablet ? '75rem' : isMobile ? 'auto' : 'auto'}
    >
      <ImageList
        cols={isTablet ? 3 : isMobile ? 2 : 1}
        gap={20}
      >
        {itemData.map((item) => (
          <MyRootEl
            sx={{ width: 'auto', height: 'auto' }}
            style={{ borderStyle: 'solid', borderWidth: '3px', borderColor: '#2D4DCD' }}
          >
            <CardMedia
              sx={{ height: '250px' }}
              image={item.img}
              title={item.title}
              height={'auto'}
            />
            <CardContent
              style={{ backgroundColor: '#102932' }}
            >
              <Typography style={{ color: '#ECF5F9' }} gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="#ECF5F9">
                {item.author}
              </Typography>
            </CardContent>
            <CardActions
              style={{ backgroundColor: '#102932' }}
            >
              <Button
                size="small"
                onClick={() => window.open(item.href, "_blank")}
                style={{ color: '#ECF5F9' }}
              >Deployed App</Button>
              {item.ghref ?
                <Button
                  size="small"
                  onClick={() => window.open(item.ghref)}
                  style={{ color: '#ECF5F9' }}
                >Github Repo</Button>
                : null}
            </CardActions>
          </MyRootEl>
        ))}
      </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    img: jonesiesjewelry,
    href: `https://jonsies-jewlery-19583fefdde0.herokuapp.com/`,
    ghref: `https://github.com/Rockoban420/jonsiesJewlery`,
    title: `Jonsie's Jewlery`,
    author: 'Real World/ React/ MUI/ GraphQL / MongoDB/ Express/ NodeJS',
  },
  {
    img: Project2,
    href: `https://chirperapp.herokuapp.com/`,
    ghref: `https://github.com/zelada5574/SocialMediagang`,
    title: 'Chirper Social Media App',
    author: 'HTML/ Boostrap/ RESTAPIs/ NodeJS/ MySQL/ Handlebars',
  },
  {
    img: Project1,
    href: `https://samanthajoy13.github.io/so_youre_looking_for_a_hotel/`,
    ghref: `https://github.com/SamanthaJoy13/so_youre_looking_for_a_hotel`,
    title: `So You're Looking For A Hotel`,
    author: 'HTML/ CSS/ JS/ Google Maps API/ PriceLine API',
  },
  {
    img: ExpertGuides,
    href: `https://experteguides.com/`,
    title: 'Expert Guides',
    author: 'Shopify Store, AI Generation, Printify, Ecommerce',
  },
  {
    img: ZephyrCove,
    href: `https://zephyrcove.org/`,
    title: 'Zephyr Cove',
    author: 'Shopify Store, Printify, Ecommerce, AI Generation'
  },
  {
    img: QuizGame,
    href: `https://rockoban420.github.io/timed_quiz_game/`,
    ghref: `https://github.com/Rockoban420/timed_quiz_game`,
    title: 'Timed Quiz Game',
    author: 'HTML/ CSS/ JS',
  },


];