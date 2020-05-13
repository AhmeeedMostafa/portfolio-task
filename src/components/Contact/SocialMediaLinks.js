import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import { socialLinks } from '../../utils/constants';

const styles = ((theme) => ({
  root:{
    borderLeft: '2px solid black',
    paddingLeft: '11%',
    borderBottomLeftRadius: '11px',
    borderTopLeftRadius: '11px',
  },
  section: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    '& svg': {
      marginBottom: '-6px',
      marginRight: theme.spacing(1),
    }
  },
}));

const SocialMediaLinks = ({ classes }) => (
    <div className={classes.root}>
        {socialLinks.map((social) => (
            <div className={classes.section} key={social.url}>
                <social.icon />
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Typography display="inline" gutterBottom>{social.label}</Typography>
                </a>
            </div>
        ))}
    </div>
);

export default withStyles(styles)(SocialMediaLinks);