function findUpperRange(range) {
	let len = (range[1]-range[0]+1)/2;
	return [range[0]+len, range[1]];
}

function findLowerRange(range){
	let len = (range[1]-range[0]+1)/2;
	return [range[0], range[1]-len]
}

function findRow(bp) {
	let len = 127
	let range = [0,len]
	for(let i=0;i<6;i++){
		if(bp[i]=='F'){
			range=findLowerRange(range);
		} else if (bp[i]=='B') {
			range=findUpperRange(range);
		} else {
			console.log('Problem, element was: ', bp[i], ' index: ', i);
		}
	}
	if(bp[6]=='F'){
		return range[0];
	} else if(bp[6]=='B'){
		return range[1];
	} else {
		console.log('Problem2, element was: ', bp[6]);
	}
}


function findColumn(bps){
	let len = 7;
	let range = [0,len];
	for (let i = 0; i < 2; i++) {
		if(bps[i]=='R'){
			range = findUpperRange(range);
		} else if(bps[i]=='L') {
			range = findLowerRange(range);
		} else {
			console.log('Problem3, element was: ', bps[i])
		}
	}
	if(bps[2]=='L'){
		return range[0];
	} else if(bps[2]=='R'){
		return range[1];
	} else {
		console.log('Problem4, element was: ', bps[2]);
	}
}

let boardingPasses = document
	.getElementsByTagName('pre')[0]
	.innerText
	.split('\n')
	.filter(e=>e!=='')
	.map(e=>e.split(''))
	.map(e=>[findRow(e), ...e])
	.map(e=>[ e[0], findColumn([e[8], e[9], e[10]]), e[1]+e[2]+e[3]+e[4]+e[5]+e[6]+e[7]+e[8]+e[9]+e[10] ])
	.map(e=>[ e[0], e[1], e[0]*8+e[1], e[2] ])
	.sort((a,b)=>a[2]-b[2])

console.log(
	'result11: ',
	Math.max(...boardingPasses.
		map(e=>e[2]))
)

console.log(
	boardingPasses
		.forEach((e,i,a)=>{
			if(i<a.length-1 && a[i+1][2]-e[2]==2){
				console.log('result2: ', e[2]+1)
				return true;
			}
		})
)

