// Register User
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('User registered:', user);
        })
        .catch(error => {
            console.error('Error registering user:', error);
        });
}

// Login User
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('User logged in:', user);
        })
        .catch(error => {
            console.error('Error logging in user:', error);
        });
}
