const profile = require('../src/components/Profile/Profile')

describe('Tick Properties', function() {
    test('fiveTicks should have a length of 5 and be an array', function(){
        expect( Array.isArray(profile.fiveTicks) ).toEqual(true);
        expect( profile.fiveTicks.length ).toEqual(5)
    })
});

describe('Todo Properties', function() {

});