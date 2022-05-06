var a = 0;
var b = 0;


function main() {
    if (a===0) {
        buttons[0].onmouseover = function() {
            rowbuttonoperation();
            return main();}
        buttons[1].onmouseover = function() {showalert('Choose a row first to type');}
        buttons[2].onmouseover = function() {showalert('Choose a row first to type');}
        buttons[3].onmouseover = function() {showalert('Choose a row first to type');}
    } else {
        buttons[0].onmouseover = function() {showalert('The row is already chosen');}
        buttons[1].onmouseover = function() {type(2);}
        buttons[2].onmouseover = function() {type(3);}
        buttons[3].onmouseover = function() {type(4);}
    }
}

function tabalert(str) {
    tab.innerText=str
    tab.classList.add('showtab')
    setTimeout(() => {
        tab.classList.remove('showtab')
    },2000)
    return;
}

function taboperation(str) {
    switch (str) {
        case 'shift':
            tabalert('shift')
            setTimeout(() => {
                tab.classList.remove('showtab')
            },2000)
            b=1;
            break;
        case 'space':
            tabalert('space')
            setTimeout(() => {
                tab.classList.remove('showtab')
            },2000)
            textdisplay.innerText += '\u00A0';
            break;
        case 'enter':
            tabalert('enter')
            setTimeout(() => {
                tab.classList.remove('showtab')
            },2000)
            textdisplay.innerText += '\n';
            break;
        case 'del' :
            tabalert('delete')
            setTimeout(() => {
                tab.classList.remove('showtab')
            },2000)
            textdisplay.innerText = textdisplay.innerText.substring(0,textdisplay.innerText.length -1);
            break;
    }
}

function showalert(str) {
    alarm.innerText=str
    alarm.classList.add('show')
    setTimeout(() => {
        alarm.classList.remove('show')
    },2000)
}



function rowbuttonoperation () {
    let row1 = document.getElementById('row1');
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");
    let row4 = document.getElementById("row4");
/*------------row1---------------*/
    row1.onmouseover = function() {
        showalert('click to choose row1');
        for(var i = 10 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'silver'
        }
    }

    row1.onmouseleave = function() {
        for(var i = 10 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'black'
        }
    }

    row1.onclick = function() {
        showalert('You choose row1');
        a=1;
        return;
    }
/*------------row2---------------*/
    row2.onmouseover = function() {
        showalert('click to choose row2');
        for(var i = 0 ; i< 10; i++){
            keys[i].style.backgroundColor = 'silver'
        }
        for(var i = 19 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'silver'
        }
    }
    row2.onmouseleave = function() {
        for(var i = 0 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'black'
        }
    }
    row2.onclick = function() {
        showalert('You choose row1');
        a=2;
        return;
    }
/*------------row3---------------*/
    row3.onmouseover = function() {
        showalert('click to choose row3');
        for(var i = 0 ; i< 19; i++){
            keys[i].style.backgroundColor = 'silver'
        }
        for(var i = 26 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'silver'
        }
    }
    row3.onmouseleave = function() {
        for(var i = 0 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'black'
        }
    }
    row3.onclick = function() {
        showalert('You choose row3');
        a=3;
        return;
    }
/*------------row4---------------*/
    row4.onmouseover = function() {
        showalert('click to choose row4');
        for(var i = 0 ; i< 26; i++){
            keys[i].style.backgroundColor = 'silver'
        }
    }
    row4.onmouseleave = function() {
        for(var i = 0 ; i<= keys.length; i++){
            keys[i].style.backgroundColor = 'black'
        }
    }
    row4.onclick = function() {
        showalert('You choose row4');
        a=4;
        return;
    }
}

