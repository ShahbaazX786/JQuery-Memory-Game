buttonColors = ["red","blue","green","yellow"];

gamePattern=[];

userClickedPattern=[];

var level=0;

var started=false;

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        gameOver();
    }
}


$(".btn").click(function (){
    var userClickedColor=$(this).attr("id");
    userClickedPattern.push(userClickedColor);

    playsound(userClickedColor);
    anim(userClickedColor);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);

    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomColor);
    // anim(randomcolor);
    // console.log(gamepattern);
}

function playsound(randomColor){
    var sfx = new Audio('sounds/'+randomColor+".mp3");
    sfx.play();
}

function anim(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}


function gameOver(){
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press any key to continue!");
}