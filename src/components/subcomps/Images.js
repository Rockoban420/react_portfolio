import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
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
        <ImageListItem key={item.img} sx={{border: 4, borderColor: '#820f9f'}} style={{ margin: 4}}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={() => window.open(item.href)}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Project2,
    href: `https://chirperapp.herokuapp.com/`,
    title: 'Chirper Social Media App',
    author: 'HTML/ Boostrap/ JS/ RESTfulAPIs/ NodeJS/ ExpressJS/ MySQL/ Handlebars',
  },
  {
    img: Project1,
    href: `https://samanthajoy13.github.io/so_youre_looking_for_a_hotel/`,
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
    title: 'Timed Quiz Game',
    author: 'HTML/ CSS/ JS',
  },
  {
    img: WeatherApp,
    href: `https://rockoban420.github.io/weather_app/`,
    title: 'Weather App',
    author: 'HTML/ CSS/ JS/ APIs',
  },
  

];