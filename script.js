const emailInput = document.querySelector('.input-group input');
const emailSubmitBtn = document.querySelector('.input-group button');
const errMsg = document.querySelector('.invalid-feedback');

const regexPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
emailSubmitBtn.addEventListener('click',()=>{
errMsg.classList.toggle('d-block', !emailInput.value || !emailInput.value.match(regexPattern));
 

 })
