var sebastian = {
    name: "sebastian",
    age: '22',
    course: "FTSE",
    here: true
}

var hello = [ sebastian, true, 3, 'I am so stringy'];

console.log(hello);


var pet = [ "dog", "cat", "hamster", "gecko", "parrot"]

var petList = pet.join("-");

console.log(petList)

var sortedPet = pet.sort();

console.log(sortedPet);

const mappedPet = pet.map(p => 
    console.log(p.toUpperCase()
    ))

var number = [ 1, 4, 8, 12, 40];

const mappedNumber = number.map(n =>
    n / 4
    )

    console.log(mappedNumber);


    const filteredPet = pet.filter(p => p.length > 5);

    console.log(filteredPet)


    const reducer = (accumulator, currentValue) => accumulator * currentValue;

    console.log(number.reduce(reducer));



    const add = {
        name: 'name',
        length: 2
    }



    function add (a, b) {
        return a + b
    };