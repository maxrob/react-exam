import React from 'react';
import { shallow } from 'enzyme';
import Message from './index';

it('Render Message without crashing', () => {
  const wrapper = shallow(<Message message="test" isSuccess />);
  const message = 'test';
  expect(wrapper.contains(message)).toEqual(true);
});
