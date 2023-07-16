import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";

import {
    AboutMe,
    Work,
    Contact,
} from '../index'

import {
    cv,
    menuIcon,
} from '../../images'

export const DrawerComponent = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    if (props.isMobile === true) {
    return (
        <div>
        </div>
    )
    } else {
        console.log('props.isMobile is false', 'rendering DrawerComponent');
    }
    return (
        <div>
            <Button onClick={() => setOpenDrawer(true)}><img height={30} src={menuIcon}></img></Button>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor={"left"}
            >
                <List
                    style={{ backgroundColor: '#061985', height: '100vh' }}    
                >
                    <ListItem onClick={() => {
                        props.setCurrentTab('AboutMe');
                        setOpenDrawer(false)
                        }}>
                        <ListItemText>
                            About Me
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {
                        props.setCurrentTab('Work');
                        setOpenDrawer(false)
                        }}>
                        <ListItemText
                        >
                            Work
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {
                        props.setCurrentTab('Contact');
                        setOpenDrawer(false)
                    }}>
                        <ListItemText>
                            Contact
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <a
                                href={cv}
                                download
                                style={{ textDecoration: 'none' }}
                            >Download Resume</a>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            </IconButton>
            </div>
    );
}