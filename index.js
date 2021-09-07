let randomPassTxtEl=document.getElementById("randomPassword");
let selectlengthEl=document.getElementById("selectlength")
let btnEl=document.getElementById("generaterandomPass")

let lengthel={
    l:0
}

selectlengthEl.addEventListener("change",function(){
    lengthel.l=parseInt(selectlengthEl.value)
})
randomPassTxtEl.textContent="Please Enter Length of Password"

let alphabets="ABCDEFGH45678IJKLM!@#$%NOPQRSTUVWXYZ!@#$%^&()1234567890"
btnEl.onclick=function(){
        let lengthofpass=parseInt(selectlengthEl.value)
        //console.log(lengthofpass)
        let n=alphabets.slice(0,lengthofpass)
    if (selectlengthEl.value===""){
        randomPassTxtEl.textContent="Enter Required Length"
    }
    else if(lengthofpass<=45){
        let randomPass=""
        for (let each of n){
            let random=Math.ceil(Math.random()*n.length)
            randomPass=randomPass+alphabets[random]   
        }
        randomPassTxtEl.textContent=randomPass
        selectlengthEl.value="" 
    }
    else{
        randomPassTxtEl.textContent="Enter required Length (between 0 to 45 only)"
    }
    
}