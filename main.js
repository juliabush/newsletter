const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error');
const signUpForm = document.getElementById('card-1');
const successMessage = document.getElementById('card-2');
const refreshButton = document.getElementById('refresh');
const displayText = document.getElementById('display');

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
        const inputValue = email.value;
        display.innerText = `A confirmation email has been sent to ${inputValue}. Please open it and click the button inside to confirm your subscription.`;
    }
})
refreshButton.addEventListener('click', function() {
    location.reload();
})