import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import Link from '../_common/Link';
import { routes } from '../../utils/constants';
import handleNavigation from '../../utils/handleNavigation';
import ToggleThemeButton from './ToggleThemeButton';

const DrawerMenu = ({ isOpen, closeDrawer }) => (
    <Drawer anchor='right' open={isOpen} onClose={closeDrawer}>
      <List>
        {routes.map(({ name, path, Icon}) => (
          <ListItem
            key={name}
            href={path}
            button
            component={Link}
            onClick={(e) => { closeDrawer(); handleNavigation(e);  }}
          >
            <ListItemIcon>{<Icon />}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ToggleThemeButton />
    </Drawer>
);

DrawerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
}

export default DrawerMenu;