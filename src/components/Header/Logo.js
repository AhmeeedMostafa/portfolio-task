import React from 'react';

import { Typography } from '@material-ui/core';

import Link from '../_common/Link';

const Logo = () => (
  <Link href="/">
    <Typography variant="h6" component="b" color="textPrimary">
      Ahmed Khallaf
    </Typography>
  </Link>
);

export default Logo;