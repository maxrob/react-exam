import React from 'react';
import { shallow } from 'enzyme';
import Jedi from './index';

it('Render Jedi without crashing', () => {
  const wrapper = shallow(<Jedi jedi={{ id: '1', name: 'test' }} />);
  const message = 'test';
  const id = '1';
  expect(wrapper.contains(message)).toEqual(true);
  expect(wrapper.contains(id)).toEqual(true);
});
