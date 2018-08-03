import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./HomePage'),
    loading: () => <div>Loading...</div>,
    delay: 1000,
});

const LoadableHomePage = () => (
    <LoadableComponent />
);

export default LoadableHomePage;
