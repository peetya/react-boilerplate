import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Router from './Router';

test('matches snapshot', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Router />
        </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
