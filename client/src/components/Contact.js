import React from 'react';
import {
    Typography,
    Grid,
    Divider,
} from '@mui/material';

import {
    useState,
} from 'react';

import {
    useMutation,
} from '@apollo/client';

import {
    ADD_DATA,
} from '../utils/mutations';

import {
    ALL_DATA,
} from '../utils/queries';


export const Contact = () => {

    const [addData, { error }] = useMutation(ADD_DATA, {
        update(cache, { data: { addData } }) {
            try {
                const { info } = cache.readQuery({ query: ALL_DATA });

                cache.writeQuery({
                    query: ALL_DATA,
                    data: { info: [addData, ...info] },
                });
            } catch (e) {
                console.error(e);
            }
        }
    });

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({
        contactname: '',
        contactemail: '',
        contactmessage: '',
    });

    const handleChange = (event) => {
        console.log(event);
        const { value } = event.target;
        const prop = event.target.attributes.prop.value;
        console.log(prop);
        console.log(formState);

        if (prop === 'contactemail') {
            // const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            // isValid ? setErrorMessage('') : setErrorMessage('Please enter a valid email address');
            setFormState({ ...formState, [prop]: value });
        }
        if (prop === 'contactname') {
            setFormState({ ...formState, [prop]: value });
        }
        if (prop === 'contactmessage') {
            setFormState({ ...formState, [prop]: value });
        }
    };

    const handleSubmit = async (event) => {
        try {
            const { data } = await addData({ variables: { ...formState } });
            console.log(data);
            setFormState({
                contactname: '',
                contactemail: '',
                contactmessage: '',
            });
            if (error) {
                setErrorMessage(error.message);
                throw new Error('Something went wrong!');
            }

            window.location.reload();
        } catch (err) {
            console.error(err);
            setErrorMessage('Something went wrong!');
        }
    };

    return (
        <div id='Contact' style={{ height: 800 }}>
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
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Typography
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'left',
                                width: '50%',
                                height: '100%',
                                borderRadius: '10px',
                                padding: '20px',
                            }}
                        >
                            <Typography
                                style={{
                                    color: '#fff',
                                    textAlign: 'left',
                                }}

                            >
                                Name:
                            </Typography>
                            <input
                                prop='contactname'
                                type='text'
                                value={formState.contactname}
                                onChange={handleChange}
                            />
                            <Typography
                                style={{
                                    color: '#fff',
                                    textAlign: 'left',
                                }}
                            >
                                Email:
                            </Typography>
                            <input
                                prop='contactemail'
                                type='text'
                                value={formState.contactemail}
                                onChange={handleChange}
                            />
                            <Typography
                                style={{
                                    color: '#fff',
                                    textAlign: 'left',
                                }}
                            >
                                Message:
                            </Typography>
                            <input
                                prop='contactmessage'
                                type='text'
                                value={formState.contactmessage}
                                onChange={handleChange}
                                style={{ height: '200px' }}
                            />
                            {errorMessage && (
                                <div
                                    style={{
                                        color: 'red',
                                        textAlign: 'left',
                                    }}
                                >
                                    <p className='error-text'>{errorMessage}</p>
                                </div>
                            )}
                            <button
                                type='submit'
                                style={{
                                    backgroundColor: '#061985',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    width: '100px',
                                    marginTop: '20px',
                                }}
                            >
                                Submit
                            </button>
                        </Typography>
                    </form>

                    <Typography
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                        }}
                    >
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
