document.getElementById('btn-submit').addEventListener('click', function(){
    const emailValue = document.getElementById('user-email');
    const email = emailValue.value;

    const passwordValue = document.getElementById('user-password');
    const password = passwordValue.value;

    if(email === 'sakil@gamil.com' && password === 'sakil123'){
        window.location.href = 'main.html'
    }
})