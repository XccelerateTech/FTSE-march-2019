import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App /> and what it renders', () => {
  it('renders a header inside the <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header').length).toEqual(1);
  });

  it('renders an <image /> tag', ()=>{
    const wrapper = shallow (<App />);
    expect(wrapper.find('img.App-logo').length).toEqual(1);
  })

  it('renders a anchor tag with a className', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('a.App-link').length).toEqual(1)
  })
});