import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Header from '../src/components/Header';
import AboutSection from '../src/components/About';
import ProjectsGrid from '../src/components/ProjectsGrid';
import ContactSection from '../src/components/Contact';

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Index = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <AboutSection />
    <ProjectsGrid />
    <ContactSection />
  </div>
);

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index);