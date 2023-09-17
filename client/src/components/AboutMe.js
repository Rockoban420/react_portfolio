import React from 'react';
import {
    Typography,
    Grid,
    Avatar,
    Stack,
    List,
    Box,
    useMediaQuery,
} from '@mui/material';

import { Type } from './subcomps/Type';

import {
    me,
    me2,
} from '../images'

export const AboutMe = () => {
    const isMobile = useMediaQuery('(min-width:777px)');
    const isTablet = useMediaQuery('(min-width:1450px)');
    return (
        <div
        id='AboutMe'
        {...(isTablet ? { style: { height: '90vh' } } : isMobile ? { style: { height: '100vh' } } : { style: { height: 'auto'} })}
        >
            <List>
            <Grid
                container spacing={2}
                marginTop={4}
            >
                <Grid
                    xs={12}
                >
                    {/* <Typography
                        variant='h2'
                        style={{marginBottom: '20px', color: '#ECF5F9'}}
                    >
                        About Me
                    </Typography> */}
                    <Type
                        text='About Me'
                    />
                </Grid>
                <br />
                <br />
                <Grid
                    xs={12}
                >
                            <Stack direction="row" justifyContent="center" alignContent="space-evenly" style={{marginTop: '20px'}}>
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
                        Bilingual Front End Software Developer in the Bay Area. Born and raised in Buenos Aires, Argentina.
                        <br /><br />I hold a certificate in Full Stack Web Development from the University of Berkley, Coding Boot Camp.
                        <br /><br />Very passionate about coding with a focus on design and development. My fortes are creative solutions, teamwork, and building projects from ideation to execution.
                        <br /><br />Hobbies include skateboarding, snowboarding, working out, hiking and gaming.
                        <br /><br />I am currently open to any opportunities in tech and would love to connect!
                        <br /><br />Some of my career interests are QA, front-end, back-end, full-stack and software development along with game design, testing and development.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
            </List>
        </div>
    )
}
