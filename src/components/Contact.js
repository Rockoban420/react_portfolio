import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';
import { FormatAlignJustify } from '@mui/icons-material';


export const Contact = () => {
    return (
        <div id='Contact'>
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
                        Contact
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
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <h4>Email: <a>lautaro.avellaneda@gmail.com</a></h4>
                        <h4>Phone: <a>+1 (510)-975-0518</a></h4>
                        <h4><a href='https://www.linkedin.com/in/lautaro-avellaneda-157b78178/' style={{ color: '#fff' }}>Linkedln</a></h4>
                        <h4><a href='https://github.com/Rockoban420' style={{ color: '#fff' }} >GitHub</a></h4>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
