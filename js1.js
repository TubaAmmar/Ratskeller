

const navbar = document.getElementById('c1')
 function toggleNav() {
     const computedStyle = window.getComputedStyle(navbar);
    const currentLeft = computedStyle.getPropertyValue('top');

    if (currentLeft === '0px' ) {
       navbar.style.top = '-110vh';
          } else {
      navbar.style.top = '0px';
}
 }
 function toggleNav2() { 
    const currentLeft = navbar.style.top;
    if (currentLeft === '0px' ) {
       navbar.style.top = '-110vh';
          } else {
      navbar.style.top = '0px';
}
 }



document.addEventListener('DOMContentLoaded', function () {
var animatedText = document.querySelector('.animated-text1');
var container3 = document.querySelector('.container3');
var container4 = document.querySelector('.container4');

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

var observerText = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
      if (entry.isIntersecting) {
          animatedText.classList.add('active');
          observer.unobserve(entry.target);
      }
  });
}, options);

var observerContainer3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
      if (entry.isIntersecting) {
          container3.classList.add('animate'); // Add your animation class or logic for container3 here
          observer.unobserve(entry.target);
      }
  });
}, options);

var observerContainer4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
      if (entry.isIntersecting) {
          container4.classList.add('animate'); // Add your animation class or logic for container3 here
          observer.unobserve(entry.target);
      }
  });
}, options);



observerText.observe(animatedText);
observerContainer3.observe(container3);
observerContainer4.observe(container4);
});

function openModal() {
document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
document.getElementById('modal').style.display = 'none';
}

// Add this event listener to prevent the modal from closing when clicking inside it
document.getElementById('modal').addEventListener('click', function (event) {
if (event.target === this) {
  closeModal();
}
});

// Add this event listener to prevent the modal from closing when clicking the close button
document.querySelector('.close-button').addEventListener('click', function (event) {
event.stopPropagation();
closeModal();
});

function showPopup() {
document.getElementById('popup').style.display = 'block';

}

function hidePopup() {
document.getElementById('popup').style.display = 'none';
}

function showPopup1() {
document.getElementById('popup1').style.display = 'block';
}

function hidePopup1() {
document.getElementById('popup1').style.display = 'none';
}
function showPopup2() {
document.getElementById('popup2').style.display = 'block';
}

function hidePopup2() {
document.getElementById('popup2').style.display = 'none';
}

function showPopup3() {
document.getElementById('popup3').style.display = 'block';
}

function hidePopup3() {
document.getElementById('popup3').style.display = 'none';
}
function showPopup4() {
document.getElementById('popup4').style.display = 'block';
}

function hidePopup4() {
document.getElementById('popup4').style.display = 'none';
}


function openModal(imageSrc) {
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal').style.display = 'flex';
  document.body.style.overflow = 'hidden'; /* Prevent scrolling when modal is open */
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = 'auto'; /* Enable scrolling when modal is closed */
}










