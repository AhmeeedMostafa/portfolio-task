import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const NextComposed = React.forwardRef((props, ref) => {
    const { as, href, ...other } = props;
  
    return (
      <NextLink href={href} as={as}>
        <a ref={ref} {...other} />
      </NextLink>
    );
  });
  
NextComposed.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
};