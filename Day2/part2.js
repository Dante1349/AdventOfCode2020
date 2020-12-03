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
  
  return [...e[0].split('-'), e[1], e[2]]
})
.filter(e=>{
  return (e[3].charAt(+e[0]-1) == e[2] ||
  e[3].charAt(+e[1]-1) !== e[2])
})
.length