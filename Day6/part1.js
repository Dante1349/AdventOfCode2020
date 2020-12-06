document
.getElementsByTagName('pre')[0]
.innerText
.split(/\n{2,}/g).map(ae=>ae.split(' ')
.map(e=>e.split('\n')))
.map(e=>e.flat())
.map(e=>e.map(ae=>ae.split('')))
.map(e=>e.join())
.flat()
.map(e=>e.split('').filter(e=>e!==''&&e!==','))
.map(e=>[...new Set(e)])
.map(e=>e.length)
.reduce((a,b)=>a+b)