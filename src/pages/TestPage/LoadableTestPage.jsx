import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./TestPage'),
    loading: () => <div>Loading...</div>,
    delay: 1000,
});

const LoadableTestPage = () => (
    <LoadableComponent />
);

export default LoadableTestPage;
