const tripler = require('./functions');
const logger = require('./functions').logger;
const adder = require ('./functions').adder;


describe('My third Jest test specification for adder', ()=>{
    test('add will add the two parameters together', ()=>{
        expect(adder(5,10)).toBe(15);
    });
});

describe('My first Jest test specification for tripler', () => {
    test('tripler will triple the number three to make nine', ()=>{
        expect(tripler(3)).toBe(9);
    });

    test('tripler will output 0 if the input is 0', ()=>{
        expect(tripler(0)).toBe(0);
    });
});



//testing a string, a logged amount of data.

describe('My second Jest test specification for logger', ()=>{
    let outputData = '';

    beforeEach(()=>{
        outputData = '';
    });

    storeLog = inputs => (outputData += inputs);
    test('logger will console.log hello world', ()=>{
        console["log"] = jest.fn(storeLog);
        logger('Hello World');
        expect(outputData).toBe('Hello World')
    });

    // wont work unless we clear the output data before each test. 
    test('logger can console.log numbers, as a string', ()=>{
        console["log"] = jest.fn(storeLog);
        logger(45);
        expect(outputData).toBe("45");
    })

    //when you console.log. the value is made into a string
});




