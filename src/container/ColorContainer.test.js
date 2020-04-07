import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('Color Container component', () => {
  it('should render color container', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change color when button clicked', () => {
    const wrapper = mount(<ColorContainer colors={
      ['red', 'green', 'black', 'yellow']
    }/>);
    wrapper.findWhere(el => el.key() === 'red').simulate('click');
    expect(wrapper.state('backgroundColor')).toBe('red');
  });
});
