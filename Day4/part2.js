function validateHGT(hgt) {
	if(hgt.match(/\d*(cm|in)/g) !== null && 
		hgt.match(/\d*(cm|in)/g).length==1) {
		let height = +hgt.match(/\d*/g)[0]
		let unit = hgt.match(/cm|in/g)[0]

		if(unit=="cm") {
			return height>=150 && height<=193
		} else {
			return height>=59 && height<=76
		}
	} else {return;}
}

function validate(pw) {
	let keys = Object.keys(pw);
	let byr = (keys.includes('byr')) ? (pw.byr.length==4 && (+pw.byr<=2002&&+pw.byr>=1920)) : true;
	let iyr = (keys.includes('iyr')) ? (pw.iyr.length==4 && (+pw.iyr<=2020&&+pw.iyr>=2010)) : true;
	let eyr = (keys.includes('eyr')) ? (pw.eyr.length==4 && (+pw.eyr<=2030&&+pw.eyr>=2020)) : true;
	let hgt = (keys.includes('hgt')) ? validateHGT(pw.hgt) : true;
	let hcl = (keys.includes('hcl')) ? (pw.hcl.match(/#[a-f, 0-9]{6}/g) && 
		pw.hcl.match(/#[a-f, 0-9]{6}/g).length==1) : true;
	let ecl = (keys.includes('ecl')) ? (pw.ecl.match(/amb|blu|brn|gry|grn|hzl|oth/g) && 
		pw.ecl.match(/amb|blu|brn|gry|grn|hzl|oth/g).length==1) : true;
	let pid = (keys.includes('pid')) ? (pw.pid.match(/^\d{9}$/g) !==null && 
		pw.pid.match(/^\d{9}$/g).length==1) : true;

	return byr&&iyr&&eyr&&hgt&&hcl&&ecl&&pid;
}

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
.filter(e => validate(e))
.length
