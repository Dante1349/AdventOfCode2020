let nums = document.getElementsByTagName('pre')[0]
    .innerText.split('\n')
    .filter(e=>e!=='')
    .map(e=>+e)
    


function createValues(arr, start, end) {
    let curr = arr.slice(start, end)

    let vals = [];
    curr.forEach((e,i,a)=>{
        a.forEach(ae=>{
            if(e!==ae){
                vals.push(e+ae)
            }
        })
    })
    return [...new Set(vals)];
}


function checkValid(arr, end) {
    for(let i = 0; i<arr.length-end; i++){
        let nextIndex = i + end
        let valVals = createValues(arr,i,end+i)
 
        if(!valVals.includes(arr[nextIndex])){
            return arr[nextIndex]
        }
    }
}

function findSets(arr, num, sets, len){
    for(let i = 0; i<arr.length; i++){
        sets.push(arr.slice(i, len+i))
    }
    let set = sets.filter(e=>e.reduce((a,b)=>a+b)==num);
    if(set.length>0){
        return set;
    } else {
        return findSets(arr, num, sets, len+1)
    }
}

console.log('result1: ',checkValid(nums, 25));
let res = findSets(nums, checkValid(nums, 25), [], 2).flat().sort((a,b)=>a-b)

console.log('result2: ',res[0] + res[res.length-1])