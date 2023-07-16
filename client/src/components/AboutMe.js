import React from 'react';
import {
    Typography,
    Grid,
    Divider,
    Avatar,
    Stack,
    List,
    Box,
} from '@mui/material';

import {
    me,
    me2,
} from '../images'

import {
    useState,
    useEffect,
} from 'react';

export const AboutMe = () => {
    const [matches, setMatches] = useState(window.matchMedia('(min-width:1300px)').matches)
    useEffect(() => {
        window
            .matchMedia("(min-width: 1300px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <div id='AboutMe' style={{ height: '85vh' }}>
            <List>
            <Grid
                container spacing={2}
                marginTop={4}
            >
                <Grid
                    xs={12}
                >
                    <Typography
                        variant='h2'
                        style={{marginBottom: '20px', color: '#ECF5F9'}}
                    >
                        About Me
                    </Typography>
                </Grid>
                <br />
                <br />
                <Grid
                    xs={12}
                >
                    {
                        matches ?
                            <Stack direction="row" justifyContent="center" alignContent="space-evenly">
                                <Avatar
                                    style={{ justifyContent: 'center' }}
                                    alt="Lautaro Avellaneda"
                                    src={me}
                                    sx={{ width: 100, height: 100 }}
                                />
                                <Avatar
                                    display='inline-block'
                                    alt="Lautaro Avellaneda"
                                    src={me2}
                                    sx={{ width: 100, height: 100 }}
                                />
                            </Stack>
                            :
                            <Stack direction="row" justifyContent="center" alignContent="space-evenly">
                                <Avatar
                                    style={{ justifyContent: 'center' }}
                                    alt="Lautaro Avellaneda"
                                    src={me}
                                    sx={{ width: 100, height: 100 }}
                                />
                                <Avatar
                                    display='inline-block'
                                    alt="Lautaro Avellaneda"
                                    src={me2}
                                    sx={{ width: 100, height: 100 }}
                                />
                            </Stack>
                    }
                    <br />
                    <br />
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                    <Typography
                        variant='body1'
                        marginLeft={2}
                        style={{color: '#ECF5F9'}}
                    >
                        Fully Bilingual front-end software engineer born and raised in Buenos Aires, Argentina leveraging background in Technical School. 
                        <br /><br />Earned a certificate in Full Stack Web Development from the University of Berkley, Coding Boot Camp.
                        <br /><br />Very passionate in coding with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. 
                        <br /><br />With a very handy base of Bilingual Technical high school in the Philips School (ITPA) in Argentina which trains engineers.
                        <br /><br />Hobbies include skateboarding, snowboarding, working out, hiking and playing games with my buddies.
                        <br /><br />I am currently looking to transition from my current job into tech! I am open to any opportunities and would love to connect with you! I am located in the Bay Area, California.
                        <br /><br />Some of my career interests are QA, Front-End, Back-End, Full-Stack, and Software Engineering, As well as game design, testing and development.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
            </List>
        </div>
    )
}
