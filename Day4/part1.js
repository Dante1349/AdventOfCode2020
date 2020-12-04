document
.getElementsByTagName('pre')[0]
.innerText
.split(/\n{2,}/g).map(ae=>ae.split(' ')
.map(e=>e.split('\n')))
.map(e=>e.flat())
.map(e=>e.filter(ae=>ae!==""))
.map(e=>e.map(ae=>ae.split(':')))
.map(e=>{
	let o = {};
	e.forEach(ae=>o[ae[0]] = ae[1])
	return o;
})
.filter(e=> {
	let keys = Object.keys(e); 
	if(keys.includes('cid')) {
		return keys.length==8;
	} else {
		return keys.length==7;
	}
})
.length