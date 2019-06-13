import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import App from './App'
import { shallow } from 'enzyme';
import { PureLogin } from './components/Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




// describe('<App />', () => {
//   it('renders a <App /> with a navbar', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(NavBar).length).toEqual(1);
//   });
//   it('the navbar has five nav items', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find(NavItem).length).toEqual(5);
//   });


// });

describe('<Login />', () => {
    it('renders a <Login /> with two inputs', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find(input).length).toEqual(2);
    });
  });