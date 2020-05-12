import React from 'react';
import PropTypes from 'prop-types';

import Details from './Details';
import Picture from './Picture';

const AboutSection = props => {
    return (
        <div>
            <Details />
            <Picture />
        </div>
    )
}

AboutSection.propTypes = {

}

export default AboutSection;
