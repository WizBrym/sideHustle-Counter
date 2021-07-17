const displays = document.createElement("div");
document.body.appendChild(displays);
displays.style.backgroundColor = "#a1006c";
displays.style.width = "170px";
displays.style.height = "40px";
displays.style.marginTop = "20px";
displays.style.borderRadius = "10%";
displays.style.padding = "5px";
displays.style.textAlign = "center";




for (let j = 0; j < 2; j++) {
    const button = document.createElement("button");
    document.body.appendChild(button);
    button.style.marginTop = "20px";
    button.className += "btn";
    button.style.height = "30px";
    button.style.borderRadius = "10px";
    button.style.marginRight = "10px";
}


const btns = document.querySelectorAll(".btn");
btns[0].textContent = "Increment";

btns[1].textContent = "Decrement";



let i = 0;


btns[0].addEventListener("click", () => {
    const inc = () => {
        
        (i < 10) ? i++ : (i = 10) ?  i = 10 : false;

        displays.innerHTML = i;
    
        console.log(displays.textContent);
    }
    inc();

})



btns[1].addEventListener("click", () => {
    const dec = () => {

        (i > 0) ? --i : (i = 0) ? i = 10 : false;


        displays.innerHTML = i;

        console.log(displays.textContent);
    }
    dec();  
})