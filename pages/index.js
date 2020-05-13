import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Header from '../src/components/Header';
import AboutSection from '../src/components/About';
import ProjectsGrid from '../src/components/ProjectsGrid';
import ContactSection from '../src/components/Contact';
import getProjects from '../src/utils/getProjects';

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Index = ({ classes,projects }) => (
  <div className={classes.root}>
    <Header />
    <AboutSection />
    <ProjectsGrid projects={projects} />
    <ContactSection />
  </div>
);

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects
    },
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
}

export default withStyles(styles)(Index);