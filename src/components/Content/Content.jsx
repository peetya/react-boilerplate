import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
    <div className="app-content">
        <div className="container">
            {children}
        </div>
    </div>
);

Content.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default Content;
