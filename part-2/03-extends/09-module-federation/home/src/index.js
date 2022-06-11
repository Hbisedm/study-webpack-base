import a from './HomeList'
import ('nav/Header').then((Header) => {

    const body = document.createElement('div')
    body.appendChild(Header.default())
    document.body.appendChild(body)
    body.innerHTML += a(5)
    
})
