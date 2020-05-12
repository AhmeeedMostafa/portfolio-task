import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Header from '../src/components/Header';
import AboutSection from '../src/components/About';

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Index = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <AboutSection />
  </div>
);

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index);