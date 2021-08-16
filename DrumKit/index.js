//-mouse clicks////////////////////////////////////////////////////////////////////////
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var choice=this.innerHTML;
        audioo(choice);
        animationn(choice);
    });
}

//-keyboard clicks/////////////////////////////////////////////////////////////////////
document.addEventListener("keydown",function(event){
    audioo(event.key);
    animationn(event.key);
});

//-animation///////////////////////////////////////////////////////////////////////////
function animationn(choice){
    document.querySelector("."+choice).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+choice).classList.remove("pressed");},100)
}
//-general method//////////////////////////////////////////////////////////////////////
function audioo(choice){
    switch (choice) {
        case "w":
            var a1=new Audio("sounds/tom-1.mp3");
            a1.play();
            break;
        case "a":
            var a2=new Audio("sounds/tom-2.mp3");
            a2.play();
            break;
        case "s":
            var a3=new Audio("sounds/tom-3.mp3");
            a3.play();
            break;
        case "d":
            var a4=new Audio("sounds/tom-4.mp3");
            a4.play();
            break;    
        case "j":
            var a5=new Audio("sounds/crash.mp3");
            a5.play();
            break;
        case "k":
            var a6=new Audio("sounds/snare.mp3");
            a6.play();
            break;
        case "l":
            var a7=new Audio("sounds/kick-bass.mp3");
            a7.play();
            break;
        default:
    }
    //console.log(choice);
}