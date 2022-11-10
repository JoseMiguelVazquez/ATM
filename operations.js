const operationsSection = document.getElementById("operations-section");
const operationsUser = document.getElementById("operations_user");
const currentBalance = document.getElementById("current-balance");
const operationsTitle = document.getElementById("operations-title");
const amountContainer = document.getElementById("amount-container");
const amountButton = document.getElementById("amount-button");

function showOperations(){
    menuSection.classList.add("d-none");
    operationsSection.classList.remove("d-none");
    operationsUser.innerHTML = currentAccount.user;
    currentBalance.innerHTML = format(currentAccount.balance, 2);
}

function showBalance(){
    showOperations();
    operationsTitle.innerHTML = "Consultar Saldo";
    amountContainer.classList.add("d-none");
}

function showDeposit(){
    showOperations();
    operationsTitle.innerHTML = "Ingresar Monto";
    amountContainer.classList.remove("d-none");
    amountButton.innerHTML = "Ingresar";
}

function showWithdraw(){
    showOperations();
    operationsTitle.innerHTML = "Retirar Monto";
    amountContainer.classList.remove("d-none");
    amountButton.innerHTML = "Retirar";
}

function returnButton(){
    operationsSection.classList.add("d-none");
    menuSection.classList.remove("d-none");
}

function amountAction(){
    let amountInput = document.getElementById("amount");
    let amount = parseFloat(amountInput.value);
    let amountMessage = "";
    
    
    if (amount <= 0 || Number.isNaN(amount)) {
        amountMessage = "Ingrese un valor apropiado";
    }
    else {
        if(amountButton.innerHTML == "Ingresar"){
            if((amount + currentAccount.balance) > 990) {
                amountMessage = "Su cuenta no puede tener mas de $990.00";
            }
            else {
                currentAccount.balance += amount;
                currentBalance.innerHTML = format(currentAccount.balance, 2);
                amountMessage = `Monto Ingresado: $${format(amount, 2)}`;
            }
        }
        else if (amountButton.innerHTML == "Retirar"){
            if ((currentAccount.balance - amount) < 10) {
                amountMessage = "Su cuenta no puede tener menos de $10.00";
            }
            else {
                currentAccount.balance -= amount;
                currentBalance.innerHTML = format(currentAccount.balance, 2);
                amountMessage = `Monto Retirado: $${format(amount, 2)}`;
            }
        }
    }
    amountInput.value = "";
    swal(amountMessage);
}

const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
});