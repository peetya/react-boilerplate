import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadableHomePage from '../pages/HomePage/LoadableHomePage';
import LoadableTestPage from '../pages/TestPage/LoadableTestPage';

const Router = () => (
    <Switch>
        <Route path="/" exact component={LoadableHomePage} />
        <Route path="/test" component={LoadableTestPage} />
    </Switch>
);

export default Router;
