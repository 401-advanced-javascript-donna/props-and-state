import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display Component', () => {
  it('should render color', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='red'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
