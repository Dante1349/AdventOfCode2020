document.getElementsByTagName('pre')[0].innerText.split('\n')
.map(e => e.split(' '))
.filter(e => e.length==3)
.map(e => {
    e[1]=e[1].replace(':','');
    return e;
})
.map(e => {
  let pw = e[2];
  let c = e[1];
  
  let len = pw.split('').filter(e=>e==c).length
  
  return [...e[0].split('-'), e[1], e[2], len]
})
.filter(e => {
  if(e[0] <= e[4] && e[4] <= e[1]){
    return true
  }
})
.length
