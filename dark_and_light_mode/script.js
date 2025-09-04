let container= document.body
 let theme =localStorage.getItem("dark_mode")?"dark_mode":"light_mode"
container.classList=theme
function changeTheme(){
   if(container.classList=="dark_mode"){

       container.classList="light_mode"
       localStorage.setItem("light_mode","light_mode")
       localStorage.removeItem("dark_mode")
   
   }else{
      container.classList="dark_mode"
      localStorage.setItem("dark_mode","dark_mode")
      localStorage.removeItem("light_mode")
      
   }

// classList.add("dark_mode")
// classList.remove("dark_mode")
//  container.classList.toggle("dark_mode")
}