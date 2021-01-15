let modal = document.querySelector('.addModal'); /* . untuk class */
console.log(modal)
let bg = document.querySelector('.bgModal');
console.log(bg)
let inputanUsername = document.querySelector('#username');/* # untuk id */
console.log(inputanUsername)
let inputanPassword = document.querySelector('#password');
console.log(inputanPassword)
let btnLogin = document.querySelector('input[type="button"]');
console.log(btnLogin)
let btnTutup = document.querySelector('.tutupModal');
console.log(btnTutup)
let modalHeading = document.querySelector('.bgModal');
console.log(modalHeading)

function showModal() {
    modal.style.display = "flex";
    bg.style.display = "flex";
};

function hideModal() {
    modal.style.display = "flex";
    bg.style.display = "flelx";
    window.location.href = "web 2.html";
};

function login() {
    if (inputanUsername.value == 'username' && inputanPassword.value == 'password'){
        showModal();
    } else {
        modalHeading.innerText = `Maaf username ${inputanUsername.value} tidak terdaftar, silahkan refresh halaman`;
        showModal();
    }
};

btnLogin.addEventListener("click", login);
btnTutup.addEventListener("click", hideModal);