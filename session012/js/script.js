// kjjjjjjjjj
document.write("<h1> Javascript </h1>");
document.write("<h1> Javascript </h1>");
document.write("1+2=",1+2);

document.getElementById("demo").innerHTML="skldnkcxklnc"
// هاعرف كان الايروو في انهي جزئ 
// console.log("test code")

document.querySelector("#demo").innerHTML="js"
// عشان لما ادوس علي الزرار يديني الاكشن الي مكتوووب جو innerHTML بس
document.querySelector("button").onclick=function(){
    document.querySelector("#demo").innerHTML="25"
}
// عشان لما ادوس علي الزرار يغير الكلام الكتوب جو الزرار
document.querySelector("button").onclick=function(){
    document.querySelector("#demo").innerHTML="25"
}

// عشان اختصر^^
// عشان اخلي العنصر يختفي بعد ماضغط 3مراااات
var btn = document.querySelector("button")
var counter = 0;
btn.onclick  =  function() {
    counter++;
    if( counter == 3 ){
        btn.style.display = "none"
    }
}

var x=1;
var y=2;
x++;// 2
++x;//3
console.log(x *8)

// //if هل
// if(y==2 && x<0){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }

// loop


for( i=0 ; i<10 ; i++ ){
    document.write("<p>this is p</p>")
}

document.write("<select>")
document.write("<option> select </option>")
for( i=1985 ; i<2020 ; i++ ){
    document.write("<option>" + i + "</option>")
}
document.write("</select>")

// timer 
var x = 10;
var timer = setInterval( function() {
    document.getElementById("timer").innerHTML= --x;
    if(x == 2){
        document.querySelector("body").style.background="green"
        clearInterval(timer)
    }
} ,500)