import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';

const findDoctorStyles = theme =>({

});

const FindDoctor = (props)=>{
     const {classes} = props;
    return(
        <TextField
                id="mui-theme-provider-outlined-input"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                type={'text'}
                label="Doctor"
                value={''}
                onChange={null}
                fullWidth={true}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={null}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
    );

}

export default withStyles(findDoctorStyles)(FindDoctor);