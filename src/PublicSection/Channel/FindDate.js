import React,{Fragment, useState} from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { InlineDatePicker,MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns"; 
const findDateStyles = theme =>({

});

const FindDate = (props)=>{
     const {classes} = props;
     const [selectedDate, handleDateChange] = useState(new Date());
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InlineDatePicker
         fullWidth={true}
          keyboard
          clearable
          variant="outlined"
          label="Choose a Date"
          value={selectedDate}
          onChange={handleDateChange}
          format="dd/MM/yyyy"
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        />
        </MuiPickersUtilsProvider>
    );

}

export default withStyles(findDateStyles)(FindDate);

