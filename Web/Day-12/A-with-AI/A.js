var curPlayer = 1;
var ticArr = [0,0,0,0,0,0,0,0,0];
var won = 0;
let i = 0;

window.onerror = function(error){
    alert('There is some error when loading this game. Can you refresh the page again? Most possibily due to slow internet');
}


$(document).ready(function(){

    $('td i').hide();

    $('button.modePVP').click(function(){
        $('h3').html("It's Player 1's turn now! Be quick!");
        unbindButton('button.modePVP');

        $('td').click(function(){
            if (curPlayer == 1){
                
                $(this).children('.far.fa-circle').fadeIn();
                $(this).addClass('P1');
                $(this).unbind('click');
                $('h3').html("It's Player 2's turn now! Be quick!");
                $('h3').css('color','#a52a2a');
                checkFinalWin();
                if (won == 1){return;};
                curPlayer = 2;
            } else {
        
                $(this).children('.fas.fa-times').fadeIn();
                $(this).addClass('P2');
                $(this).unbind('click');
                $('h3').html("It's Player 1's turn now! Be quick!");
                $('h3').css('color','#004C99');
                checkFinalWin();
                if (won == 1){return;};
                curPlayer = 1;
            }
        })
    })

    $('button.modePVSAI').click(function(){
        // $('h2.modeState').replaceWith('<h2 class="modeState">Currently in Player vs Stupid AI mode</h2>')
        $('h3').html("It's your turn now!");
        unbindButton('button.modePVSAI');
        $('td').click(function(){
            $(this).children('.far.fa-circle').fadeIn();
            $(this).addClass('P1');
            $(this).unbind('click');
            ticArr[Number($(this).attr('id'))] = 1
            curPlayer = 1;
            checkFinalWin();
            if (won == 1){return;};

            do {
                i  = Math.round(Math.random() * 8);
            } while (ticArr[i] != 0);

            setTimeout(function(){
                $(`td:eq(${i})`).children('.fas.fa-times').fadeIn();
                $(`td:eq(${i})`).addClass('P2');
                $(`td:eq(${i})`).unbind('click');
                ticArr[i] = 2;
                $('h3').html("It's your turn again! XD");
                curPlayer = 2;
                checkFinalWin();
                if (won == 1){return;};
            },Math.random()*1500);
        })
    })

    $('button.modePVMAI').click(function(){
        // $('h2.modeState').replaceWith('<h2 class="modeState">Currently in Player vs Medium AI mode</h2>')
        $('h3').html("It's your turn now!");
        unbindButton('button.modePVMAI');
        $('td').click(function(){
            $(this).children('.far.fa-circle').fadeIn();
            $(this).addClass('P1');
            $(this).unbind('click');
            let i = 0;
            ticArr[Number($(this).attr('id'))] = 1
            curPlayer = 1;
            checkFinalWin();
            if (won == 1){return;};

            i = checkFinalPossWin();

            setTimeout(function(){
                $(`td:eq(${i})`).children('.fas.fa-times').fadeIn();
                $(`td:eq(${i})`).addClass('P2');
                $(`td:eq(${i})`).unbind('click');
                ticArr[i] = 2;
                $('h3').html("It's your turn again! XD");
                curPlayer = 2;
                checkFinalWin();
                if (won == 1){return;};
            },Math.random()*1000)
        })
    })

    $('button.modePVEAI').click(function(){
        // $('h2.modeState').replaceWith('<h2 class="modeState">You can never win the God AI @@</h2>')
        $('h3').html("It's your turn now!");
        unbindButton('button.modePVEAI');
        $('td').click(function(){
            $(this).children('.far.fa-circle').fadeIn();
            $(this).addClass('P1');
            $(this).unbind('click');
            let i = 0;
            ticArr[Number($(this).attr('id'))] = 1
            curPlayer = 1;
            checkFinalWin();
            if (won == 1){return;};

            i = GodAI();

            setTimeout(function(){
                $(`td:eq(${i})`).children('.fas.fa-times').fadeIn();
                $(`td:eq(${i})`).addClass('P2');
                $(`td:eq(${i})`).unbind('click');
                ticArr[i] = 2;
                $('h3').html("It's your turn again! XD");
                curPlayer = 2;
                checkFinalWin();
                if (won == 1){return;};
            },Math.random()*500)
        })
    })

})

