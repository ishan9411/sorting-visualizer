const container = document.getElementById("bar-container");
let arr = [];

function generateArray(num = 40){
    container.innerHTML = '';
    arr = [];

    for(let i = 0; i<num; i++){
        const value = Math.floor(Math.random() * 300) + 10;
        arr.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = `${value}px`;
        
        container.appendChild(bar);
    }
}