  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

const monter = document.getElementById('monter');
const projet2 = document.getElementById('projet2');
const skill_set1 = document.getElementById('skill-set1');
const skill_set2 = document.getElementById('skill-set2');
window.onscroll = function() {
    if (window.pageYOffset > 2500) {
        monter.style.display = 'block';
    } else {
        monter.style.display = 'none';
    }

    if (window.pageYOffset > 750) {
        projet2.style.marginLeft = '5rem';
    } else {
        projet2.style.marginLeft = '250rem';
    }

    if (window.pageYOffset > 1400) {
        skill_set1.style.opacity = '1';
        skill_set2.style.opacity = '1';
    } else {
        skill_set1.style.opacity = '0';
        skill_set2.style.opacity = '0';
    }

    
};
monter.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});




//------------------------------------------------

let tsila = document.querySelectorAll(' span');
let all = document.getElementsByClassName('all');
let all1 = document.getElementsByClassName('all1');
let all2 = document.getElementsByClassName('all2');


function vert() {
    tsila.forEach(span => {
        span.style.color= 'green';
    });
    for (let i = 0; i < all.length; i++) {
        all[i].style.backgroundColor='green';
        all[i].style.borderColor='green';

    }
    for (let j = 0; j < all1.length; j++) {
        all1[j].style.color='green';
    }
    for (let k = 0; k < all2.length; k++) {
        all2[k].style.borderColor='green';
    }
}

function rouge() {
    tsila.forEach(span => {
        span.style.color= 'red';
    });
    for (let i = 0; i < all.length; i++) {
        all[i].style.backgroundColor='red';
        all[i].style.borderColor='red';

    }
    for (let j = 0; j < all1.length; j++) {
        all1[j].style.color='red';
    }
    for (let k = 0; k < all2.length; k++) {
        all2[k].style.borderColor='red';
    }
}

function bleu() {
    tsila.forEach(span => {
        span.style.color= 'rgb(20, 48, 161)';
    });
    for (let i = 0; i < all.length; i++) {
        all[i].style.backgroundColor='rgb(31, 66, 208)';
        all[i].style.borderColor='rgb(31, 66, 208)';

    }
    for (let j = 0; j < all1.length; j++) {
        all1[j].style.color='rgb(31, 66, 208)';
    }
    for (let k = 0; k < all2.length; k++) {
        all2[k].style.borderColor='rgb(31, 66, 208)';
    }
}

