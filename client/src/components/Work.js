import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';

import ReactTyped from 'react-typed';

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
                <ReactTyped
                        strings={[
                            'Work',
                        ]}
                        typeSpeed={100}
                        backSpeed={70}
                        loop
                        style={{color: '#ECF5F9', fontSize: '2rem', marginBottom: '20px'}}
                    />
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
