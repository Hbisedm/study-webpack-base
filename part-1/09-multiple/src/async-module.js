function getComponent() {
    return import('lodash').then(({default: _})=> {
        const div = document.createElement('div');
        div.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return div
    })
}

getComponent().then(component => {
    document.body.appendChild(component)
})