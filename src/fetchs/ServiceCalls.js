export function LoginService(identifier, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({identifier: identifier, password: password})
    };

    return new Promise(resolve => {
        fetch('https://localhost/api/users/login', requestOptions)
            .then(res => res.text())
            .then(
                (result) => {
                    let data = JSON.parse(result);

                    if (data.status) {
                        localStorage.setItem('token', data.token);

                        resolve(data.result);
                    }
                },
                (error) => {
                }
            )
    })
}
