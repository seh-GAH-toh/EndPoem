const loaderDOM = document.getElementById("loader");
const homeDOM = document.getElementById("home");
const homeFormDOM = document.getElementById("home-form");
const userNameDOM = document.getElementById("form-username");
const validationTextDOM = document.getElementById("form-validation")
const poemDOM = document.getElementById("poem");
const modalDOM = document.getElementById("modal");
const headerDOM = document.getElementById("header");
const headerButtonDOM = document.getElementById("header-button");
const playerName1DOM = document.getElementById("poem-name-1");
const playerName2DOM = document.getElementById("poem-name-2");
const playerName3DOM = document.getElementById("poem-name-3");
const glitchDOM = [document.getElementById("glitch-1"),
document.getElementById("glitch-2"),
document.getElementById("glitch-3"),
document.getElementById("glitch-4"),
document.getElementById("glitch-5"),
document.getElementById("glitch-6"),
document.getElementById("glitch-7"),
document.getElementById("glitch-8")];
let isCredits = false;

const showElement = async element => element.classList.remove("hidden-element");

const hiddeElement = async element => element.classList.add("hidden-element");

const validadeForm = async (input) => {
	if (!input.checkValidity()) {
		showElement(validationTextDOM);
	} else {
		hiddeElement(homeDOM);
		showElement(poemDOM);
		showElement(headerDOM);
		setName();
		createGlitch();
	}
};

const setName = async () => {
	const playerName = userNameDOM.value.toString().charAt(0).toUpperCase() + userNameDOM.value.slice(1);
	playerName1DOM.innerText = `${playerName}?`;
	playerName2DOM.innerText = `${playerName}. Player of games.`;
	playerName3DOM.innerText = `The player was you, ${playerName}.`;
};

const createGlitch = async () => {
	setInterval(() => {
		glitchDOM.forEach(element => {
			const characters = "⊢⊣⊤⊥⊨⊩⊪⊫⊬⊭⊮⊯";
			let result = "";

			for (let i = 0; i < 5; i++) {
				result += characters.charAt(Math.floor(Math.random() * characters.length));
			}
			element.innerHTML = result;
		});
	}, 500);
}

homeFormDOM.addEventListener("submit", (event) => {
	event.preventDefault();
	validadeForm(userNameDOM);
});

headerButtonDOM.addEventListener("click", () => {
	if(!isCredits) {
		headerButtonDOM.classList.add("header__button--active");
		hiddeElement(poemDOM);
		showElement(modalDOM);
		isCredits = true;
	}else{
		headerButtonDOM.classList.remove("header__button--active");
		showElement(poemDOM);
		hiddeElement(modalDOM);
		isCredits = false;
	}

})

window.addEventListener("load", () => {
	hiddeElement(loaderDOM);
	showElement(homeDOM);
});