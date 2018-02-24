/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import { shallow } from 'enzyme';

describe('splash', () => {
  it('should match snapshot', () => {
    const mockLocation = {
      pathname: '/'
    }
    const wrapper = shallow(<Splash location={ mockLocation }/>);
    expect(wrapper).toMatchSnapshot();
  })
}) 