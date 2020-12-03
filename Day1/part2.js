document.getElementsByTagName('pre')[0].innerText
.split('\n')
.map(a=>+a)
.filter(a=>a!==0)
.filter((e,i,a)=>{
    let test=false; 
    a.forEach(ae => {
        a.forEach(ae2 => {
            if(e+ae+ae2==2020){
                console.log('solution: ', e*ae*ae2)
            }
        })
    })
})