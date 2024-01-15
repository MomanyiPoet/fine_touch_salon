// SHOWING FOOTER
let mybutton = document.getElementById("footer");

// When the user scrolls down 600px from the top of the document, show the footer
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// IMAGE POP UP
const imageContainers = document.querySelectorAll('.hover-text');

imageContainers.forEach(imageContainer => {
  const popUpImage = imageContainer.querySelector('.hover-img');

  imageContainer.addEventListener('mouseenter', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 1, scale: 1.1, ease: 'power2.out' });
  });

  imageContainer.addEventListener('mouseleave', function () {
    gsap.to(popUpImage, { duration: 0.6, opacity: 0, scale: 1, ease: 'power2.out' });
  });
});