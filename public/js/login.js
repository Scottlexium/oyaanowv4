const email = document.getElementById('email');
const pwd = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', login);
 async function login(e){
    e.preventDefault();

    const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res)=> res.json())
    console.log(result);
}