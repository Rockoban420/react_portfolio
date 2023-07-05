import React from 'react';
import {
    Typography,
    Grid,
    Divider,
    Avatar,
    Stack,
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
        <div id='AboutMe' style={{ height: 800 }}>
            <Grid
                container spacing={2}
                marginTop={8}
            >
                <Grid
                    xs={2.6}
                >
                    <Typography
                        variant='h2'
                    >
                        About Me
                    </Typography>
                </Grid>
                <Divider
                    orientation="vertical"
                    flexItem
                    style={
                        {
                            width: '2px',
                            backgroundColor: 'rgb(210, 240, 248)',
                        }
                    }
                >
                </Divider>
                <Grid
                    xs={9}
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
                    <Typography
                        variant='body1'
                        marginLeft={2}
                    >
                        Fully Bilingual front-end software engineer born and raised in Buenos Aires, Argentina leveraging background in Technical School. Earned a certificate in Full Stack Web Development from the University of Berkley, Coding Boot Camp.
                        <br /><br />Very passionate in coding with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. With a very handy base of Bilingual Technical high school in the Philips School (ITPA) in Argentina which trains engineers.
                        <br /><br />Hobbies include skateboarding, snowboarding, working out, hiking and playing games with my buddies.
                        <br /><br />I am currently looking to transition from my current job into tech! I am open to any opportunities and would love to connect with you! I am located in the Bay Area, California.
                        <br /><br />Some of my career interests are QA, Front-End, Back-End, Full-Stack, and Software Engineering, As well as game design, testing and development.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
