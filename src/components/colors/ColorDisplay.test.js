import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Color Display Component', () => {
  it('should render color', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='red'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
