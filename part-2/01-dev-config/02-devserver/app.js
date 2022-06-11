fetch('/api/hello')
    .then(resp => resp.text())
    .then(res => {
        console.log(res);
    })