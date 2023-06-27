import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';
import { Images } from './subcomps/Images';


export const Work = () => {
    return (
        <div>
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
                    }
                }
            >
            </Divider>
            <Grid
                xs={9}
            >
                <Images />
            </Grid>
            </Grid>
        </div>
    )
}
