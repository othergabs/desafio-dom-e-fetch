const nameElement = document.querySelector("#full-name");
const emailElement = document.querySelector("#email");
const phoneElement = document.querySelector("#phone");

const streetElement = document.querySelector("#street");
const stateElement = document.querySelector("#state");

const picture = document.querySelector("#thumbnail")


function getUserInfo() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(response => {
            const user = response.results[0];
            displayUserData(user)
        })
}

function displayUserData(user) {
    nameElement.textContent = `${user.name.first} ${user.name.last}`;
    emailElement.textContent = user.email;
    phoneElement.textContent = user.phone;
    streetElement.textContent = user.location.street.name;
    stateElement.textContent = user.location.state
    picture.src = user.picture.medium;
}

getUserInfo();
