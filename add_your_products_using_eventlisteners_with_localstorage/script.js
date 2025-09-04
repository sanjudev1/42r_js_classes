let user_data=document.getElementById("user_input")
let local_container=document.getElementById("local_container")
let stored_data=localStorage.getItem("user_data")
local_container.textContent=stored_data
function AddtoStore(evnt){
    console.log(evnt.key)
  if(evnt.key=="Enter" && evnt.key=="Control"){

      local_container.textContent=local_container.textContent+ " "+ user_data.value 
      localStorage.setItem("user_data",local_container.textContent)
      user_data.value=""
  }
}

let stored_btn=document.getElementById("store_btn")

// onevent Listener
// stored_btn.onclick=AddtoStore

// add event listener
user_data.addEventListener("keyup",AddtoStore)

