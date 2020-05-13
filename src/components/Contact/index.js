import React from 'react';

import { Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';


const ContactSection = () => (
  <Grid container alignItems="center" justify="center" spacing={0}>
    <Grid item xs={6}>
      <ContactForm />
    </Grid>
    <Grid item xs={6}>
      <SocialMediaLinks />
    </Grid>
  </Grid>
);

export default ContactSection;