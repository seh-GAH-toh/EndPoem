const refreshPage = async () => {
    const seconds = document.getElementById("error-seconds");
    let number = 10;
    setInterval(() => {
        if (number <= 0) {
            window.location.replace("https://www.theendpoem.com");
        }
        seconds.innerHTML = number;
        number--;
    }, 1000);
};

refreshPage();