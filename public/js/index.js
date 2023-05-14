const userForm = document.querySelector('form');

const formSubmission = async (e) => {
    e.preventDefault();

    const userValue = document.getElementById('usernameInput').value;
    console.log(userValue);
    const emailValue = document.getElementById('emailInput').value;
    console.log(emailValue);
    const passwordValue = document.getElementById('passwordInput').value;
    console.log(passwordValue);


    const postValue = await fetch('/users/sign-up', {
        method: 'POST',
        // pass values to the server from object in insomnia
        body: JSON.stringify({
            username: userValue,
            email: emailValue,
            password: passwordValue
        }),
        // optional
        headers: { 'Content-Type': 'application/json' }
    })

    if (postValue.ok) {
        alert('You have signed up successfully!')
    } else {
        alert('Sign up failed. Please try again.')
    }
}

userForm.addEventListener('submit', formSubmission);