import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';


export const AboutMe = () => {
    return (
        <div id='AboutMe'>
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
                <Typography
                    variant='body1'
                    marginLeft={2}
                >
                    Fully Bilingual full-stack software engineer born and raised in Buenos Aires, Argentina leveraging background in Technical School. Earned a certificate in Full Stack Web Development from the University of Berkley, Coding Boot Camp.
                    <br/><br/>Very passionate in coding with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. With a very handy base of Bilingual Technical high school in the Philips School (ITPA) in Argentina which trains engineers.
                    <br/><br/>Hobbies include skateboarding, snowboarding, working out, hiking and playing games with my buddies.
                </Typography>
            </Grid>
            </Grid>
        </div>
    )
}
