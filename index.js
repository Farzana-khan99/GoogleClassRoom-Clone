let openModal = document.querySelector("#plusIcon");
console.log(openModal, "===check===");
let cancel = document.querySelector("#cancel");

openModal.addEventListener("click", () => {
  document.querySelector(".formSec").style.display = "block";
  console.log("hello world");
});

cancel.addEventListener("click", () => {
  document.querySelector(".formSec").style.display = "none";
  console.log("hello world");
});

let createBtn = document.querySelector("#create");
let nameInp = document.querySelector("#name");
let section = document.querySelector("#section");
let subject = document.querySelector("#subject");
let room = document.querySelector("#room");

createBtn.addEventListener("click", () => {
  if (
    nameInp !== "" &&
    section !== "" &&
    nameInp !== "" &&
    subject !== "" &&
    nameInp !== "" &&
    room !== ""
  ) {
    let GoogleCard = `
    <div class="main">
    <div class="cardBox">
    <div class="bgSec">
        <div class="cardText">
        <div class="dotIconSec">
        <h3>${nameInp.value}</h3>
        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </div>
           
            <h5>${section.value}</h5>
          
        </div>
    </div>
    </div>
   
        <div class="cardBottom">
        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path></svg>
        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></svg>
        </div>
        </div>
       
    `;
    document.querySelector(".mainCardsSec").innerHTML += GoogleCard;
  }
  nameInp.value = "";
  section.value = "";
});
