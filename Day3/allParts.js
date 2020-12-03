let slopes = document
.getElementsByTagName('pre')[0]
.innerText
.split('\n')
.filter(e=>e!=='')
.map(e=>e.split(''))
.filter(e=>e.length==31)
.map((e,i,a) => {
  let down1 = i;
  let right1 = i%31;
  
  let down2 = i;
  let right2 = (i*3)%31;
  
  let down3 = i;
  let right3 = (i*5)%31;
  
  let down4 = i;
  let right4 = (i*7)%31;
  
  let down5 = i*2;
  let right5 = i%31;
  
  let slope1 = a[down1][right1]=='#'
  let slope2 = a[down2][right2]=='#'
  let slope3 = a[down3][right3]=='#'
  let slope4 = a[down4][right4]=='#'
  let slope5 = (down5<a.length)?a[down5][right5]=='#':0
  
  return [slope1, slope2, slope3, slope4, slope5];
})
.map((e,i,a)=>{
    return [e[0]?1:0, e[1]?1:0, e[2]?1:0, e[3]?1:0, e[4]?1:0]
})

let slope1=0;
let slope2=0;
let slope3=0;
let slope4=0;
let slope5=0;
slopes.forEach(e=>{
    slope1+=e[0]?1:0
    slope2+=e[1]?1:0
    slope3+=e[2]?1:0
    slope4+=e[3]?1:0
    slope5+=e[4]?1:0
})

console.log('solution1: ', slope2);
console.log('solution2: ', slope1 * slope2 * slope3 * slope4 * slope5);