//method using class

//import HelloWorld from './hello-world';

// const helloWorld = new HelloWorld();

// describe('Hello World', () => {
//   test('says hello', () => {
//     expect(helloWorld.hello()).toEqual('Hello, World!');
//   });
// });

import {hello} from "./hello-world";

describe('Hello World', ()=> {
  test('It says hello', ()=> {
    expect(hello()).toEqual('Hello, World!');
  })
})
