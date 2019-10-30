import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random Color Component', () => {
  it('should render a random color', () => {
    const wrapper = shallow(<RandomColor />);
    wrapper.setState({ backgroundColor: 'red' });
    expect(wrapper).toMatchSnapshot();
  });
});