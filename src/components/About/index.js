import React from 'react';

import { Grid } from '@material-ui/core';

import Details from './Details';
import Picture from './Picture';

const AboutSection = () => {
  return (
      <Grid container alignItems="center" justify="center" spacing={0}>
          <Grid item xs={6}>
            <Details />
          </Grid>
          <Grid item xs={6}>
            <Picture />
          </Grid>
      </Grid>
  )
}

export default AboutSection;
