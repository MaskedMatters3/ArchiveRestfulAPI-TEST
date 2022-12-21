function checkPassword() {
    const password = document.getElementById('passwordIP').value

    fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if(date == password) {
                document.getElementById('loginout').innerHTML = "You are logged in!!"
            } else {
                document.getElementById('loginout').innerHTML = "You are still logged out!!"
            }
        })
        .catch((error) => {
            document.getElementById('loginout').innerHTML = "Something's up with server side!!"
        })


}