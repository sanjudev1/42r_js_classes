let clock_timer_ele=document.getElementById("clock_timer")
let count=0
let a= setInterval(()=>{
 clock_timer_ele.textContent=count
 count+=1 
 if(count==10){
    clearInterval(a)
 }
},1000)

// clearInterval(a)

