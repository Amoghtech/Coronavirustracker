import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
/*Typography is used for text */
import CountUp from 'react-countup';
import cx from 'classnames'
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  /*CountUp is for that loading effect */
  return (
    <div class={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              ></CountUp>
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString() /*For human readable form*/}
            </Typography>
            <Typography VARIANT='body2'>
              Number of active cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered{' '}
            </Typography>

            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              ></CountUp>
            </Typography> <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString() /*For human readable form*/}
            </Typography>
            <Typography VARIANT='body2'>
              Number of recoveries from of covid 19
            </Typography>
          </CardContent>
        </Grid>{' '}
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>

            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              ></CountUp>
            </Typography>     <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString() /*For human readable form*/}
            </Typography> <Typography variant='body2'>
              Number of deathys caused by covid19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
