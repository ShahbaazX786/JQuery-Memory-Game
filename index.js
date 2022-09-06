gamepattern=[];

buttoncolors = ["red","blue","green","yellow"];

function randum(){
    var randomnumber=Math.floor(Math.random()*4);
    var randomcolor=buttoncolors[randomnumber];
    gamepattern.push(randomcolor);
    playsound(randomcolor);
    console.log(gamepattern);
}

// $("#randomcolor")

// // function anime(randomcolor){
// //     $("#"+randomcolor).fadeIn(100).fadeOut(100);
// // }

function playsound(randomcolor){
    var sfx = new Audio('sounds/'+randomcolor+".mp3");
    sfx.play();
}