import style from  './app.css'
import test from './test.css'
import testGlobal from './test.global.css'

console.log(style);
console.log(test);
console.log(testGlobal);
const div = document.createElement('div')
div.textContent = 'hello'
div.classList.add(style.box)
document.body.appendChild(div)