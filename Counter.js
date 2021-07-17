var i =0;

function incrementClick() {
    const inc = () => {
        
        (i < 50) ? i++ : (i = 50) ?  i = 50 : false;

        updateDisplay(i);
    }
    inc();

    
}

function decrementClick() {
    const dec = () => {

        (i > 0) ? --i : (i = 0) ? i = 10 : false;

        updateDisplay(i);
    }
    dec(); 
}

function updateDisplay(val) {
    document.getElementById("counter-display").innerHTML = val;
}