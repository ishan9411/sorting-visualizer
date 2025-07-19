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

//Bubble Sort
async function bubbleSort(num = 40) {
    const bars = document.getElementsByClassName("bar");
    for(let i = 1; i<num; i++){
        for(let j = 0; j<num-i; j++){
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";
            await sleep(20);
            if(arr[j] > arr[j+1]){
                bars[j].style.backgroundColor = "green";
                await sleep(20);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                bars[j].style.height = `${arr[j]}px`;
                bars[j+1].style.height = `${arr[j+1]}px`;
            }
            await sleep(20);
            bars[j].style.backgroundColor = "#007bff";
            bars[j+1].style.backgroundColor = "#007bff";
        }
    }
}

//Insertion Sort
async function insertionSort(num = 40) {
    const bars = document.getElementsByClassName("bar");
    for(let i = 1; i<num; i++){
        let temp = arr[i];
        let j = i-1;
        for(; j>=0; j--){
            if(arr[j] > temp){
                await sleep(100);
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
        }
        arr[j+1] = temp;
        bars[j+1].style.height = `${arr[j+1]}px`;
    }
}
