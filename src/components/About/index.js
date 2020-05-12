import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Grid } from '@material-ui/core';

import Details from './Details';
import Picture from './Picture';
import ScrollDownMark from './ScrollDownMark';

const styles = ((theme) => ({
   
}));

const AboutSection = ({ classes }) => {
  return (
    <React.Fragment>
      <Grid container alignItems="center" justify="center" spacing={0}>
          <Grid item xs={6}>
            <Details />
          </Grid>
          <Grid item xs={6}>
            <Picture />
          </Grid>
      </Grid>
      <ScrollDownMark />
    </React.Fragment>
  )
}

AboutSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutSection);
