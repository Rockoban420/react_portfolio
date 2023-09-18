import {
  DrawerComponent,
} from './subcomps'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";

import {
  logo,
  cv,
} from '../images'

export const Navbar = (props) => {
  const isMobile = useMediaQuery('(min-width:777px)');
  return (
    <AppBar
    style={{ backgroundImage: 'linear-gradient(to bottom right, #C8D3D5, #09161b)' }}
    position="static"
    className='navbar'
    >
      <Toolbar>
      <DrawerComponent
        isMobile={isMobile}
        setCurrentTab={props.setCurrentTab}
      />
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} style={{ width: '50px', marginLeft: '20px'}} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} color='black'>
          Lautaro Avellaneda
        </Typography>
        {isMobile ? (
        <Stack direction="row" spacing={2} marginLeft={10}>
          <Button
            style={{ color: '#000' }}
            onClick={() => props.setCurrentTab('AboutMe')}
          >
            About Me
          </Button>
          <Button
            style={{ color: '#000' }}
            onClick={() => props.setCurrentTab('Work')}
          >
            Work
          </Button>
          <Button
            style={{ color: '#000' }}
            onClick={() => props.setCurrentTab('Contact')}
          >
            Contact
          </Button>
          <Button
          >
            <a
            href={cv}
            download
            style={{ color: '#000', textDecoration: 'none' }}
            >Resume</a>
          </Button>
        </Stack>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
