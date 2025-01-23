const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error');
const signUpForm = document.getElementById('card-1');
const successMessage = document.getElementById('card-2');
const refreshButton = document.getElementById('refresh');

form.addEventListener('submit', (e) => {
    let messages = []
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
        messages.push('Valid Email Required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
        errorMessage.classList.toggle('red-text');
        email.classList.toggle('red');
    } 
    if (messages.length === 0) {
        e.preventDefault()
        signUpForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
    }
})
refreshButton.addEventListener('click', function() {
    location.reload();
})