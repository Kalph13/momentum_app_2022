const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const onLoginSubmit = (event) => {
    event.preventDefault();
    const userName = loginInput.value;
    const isLoggedIn = true;
    localStorage.setItem("username", userName);
    localStorage.setItem("isloggedin", isLoggedIn);
    loggedIn(userName);
}

const loggedIn = (userName) => {
    loginForm.classList.add("hidden");
    greeting.innerHTML = `Hello, ${userName}!`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

if(localStorage.getItem("isloggedin") === "true") loggedIn(localStorage.getItem("username"));