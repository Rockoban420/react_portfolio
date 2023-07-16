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
                container spacing={1}
                marginTop={8}
            >
            <Grid
                xs={12}   
            >
                <Typography
                    variant='h2'
                    style={{color: '#ECF5F9'}}
                >
                    Work
                </Typography>
            </Grid>
            <Grid
                display='flex'
            >
                <Images 
                />
            </Grid>
            </Grid>
        </div>
    )
}
