const users = {
    test1: 'abcdef',
    test2: 'qwerty'
};

describe('Auth Challenger', () => {
    const authChallenger = require('../AuthChallenger')(users);
    
    test('returns false for incorrect username and password', function() {
        expect(authChallenger('incorrect', 'password')).toBe(false);
    });

    test('returns false for null username and password', function() {
        expect(authChallenger(null, null)).toBe(false);
    });

    test('returns false for undefined username and password', function() {
        expect(authChallenger()).toBe(false);
    });

    test('returns false for correct username and incorrect password', function() {
        expect(authChallenger('test1', 'password')).toBe(false);
    });

    test('returns false for incorrect username and correct password', function() {
        expect(authChallenger('incorrect', users['test1'])).toBe(false);
    });

    test('returns true for correct username and correct password', function() {
        expect(authChallenger('test1', users['test1'])).toBe(true);
    });
});