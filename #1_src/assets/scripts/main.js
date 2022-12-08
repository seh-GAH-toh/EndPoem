const loaderDOM = document.getElementById("loader");
const homeDOM = document.getElementById("home");
const homeFormDOM = document.getElementById("homeForm");
const userNameDOM = document.getElementById("userName");
const validationTextDOM = document.getElementById("homeValidationText")

window.addEventListener("load", () => {
	hiddeElement(loaderDOM);
	showElement(homeDOM);
	
	homeFormDOM.addEventListener("submit", (event) => {
		event.preventDefault();
		
		validadeForm(userNameDOM);
	});
});

const showElement = async element => element.classList.remove("hidden-element");

const hiddeElement = async element => element.classList.add("hidden-element");

const validadeForm = async (input) => {
	if(!input.checkValidity()){
		showElement(validationTextDOM);
	}else {
		hiddeElement(homeDOM);
		showElement();
	}
};