    
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert('Failed to log in.');
      }
    };

    const loginFormHandler = async function(event) {
      event.preventDefault();
    
      const usernameEl = document.querySelector('#username-input-login');
      const passwordEl = document.querySelector('#password-input-login');
    
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to login');
      }
    };

   const signupFormHandler = async (event) => {
    event.preventDefault();
    const loginFormHandler = async (event) => {9
      event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert('Failed to sign up.');
      }
    }
  }};
  
  
    document
      .querySelector('.login-form')
      .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);