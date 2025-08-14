let friends_list=[]
let heading=document.createElement("h1")
heading.textContent="Task Management"

document.body.appendChild(heading)

let user_input =document.createElement("input")
user_input.id="input"

document.body.appendChild(user_input)

let Addbtn = document.createElement("button")
Addbtn.textContent="Add"
Addbtn.classList="addbtn"
Addbtn.onclick=function(){
   let cur_name= document.getElementById("input").value
        if(cur_name==""){
            alert("please enter valid data")
        }
       if(cur_name){

           friends_list.push(cur_name)
       }
       console.log(friends_list)
       document.getElementById("input").value=""
       container.innerHTML=""

       for(let index in friends_list){
        let h1ele=document.createElement('h1')
        h1ele.textContent=friends_list[index] + " "+ "delete "
    
        h1ele.onclick=function(){
            friends_list.splice(index,1)
           Addbtn.onclick()
        }
        container.appendChild(h1ele)
    }
   
}

document.body.appendChild(Addbtn)
let container= document.createElement("div")


document.body.appendChild(container)