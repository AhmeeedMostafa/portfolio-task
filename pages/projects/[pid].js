
import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import Project from '../../src/components/Project';
import getProjects from '../../src/utils/getProjects';

const pid = ({ project }) => {
  if (!project) {
    return <Typography align="center" variant="h3" color="error">Sorry, No project found with this id!</Typography>
  }
  
  return <Project project={project} />
}

export async function getStaticPaths() {
  const projects = await getProjects();

  const paths = projects.map(project => ({
    params: { pid: project.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = await getProjects(params.pid);

  return { props: { project } }
}

pid.propTypes = {
  project: PropTypes.object.isRequired,
}

export default pid;
