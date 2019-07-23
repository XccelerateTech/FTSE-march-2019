$(function(){

    var fields = $('.field');
    var clicks = 0;
    var cross = [];
    var circle = []
    var won = false;

    var possibleCombinations = {
        1: [1,2,3],
        2: [4,5,6],
        3: [7,8,9],
        4: [1,4,7],
        5: [2,5,8],
        6: [3,6,9],
        7: [1,5,9],
        8: [3,5,7],
    };

    fields.on('click', function(e){
        if(won){
            return
        }

        var id= e.target.id;
        var field = $(`#${id}`);

        if(field.hasClass('cross') || field.hasClass('circle')){
            return;
        }

        if(clicks % 2 === 0){
            field.addClass('cross');
            cross.push(parseInt(id));
            checkWin(cross, 'cross');
        } else {
            field.addClass('circle');
            circle.push(parseInt(id));
            checkWin(circle, 'circle');
        }
        clicks ++;
    });

    function checkWin(arr, name){
        if(arr.length < 3) return;

        for(var p in possibleCombinations){
            if(possibleCombinations[p].every(elem=> arr.indexOf(elem) > -1)){
                won = true;
                setTimeout(function(){
                    return alert(`player ${name} won`)
                }, 500);
            }
        }
    }
    $('#reload-btn').click(function(){
        fields.removeClass('cross circle');
        cross = [];
        circle = [];
        clicks = 0;
        won = false;
    });
});