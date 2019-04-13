import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import FindDoctor from '../Channel/FindDoctor';
import FindDate from '../Channel/FindDate';
import FindPlace from '../Channel/FindPlace';
import Confirm from '../Channel/Confirm';

const channelStyles = theme => ({
    card: {
        maxWidth: '600px',
        margin: '0.5rem'
    },
    root: {
        width: '100%',
        textAlign: 'left',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },

});


function getSteps() {
    return ['Find your Doctor', 'Fix a Date', 'Choose a Place','Available Options','Confirm your appointment'];
}

function getStepContent(step) {
    
    switch (step) {
        case 0:
            return (<FindDoctor/>);
        case 1:
            return (<FindDate/>);
        case 2:
            return (<FindPlace/>);
        case 3:
            return (<Confirm/>);
        case 4:
            return (<Confirm/>);
        default:
            return 'Unknown step';
    }
}

class Channel extends Component {
    theme = createMuiTheme({
        palette: {
            primary: { main: lightGreen[600] }, // Purple and green play nicely together.
            secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        },
        typography: { useNextVariants: true },
    });
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };




    render() {

        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <MuiThemeProvider theme={this.theme}>
                <Card className={classes.card}>
                    <CardHeader title={<Typography variant="h4" color="primary">Place an appointment</Typography>} avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    } />
                    <Divider />
                    <CardContent className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <div>{getStepContent(index)}</div>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                        </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography>All steps completed - you&apos;re finished, Do you want to place another one?</Typography>
                                <Button onClick={this.handleReset} className={classes.button}>
                                    Make another appointment
                        </Button>
                            </Paper>
                        )}
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>

                </Card>
            </MuiThemeProvider>


        );
    }

}

export default withStyles(channelStyles)(Channel);