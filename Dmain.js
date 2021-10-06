let weight=document.querySelector('#weight');
let height=document.querySelector("#height");
let age=document.querySelector("#age");
 let act=document.querySelectorAll('input[name="flexRadioDefault"]');
let button=document.querySelector(".btn");

let op1=document.querySelector("#flexRadioDefault1");
let op2=document.querySelector("#flexRadioDefault2");
let op3=document.querySelector("#flexRadioDefault3");
let op4=document.querySelector("#flexRadioDefault4");

let op5=document.querySelector("#flexRadioDefault5");
let op6=document.querySelector("#flexRadioDefault6");


let bmrb=document.querySelector(".lbmr");
let mwb=document.querySelector(".lmw");
let lwb=document.querySelector(".llw");
let gwb=document.querySelector(".lgw");








eventListeners();

function eventListeners(){
    button.addEventListener("click",tr);
}
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    alert.id="nigar";
    alert.style.width="61rem";
    alert.style.marginLeft="0.2rem";
     inp.appendChild(alert);

     setTimeout(function(){
        alert.remove();
     },3000)
}
function tr(e){
    let bmr;
    let mw;
    let lw;
    let gw;

    if((weight.value==="" || height.value==="" || age.value==="") || (op1.checked==false && op2.checked==false && op3.checked==false && op4.checked==false) || (op5.checked==false  && op6.checked==false)){ 
        showAlert("warning","Please enter all the information");
       
        
    }
        else{ 
if(op5.checked==true) bmr=Math.floor(13.397*(+weight.value)+4.799*(+height.value)-5.6777*(+age.value)+88.362)-100;
else if(op6.checked==true) bmr=Math.floor(9.247*(+weight.value)+3.098*(+height.value)-4.330*(+age.value)+447.593);
  
 
    if(op1.checked==true){
        mw=Math.floor(1.2*bmr);
        lw=Math.floor(bmr);
        gw=Math.floor(1.32*bmr);
        
    }
    else if(op2.checked==true) {
        mw=Math.floor(1.55*bmr);
        lw=Math.floor(1.2916*bmr);
        gw=Math.floor(1.705*bmr);
        
    }
    else if(op3.checked==true){
        mw=Math.floor(1.725*bmr)
        lw=Math.floor(1.4375*bmr);
        gw=Math.floor(1.8975*bmr);
       
    }
    else if(op4.checked==true) {
        mw=Math.floor(1.9*bmr);
        lw=Math.floor(1.583*bmr);
        gw=Math.floor(2.09*bmr);
        // console.log(bmr);
        // console.log(mw);
        // console.log(lw);
        // console.log(gw);
    }
    bmrb.textContent=bmr;
    mwb.textContent=mw;
    lwb.textContent=lw;
    gwb.textContent=gw;
}
    
  
    
}