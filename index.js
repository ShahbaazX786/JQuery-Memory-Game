gamepattern=[];

buttoncolors = ["red","blue","green","yellow"];

function randum(){
    var randomnumber=Math.floor(Math.random()*4);
    var randomcolor=buttoncolors[randomnumber];
    gamepattern.push(randomcolor);
    // console.log(gamepattern);
}

