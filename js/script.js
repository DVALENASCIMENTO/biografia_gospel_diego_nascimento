function scrollToSection(id){

  document.getElementById(id).scrollIntoView({
    behavior:'smooth'
  });

}

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', ()=>{

  if(window.scrollY > 300){

    topBtn.style.display = 'block';

  }else{

    topBtn.style.display = 'none';

  }

});

topBtn.addEventListener('click', ()=>{

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

});

// ANIMAÇÃO

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';

    }

  });

});

sections.forEach(section => {

  section.style.opacity = '0';
  section.style.transform = 'translateY(60px)';
  section.style.transition = '1s';

  observer.observe(section);

});