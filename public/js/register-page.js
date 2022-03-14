async function loginHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#inputEmail4').value.trim();
    const password = document.querySelector('#inputPassword4').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
        
    }
}
document.querySelector('.login-form').addEventListener('submit', loginHandler);

async function signupHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#inputEmail4').value.trim();
    const password = document.querySelector('#inputPassword4').value.trim();
    const address = document.querySelector('#inputAddress').value;
    const addressLine2 = document.querySelector('#inputAddress2').value;
    const city = document.querySelector('#inputCity').value;
    const state = document.querySelector('#inputState').value;
    const zip = document.querySelector('#inputZip').value;

    if(username && password && address && addressLine2 && city && state && zip) {
        const response = await fetch('/api/customer', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            console.log('success');
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
        
    }
    if(email && password && address && addressLine2 && city && state && zip) {
    const response2 = await fetch('/api/address', {
        method: 'post',
        body: JSON.stringify({
            address,
            addressLine2,
            city,
            state,
            zip
        }),
        
        headers: { 'Content-Type': 'application/json' }
    });
    if (response2.ok) {
        console.log('success');
        document.location.replace('/')
    } else {
        alert(response2.statusText);
    }
}
}
document.querySelector('.register-form').addEventListener('submit', signupHandler);