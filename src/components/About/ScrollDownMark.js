import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: '48vw',
    backgroundColor: theme.palette.secondary.main,
    '&::after': {
      border: 'solid black',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: 3,
      transform: 'rotate(45deg)',
      '-webkit-transform': 'rotate(45deg)',
    }
  },
}));

const ScrollDownMark = ({ classes }) => {
    return (
        <div className={classes.root}>
            Scroll down
        </div>
    )
}

ScrollDownMark.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ScrollDownMark);
