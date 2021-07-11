// Napataan elementit
const button = document.getElementById('button')
let timerText = document.getElementById('timer-text')
const ajastinSarake = document.getElementById("ul2")
let i = 0
let totalSeconds


// Yläosan kellonluomisfuntio, jota kutsutaan sekunnin välein
function startClock() {
    // Luo kellon
    let d = new Date();
    // Asettaa kellon DOM:iin
    document.getElementById("clock").innerHTML = `${d.toLocaleTimeString('fi-FI')}`;
}

// Kutsutaan kellonlyömisfuntiota sekunnin välein
setInterval('startClock(), 1000')

// Lisätään eventlistenerit
button.addEventListener('click', luoAikahetkiKlikilla)
document.addEventListener('keydown', luoAikahetkiSpacebarilla)

// Klikkifunktio
function luoAikahetkiKlikilla() {
        // Lisää kellonajan listaan
        kellonaikaListaan()
        // Luo klikkauksesta alkavan ajastimen
        luoAjastin()
}

// Spacebar-funktio
function luoAikahetkiSpacebarilla(e) {
    if (e.keyCode == 32) {
        // Lisää kellonajan listaan
        kellonaikaListaan()
        // Luo klikkauksesta alkavan ajastimen
        luoAjastin()
    }
}

// Lisää eventin kellonajan listaan
function kellonaikaListaan() {   
    const d = new Date()  
    const li = document.createElement("li");
    const textLi = document.createTextNode(`${d.toLocaleTimeString('fi-FI')}`);
    li.appendChild(textLi);
    document.getElementById("ul").appendChild(li);
    li.setAttribute("id", "li");
} 

// Luo ajastimen eventistä
function luoAjastin() {
    // Luo li-elementin
    const alkavaAjastin = document.createElement("li");
    // Luo tekstin li-elementille
    const textAlkavaAjastin = document.createTextNode   ('00:00:00');
    // Lisää tekstin elementtiin
    alkavaAjastin.appendChild(textAlkavaAjastin);
    // Lisää elementin ul2-ään
    ajastinSarake.appendChild(alkavaAjastin);
    // Luo id:n li-elementille
    alkavaAjastin.setAttribute("id", "alkavaAjastin");

    // Kutsuu startTimeriä sekunnin välein
    let timer = setInterval(startTimer, 1000);


    if(totalSeconds > 0){
        ajastinSarake.children[ajastinSarake.children.length - 1].innerHTML = "00:00:00";
        stopTimer()
    }

    totalSeconds = 0

    function startTimer() {
        ++totalSeconds;
        let hour = Math.floor(totalSeconds /3600);
        let minute = Math.floor((totalSeconds - hour*3600)/ 60);
        let seconds = totalSeconds - (hour*3600 + minute*60);
        if(hour < 10)
        hour = "0"+hour;
        if(minute < 10)
        minute = "0"+minute;
        if(seconds < 10)
        seconds = "0"+seconds;
        ajastinSarake.children[ajastinSarake.children.length    - 1].innerHTML = hour + ":" + minute + ":" + seconds;
    }        

    function stopTimer() {
        clearInterval(timer)
    }        
}




