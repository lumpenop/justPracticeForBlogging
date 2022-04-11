// 중복 item 을 제거하는 프로그램을 작성하시오

const arr = [1, 2, 3, 4, 1, 2];
const b = [];

arr.forEach(e=>{
    let isIn  = false;
    for(let i=0; i<b.length; i++){
        if(e===b[i]){
            isIn = true;
        }
    }
    if(!isIn){
        b.push(e);
    }
})

console.log(b);



