const menuSection = document.getElementById("menu-section");
let username = document.getElementById("welcome_user");


function loginSuccessful() {
    username.innerHTML = currentAccount.user;
    loginSection.classList.add("d-none");
    menuSection.classList.remove("d-none");
    userTestSection.classList.add("d-none");
}



function closeSession() {
    menuSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
    userTestSection.classList.remove("d-none");
    if(password.type === "text") {
        password.type = "password";
        showEye.style.display = "block";
        hideEye.style.display = "none";
    }
}



