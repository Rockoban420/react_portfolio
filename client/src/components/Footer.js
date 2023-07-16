import {
    BottomNavigation,
    BottomNavigationAction,
    Typography,
    IconButton,
} from '@mui/material';

import {
    logo,
    linkedin,
    github,
    linkedinLight,
    githubLight,
} from '../images'

import {
    useState,
} from 'react';

export const Footer = () => {
    const [animation1, setAnimation1] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    return (
        <BottomNavigation
            style={{
                backgroundColor: '#3A95B6',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <img src={logo} style={{ width: '50px', marginRight: '30px' }} />
            </IconButton>
            <Typography
                style={{
                    color: '#fff',
                }}
            >
                © 2023 Lautaro Avellaneda
            </Typography>
            {
                animation1 ?
                    <BottomNavigationAction
                        onMouseLeave={() => setAnimation1(false)}
                        label="Linkedln"
                        icon={<img src={linkedinLight} />}
                        onClick={() => window.open('https://www.linkedin.com/in/lautaro-avellaneda-157b78178/', "_blank")}
                    />
                    :
                    <BottomNavigationAction
                        onMouseEnter={() => setAnimation1(true)}
                        label="Linkedln"
                        icon={<img src={linkedin}  />}
                        onClick={() => window.open('https://www.linkedin.com/in/lautaro-avellaneda-157b78178/', "_blank")}
                    />
            }

            {
                animation2 ?
                    <BottomNavigationAction
                        onMouseLeave={() => setAnimation2(false)}
                        label="GitHub"
                        icon={<img src={githubLight} />}
                        onClick={() => window.open('https://github.com/Rockoban420', "_blank")}
                    />
                    :
                    <BottomNavigationAction
                        onMouseEnter={() => setAnimation2(true)}
                        label="GitHub"
                        icon={<img src={github} />}
                        onClick={() => window.open('https://github.com/Rockoban420', "_blank")}
                    />
            }
        </BottomNavigation>
    )
}