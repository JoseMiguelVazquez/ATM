const menuSection = document.getElementById("menu-section");
let username = document.getElementById("welcome_user");


function loginSuccessful() {
    username.innerHTML = currentAccount.user;
    loginSection.classList.add("d-none");
    menuSection.classList.remove("d-none");
}



function closeSession() {
    menuSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
}



