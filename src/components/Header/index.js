import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, Button, withStyles } from '@material-ui/core';

import Link from '../_common/Link';
import { routes } from '../../utils/constants';

const styles = (theme) => ({
  title: {
    flexGrow: 0.7,
  },
  link: {
    color: 'black',
    paddingRight: theme.spacing(4),
  },
});


const Header = ({ classes }) => {
  const handleLinkClicking = (event) => {
    const targetUrl = event.target.href;
    const startOfSectionId = targetUrl.indexOf('#') + 1;
    const sectionId = targetUrl.substr(startOfSectionId);
    const requestedSection = document.getElementById(sectionId);
    
    if (requestedSection) {
      event.preventDefault();
      requestedSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <AppBar position="relative">
      <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ahmed Khallaf
          </Typography>
          {routes.map(({ path, name }) => (
            <Link key={name} href={path} className={classes.link} onClick={handleLinkClicking}>
              {name}
            </Link>
          ))}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);