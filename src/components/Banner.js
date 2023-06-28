import * as React from 'react';
import Box from '@mui/material/Box';
import {
    Banner3,
} from '../images'

export const Banner = () => {
    return (
        <Box
            component="img"
            style={
                {
                    width: '100%',
                    height: '80%',
                }
            }
            alt="The house from the offer."
            src={Banner3}
        />
    );
}