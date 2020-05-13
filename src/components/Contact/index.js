import React from 'react';

import { withStyles, Grid, Divider } from '@material-ui/core';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';

const styles = ((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  }
}));


const ContactSection = ({ classes }) => (
  <Grid container alignItems="center" justify="center" spacing={0}>
    <Grid item xs={6}>
      <ContactForm />
    </Grid>
    <Grid item xs={6}>
      <SocialMediaLinks />
    </Grid>
  </Grid>
);

export default withStyles(styles)(ContactSection);