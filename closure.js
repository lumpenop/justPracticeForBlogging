

function add(){
    let num =5;
    
    return function(){
        num++;

        return num;
    }
    
}
const num = add();
console.log(num());
console.log(num());
console.log(num());