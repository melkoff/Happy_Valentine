// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
   // Select all elements with the class 'imgHeart'
   var imgHearts = document.querySelectorAll('.imgHeart');

   // Function to animate heart and text on click the heart element
   function animateHeart() {
      // Select the heart and text elements
      var heart = document.querySelector('.heart');
      var heartText = document.querySelector('.heart-text');

      // Hide the text
      heartText.style.opacity = '0';
      // Start heart-disappear animation
      heart.style.animation = 'heart-disappear 1.5s forwards';

      // Set a timeout for the heart animation
      setTimeout(function () {
         // Hide the heart and reset its animation
         heart.style.display = 'none';
         heart.style.animation = '';

         // Repeat the 'imgHeart' elements with a delay
         imgHearts.forEach(function (imgHeart, index) {
            setTimeout(function () {
               // Make the 'imgHeart' element visible with an appear animation
               imgHeart.style.opacity = '1';
               imgHeart.style.animation = 'imgHeart-appear 3.5s infinite';
            }, 1500 + index * 100);
         });

         // Make the text visible with an appear animation
         heartText.style.display = 'block';
         heartText.style.animation = 'text-appear 1.5s forwards';

         // Set a timeout for the text disappearance
         setTimeout(function () {
            heartText.style.animation = 'text-disappear 1.5s forwards';

            // Set a timeout for the heart re-appearance
            setTimeout(function () {
               // Make the heart visible with an appear animation
               heart.style.display = 'block';
               heart.style.animation = 'heart-appear 1.5s forwards';

               // Add an event listener for the 'animationend' event to detect the end of 'heart-appear' animation
               heart.addEventListener('animationend', function () {
                  // Apply the 'heart-beat' animation after 'heart-appear' is complete
                  heart.style.animation = 'heart-beat 1.5s infinite';
               }, { once: true }); // Use { once: true } for automatic removal of the listener after the first call
            }, 1500);

         }, 2500);

      }, 1500);
   }

   // Select the heart element and add a click event listener to repeat the animation sequence
   var heart = document.querySelector('.heart');
   heart.addEventListener('click', animateHeart);
});

// Script to play sound on click the 'heart'
var sound = $("#sound")[0];
$(".heart")
   .click(function () {
      sound.play();
   });