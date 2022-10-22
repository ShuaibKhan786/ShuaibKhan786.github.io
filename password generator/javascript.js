const upper = () => [String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)];
const lower = () => [String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)];
const number  = () =>[ String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)];
const symbol =  () => [String.fromCharCode(Math.floor(Math.random() * 15 ) + 33)];
const btnel = document.getElementById("btn");
const inpel = document.getElementById("inp");
const uc = document.getElementById("upper");
const lc= document.getElementById("lower");
const num = document.getElementById("number");
const sym = document.getElementById("symbol");
const length = document.getElementById("range");
const span = document.getElementById("span");
const copybtn = document.getElementById("copy");

span.innerHTML = length.value;
length.oninput = function() {
    span.innerHTML = this.value;
  }

const myfunc = () =>{
    const newarr = [ ];
    if(uc.checked){
        newarr.push(upper())
    } if(lc.checked){
        newarr.push(lower())
    } if(num.checked){
        newarr.push(number())
    } if(sym.checked){
        newarr.push(symbol())
    } if(newarr.length === 0){
        return "";
    }
    return newarr[Math.floor(Math.random() * newarr.length)];
}

const generator = () =>{
    let i;
    let store = "";
    
    for(i = 1 ; i <= length.value ; i++){
        store += myfunc();
   }
   inpel.value = store;
   console.log(store.length)
}

btnel.addEventListener("click",()=>{
    generator()
   
})
copybtn.addEventListener("click", ()=>{
    inpel.select();
    navigator.clipboard.writeText(inpel.value);
    inpel.value = "";
})






