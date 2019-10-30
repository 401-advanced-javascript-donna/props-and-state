import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
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