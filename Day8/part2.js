let p = document
    .getElementsByTagName('pre')[0]
    .innerText
    .split('\n')
    .filter(e=>e!=='')
    .map(e=>e.split(' '))
    .map(e=>[e[0], +e[1]])

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
    
function testProgram(cs){
    let acc = 0;
    let cp = 0;
    
    while(cs[cp][2]==undefined){
        
        //console.log(cs[cp], cp)
        let command = cs[cp][0];
        let value = cs[cp][1];


        cs[cp].push(cp);

        //console.log(command, value, cp)

        switch(command){
            case 'nop':
                cp++;
                break;

            case 'acc':
                acc+=value;
                cp++;
                break;

            case 'jmp':
                cp+=value;
                break;
        }

        if(cp==cs.length) {
            return acc;
        }
    }
}
    
function setAcc(cs){
    let nopPos = cs.map((e,i,a)=>(e[0]=='nop')?i:undefined).filter(e=>e!==undefined)
    let jmpPos = cs.map((e,i,a)=>(e[0]=='jmp')?i:undefined).filter(e=>e!==undefined)
    
    //console.log("hey", nopPos, jmpPos)
    
    for(let i = 0; i<=nopPos.length-1; i++) {
        const tcs = clone(cs);
        
        tcs[nopPos[i]][0]='jmp';
        
        let o = testProgram(tcs);
        
        if(o!==undefined){
            return o;
        }
    }
    
    for(let i = 0; i<=jmpPos.length-1; i++) {
        const tcs = clone(cs);
        
        tcs[jmpPos[i]][0]='nop';
        
        let o = testProgram(tcs);
        
        if(o!==undefined){
            return o;
        }
    }
    
}

setAcc(p)