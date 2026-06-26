
let characters=[
    "A","B","C","D","E","F","G","H","I","J","K","L"
    ,"M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z",

    "a","b","c","d","e","f","g","h","i","j","k","l"
    ,"m","n","o","p","q","r","s","t","u","v","w","x"
    ,"y","z",
    
    "1","2","3","4","5","6","7","8","9","0",

    "~","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/","\\",
]

let generateButton = document.getElementById("generat-btn");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("passwrod2-el");
let lengthPasswordField = document.getElementById("length-password");
// console.log(lengthPasswordField);
// console.log(lengthPasswordField.value);

/////////////////////////
// this input type:checkbox
let checkboxNumber = document.getElementById("checkbox-number");
let checkboxSymbol = document.getElementById("checkbox-symbol");
// this label for input
let labelnumberexist = document.querySelector(".number-exist");
let labelsymbolexist = document.querySelector(".symbol-exist");
// circle 
let circleNumber = document.querySelector(".circle-number");
let circleSymbol = document.querySelector(".circle-symbol")


// console.log(ccc);
////////////////////////////////////////////////
////////////////////////////////////////////////



function getRamdomNumberFormCharacters(c){
     return Math.floor(Math.random()*c.length);
}

generateButton.addEventListener("click",function(){
    let ccc =  JSON.parse(JSON.stringify(characters));
    let nonum =false;
    if(!checkboxNumber.checked){
        ccc.splice(52,10); 
        nonum=true; 
    }
    if(!checkboxSymbol.checked){
        if(!nonum){
            ccc.splice(62,29);
        }else{
            ccc.splice(52,29);
        }    
    }
    console.log("ccc");
    console.log(ccc);
    let lengthPassword = lengthPasswordField.value;
    let pass1="";
    let pass2="";
    for(let i=0 ; i<lengthPassword ; i++){
        pass1 += ccc[getRamdomNumberFormCharacters(ccc)];
        pass2 += ccc[getRamdomNumberFormCharacters(ccc)];
    }

    password1El.textContent = pass1 ;
    password2El.textContent = pass2 ;

    

    // console.log(lengthPasswordField.value);
    
})
password1El.addEventListener("click",function(){
    if(password1El.textContent !="")
        navigator.clipboard.writeText(password1El.textContent);
    
});
password2El.addEventListener("click",function(){
    if(password2El.textContent !="")
        navigator.clipboard.writeText(password2El.textContent);
})

/////////////////////////////////////////////

labelnumberexist.onclick = function(){
    if(checkboxNumber.checked){
        //
        // characters = ccc;
        // console.log("in check number");
        // console.log(characters )
        labelnumberexist.style.backgroundColor="cornflowerblue";
        circleNumber.style.left="0px";
    }else{
        //

        // characters = ccc;
        // console.log("not check number");
        // console.log(characters )
        labelnumberexist.style.backgroundColor="#999";
        circleNumber.style.left="20px";
    }
    // console.log("ccc")
    // console.log(ccc);
}

labelsymbolexist.onclick = function(){
    if(checkboxSymbol.checked){
        //
        // characters = ccc;
        // console.log("in check symbol");
        // console.log(characters )
        labelsymbolexist.style.backgroundColor="cornflowerblue";
        circleSymbol.style.left="0px";
    }else{
        // 
        // characters = ccc;
        // console.log("not check symbol");
        // console.log(characters )
        labelsymbolexist.style.backgroundColor="#999";
        circleSymbol.style.left="20px";
    }
}


