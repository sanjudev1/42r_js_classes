document.getElementById("container").style.backgroundColor="blue"
document.getElementById("container").style.fontSize="5px"
let randomNumber =Math.random()*100
randomNumber=Math.ceil(randomNumber)
function Guessthenumber(){
    console.log("function is triggered...")

    let currentValue=document.getElementById("user_input").value
   
    currentValue=parseInt(currentValue)

    if(currentValue==randomNumber){
        document.getElementById("message").textContent="Your guessing number is correct!"
    }else if(currentValue>randomNumber){
         document.getElementById("message").textContent="Your guessing number is Too high Try Again!"
    }else if(currentValue<randomNumber){
          document.getElementById("message").textContent="Your guessing number is Too low Try Again!"
    }else{
        document.getElementById("message").textContent="please eneter a valid input"
    }

}