function greet(name,c){
    console.log("welcome "+name);
    c();
}
function greet1(){
    console.log('hello');
}
greet("qhudsiya",greet1); //callback

var add=(function (){
    let a=2;
    return function (){ a += a; return a;}  //closure
})();
console.log(add());