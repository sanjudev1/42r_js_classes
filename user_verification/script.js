document.getElementById("heading").style.color="orange"


function onHandleSubmit(){
    let userName=document.getElementById("name").value
    
    document.getElementById("message").textContent=userName+"Your account is veryfing...."
}