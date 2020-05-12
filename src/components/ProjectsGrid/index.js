import React from 'react'
import PropTypes from 'prop-types'

import { GridList, GridListTile, ListSubheader, withStyles } from '@material-ui/core';
import ProjectItem from './ProjectItem';

const styles = ((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    paddingLeft: '7%',
  },
  gridList: {
    width: '80%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  listTileHeader: {
    height: 'auto !important',
  },
}));

const projects = [
    { id: 1, name: 'TeSTINGGGGaefaer aer' },
    { id: 4, name: 'raef aer' },
    { id: 3, name: 'sdvzdv aer' },
    { id: 2, name: 'faefaer' },
]

const index = ({ classes }) => {
    return (
      <div className={classes.root} id="projects">
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} className={classes.listTileHeader}>
            <ListSubheader component="div">Projects</ListSubheader>
          </GridListTile>
            {projects.map(project => <ProjectItem key={project.id} {...project} />)}
        </GridList>
      </div>
    )
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(index);
