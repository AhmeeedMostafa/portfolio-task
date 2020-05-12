import React from 'react'
import PropTypes from 'prop-types'
import { Box, withStyles } from '@material-ui/core';

const styles = ((theme) => ({ 
  img: {
    width: '50vw',
    position: 'relative',
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 10px)`,
    backgroundImage: "url('/imgs/Ahmed.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '80%',
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
  }
}));

const Picture = ({ classes }) => {
  return (
    <Box className={classes.img} />
  )
}

Picture.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Picture);
