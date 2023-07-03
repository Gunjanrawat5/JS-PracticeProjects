let count = 0
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")
btns.forEach(function(btn){
    //Add event listener to all buttons
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count ==0){
            value.style.color = "black";
        }
        value.textContent = count
    })

})

// Select all buttons with a specific class
const buttons = document.querySelectorAll('.your-button-class');

// Iterate over each button using a loop
buttons.forEach((button) => {
  // Add event listener to the button
  button.addEventListener('click', () => {
    // Check for other classes of the clicked button
    if (button.classList.contains('class1')) {
      // Perform operations for buttons with class1 when clicked
      console.log('Button with class1 clicked!');
      // Additional operations specific to class1
    } else if (button.classList.contains('class2')) {
      // Perform operations for buttons with class2 when clicked
      console.log('Button with class2 clicked!');
      // Additional operations specific to class2
    } else {
      // Default operations for other buttons when clicked
      console.log('Button clicked!');
    }
  });
});

// const increase= document.querySelector(".increase")
// const decrease= document.querySelector('.decrease')
// const reset= document.querySelector('.reset')

// increase.addEventListener('click',function(){
//     count++;
//     value.textContent = count
//     color()
    
// })

// decrease.addEventListener('click',function(){
//     count--;
//     value.textContent = count
//     color()
   
// })

// reset.addEventListener('click',function(){
//     count = 0;
//     value.textContent = count
//     color()
// })

// function color(){
//     if(count > 0){
//         value.style.color = "green"
//     }
//     else if(count<0){
//         value.style.color = "red"
//     }
//     else{
//         value.style.color = "black"
    
//     }
// }
