import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('Color Container component', () => {
  it('should render color container', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
