import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';
import { Images } from './subcomps/Images';


export const Work = () => {
    return (
        <div id='Work'>
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
                    Work
                </Typography>
            </Grid>
            <Divider 
                orientation="vertical" 
                flexItem
                style={
                    {
                        width: '2px',
                        backgroundColor: 'black',
                        marginRight: '60px',
                        backgroundColor: 'rgb(210, 240, 248)',
                    }
                }
            >
            </Divider>
            <Grid
                xs={8}
            >
                <Images 
                />
            </Grid>
            </Grid>
        </div>
    )
}
