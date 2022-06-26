//************************************************************************
1)a)1)Print odd numbers in an array using anonymous function method.
//========================================================================

let oddarr =[];
let check = function(a){
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
            oddarr.push(a[i]);
        }
        else{
            continue;
        } 
}
};
check([1,2,3,4,5]);
console.log(oddarr);

//========================================================================
1)a)2)Print odd numbers in an array using  IIFE method
//========================================================================

(function(){
    let a =[1,2,3,4,5];
    let oddarr =[];
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
            oddarr.push(a[i]);
        }
        else{
            continue;
        } 
}
console.log(oddarr);
})();

//*****************************************************************************************
1)b)1)Convert all the strings to title caps in a string array using anonymous function method.
//=========================================================================================

let oddarr =[];
let check = function(str){
 for(let i=0;i<str.length;i++){
 str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    oddarr.push(str[i]);
 }
};
check(["kiruba","haran"]);
console.log(oddarr);

//=========================================================================================
1)b)2)Convert all the strings to title caps in a string array using  IIFE method
//=========================================================================================

(function(){
    let str =["kiruba","haran"];
    let oddarr =[];
 for(let i=0;i<str.length;i++){
 str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    oddarr.push(str[i]);
 }
 console.log(oddarr);
 })();

//*****************************************************************************************
1)c)1)Sum of all numbers in an array using  anonymous function method.
//=========================================================================================

let b="";
let check = function(a){
     b =a.reduce((acc,cur)=>{
        return acc+cur;  
    });
    
    console.log(b);
};
check([1,2,3,4,5]);

//=========================================================================================
1)c)2)Sum of all numbers in an array using  IIFE method
//=========================================================================================

(function(){     
        let a =[1,2,3,4,5];    
        b =a.reduce((acc,cur)=>{
        return acc+cur;
        });
  console.log(b);
 })();

//*****************************************************************************************
1)d)1)Return all the prime numbers in an array using  anonymous function method.
//=========================================================================================

let res=[];
let check = function(a){
    
    for(let x of a){
        let repeat=0;
            for(let i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        console.log(res);  
};
check([2,3,13,22,12,44,97]);

//=========================================================================================
1)d)2)Return all the prime numbers in an array using   IIFE method
//=========================================================================================

(function(){
    let a = [2,3,13,22,12,44,97];
    var res=[];
    for(var x of a){
        var repeat=0;
            for(var i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        console.log(res);
       
})();

//*****************************************************************************************
1)e)1)Return all the palindromes in an array using  anonymous function method.
//=========================================================================================

let listPalindrome = ["racecar", "yarn", "madam", "civic", "notebook"];
let checkPalindrome = (function(listPalindrome){
    let isPalindrome = [];
    listPalindrome.forEach(function (params){
        let inputWord = params;
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord);
        }
    })
    return isPalindrome;
    
})(listPalindrome);
console.log("output", checkPalindrome);

//=========================================================================================
1)e)2)Return all the palindromes in an array using   IIFE method.
//=========================================================================================

(function(){
    
    let listPalindrome = ["racecar", "yarn", "madam", "civic", "notebook"];
    let isPalindrome = [];
    listPalindrome.forEach(function (params){
       
        let inputWord = params;
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord)
        }
        return isPalindrome;
    })
    
   
    console.log("output", isPalindrome);
})();

//*****************************************************************************************
1)f)1)Return median of two sorted arrays of the same size using  anonymous function method.
//=========================================================================================


let check = function(ar1,ar2){
var n1 = ar1.length;
var n2 = ar2.length;
var n=n1;
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
   
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2)/2);
};
check([10, 20, 30, 40, 50],[60, 70, 80, 90, 100]);
    
//=========================================================================================
1)f)2)Return median of two sorted arrays of the same size using   IIFE method.
//=========================================================================================

(function(){
var ar1 = [10, 20, 30, 40, 50];
var ar2 = [60, 70, 80, 90, 100];
var n1 = ar1.length;
var n2 = ar2.length;
var n=n1;
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
   
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2)/2);
})();

