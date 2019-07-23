var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]
    
    emptyArray = [];
    
    for (let i = 0; i < marks.length; i ++){
      emptyArray.push(marks[i].mark)
      console.log(emptyArray)
    }
    
    let averageResult = (
    (emptyArray.reduce(function(x, currentVal){
        return x + currentVal;
    }, 0)
) / marks.length).toFixed();

console.log('First Method: ' + averageResult)