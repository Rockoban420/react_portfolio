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
import {
    Project1,
    Project2,
    QuizGame,
    WeatherApp,
    ExpertGuides,
    ZephyrCove,
} from '../../images'

export const Images = () => {
  return (
    <ImageList sx={8}>
      {itemData.map((item) => (
        <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={item.img}
          title={item.title}
        />
        <CardContent 
        style={{ backgroundColor: 'rgb(210, 240, 248)' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.author}
          </Typography>
        </CardContent>
        <CardActions
        style={{ backgroundColor: 'rgb(210, 240, 248)' }}
        >
          <Button 
          size="small"
          onClick={() => window.open(item.href, "_blank")}
          >Deployed App</Button>
          {item.ghref ?
          <Button size="small" onClick={() => window.open(item.ghref)}>Github Repo</Button>
          : null}
        </CardActions>
      </Card>
      ))}
    </ImageList>
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