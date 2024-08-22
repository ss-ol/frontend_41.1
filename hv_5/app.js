let button = document.querySelector("#red");
let button2 = document.querySelector("#yellow");
let button3 = document.querySelector("#green");
let tablet = document.querySelector("#tablet");


function trafficLight(arg){
    for(let i of [button , button2 , button3]){
        i.style.backgroundColor = "white";
    }



    if(arg === "red"){
        button.style.background = "red";
        tablet.innerText = "stop"
    }else if(arg === "green"){
        button3.style.background = "green";
        tablet.innerText = "go"
    }else if(arg === "yellow"){
        button2.style.background = "yellow";
        tablet.innerText = "wait"
    }
}

button.addEventListener("click" ,function () {
        trafficLight("red")
    }
)
button2.addEventListener("click" , function () {
        trafficLight("yellow")
    }
)
button3.addEventListener("click" , function (){
        trafficLight("green")
    }
)

