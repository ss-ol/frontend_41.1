let redbutton = document.querySelector("#red");
let yellowbutton = document.querySelector("#yellow");
let greenbutton = document.querySelector("#green");
let tablet = document.querySelector("#tablet");


function trafficLight(arg){
    for(let i of [redbutton , yellowbutton , greenbutton]){
        i.style.backgroundColor = "white";
    }
    if(arg === "red"){
        redbutton.style.background = "red";
        tablet.innerText = "stop"
        tablet.style.color = "red";
    }else if(arg === "green"){
        greenbutton.style.background = "green";
        tablet.innerText = "go"
        tablet.style.color = "green"
    }else if(arg === "yellow"){
        yellowbutton.style.background = "yellow";
        tablet.innerText = "wait"
        tablet.style.color = "yellow"
    }
}

redbutton.addEventListener("mouseover", function(event){
    console.log();
     redbutton.style.display = "block";
    redbutton.addEventListener("mouseover", function(event){
        trafficLight("red")
    })
});
yellowbutton.addEventListener("mouseover", function(event) {
    yellowbutton.style.display = "block";
    yellowbutton.addEventListener("mouseover", function () {
        trafficLight("yellow")
    })
});
greenbutton.addEventListener("mouseover", function(event){
    greenbutton.style.display = "block";
    greenbutton.addEventListener("mouseover", function () {
        trafficLight("green")
    })
});

redbutton.addEventListener("mouseover",function() {
    this.style.backgroundColor = "red";
});
redbutton.addEventListener("mouseout",function() {
    this.style.backgroundColor = "white";
    tablet.style.color = "black";
});
yellowbutton.addEventListener("mouseover",function() {
    this.style.backgroundColor = "yellow";
});
yellowbutton.addEventListener("mouseout",function() {
    this.style.backgroundColor = "white";
    tablet.style.color = "black";
});
greenbutton.addEventListener("mouseover",function() {
    this.style.backgroundColor = "green";
});
greenbutton.addEventListener("mouseout",function() {
    this.style.backgroundColor = "white";
    tablet.style.color = "black"
})



