let Form_ele=document.getElementById("userForm")
let nameEle=document.getElementById("name")
let emailEle=document.getElementById("email")
let genderele=document.getElementById("gender")
Form_ele.addEventListener("submit",function(e){
    console.log("data is submitted")
   e.preventDefault()
})

nameEle.addEventListener("blur",function(res){
    if(nameEle.value==""){
        alert("name filed should be required...")
    }
   console.log(nameEle.value)
})

emailEle.addEventListener("focus",function(){
    console.log(emailEle.value)
})

genderele.addEventListener("change",function(){
    console.log("change event listenrs triggered...")
})