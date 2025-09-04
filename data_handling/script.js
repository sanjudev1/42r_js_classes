
let user_container=document.getElementById("userdata")

let name_ele=document.getElementById("name")
let email_ele=document.getElementById("email")
let gender_ele =document.getElementById("gender")
let status_ele=document.getElementById("status")
let TOKEN ="766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"

let URL="https://gorest.co.in/public/v2/users"

function getAllusers(){
fetch("https://gorest.co.in/public/v2/users",{
     method:'GET',
  headers:{
    Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"

  },
})
.then(function(response){
  return response.json()
})
.then(function(jsondata){
     user_container.innerHTML=""
    console.log(jsondata)
    for(let i=0;i<jsondata.length;i++){
        let card=document.createElement("div")
    
        card.classList="card"
        card.innerHTML=`
           <p>${jsondata[i].id} <button onclick=deleteUser(${jsondata[i].id})>delete</button></p>
            <p>${jsondata[i].name}</p>
            <p>${jsondata[i].gender}</p>
             <p>${jsondata[i].email}</p>
        `
        user_container.appendChild(card)
    }
})

}
getAllusers()

function deleteUser(id){
  fetch(`https://gorest.co.in/public/v2/users/${id}`,{
    method :"DELETE",
    headers:{
      Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"
    }
  }).then(function(res){
     if(res.status==204){
      getAllusers()
     }
  })
}



function AddUser(){
  let user_data={
  name:name_ele.value,
  email:email_ele.value,
  gender:gender_ele.value,
  status:status_ele.value
}
   console.log(user_data,URL)
   fetch(URL, {
    method:"POST",
    body:JSON.stringify(user_data),
    headers:{
      "Content-type":"application/json",
      Accept:"application/json",
      Authorization:`Bearer ${TOKEN}`
    }})
    
    .then(function(res){
    return res.json()
   }).then(function(jsondata){
      getAllusers()
   })
}