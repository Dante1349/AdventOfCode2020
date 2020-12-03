document
.getElementsByTagName('pre')[0]
.innerText.split('\n')
.filter(e => e!='')
.map(e => +e)
.forEach((e,i,a)=>{
    a.forEach(ae=>{
        if(e+ae==2020) {
            console.log('solution: ', e*ae)
        }
    })
})