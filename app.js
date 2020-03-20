window.onload = function(){
    var sounds = document.querySelectorAll(".sound");
    var pads = document.querySelectorAll(".pads div");
    var visual = document.querySelector(".visual");
    var colors =[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6068d3",
        "#60b2d3"
    ]

    //Sounds Part
    pads.forEach(function(pad,index){           //this means for each pad and index
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;      //p1
            sounds[index].play();
            createBubble(index);                     // to access index down, we call the function here
            // console.log(sounds[index]);
        })
    })

    //bubble maker
    var createBubble = function(index){         //index cannot be accessed here
        var bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend",function(){
        visual.removeChild(this);
        })
    }

}

//p1 multiple clicks doesnt work even on multiple clicks, when track finishes the it gets executed
//p2 as we are creating child, doing the the animation again and again will crash our app
//creation of child can be seen in inspect element