
let Song = require('./Song');

beforeAll(()=> {
    song1 = new Song('Super Massive Black Hole', 'Black Holes and Revelations', 'Muse');
    song2 = new Song('The Hell Song', 'Does this look infected?', 'Sum 41');
    song3 = new Song('All The Small Things', 'Enema Of The State', 'Blink 182');
    song4 = new Song('Anthem', 'Enema Of The State', 'Blink 182')
    song5 = new Song('Californication', 'Californication', 'Red Hot Chilli Peppers');
    duplicatedSong = new Song('Super Massive Black Hole', 'Black Holes and Revelations', 'Muse')
});



// D
describe('The songs should have the correct information and method',() => {
    test('should return the string responding the names, album and author, song1',() => {
        expect(song1.getDescription()).toEqual('The name of this song is Super Massive Black Hole and it is from the album Black Holes and Revelations. It was written by Muse.')
        
    });
    test('should return the string responding the names, album and author, song2',() => {
        expect(song2.getDescription()).toEqual('The name of this song is The Hell Song and it is from the album Does this look infected?. It was written by Sum 41.')
        
    });
    test('should return the string responding the names, album and author, song3',() => {
        expect(song3.getDescription()).toEqual('The name of this song is All The Small Things and it is from the album Enema Of The State. It was written by Blink 182.')
        
    });
    test('should return the string responding the names, album and author, song4',() => {
        expect(song4.getDescription()).toEqual('The name of this song is Anthem and it is from the album Enema Of The State. It was written by Blink 182.')
        
    });
    test('should return the string responding the names, album and author, song5',() => {
        expect(song5.getDescription()).toEqual('The name of this song is Californication and it is from the album Californication. It was written by Red Hot Chilli Peppers.')        
    });
  
});


//E
describe('You should be able to check if the songs are in the same album or not', ()=>{
    test('should match the song in the same album',() => {
        expect(song3.isInTheSameAlbumAs(song4)).toBeTruthy();
    })
    test('should be false if songs are not in the same album',() => {
        expect(song1.isInTheSameAlbumAs(song5)).toBeFalsy();
    })
})

// F

beforeEach(()=>{
    expect.extend({
    toBeInTheSameAlbumAs(song1){
      const pass = ( song.album === song1.album)
      if(pass){
        return {
          message: () =>
          `expected ${song.album} to equal ${song1.album}`,
          pass: true,
        };
      } else {
        return {
          message: () => 
          `expected ${song.album} to equal ${song1.album} and I didn't get it.... it got ${song1.album}`,
          pass: false,
        };
      }
    },
  });
  })

  describe('The Song class and test can use a custom matcher', () => {
    test('It should return true if both songs are in the same album', ()=>{
        expect(song3).toBeInTheSameAlbumAs(song3, song4);
    });

    test('It should return true if both songs are in the same album', ()=>{
      // this should fail 
      expect(song1).toBeInTheSameAlbumAs(song2, song1);
  });

});

// H 

describe('We can check to see if two objects which have the same values are different objects', ()=>{

  test("should be different song even if the attributes are the same",function(){
    //the next three lines explain what we are testing - technically not part of the test.
    // arr1 is an array, with the values, 1,2,3 and an object - arr2 is actually assigned arr1 so that it references the values.
    let arr1 = [1,2,3,{a:1}];
    let arr2 = arr1;
    expect(arr1).toBe(arr2);
    expect(song1).not.toBe(duplicatedSong);
    expect(song1).toBe(song1);
});

test("should be equal to the duplicated song as the attributes are the same",function(){
      //the next three lines explain what we are testing - technically not part of the test.
      // here arr1 and arr2 are the exact same arrays, but different instances of the objects. 
    let arr1 = [1,2,3,{a:1}];
    let arr2 = [1,2,3,{a:1}];
    expect(arr1).toEqual(arr2);
    expect(song1).toEqual(duplicatedSong);
    expect(song1).toEqual(song1);

    // the point of ex H is to show you the difference between the matchers toBe and toEqual.
});
})






