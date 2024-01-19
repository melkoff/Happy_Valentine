// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
   // Select all elements with the class 'imgHeart'
   var imgHearts = document.querySelectorAll('.imgHeart');

   // Function to move 'imgHeart' elements on mouse movement
   function moveImgHearts(e) {
      // Repeat through each 'imgHeart' element
      imgHearts.forEach(imgHeart => {
         const speed = imgHeart.getAttribute('data-speed');

         const x = (window.innerWidth - e.pageX * speed) / 100;
         const y = (window.innerHeight - e.pageY * speed) / 100;

         imgHeart.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
   }

   // Add an event listener for the 'mousemove' event to start the movement of 'imgHeart' elements
   document.addEventListener("mousemove", moveImgHearts);
   // Initialize the initial position of 'imgHeart' elements at the center of the window
   moveImgHearts({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });

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
               imgHeart.style.animation = 'imgHeart-appear 1.5s forwards';
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