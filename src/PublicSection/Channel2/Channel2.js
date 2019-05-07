import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import AdvancedGridList from './ChannelContent';

const Channel2Styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,

    },
    selectionRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formRoot: {
        flexGrow: 1,
        textAlign: 'center'
    },
    formControl: {
        margin: theme.spacing.unit,
        height:'54px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '46%',
        },

        [theme.breakpoints.up('md')]: {
            width: '30%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '15%',
        },
    },
    button: {
        margin: theme.spacing.unit,
        height: '55px'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },

});

class Channel2 extends Component {

    theme = createMuiTheme({
        palette: {
            primary: { main: lightGreen[600] }, // Purple and green play nicely together.
            secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        },
        typography: { useNextVariants: true },
    });

    state = {
        selections: [{
            value: '',
            name: 'Doctor',
            labelWidth: 0,
            InputLabelRef: ''
        },
        {
            value: '',
            name: 'Specialization',
            labelWidth: 0,
            InputLabelRef: ''
        },
        {
            value: '',
            name: 'Channling Center',
            labelWidth: 0,
            InputLabelRef: ''
        },
        {
            value: '',
            name: 'City',
            labelWidth: 0,
            InputLabelRef: ''
        }],
        date: new Date()
    };

    componentDidMount() {
        this.setState({
            selections: [
                { ...this.state.selections[0], labelWidth: ReactDOM.findDOMNode(this.state.selections[0].InputLabelRef).offsetWidth },
                { ...this.state.selections[1], labelWidth: ReactDOM.findDOMNode(this.state.selections[1].InputLabelRef).offsetWidth },
                { ...this.state.selections[2], labelWidth: ReactDOM.findDOMNode(this.state.selections[2].InputLabelRef).offsetWidth },
                { ...this.state.selections[3], labelWidth: ReactDOM.findDOMNode(this.state.selections[3].InputLabelRef).offsetWidth }
            ]
        });
    }

    handleDateChange = (date) => {
        this.setState({ date: date });
    }

    handleChange = (event, index) => {
        const sel = [...this.state.selections];
        const obj = { ...this.state.selections[index], value: event.target.value };

        sel.splice(index, 1, obj);
        console.log(sel);
        this.setState({ selections: sel });
    };

    render() {

        const { classes } = this.props;
        //const [selectedDate, handleDateChange] = useState(new Date());
        return (
            <MuiThemeProvider theme={this.theme}>
                <Paper className={classes.root} elevation={2}>
                    <div className={classes.selectionRoot}>
                        <form className={classes.formRoot} autoComplete="off">

                            {this.state.selections.map((Item, index) => (
                                <FormControl key={index} variant="outlined" className={classes.formControl}>
                                    <InputLabel
                                        ref={ref => {
                                            this.state.selections[index].InputLabelRef = ref;
                                        }}
                                        htmlFor="outlined-age-simple"
                                    >
                                        {Item.name}
                                    </InputLabel>
                                    <Select
                                        value={Item.value}
                                        onChange={(event) => this.handleChange(event, index)}
                                        input={
                                            <OutlinedInput
                                                labelWidth={Item.labelWidth}
                                                name={Item.name}
                                                id="outlined-age-simple"
                                            />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>Any</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            ))}
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <InlineDatePicker
                                    keyboard
                                    clearable
                                    variant="outlined"
                                    label="Choose a Date"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                    format="dd/MM/yyyy"
                                    mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
                                    className={classes.formControl}
                                />
                            </MuiPickersUtilsProvider>

                            <Button variant="outlined" color="primary" className={classes.formControl}>Search</Button>

                        </form>
                    </div>

                </Paper>
                <AdvancedGridList/>
            </MuiThemeProvider>
        );
    }
}

Channel2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Channel2Styles)(Channel2);
