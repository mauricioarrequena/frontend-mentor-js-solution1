

function renderClickStyle(opElBu) {
    document.querySelector(".number-clicked")?.classList.remove('number-clicked');
    document.querySelector(".five-clicked")?.classList.remove('five-clicked');

    const id = opElBu.getAttribute("id");
    if (id != "five")
        opElBu.classList.add("number-clicked");
    else
        opElBu.classList.add("five-clicked");
}

function saveState(opElBu) {
    score = opElBu.innerHTML;
    console.log(score);
}

function setCardState() {
    card1El.style.display = "flex";
    card2El.style.display = "none";
}

function changeVisibleCard() {
    card1El.style.display = "none";
    card2El.style.display = "flex"
}

function setScoreSelected() {
    scoreEl.textContent = `You selected ${score} out of 5`
}





let opElList = document.querySelectorAll(".number");
let submitEl = document.getElementById("button-submit");
let card1El = document.getElementById("main-container");
let card2El = document.getElementById("main-submited-container");
let scoreEl = document.getElementById("score-message");


let score = 0;
    



//main
opElList.forEach(opEl => {
    opEl.addEventListener("click", () => {
        renderClickStyle(opEl);
    });

    opEl.addEventListener("click", () => {
        saveState(opEl);
    });
});

setCardState();

submitEl.addEventListener("click", () => {
    changeVisibleCard();
})

submitEl.addEventListener("click", () => {
    setScoreSelected();
})











