import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Header from '../Header';
import SingleProject from './SingleProject';

const styles = ((theme) => ({

}));

const Project = ({ classes, project }) => (
  <>
      <Header />
      <SingleProject project={project} />
  </>
);

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);