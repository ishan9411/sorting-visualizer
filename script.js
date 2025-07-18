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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Selection Sort
async function selectionSort(num = 40){
    const bars = document.getElementsByClassName("bar");
    for(let i = 0; i<num-1; i++){
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "green";
        for(let j = i+1; j<num; j++){
            bars[j].style.backgroundColor = "red";
            await sleep(20);
            if(arr[j] < arr[minIndex]){
                bars[minIndex].style.backgroundColor = "#007bff";
                minIndex = j;
                bars[minIndex].style.backgroundColor = "green";
            }else{
                bars[j].style.backgroundColor = "#007bff";
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        await sleep(50);
        bars[i].style.height = `${arr[i]}px`;
        bars[minIndex].style.height = `${arr[minIndex]}px`;
        await sleep(30);
        bars[minIndex].style.backgroundColor = "#007bff";
    }
}
