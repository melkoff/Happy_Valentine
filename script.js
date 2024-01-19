// This script to hide and show hearts and text
function animateHeart() {
   var heart = document.querySelector('.heart');
   var heartText = document.querySelector('.heart-text');
   var imgHearts = document.querySelectorAll('.imgHeart');

   heartText.style.opacity = '0';
   heart.style.animation = 'heart-disappear 1.5s forwards';

   setTimeout(function () {
      heart.style.display = 'none';
      heart.style.animation = '';

      for (var i = 0; i < imgHearts.length; i++) {
         imgHearts[i].style.opacity = '1';
      }

      heartText.style.display = 'block';
      heartText.style.animation = 'text-appear 1.5s forwards';

      setTimeout(function () {
         heartText.style.animation = 'text-disappear 1.5s forwards';

         setTimeout(function () {
            heart.style.display = 'block';
            heart.style.animation = 'heart-appear 1.5s forwards';
         }, 1500);

      }, 2500);

   }, 1500);
}

// =================================================================================================== //

// This script to move hearts images
document.addEventListener("mousemove", parallax);
function parallax(e) {
   this.querySelectorAll('.imgHeart').forEach(imgHeart => {
      const speed = imgHeart.getAttribute('data-speed')

      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100

      imgHeart.style.transform = `translateX(${x}px) translateY(${y}px)`
   })
}