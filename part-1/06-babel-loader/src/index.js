import helloWorld from './hello-world'
import imgsrc from './assets/asset-resource.png'
import svgsrc from './assets/inline.svg'
import txtsrc from './assets/source.txt'
import jpgsrc from './assets/asset.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Nodes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'

helloWorld();

const img = document.createElement('img');
img.src = imgsrc;
img.width = 100
img.height = 100
const img2 = document.createElement('img');
img2.src = svgsrc
img2.width = 100
img2.height = 100
const block = document.createElement('div')
block.classList.add('block-bg')
block.textContent = txtsrc

const img3 = document.createElement('img');
img3.src = jpgsrc
img3.width = 100
img3.height = 100
document.body.appendChild(img);
document.body.appendChild(img2);
document.body.appendChild(block);
document.body.appendChild(img3);

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '&#xe65f;'
document.body.appendChild(span)

console.log(Data)
console.log(Nodes); 


console.log('toml', toml);
console.log(toml.title);
console.log(toml.owner.name);

console.log('yaml', yaml);
console.log(yaml.title);
console.log(yaml.owner.name);

console.log('json5', json5);
console.log(json5.title);
console.log(json5.owner.name);