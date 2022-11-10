const form = document.getElementById("form");
const loginSection = document.getElementById("login-section");
const accounts = [
    {user: "Miguel", password: "123", balance: 200.00},
    {user: "Rosa", password: "456", balance: 400.00},
    {user: "Grace", password: "789", balance: 600.00},
    {user: "Raul", password: "111", balance: 450.00}
];
let currentAccount;
const userList = document.getElementById("user_list");
const userTestSection = document.getElementById("user-test-section");


function validate(user, password) {
    let message;
    let error = false;
    for(let i = 0; i < accounts.length; i++) {
        if(user == accounts[i].user) {
            if(password == accounts[i].password){
                // message = "Bienvenido";
                error = false;
                currentAccount = accounts[i];
                loginSuccessful();
                form.reset();
                // console.log(`Balance: ${accounts[i].balance}`);
                break;
            }
            else {
                message = "Password Incorrecto";
                error = true;
                break;
            }
        }
        else if (user != accounts[i].user) {
            error = true;
            message = "Usuario No Existe";
        }
    }
    if(error) {
        swal(message);
    }

}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let us = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    validate(us, pass);
});


for(let i = 0; i < accounts.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `Usuario: ${accounts[i].user} - Password: ${accounts[i].password} - Saldo: $${accounts[i].balance}`;
    userList.appendChild(li);
    // userList.innerHTML += `${accounts[i].user} - ${accounts[i].password}`;
}

