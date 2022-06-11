import helloWorld from './hello-world'
import imgsrc from './assets/asset-resource.png'
import svgsrc from './assets/inline.svg'
import txtsrc from './assets/source.txt'
import jpgsrc from './assets/asset.jpg'

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
block.textContent = txtsrc

const img3 = document.createElement('img');
img3.src = jpgsrc
img3.width = 100
img3.height = 100
document.body.appendChild(img);
document.body.appendChild(img2);
document.body.appendChild(block);
document.body.appendChild(img3);