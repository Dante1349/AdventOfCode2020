let p = document
    .getElementsByTagName('pre')[0]
    .innerText
    .split('\n')
    .filter(e=>e!=='')
    .map(e=>e.split(' '))
    .map(e=>[e[0], +e[1]])
    
    
function setAcc(cs){
    let acc = 0;
    let cp = 0;
    
    while(cs[cp][2]==undefined){
        let command = cs[cp][0];
        let value = cs[cp][1];
        
        
        cs[cp].push(cp);
        
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
    }
    
    return acc;
}

setAcc(p)