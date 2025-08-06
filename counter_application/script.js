
document.getElementById("heading").style.color="#1976D2"
function Increment(){
   let currentValue= document.getElementById("counter").textContent

   // c= '0'
   currentValue=parseInt(currentValue)
  // c= 0
   //cur ='0'+ 1 => '0' + '1' ==> 01 
          // parseint('0') => 0 + 1 => 1


   let count=document.getElementById("counter").textContent=currentValue+1
   count=parseInt(count)
   if(count>0){
    document.getElementById("counter").style.color="blue"
   }
   else if(count<0){
    document.getElementById("counter").style.color="red"
   }else{
    document.getElementById("counter").style.color="black"
   }
}

function Decrement(){
    let currentValue=document.getElementById("counter").textContent
    currentValue=parseInt(currentValue)
    let count =document.getElementById("counter").textContent=currentValue-1
    count=parseInt(count)
   if(count>0){
    document.getElementById("counter").style.color="blue"
   }
   else if(count<0){
    document.getElementById("counter").style.color="red"
   }else{
    document.getElementById("counter").style.color="black"
   }


}

function Reset(){
    document.getElementById("counter").textContent=0
    document.getElementById("counter").style.color="black"
}