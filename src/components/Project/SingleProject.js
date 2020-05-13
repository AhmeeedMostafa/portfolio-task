import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const styles = ((theme) => ({
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
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: '100vw',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const SingleProject = ({ classes, project }) => {
  const { name, link, description, images, technologies } = project;
  
  const data = [
    { name: 'Description', value: description },
    { name: 'Technologies', value: technologies },
    { name: 'Link', value: link },
  ];

  return (
    <div>
      <GridList className={classes.gridList} cols={2.5}>
        {images.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleProject);