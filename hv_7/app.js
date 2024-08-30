const generator = document.querySelector(".generator");
const btn = document.querySelector(".create");

const generate =()=>{
    generator.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        let num = Math.floor(Math.random() * 9);
        let div = document.createElement("div");
        div.setAttribute("class" , "num")
        div.innerText = num
        generator.append(div);
    }
}


btn.addEventListener("click", ()=>{
    generate()
});

