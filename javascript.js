var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var acc2 = document.querySelector(".delegation");

acc2.addEventListener('click' , (event)=>{
  let target = event.target;
  let panel2 = target.nextElementSibling;
  target.classList.toggle("active");
  if (panel2.style.maxHeight) {
    panel2.style.maxHeight = null;
  } else {
    panel2.style.maxHeight = panel2.scrollHeight + "px";
  } 
})

