import React from 'react';
import CoffeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import coffeMakerList from './constants';

const Content = () => {
    const getCoffeeMakerCard = coffeeMakerObj => {
        return(
            <Grid item xs={12} sm={4}>
            <CoffeCard {...coffeeMakerObj} />
            </Grid>
        );
    };





    return (
        <Grid container spacing={4}>
        {coffeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    ); 
};


export default Content;