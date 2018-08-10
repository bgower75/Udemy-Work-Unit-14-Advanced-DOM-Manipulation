var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function() {
  if (isPurple) {
    document.body.style.backgroundColor = 'white'
    isPurple = false
  } else {
    document.body.style.backgroundColor = 'purple'
    isPurple = true
  }
  // can replace isPurple = true/false with 'isPurple = !isPurple', this does the same thing and makes your code shorter and easier to read and negates the if else statement
})

// another way of doing this is to create a css style within html (style type="text/css") and create a class '.purple { backgroundColor: purple;} and then use that class in the function to toggle the colors by using the toggle method

// button.addEventListener("click", function() {
//   document.body.classList.toggle("purple");
// })
