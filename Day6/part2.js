document
.getElementsByTagName('pre')[0]
.innerText
.split(/\n{2,}/g).map(
	ae=>ae.split(' ')
	.map(e=>e.split('\n'))
)
.map(e=>e.map(
	ae=>ae.filter(
		ae2=>ae2!=='')
	)
)
.map(e=>e.flat())
.map(e=>e.map(ae=>ae.split('')))
.map(e=>{
	var result = e.shift().reduce(function(res, v) {
    if (res.indexOf(v) === -1 && e.every(function(a) {
        return a.indexOf(v) !== -1;
    })) res.push(v);
    return res;
	}, []);
	return result;
})
.map(e=>e.length)
.reduce((a,b)=>a+b)