//*****************************************************************************************
1)g)1)Remove duplicates from an array using  anonymous function method.
//=========================================================================================

let check= function(kiruba){   
var res=[];
for(let i=0;i<kiruba.length;i++){
    var repeat=0;
    for(let j=0;j<kiruba.length;j++){
        if(kiruba[i]==res[j]){
            repeat=1;
        }
    }
    if(repeat==0){
        res.push(kiruba[i])
    }
}
console.log(res);
};
check([10,20,30,10,40,20,50,20,10,80,90,50,80]);


//=========================================================================================
1)g)2)Remove duplicates from an array using   IIFE method.
//=========================================================================================

(function(){
var kiruba=[10,20,30,10,40,20,50,20,10,80,90,50,80];
var res=[];
for(let i=0;i<kiruba.length;i++){
    var repeat=0;
    for(let j=0;j<kiruba.length;j++){
        if(kiruba[i]==res[j]){
            repeat=1;
        }
    }
    if(repeat==0){
        res.push(kiruba[i])
    }
}
console.log(res)
})();

//*****************************************************************************************
1)h)1)Rotate an array by k times using  anonymous function method.
//=========================================================================================


let check=function(arr,k){
let res=[];
let n=arr.length;
    k=k%n;
for(i=0;i<arr.length;i++){
   if(i<k){
     res[i]=arr[n-k+i];
      }
   else{
       res[i]=arr[i-k];
      }
  }
 console.log(res);
};
check ([22,23,34,45,62],4);

//=========================================================================================
1)h)2)Rotate an array by k times using   IIFE method.
//=========================================================================================

(function(){
let arr=[22,23,34,45,62];
let k=4;
let res=[];
let n=arr.length;
    k=k%n;
for(i=0;i<arr.length;i++){
   if(i<k){
       res[i]=arr[n-k+i]
          }
     else{
       res[i]=arr[i-k]
         }
    }
console.log(res)
})();
//*****************************************************************************************
3)a)Print odd numbers in an array using arrow functions

//=========================================================================================

let a = [1,2,3,4,5];
let check = (() => {
let oddarr =[];
    for(let i=0;i<a.length;i++){
        if(a[i]%2==1){
            oddarr.push(a[i]);
        }
        else{
            continue;
        } 
}
return oddarr;
});
console.log(check(a));

//*****************************************************************************************
3)b)Convert all the strings to title caps in a string array using arrow functions
//=========================================================================================

let str =["kiruba","haran"];
let check = (() => {
let oddarr =[];
      for(let i=0;i<str.length;i++){
str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
    oddarr.push(str[i]);
 }
 return oddarr;
});
console.log(check());

//*****************************************************************************************
3)c)Sum of all numbers in an array using arrow functions
//=========================================================================================

let a=[1,2,3,4,5];
let check = (()=>{
let b="";
     b =a.reduce((acc,cur)=>{
        return acc+cur;  
    });
    
    return b;
});
console.log(check());

//*****************************************************************************************
3)d)Return all the prime numbers in an array using arrow functions
//=========================================================================================

let a=[2,3,13,22,12,44,97];
let check = (()=>{
let res=[];
    for(let x of a){
        let repeat=0;
            for(let i=2;i<=x/2;i++){
                
            if(x%i==0){
                repeat=1;
                break;
            }
            }
            if(repeat==0){
                res.push(x)
            }
        }
        return res;  
});
console.log(check());

//*****************************************************************************************
3)e)Return all the palindromes in an array using arrow functions
//=========================================================================================

let listPalindrome = ["racecar", "yarn", "madam", "civic", "notebook"];
let checkPalindrome = (()=>{
    let isPalindrome = [];
    listPalindrome.forEach(function (params){
        let inputWord = params;
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord);
        }
    })
    return isPalindrome;
    
});
console.log(checkPalindrome());

//*****************************************************************************************