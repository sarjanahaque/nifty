let slideitem = document.querySelectorAll(".slideitem")
let slidearray =Array.from(slideitem)
let active = document.querySelector(".active")

slidearray.map((item,index)=>{
  item.addEventListener("click",function(){
    let active = document.querySelector(".active")
    active.classList.remove("active")
    item.classList.add("active")
  })
})

function definenext(){
  let active = document.querySelector(".active")
  let activeindex = slidearray.indexOf(active)
  let next;
  if(activeindex==slidearray.length-1){
    next=slidearray[0]
  }else{
    next=slidearray[activeindex+1]
  }
  return{next}
}

function autonext(){
  let active = document.querySelector(".active")
  let {next}=definenext()
  
  active.classList.remove("active")
  next.classList.add("active")
}

let stop= setInterval (function(){
  autonext()
},10000)
