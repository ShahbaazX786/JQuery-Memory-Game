buttoncolors = ["red","blue","green","yellow"];

gamepattern=[];

userClickedPattern=[];


$(".btn").click(function (){
    var userclickedcolor=$(this).attr("id");
    userClickedPattern.push(userclickedcolor);
    playsound(userclickedcolor);
    anim(userclickedcolor);
});

function nextSequence(){
    var randomnumber = Math.floor(Math.random()*4);
    var randomcolor = buttoncolors[randomnumber];
    gamepattern.push(randomcolor);
    $("#"+randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomcolor);
    anim(randomcolor);
    // console.log(gamepattern);
}

function playsound(randomcolor){
    var sfx = new Audio('sounds/'+randomcolor+".mp3");
    sfx.play();
}

function anim(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}