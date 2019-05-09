import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Query, Mutation } from "react-apollo";
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import SelectAccountType from './SelectAccountType';
import SignInWithGoogle from './SignInWithGoogle';
import Login from './Login';
import ChannelCenterDetails from './ChannelCenterDetails';
import { ADD_ChannelCenter } from '../AdminSection/Doctors/gql';
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
    return ['SignIn with Google', 'Select Account Type', 'Channel center Details', 'Confirm Registration'];
}

function getStepContent(step, varthis) {

    switch (step) {
        case 0:
            return (
                <SignInWithGoogle user={varthis.state.user} handleSetUser={varthis.handleSetUser} />

            );
        case 1:
            return (
                <SelectAccountType user={varthis.state.user} handleSetUser={varthis.handleSetUser} />
            );
        case 2:
            return varthis.state.user.userType === 'CCU' ? <ChannelCenterDetails channelCenter={varthis.state.channelCenter} handleSetChannelCenter={varthis.handleSetChannelCenter} /> : ''

        case 3:
            return ('');
        default:
            return 'Unknown step';
    }
}

class SignUp extends Component {
    theme = createMuiTheme({
        palette: {
            primary: { main: lightGreen[600] }, // Purple and green play nicely together.
            secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        },
        typography: { useNextVariants: true },
    });
    state = {
        activeStep: 0,
        user: {
            googleId: '',
            email: '',
            name: '',
            picture: '',
            userType: ''
        },
        channelCenter: {
            regNo: '',
            name: '',
            owner: '',
            address: '',
            phoneNo: '',
        }
    };

    handleSetUser = (user) => {
        this.setState({
            user: {
                googleId: user.googleId,
                email: user.email,
                name: user.name,
                picture: user.picture,
                userType: user.userType
            }
        });
    }

    handleSetChannelCenter = (ChannelCenter) => {
        this.setState({
            channelCenter: { ...ChannelCenter }
        });
    }

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
                    <CardHeader title={<Typography variant="h4" color="primary">SignUp To Our Service</Typography>} />
                    <Divider />
                    <CardContent className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <div>{getStepContent(index, this)}</div>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                {activeStep === steps.length - 1 ?
                                                    <Mutation mutation={ADD_ChannelCenter} onError={(error)=>alert(error)} onCompleted={(data) => alert(data + " is added success fully")}>
                                                        {(addChannelCenter, { loading, error, data }) => (
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => {
                                                                    addChannelCenter({
                                                                        variables: {
                                                                            userType: this.state.user.userType,
                                                                            regNo: this.state.channelCenter.regNo,
                                                                            name: this.state.channelCenter.name,
                                                                            owner: this.state.channelCenter.owner,
                                                                            address: this.state.channelCenter.address,
                                                                            phoneNo: this.state.channelCenter.phoneNo
                                                                        }
                                                                    })
                                                                        .catch(error => { console.log(error) })
                                                                    this.handleNext()
                                                                }}
                                                                className={classes.button}
                                                            >
                                                                CONFIRM
                                                            </Button>
                                                        )}
                                                    </Mutation>
                                                    :
                                                    <Button
                                                        variant="contained"
                                                        disabled={
                                                            (activeStep === 0 && this.state.user.googleId === '')
                                                            ||
                                                            (activeStep === 1 && this.state.user.userType === '')
                                                        }
                                                        color="primary"
                                                        onClick={this.handleNext}
                                                        className={classes.button}
                                                    >
                                                        NEXT
                                                    </Button>
                                                }

                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length  && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography>All steps completed - you&apos;re finished with registration, SignIn with Google to continue </Typography>
                                <Login />
                            </Paper>
                        )}
                    </CardContent>
                </Card>
            </MuiThemeProvider>


        );
    }

}

export default withStyles(channelStyles)(SignUp);