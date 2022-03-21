// set initial count

let count = 0;

// select value and buttons

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value")

btns.forEach(function (btn) {
 btn.addEventListener('click', function(e){
  const styles = e.currentTarget.classList
  if (styles.contains('decrease')) {
   count--;
  }

  else if (styles.contains('increase')) {
   count++;
  }

  else {
   count = 0;
  }

  if (count > 0 ) {
   value.style.color = 'lightgreen'
  }

  else if (count < 0){
   value.style.color = 'red'
  }

  else {
   value.style.color = 'white'
  }
  

  value.textContent = count;
 })

})

