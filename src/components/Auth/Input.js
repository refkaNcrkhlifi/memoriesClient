import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import Visibilty from '@material-ui/icons/Visibility'
import VisibiltyOff from '@material-ui/icons/VisibilityOff'
import React from 'react'

export const Input = ({ half, name, label, handleChange, type, autoFocus, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField name={name}
                label={label}
                onChange={handleChange}
                type={type}
                variant="outlined"
                required
                fullWidth
                autoFocus={autoFocus}
                InputProps={
                    name === "password" ? {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === "password" ? <Visibilty /> : <VisibiltyOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    } : null
                }
            />
        </Grid>
    )
}
