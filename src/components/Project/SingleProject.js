import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    height: '45vh',
    width: '100vw',
    backgroundImage: ({ img }) => `url('${img}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1),
  },
  name: {
    marginLeft: theme.spacing(5),
  },
  section: {
    marginLeft: theme.spacing(5),
    textAlign: 'center',
    padding: theme.spacing(3, 0),
    borderBottom: '1px solid black',
  },
  headline: {
    fontWeight: 'bold',
    float: 'left',
  },
}));

const SingleProject = ({ project }) => {
  const { name, link, description, img, technologies } = project;
  
  const data = [
    { name: 'Description', value: description },
    { name: 'Technologies', value: technologies },
    { name: 'Link', value: link },
  ];

  const classes = useStyles({ img });

  return (
    <div>
      <div className={classes.img}></div>
      <Typography variant="h3" className={classes.name}>{name}</Typography>
      {data.map(({ name, value }) => (
        <div key={name} className={classes.section}>
          <Typography display="inline" className={classes.headline}>{name} </Typography>
          <Typography display="inline" className={classes.value}>{value}</Typography>
        </div>
      ))}
    </div>
  );
}

SingleProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default SingleProject;