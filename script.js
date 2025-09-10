$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 
});

window.addEventListener('scroll', function() {
    var about = document.querySelector('.about');
    var contact = document.querySelector('.contact');
    var aboutRect = about.getBoundingClientRect();
    var contactRect = contact.getBoundingClientRect();
    if(aboutRect.top < window.innerHeight - 100) {
        about.classList.add('visible');
    }
    if(contactRect.top < window.innerHeight - 100) {
        contact.classList.add('visible');
    }
});

const words = ["SDGs Enthusiast", "Student", "Public Speaker"];
let i = 0, j = 0, isDeleting = false, current = "";
const typingSpan = document.querySelector('.typing');

function type() {
  if (!isDeleting && j <= words[i].length) {
    current = words[i].substring(0, j++);
    typingSpan.textContent = current;
    setTimeout(type, 90);
  } else if (isDeleting && j >= 0) {
    current = words[i].substring(0, j--);
    typingSpan.textContent = current;
    setTimeout(type, 50);
  } else if (!isDeleting && j > words[i].length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 400);
  }
}
type();

const scrollUpBtn = document.getElementById('scrollUpBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});
scrollUpBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});