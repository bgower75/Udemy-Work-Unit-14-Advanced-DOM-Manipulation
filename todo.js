var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("selected"); //when hover over element turn it pink
  });
  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected"); //when move mouse away from element turn it back to black
  });
  lis[i].addEventListener("click", function() {
    this.classList.add("strike");
  })
}
