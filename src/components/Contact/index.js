import React from 'react';

import { withStyles, Button } from '@material-ui/core';
import ContactForm from './ContactForm';

const styles = ((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  }
}));


const ContactSection = ({ classes }) => (
  <ContactForm />
);

export default withStyles(styles)(ContactSection);