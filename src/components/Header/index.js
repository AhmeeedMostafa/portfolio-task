import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  IconButton, AppBar, Toolbar, Typography, Switch, withStyles, NoSsr, useMediaQuery
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


import Link from '../_common/Link';
import { routes } from '../../utils/constants';
import handleNavigation from '../../utils/handleNavigation';
import DrawerMenu from './DrawerMenu';
import ToggleThemeButton from './ToggleThemeButton';
import Logo from './Logo';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  links: {
    marginLeft: 'auto',
  },
  link: {
    marginRight: theme.spacing(8),
    fontSize: 18,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.dark,
      fontWeight: 'bold',
      transition: '0.5s',
      borderBottom: `2px solid ${theme.palette.secondary.dark}`,
    }
  },
  menuButton: {
    marginLeft: 'auto',
  },
});


const Header = ({ classes }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isNotSmallScreen = useMediaQuery('(min-width:715px)');

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Logo />
          {isNotSmallScreen 
            ? (
              <div className={classes.links}>
                {routes.map(({ path, name }) => (
                  <Link
                    key={name}
                    href={path}
                    className={classes.link} 
                    onClick={handleNavigation}
                    color="textPrimary"
                  >
                    {name}
                  </Link>
                ))}
                <ToggleThemeButton />
              </div>
            ) :
            (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={openDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            )}
        </Toolbar>
      </AppBar>
      {!isNotSmallScreen 
        && <DrawerMenu isOpen={isDrawerOpen} openDrawer={openDrawer} closeDrawer={closeDrawer} />}
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);