function unbindButton(btn){
    var btnArr = ['button.modePVP','button.modePVSAI','button.modePVMAI','button.modePVEAI']
    for (let i = 0; i<4; i++) {
        $(btnArr[i]).unbind('click');
        $(btn).addClass('bg-info')
        $(btn).css('color','white')
        if (btn != btnArr[i]) {
            $(btnArr[i]).addClass('bg-light');
        };
    };
}

function checkFinalWin(){
    checkWin(0,1,2);
    checkWin(3,4,5);
    checkWin(6,7,8);
    checkWin(0,3,6);
    checkWin(1,4,7);
    checkWin(2,5,8);
    checkWin(0,4,8);
    checkWin(2,4,6);
    checkDraw();
}

function checkWin(b1,b2,b3){
    let b = $(`td:eq(${b1})`).attr('class');
    if ((b == $(`td:eq(${b2})`).attr('class')) && (b == $(`td:eq(${b3})`).attr('class')) && (b != undefined)) {
        $('h3').css('color','black');
        $('h3').css('font-size','50px');
        if ($('h2').html() == "Currently in Player vs Player mode"){
            $('h3').html(`Player ${curPlayer} win (^o^/) Congrat!`);
        } else if (curPlayer == 2) {
            $('h3').html('Oh, my AI beat you !! Maybe next time he can conquer the world!!')
        } else {
            $('h3').html('You beat the AI. You are so smart XD')
        }
        $('td').unbind('click')
        won = 1;
    }
}

function checkFinalPossWin(){
    if (winBlockLose() != undefined) {
        return winBlockLose();
    }
    
    let j = -1;
    do {
        j  = Math.round(Math.random() * 8);
    } while (ticArr[j] != 0);
    return j;
}

function checkPossWin(b1,b2,b3){
    if (($(`td:eq(${b1})`).attr('class') == $(`td:eq(${b2})`).attr('class')) && ($(`td:eq(${b1})`).attr('class') == 'P2') && (ticArr[b3] == 0)) {
        return b3;
    } else if (($(`td:eq(${b1})`).attr('class') == $(`td:eq(${b3})`).attr('class')) && ($(`td:eq(${b1})`).attr('class') == 'P2') && (ticArr[b2] == 0)) {
        return b2;
    } else if (($(`td:eq(${b2})`).attr('class') == $(`td:eq(${b3})`).attr('class')) && ($(`td:eq(${b2})`).attr('class') == 'P2') && (ticArr[b1] == 0)) {
        return b1;
    }
}

function checkPossLose(b1,b2,b3){
    if (($(`td:eq(${b1})`).attr('class') == $(`td:eq(${b2})`).attr('class')) && ($(`td:eq(${b1})`).attr('class') == 'P1') && (ticArr[b3] == 0)) {
        return b3;
    } else if (($(`td:eq(${b1})`).attr('class') == $(`td:eq(${b3})`).attr('class')) && ($(`td:eq(${b1})`).attr('class') == 'P1') && (ticArr[b2] == 0)) {
        return b2;
    } else if (($(`td:eq(${b2})`).attr('class') == $(`td:eq(${b3})`).attr('class')) && ($(`td:eq(${b2})`).attr('class') == 'P1') && (ticArr[b1] == 0)) {
        return b1;
    }
}

function checkDraw(){
    let counter = 0;
    for (let i = 0; i < 9; i++) {
        if ($(`td:eq(${i})`).attr('class') != undefined){
            counter ++;
        }
    };
    if (counter == 9 && won != 1){
        $('h3').css('color','black');
        $('h3').css('font-size','50px');
        $('h3').html(`It's a draw! Maybe 1 more round?`);
        won = 1;
    }
}

