let modal = document.querySelector('.addModal'); /* . untuk class */
console.log(modal)
let bg = document.querySelector('.bgModal');
console.log(bg)
let inputanNama = document.querySelector('#namalengkap');/* # untuk id */
console.log(inputanNama)
let inputanEmail = document.querySelector('#email');/* # untuk id */
console.log(inputanEmail)
let inputanUsername = document.querySelector('#username');/* # untuk id */
console.log(inputanUsername)
let inputanPassword = document.querySelector('#password');
console.log(inputanPassword)
let btnCreate = document.querySelector('input[type="button"]');
console.log(btnCreate)
let btnTutup = document.querySelector('.tutupModal');
console.log(btnTutup)
let modalHeading = document.querySelector('.bgModal');
console.log(modalHeading)

function showModal() {
    modal.style.display = "flex";
    bg.style.display = "flex";
};

function hideModal() {
    modal.style.display = "none";
    bg.style.display = "none";
    window.location.href = "web 2.html"
};
function create() {
    if (inputanNama.value == 'nama lengkap' && inputanEmail.value == 'email@gmail.com' && inputanUsername.value == 'username' && inputanPassword.value == 'password'){
        showModal();
    } else {
        modalHeading.innerText = `Maaf, silahkan coba daftarkan akun Anda lagi`;
        showModal();
    }
};


btnCreate.addEventListener("click", create);
btnTutup.addEventListener("click", hideModal);