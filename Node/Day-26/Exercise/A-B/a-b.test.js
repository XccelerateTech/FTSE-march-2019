describe('testing the test suite Jest', function(){
    test('I am in the test block 1', function(){
        console.log('I am the test Block one: reporting in')
    });
    test('I am in the test block 2', function(){
        console.log('I am the test Block two: reporting in')
    });
    test('I am in the test block 3', function(){
        console.log('I am the test Block three: reporting in')
    });
    test('I am in the test block 4', function(){
        console.log('I am the test Block four: reporting in')
    });
    test('I am in the test block 5 but I fail', function(){
        console.log('I am the test Block five but I fail')
        throw new Error();
    });
});