function GodAI(){
    console.log(winBlockLose());
    if (winBlockLose() != undefined) {
        return winBlockLose();
    }

    if (ticArr[4] == 0) {
        return 4;
    }   

    if ((ticArr[1] == ticArr[3]) && (ticArr[0] == 0) && (ticArr[1] != 0)) {
        return 0;
    } else if ((ticArr[1] == ticArr[5]) && (ticArr[2] == 0) && (ticArr[1] != 0)) {
        return 2;
    } else if ((ticArr[3] == ticArr[7]) && (ticArr[6] == 0) && (ticArr[3] != 0)) {
        return 6;
    } else if ((ticArr[7] == ticArr[5]) && (ticArr[8] == 0) && (ticArr[7] != 0)) {
        return 8;
    }

    if (ticArr[4] == 1) {
        if (ticArr[0] == 0) {
            return 0;
        } else if (ticArr[2] == 0) {
            return 2;
        } else if (ticArr[6] == 0) {
            return 6;
        } else if (ticArr[8] == 0) {
            return 8;
        }
    }

    if ((ticArr[7] == ticArr[0]) && (ticArr[3] == 0) && (ticArr[7] != 0)) {
        return 3;
    } else if ((ticArr[7] == ticArr[2]) && (ticArr[5] == 0) && (ticArr[7] != 0)) {
        return 5;
    } else if ((ticArr[3] == ticArr[8]) && (ticArr[7] == 0) && (ticArr[3] != 0)) {
        return 7;
    } else if ((ticArr[6] == ticArr[5]) && (ticArr[7] == 0) && (ticArr[6] != 0)) {
        return 7;
    }

    if ((ticArr[3] == 1) && (ticArr[4] == 2) && (ticArr[5] == 1) || (ticArr[1] == 1) && (ticArr[4] == 2) && (ticArr[7] == 1)) {
        if (ticArr[0] == 0) {
            return 0;
        } else if (ticArr[2] == 0) {
            return 2;
        } else if (ticArr[6] == 0) {
            return 6;
        } else if (ticArr[8] == 0) {
            return 8;
        }
    }

    if (ticArr[1] == 0) {
        return 1;
    } else if (ticArr[3] == 0) {
        return 3;
    } else if (ticArr[5] == 0) {
        return 5;
    } else if (ticArr[7] == 0) {
        return 7;
    }

    let j = -1;
    do {
        j  = Math.round(Math.random() * 8);
    } while (ticArr[j] != 0);
    return j;
}

function winBlockLose(){
    let winArr = [];
    winArr.push(checkPossWin(0,1,2));
    winArr.push(checkPossWin(3,4,5));
    winArr.push(checkPossWin(6,7,8));
    winArr.push(checkPossWin(0,3,6));
    winArr.push(checkPossWin(1,4,7));
    winArr.push(checkPossWin(2,5,8));
    winArr.push(checkPossWin(0,4,8));
    winArr.push(checkPossWin(2,4,6));
    for (let j = 0; j < 8; j++) {
        if (winArr[j] != undefined && ticArr[winArr[j]] == 0 ) {
            return winArr[j];
        }
    }

    winArr = [];
    winArr.push(checkPossLose(0,1,2));
    winArr.push(checkPossLose(3,4,5));
    winArr.push(checkPossLose(6,7,8));
    winArr.push(checkPossLose(0,3,6));
    winArr.push(checkPossLose(1,4,7));
    winArr.push(checkPossLose(2,5,8));
    winArr.push(checkPossLose(0,4,8));
    winArr.push(checkPossLose(2,4,6));
    for (let j = 0; j < 8; j++) {
        if (winArr[j] != undefined && ticArr[winArr[j]] == 0 ) {
            return winArr[j];
        }
    }
}