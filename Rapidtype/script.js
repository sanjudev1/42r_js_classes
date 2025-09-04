let usr_input=document.getElementById("input")
usr_input.style.width="0px"
let sentence_ele=document.getElementById("sentence")
  let value= sentence_ele.textContent
sentence_ele.innerHTML=  value.split("").map(e=>`<span>${e}</span>`).join("")
document.body.addEventListener("keyup",function(e){
 usr_input.value=usr_input.value+e.key
console.log("trigger...")
let ch_elements=document.querySelectorAll("span")   

  for(let i=0;i<usr_input.value.length;i++){
    console.log("",usr_input.value[i],ch_elements[i].textContent)
  //  console.log(usr_input.value[i],ch_elements[i].textContent)
    if(usr_input.value[i]==ch_elements[i].textContent){
         
        ch_elements[i].style.color="#D1D0C5"
    }else{
      ch_elements[i].style.color="#fc0345"
    }
  }
  for(let i=usr_input.value.length;i<ch_elements.length;i++){
    ch_elements[i].style.color="black"
  }
})