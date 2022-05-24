//========================================================================
//1)How to compare two JSON have the same properties without order?
//========================================================================

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var a = obj1.name && obj2.age;
var b = obj2.name && obj1.age;
var compObj = (a === b);
if(compObj){
    console.log("Comparatively both objects are same")
}else{
    console.log("Both objects has different data.")
}
//========================================================================
//2)Display all the country flags in console
//========================================================================
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function() {
let t = JSON.parse(request.responseText);
for(let index=0; index<t.length;index++){
    console.log(t[index].flag); 
}
};
request.send();
//========================================================================
//3)print all countries name, region, sub region and population
//========================================================================
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function() {
let t = JSON.parse(request.responseText);
for(let index=0; index<t.length;index++){
    console.log(t[index].name.common);
    console.log(t[index].region);
    console.log(t[index].subregion); 
    console.log(t[index].population); 
}
};
request.send();
//========================================================================