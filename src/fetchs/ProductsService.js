export function ProductsService() {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem("token"),
        }
    };

    return new Promise(resolve => {
        fetch('https://localhost/api/showcase/allbypopular?page=1&offset=24', requestOptions)
            .then(res => res.text())
            .then(
                (result) => {
                    let data = JSON.parse(result);
                    console.log(data);
                    if (data.status) {
                        console.log(data.result);
                        resolve(data.result);
                    }
                },
                (error) => {
                }
            )
    })
}
