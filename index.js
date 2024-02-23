
let openModal = document.querySelector("#plusIcon")
console.log(openModal ,"''")
let cancel = document.querySelector("#cancel")


openModal.addEventListener("click" ,()=>{
    document.querySelector(".formSec").style.display = "block"
    console.log("hello world")
})

cancel.addEventListener("click" , ()=>{
    document.querySelector(".formSec").style.display = "none"
    console.log("hello world")
})

// const isShow =()=>{
//     openModal.classList.add("show")
// }

// const Cancel = ()=>{
//    cancel.classList.remove("show") 
// }
// cancel.addEventListener("click" ,Cancel)