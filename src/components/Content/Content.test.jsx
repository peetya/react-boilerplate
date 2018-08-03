import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

test('matches snapshot', () => {
    const component = renderer.create(
        <Content>
            <p>Test</p>
        </Content>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
