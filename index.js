
let characters=[
    "A","B","C","D","E","F","G","H","I","J","K","L"
    ,"M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z",

    "a","b","c","d","e","f","g","h","i","j","k","l"
    ,"m","n","o","p","q","r","s","t","u","v","w","x"
    ,"y","z",

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



function getRamdomNumberFormCharacters(){
     return Math.floor(Math.random()*characters.length);
}

generateButton.addEventListener("click",function(){

    let lengthPassword = lengthPasswordField.value;
    let pass1="";
    let pass2="";
    for(let i=0 ; i<lengthPassword ; i++){
        pass1 += characters[getRamdomNumberFormCharacters()];
        pass2 += characters[getRamdomNumberFormCharacters()];
    }

    password1El.textContent = pass1 ;
    password2El.textContent = pass2 ;

    console.log(password1El.textContent);

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





