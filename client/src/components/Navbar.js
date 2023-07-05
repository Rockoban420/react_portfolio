
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import {
  logo,
  cv,
} from '../images'

export const Navbar = (props) => {
  return (
    <AppBar 
    style={{ backgroundColor: '#061985' }}
    position="static"
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} style={{ width: '50px', marginLeft: '20px'}} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Lautaro Avellaneda
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
}
