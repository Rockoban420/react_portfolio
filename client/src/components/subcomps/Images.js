import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery, Grid } from '@mui/material';
import {
  Project1,
  Project2,
  QuizGame,
  WeatherApp,
  ExpertGuides,
  ZephyrCove,
} from '../../images'

export const Images = () => {
  const isMobile = useMediaQuery('(min-width:600px)');
  let isTablet = useMediaQuery('(min-width:1200px)');

  console.log('mobile', isMobile, 'tablet', isTablet);

  return (
    <Grid
      marginLeft={!isTablet ? 5 : isMobile ? 25 : 0}
      marginRight={!isTablet ? 5 : isMobile ? 25 : 0}
    >
      <ImageList
        cols={isMobile ? 2 : 1}
        gap={20}
        width={isMobile ? 800 : 300}
      >
        {itemData.map((item) => (
          <Card sx={{ width: 'auto', height: 'auto' }} style={{borderStyle: 'solid', borderWidth: '3px', borderColor:'#2D4DCD'}}>
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
          </Card>
        ))}
      </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    img: Project2,
    href: `https://chirperapp.herokuapp.com/`,
    ghref: `https://github.com/zelada5574/SocialMediagang`,
    title: 'Chirper Social Media App',
    author: 'HTML/ Boostrap/ JS/ RESTfulAPIs/ NodeJS/ ExpressJS/ MySQL/ Handlebars',
  },
  {
    img: Project1,
    href: `https://samanthajoy13.github.io/so_youre_looking_for_a_hotel/`,
    ghref: `https://github.com/SamanthaJoy13/so_youre_looking_for_a_hotel`,
    title: `So You're Looking For A Hotel`,
    author: 'HTML/ CSS/ JS/ APIs',
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
    author: 'Shopify Store, Printify, Ecommerce, AI Generation, Donations to Charities'
  },
  {
    img: QuizGame,
    href: `https://rockoban420.github.io/timed_quiz_game/`,
    ghref: `https://github.com/Rockoban420/timed_quiz_game`,
    title: 'Timed Quiz Game',
    author: 'HTML/ CSS/ JS',
  },
  {
    img: WeatherApp,
    href: `https://rockoban420.github.io/weather_app/`,
    ghref: `https://github.com/Rockoban420/weather_app`,
    title: 'Weather App',
    author: 'HTML/ CSS/ JS/ APIs',
  },


];