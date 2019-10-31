import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Display Component', () => {
  it('should render color', () => {
    const wrapper = shallow(<ColorPicker colors={
      [
        'red',
        'green',
        'black',
        'yellow'
      ]
    }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
