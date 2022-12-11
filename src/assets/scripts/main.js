const loaderDOM = document.getElementById("loader");
const homeDOM = document.getElementById("home");
const poemDOM = document.getElementById("poem");
const creditsDOM = document.getElementById("credits");
const headerDOM = document.getElementById("header");
const homeFormDOM = document.getElementById("home-form");
const userNameDOM = document.getElementById("form-username");
const validationTextDOM = document.getElementById("form-validation");
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
					document.getElementById("glitch-8")
				];
let isCredits = false;

const toggleElement = async ( hiddeList, showList ) => {
	if(hiddeList != null){
		hiddeList.forEach( element => {
			element.classList.add("hidden-element");
		});
	}
	if(showList != null){
		showList.forEach( element => {
			element.classList.remove("hidden-element");
		});
	}
};

const validadeForm = async (input) => {
	if (!input.checkValidity()) {
		toggleElement(
			null,
			[validationTextDOM]
		);
	} else {
		stateMachine("poem");
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

const stateMachine = ( state ) => {
	switch (state) {
		case "home":
			toggleElement(
				[loaderDOM],
				[homeDOM]
			);
			break;
		case "poem":
			toggleElement(
				[homeDOM, creditsDOM],
				[poemDOM, headerDOM]
			);
			isCredits = false;
			setName();
			createGlitch();
			break;
		case "credits":
			toggleElement(
				[poemDOM],
				[creditsDOM]
			);
			isCredits = true;
			break;
		default:
			toggleElement(
				null,
				[loaderDOM]
			);
	}
}

window.addEventListener("load", () => {
	stateMachine("home");
});

homeFormDOM.addEventListener("submit", (event) => {
	event.preventDefault();
	validadeForm(userNameDOM);
});

headerButtonDOM.addEventListener("click", () => {
	if(!isCredits) {
		headerButtonDOM.classList.add("header__button--active");
		stateMachine("credits");
	}else{
		headerButtonDOM.classList.remove("header__button--active");
		stateMachine("poem");
	}
});

console.info("See you, space cowboy!");