const container = document.getElementById("bar-container");
let arr = [];
let arrSize = 40;
let waitingTime = 50;

let stop = false;

function stopSorting(){
    stop = true;
    enableControls();
}

async function startSorting(){
    const algo = document.getElementById("algoSelect").value;

    if(algo === "bubble"){
        await bubbleSort(arrSize);
    }else if(algo === "selection"){
        await selectionSort(arrSize);
    }else if(algo === "insertion"){
        await insertionSort(arrSize);
    }
}

function disableControls(){
    document.querySelectorAll("button").forEach(btn => {
        if(btn.innerText != "Stop Sorting"){
            btn.disabled = true
        }
    });
    document.getElementById("sizeSlider").disabled = true;
    document.getElementById("speedSlider").disabled = true;
}
function enableControls(){
    document.querySelectorAll("button").forEach(btn => btn.disabled = false);
    document.getElementById("sizeSlider").disabled = false;
    document.getElementById("speedSlider").disabled = false;
}

function updateArray(size){
    arrSize = parseInt(size);
    const slider = document.getElementById("sizeValue");
    slider.innerText = arrSize;
    generateArray(arrSize);
}

function updateSpeed(speed){
    waitingTime = 101 - speed;
    document.getElementById("speedValue").innerText = `${speed}x`;
}

function generateArray(num = 40){
    container.innerHTML = '';
    arr = [];

    for(let i = 0; i<num; i++){
        const value = Math.floor(Math.random() * 300) + 10;
        arr.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");

        bar.style.height = `${value}px`;
        bar.style.width = `${Math.floor(800 / arrSize)}px`;
        
        container.appendChild(bar);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Selection Sort
async function selectionSort(num = 40){
    stop = false;
    disableControls();
    const bars = document.getElementsByClassName("bar");
    for(let i = 0; i<num-1; i++){
        if(stop) break;
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "green";
        for(let j = i+1; j<num; j++){
            if(stop) break;
            bars[j].style.backgroundColor = "red";
            await sleep(waitingTime);
            if(arr[j] < arr[minIndex]){
                bars[minIndex].style.backgroundColor = "#007bff";
                minIndex = j;
                bars[minIndex].style.backgroundColor = "green";
            }else{
                bars[j].style.backgroundColor = "#007bff";
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        await sleep(waitingTime);
        bars[i].style.height = `${arr[i]}px`;
        bars[minIndex].style.height = `${arr[minIndex]}px`;
        await sleep(waitingTime);
        bars[minIndex].style.backgroundColor = "#007bff";
    }
    enableControls();
}

//Bubble Sort
async function bubbleSort(num = 40) {
    stop = false;
    disableControls();
    const bars = document.getElementsByClassName("bar");
    for(let i = 1; i<num; i++){
        if(stop) break;
        for(let j = 0; j<num-i; j++){
            if(stop) break;
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";
            await sleep(waitingTime);
            if(arr[j] > arr[j+1]){
                bars[j].style.backgroundColor = "green";
                await sleep(waitingTime);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                bars[j].style.height = `${arr[j]}px`;
                bars[j+1].style.height = `${arr[j+1]}px`;
            }
            await sleep(waitingTime);
            bars[j].style.backgroundColor = "#007bff";
            bars[j+1].style.backgroundColor = "#007bff";
        }
    }
    enableControls();
}

//Insertion Sort
async function insertionSort(num = 40) {
    stop = false;
    disableControls();
    const bars = document.getElementsByClassName("bar");
    for(let i = 1; i<num; i++){
        if(stop) break;
        let temp = arr[i];
        let j = i-1;
        for(; j>=0; j--){
            if(stop) break;
            if(arr[j] > temp){
                await sleep(waitingTime);
                arr[j+1] = arr[j];
                arr[j] = temp;
                bars[j].style.height = `${arr[j]}px`;
                bars[j+1].style.height = `${arr[j+1]}px`;
                bars[j].style.backgroundColor = "green";
                bars[j+1].style.backgroundColor = "#007bff";
                if(j == 0){
                    bars[0].style.backgroundColor = "#007bff";
                }
            }else{
                bars[j+1].style.backgroundColor = "#007bff";
                break;
            }
            await sleep(waitingTime);
        }
        arr[j+1] = temp;
        bars[j+1].style.height = `${arr[j+1]}px`;
    }
    enableControls();
}
