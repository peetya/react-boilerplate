import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from './Header';

test('matches snapshot', () => {
    const component = renderer.create(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
