let bs = document.getElementsByTagName('pre')[0]
    .innerText.split('\n')
    .filter(e=>e!=='')
    .map(e=>e.split('contain'))
    .map(
        e=>[
            e[0].substring(0, e[0].length - 2), 
            e[1].substring(0, e[1].length - 1)
                .substring(1, e[1].length)
                .split(', ')
                .map(ae=>(ae.charAt(ae.length-1)=='s') ? ae.substring(0, ae.length - 1) : ae)
                .map(e=>[e.substring(0,1), e.substring(2, e.length)])
        ]
    )
    .map(e=>{
        let e1=(e[1][0][0]=="n") ? [] : e[1];
        return [e[0], e1]
    })
    .map(e=>[ e[0], e[1].map(ae=>[+ae[0], ae[1]]) ])
    
let bag = 'shiny gold bag';

function findBags(bagt, excludes) {
    let mbs = bs
        .filter(e=>e[1].filter(ae=>ae[1]==bagt).length>0)
        .filter(e=>!excludes.includes(e[0]));
    
    mbs.forEach(e=>excludes.push(e[0]));
    
    if(mbs.length==0) {
        return 0;
    } else {
        return mbs.length + mbs.map(e=>findBags(e[0], excludes)).reduce((a,b)=>a+b)
    }
}

function findBagCount(bagt) {
    let b = bs
        .filter(e=>e[0]==bagt)[0];
    
    if(b[1].length==0){
        return 1;
    } else {
        return b[1]
            .map(
                e=>{
                    return e[0] * findBagCount(e[1])
                }
            )
            .reduce((a,b)=>a+b)
            +1
    }    
}

console.log('result1: ',findBags(bag, [bag]))

console.log('result2: ',findBagCount(bag)-1)
