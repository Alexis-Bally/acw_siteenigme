let counterVal = 0;

function increment() {
    if (counterVal < 9) {
        updateDisplay(++counterVal);
    } 
}

function decrement() {
    if (counterVal > 0) {
        updateDisplay(--counterVal);
    }
}

function updateDisplay(val) {
    val = document.querySelectorAll(".counter");
    valArr = Array.from(val);
    console.log(valArr);
}

