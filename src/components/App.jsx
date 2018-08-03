import React from 'react';
import Header from './Header';
import Content from './Content';
import Router from './Router';

import './App.scss';

const App = () => (
    <div className="app-wrapper">
        <Header />
        <Content>
            <Router />
        </Content>
    </div>
);

export default App;
