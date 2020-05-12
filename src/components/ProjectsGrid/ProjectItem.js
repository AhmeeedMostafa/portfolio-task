import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles, GridListTile, GridListTileBar, Link, ThemeProvider
} from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    maxWidth: 350,
    padding: theme.spacing(0.3),
  },
  img: {
    width: '100%',
    maxHeight: 200,
  },
}));

const ProjectItem = ({ classes, id, name, img }) => (
  <div className={classes.root}>
    <Link href={`/projects/[pid]`} as={`/projects/${id}`}>
      <GridListTile>
        <img src={img} alt={name} className={classes.img} />
        <GridListTileBar
          title={name}
        />
      </GridListTile>
    </Link>
  </div>
);

ProjectItem.defaultProps = {
  img: '/imgs/no-image.png',
}

ProjectItem.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
}

export default withStyles(styles)(ProjectItem);
