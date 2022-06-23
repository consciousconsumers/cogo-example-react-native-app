import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('<Button />', () => {
  it('renders a default button correctly', () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('renders a primary button correctly', () => {
    const button = renderer.create(<Button buttonStyle='primary' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('renders a secondary button correctly', () => {
    const button = renderer.create(<Button buttonStyle='secondary' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('renders a circular primary button correctly', () => {
    const button = renderer.create(<Button buttonStyle='primary' buttonShape='circle' icon='plus' />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('renders a circular secondary button correctly', () => {
    const button = renderer.create(<Button buttonStyle='secondary' buttonShape='circle' icon='minus' />).toJSON();
    expect(button).toMatchSnapshot();
  });
});