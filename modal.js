

/* ====================================================
*************FIRST APPROACH FOR THE MODALS*************


var modalBox = document.getElementsByClassName("modalBox");

var modalBtn = document.getElementsByClassName("modalBtn");
var arr =  document.querySelector('html');

modalBtn[1].onclick = function(){
modalBox[1].style.display = "block";
arr.style.overflow = "hidden";
}

window.onclick = function(event){
    if (event.target == modalBox[1]) {
        modalBox[1].style.display = "none";
        arr.style.overflow = "visible";
        
    }
}
====================================================== */


let selectedModalBox = document.getElementsByClassName("modalBox");
let clickedModalBtn = document.getElementsByClassName("modalBtn")
let afterTheNav = document.querySelector("html");


for (let j = 0; j < clickedModalBtn.length; j++) {
    clickedModalBtn[j].addEventListener('click',function(){

    selectedModalBox[j].style.display = "block";

    afterTheNav.style.overflow = "hidden";

  });

    selectedModalBox[j].addEventListener('click',function(){

    selectedModalBox[j].style.display = "none";

    afterTheNav.style.overflow = "visible";
  })

}









