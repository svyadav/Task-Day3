//For
let array=["sachin","rahul","rohit","rohan"];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}


//For of
let name=["sachin","rahul","rohit","rohan"];
for(let j of name){
    console.log(j);
}

//For In

let name1=["sachin","rahul","rohit","rohan"];
for(let x in name1){
    console.log(x);
    console.log(name1[x]);
}


//For each
let name2=["sachin","rahul","rohit","rohan"];
array.forEach(myfunction);
function myfunction(i){
console.log(i);
}