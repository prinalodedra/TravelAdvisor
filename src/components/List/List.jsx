/*import React from "react";
import { CircularProgress, Grid,  } from "@material-ui/core";
import { Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';


const List = () => {
    return(
        <h1>List</h1>

         
    );
}

export default List;*/


import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = () => {
  const classes = useStyles();
  const [ type, setType] = useState('restaurents');
  const [ rating, setRating]  = useState('');

  const places = [
    {name: 'cool Place' },
    {name: 'Best Beer' },
    {name: 'Best Steak' },

  ];

  return (
         <div className={classes.container}>

       <Typography variant="h4">Food & Dining around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className='classes.list'>
                {places?.map((place, i) => (
                    <Grid item Key={i} xs={12}>
                            <PlaceDetails place ={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    
  );
};

export default List;
