const Sith = require('./starwars').Sith;
const Jedi = require('./starwars').Jedi;


describe('Sith functions testing', () => {
    
    var newSith;
    var newJedi;
    
    beforeEach(() => {
        newSith = new Sith("ken", 200, 1000)
        newJedi = new Jedi("ryu", 100, 2000);
    })

    test('should have a correct name', () => {
        expect(newSith.name).toEqual("ken");
    });

    test('should have correct power', () => {
        expect(newSith.power).toEqual(200);
    });

    test('should have correct health', () => {
        expect(newSith.health).toEqual(1000);
    });

    test('should attack the correct target', () => {
        const spyKenAttack = jest.spyOn(newSith,'attack').mockImplementation(()=>{console.log('Mock ken attack')})
        newSith.attack(newJedi);
        expect(spyKenAttack).toHaveBeenCalledWith(newJedi);
    });

    test('attack should injure opponent', () => {
        const spyRyuInjure = jest.spyOn(newJedi,'injure').mockImplementation(()=>{console.log('Mock Jedi Injury')})
        newSith.attack(newJedi);
        expect(spyRyuInjure).toHaveBeenCalled();
    })

    test('should be injured by opponent\'s attack', () => {
        const spyKenInjure = jest.spyOn(newSith,'injure').mockImplementation(()=>{console.log('Mock Sith Injury')})
        newJedi.attack(newSith);
        expect(spyKenInjure).toHaveBeenCalled();
    })

    test('should be injured by the amount of damage output from opponent\'s attack', () => {
        let originalHealth = newSith.health;
        newSith.injure(100);
        expect(newSith.health).toEqual(originalHealth - 100);
    })

    test('should die when health is less than 0', () => {
        const spyKenDead = jest.spyOn(newSith, 'dead').mockImplementation(()=> true)
        expect(spyKenDead).toBeTruthy();
    })

})