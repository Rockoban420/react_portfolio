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
    style={{ backgroundColor: '#3A95B6' }}
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Lautaro Avellaneda
        </Typography>
        {isMobile ? (
        <Stack direction="row" spacing={2} marginLeft={10}>
          <Button
            color="inherit"
            onClick={() => props.setCurrentTab('AboutMe')}
          >
            About Me
          </Button>
          <Button
            color="inherit"
            onClick={() => props.setCurrentTab('Work')}
          >
            Work
          </Button>
          <Button
            color="inherit"
            onClick={() => props.setCurrentTab('Contact')}
          >
            Contact
          </Button>
          <Button
          >
            <a 
            href={cv} 
            download
            style={{ color: '#fff', textDecoration: 'none' }}
            >Resume</a>
          </Button>
        </Stack>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
