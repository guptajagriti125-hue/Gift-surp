const PASSWORD = "9594";

const loginBox = document.getElementById("loginBox");
const giftBox = document.getElementById("giftBox");
const resultBox = document.getElementById("resultBox");
const selectedGift = document.getElementById("selectedGift");
const error = document.getElementById("error");

// Check if a gift was already chosen
const savedGift = localStorage.getItem("chosenGift");

if (savedGift) {
    showResult(savedGift);
}

function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {
        loginBox.classList.add("hidden");
        giftBox.classList.remove("hidden");
        error.innerText = "";
    } else {
        error.innerText = "❌ Incorrect Password";
    }
}

function selectGift(gift) {

    const confirmChoice = confirm(
        "Are you sure?\n\nYou can choose ONLY ONE gift."
    );

    if (!confirmChoice) return;

    localStorage.setItem("chosenGift", gift);

    showResult(gift);
}

function showResult(gift) {

    loginBox.classList.add("hidden");
    giftBox.classList.add("hidden");

    resultBox.classList.remove("hidden");

    selectedGift.innerHTML =
        "❤️ You selected:<br><br><b>" + gift + "</b>";
}