function type(btn) {
    var rowclass;
    var buttonclass    
    for(var i = 0 ; i< keys.length; i++){
        keys[i].style.backgroundColor = 'silver'
    }   
    switch (a) {
        case 1:
            rowclass = row1key;
            console.log(rowclass.length)
            break;
        case 2:
            rowclass = row2key;
            console.log(rowclass.length)
            break;
        case 3:
            rowclass = row3key;
            console.log(rowclass.length)
            break;
        case 4 :
            rowclass = row4key;
            console.log(rowclass.length)
        default :
    }

    switch (btn) {
        case 2:
            buttonclass = document.querySelectorAll('.button2 > button')
            break;
        case 3:
            buttonclass = document.querySelectorAll('.button3 > button')
            break;
        case 4:
            buttonclass = document.querySelectorAll('.button4 > button')
            break;
        default :
    }

    var firstbtn = buttonclass[0];
    var secondbtn = buttonclass[1];
    var thirdbtn = buttonclass[2];
    var fourthbtn = buttonclass[3];
    
/* ----------- firstkey ----------*/
    if(typeof(rowclass[4*btn-8])!='undefined') {
        rowclass[4*btn-8].style.backgroundColor="black";
        firstbtn.onmouseover = function() {rowclass[4*btn-8].style.color="red";}
        firstbtn.onmouseleave = function() {rowclass[4*btn-8].style.color='white';}
        firstbtn.onclick = function() {
            if (b==0){
                console.log
                textdisplay.innerText += rowclass[4*btn-8].innerText.toLowerCase();
                rowclass[4*btn-8].style.color='white';
            } else if (b==1) {
                console.log
                textdisplay.innerText += rowclass[4*btn-8].innerText;
                rowclass[4*btn-8].style.color='white';
                b=0;
            }
            return main();
        }
    }
/* ----------- secondkey ----------*/
    if(typeof(rowclass[4*btn-7])!='undefined') {
        rowclass[4*btn-7].style.backgroundColor='black';
        secondbtn.onmouseover = function() {rowclass[4*btn-7].style.color='red';}
        secondbtn.onmouseleave = function() {rowclass[4*btn-7].style.color='white';}
        secondbtn.onclick = function() {
            if (b==0){
                textdisplay.innerText += rowclass[4*btn-7].innerText.toLowerCase();
                rowclass[4*btn-7].style.color='white';
            } else if (b==1) {
                textdisplay.innerText += rowclass[4*btn-7].innerText;
                rowclass[4*btn-7].style.color='white';
                b=0;
            }
        }
    }
/* ----------- thirdkey ----------*/
    if(typeof(rowclass[4*btn-6])!='undefined') {
        rowclass[4*btn-6].style.backgroundColor='black';
        thirdbtn.onmouseover = function() {rowclass[4*btn-6].style.color='red';}
        thirdbtn.onmouseleave = function() {rowclass[4*btn-6].style.color='white';}
        thirdbtn.onclick = function() {
            if (b==0){
                textdisplay.innerText += rowclass[4*btn-6].innerText.toLowerCase();
                rowclass[4*btn-6].style.color='white';
            } else if (b==1) {
                textdisplay.innerText += rowclass[4*btn-6].innerText;
                rowclass[4*btn-6].style.color='white';
                b=0;
            }
        }
    }
/* ----------- fourthkey ----------*/
    if(typeof(rowclass[4*btn-5])!='undefined') {
        rowclass[4*btn-5].style.backgroundColor='black';
        fourthbtn.onmouseenter = function() {rowclass[4*btn-5].style.color='red';}
        fourthbtn.onmouseleave = function() {rowclass[4*btn-5].style.color='white';}
        fourthbtn.onclick = function() {
            if (b==0){
                textdisplay.innerText += rowclass[4*btn-5].innerText.toLowerCase();
                rowclass[4*btn-5].style.color='white';
            } else if (b==1) {
                textdisplay.innerText += rowclass[4*btn-5].innerText;
                rowclass[4*btn-5].style.color='white';
                b=0;
            }
        }
    }
    return main();
}

/* ----------- main ----------*/
var buttons = document.querySelectorAll('.input-buttons > div')
const alarm = document.getElementById('alertbox')
const tab = document.getElementById('tabbox')

var keys = document.querySelectorAll('#key')
const row1key = document.querySelectorAll('.keypad-row1 > div')
const row2key = document.querySelectorAll('.keypad-row2 > div')
const row3key = document.querySelectorAll('.keypad-row3 > div')
const row4key = document.querySelectorAll('.keypad-row4 > div')
var textdisplay = document.getElementById("text-display");
console.log('start!!')

main()