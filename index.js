let randomPassTxtEl=document.getElementById("randomPassword");
let selectlengthEl=document.getElementById("selectlength")
let lengthel={
    l:0
}
selectlengthEl.addEventListener("change",function(event){
    lengthel.l=selectlengthEl.value
})

if (lengthel.l===0){
    randomPassTxtEl.textContent="Please select required Length below";
}
else{
    function generaterandomPass(){
        let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&()1234567890"
        let lengthofpass=selectlengthEl.value
        let n=alphabets.slice(0,lengthofpass)
        let randomPass=""
        for (let each of n){
            let random=Math.ceil(Math.random()*(alphabets.length))
            randomPass+=alphabets[random]   
        }
        randomPassTxtEl.textContent=randomPass 
    }
}