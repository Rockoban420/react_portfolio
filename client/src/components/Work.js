import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';

import { Images } from './subcomps/Images';

import { Type } from './subcomps/Type';


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
                <Type
                    text='Work'
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
