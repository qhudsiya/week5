function *add(a,b){
    let c=a+b;
    yield "addition of 2 nos";
    yield a;
    yield b;
    yield "is equal to ";
    //return c;
    yield c;
}
let s=add(10,40);
/* console.log(s);
console.log(s.next());
console.log(s.next().value);
console.log(s.next().value);
console.log(s.next());
console.log(s.next().value);
console.log(s.next().done);
*/
//console.log(s.throw(new Error("error")));
for(let v of s){
    console.log(v);
}
