import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Paper, Divider } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing.unit * 2,
    },
    list: {
        width: '100%',
        maxHeight: '600px',
        overflow: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    listItem: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '90%',
        },

        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '33.33%',
        },
    },

    expansionPanelDetails:{
        display:'inline-block',
        padding:theme.spacing.unit*4
    },

    subHeader: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderStyle: 'solid',
        borderWidth: 1,
    },

    grow: {
        flexGrow: 1,
        margin: '2px'
    },

    icon: {
        color: 'white',
    },
});



const tileData = [
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },
    {
        img: null,
        doctor: 'Dr. Namal Gamage',
        specialization: 'Heart surgon',
        channelingCenter: '',
        city: '',
        date: new Date().toLocaleDateString(),
        AvailableChitNo: 20,
    },


];

function AdvancedGridList(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <List className={classes.list} subheader={<ListSubheader className={classes.subHeader} component="div" color='primary'>Search Results</ListSubheader>}>
                {tileData.map(tile => (
                    <ListItem className={classes.listItem} key={tile.img} >
                        <ExpansionPanel varient='outlined' className={classes.grow}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='subtitle2' className={classes.heading}>{tile.doctor + ' is available on ' + tile.date}</Typography>
                            </ExpansionPanelSummary>
                            <Divider />
                            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                                
                                <Typography style={{display:'block'}} variant='subheading'>
                                    Doctor : Dr. Namal Gamage
                                 </Typography>
                                 
                                <Typography variant='subheading'>
                                    Specialization : cardiologist
                                 </Typography>
                                <Typography variant='subheading'>
                                    Venue : Asiri Hospitils
                                 </Typography>
                                <Typography variant='subheading'>
                                    City : Colombo
                                 </Typography>
                                <Typography variant='subheading'>
                                    Date : 02/04/2019
                                 </Typography>
                                <Typography variant='subheading'>
                                    Time : 09:30 pm
                                 </Typography>
                                 <Typography variant='subheading'>
                                    Available Chit No : 10
                                 </Typography>


                            </ExpansionPanelDetails>
                            <ExpansionPanelActions>
                                <Button size="small">Cancel</Button>
                                <Button size="small" color="primary">
                                    Book
                                </Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>

                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

AdvancedGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);
