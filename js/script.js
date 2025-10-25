console.log("POzdrav iz JS fajla");
//Nacini za definisanje promenljivih
//var,let,const
let a=20;
let b=10;
console.log("zbir a i b je:",a+b);

let c="10";
console.log(b==c);
console.log(b===c);

let temperatura=22;
if(temperatura>25){
    console.log("Napolju je toplo");
}else if(temperatura>15){
    console.log("napolju je prijatno");
}else{
    console.log("napolju je hladno");
}

const voce = ['jabuka','banana','kruska','kivi'];
console.log(voce);
for(let i=0;i<voce.length;i++){
    console.log("volim da jedem",voce[i]);
}

//for of | for in
for(const v of voce){
    console.log(v);
}

for(const vo in voce){
    console.log(vo);
}

//funkcije
function prognoza(temp){
    if(temp>25){
        console.log("napolju je toplo");
    }else if(temp>15){
        console.log("napolju je prijatno");
    }else{
        console.log("napolju je hladno");
    }
}

prognoza(temperatura);

function saberi(a,b){
    return a+b;
}

const mnozenje = function (a,b){
    return a*b;
}

console.log(voce.map(v => v.length));
console.log(voce.map(function(v){
    return v.length;
}));

const oduzmi = (b1,b2) => {
    return b1-b2;
}

const oduzmiS = function(b1,b2){
    return b1-b2;
}

(function(name){
    console.log("Pozdrav iz IIFE od ", name)
}(ime));
