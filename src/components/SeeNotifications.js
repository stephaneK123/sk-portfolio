import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    }
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function SeeNotfication() {
    return (
        <React.Fragment sx={{}}>
            <CssBaseline />
            <Paper square sx={{ pb: '0px', width: '45%'}}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Reviews 
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Today
                                </ListSubheader>
                            )}

                            {id === 3 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Yesterday
                                </ListSubheader>
                            )}

                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText  primary={primary} secondary={secondary} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
}
