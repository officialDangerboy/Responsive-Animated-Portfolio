const tlhome = gsap.timeline()
const hamburger = document.querySelector('header nav i')
const tl = gsap.timeline()

tl.to('.slideBar', {
  top: '60',
  duration: 0.3,
})

tl.from('.slideAnimate',{
  x:100,
  duration:0.3,
  stagger:0.05,
  opacity:0,
})

tl.pause()

hamburger.addEventListener('click',()=>{
  if(hamburger.classList.contains('ri-menu-3-line')){
    hamburger.classList.remove('ri-menu-3-line')
    hamburger.classList.add('ri-close-large-line')
    tl.play()
  }
  else 
  
  if(hamburger.classList.contains('ri-close-large-line')){
    hamburger.classList.add('ri-menu-3-line')
    hamburger.classList.remove('ri-close-large-line')
    tl.reverse()
  }
})


tlhome.from('header .animateH',{
  opacity:0,
  y:-150,
  opacity:0,
  stagger:0.2
})

gsap.from('.animateI',{
  opacity:0,
  y:-150,
  delay:0.3,
})

gsap.from('.animate',{
  x:-100,
  opacity:0,
  duration:1,
  stagger:0.3,
  delay:0.5
})

gsap.from('.rightImg',{
  x:100,
  opacity:0,
  duration:1,
  delay:1.5
})

gsap.from('.image',{
  opacity:0,
  scale:0,
  scrollTrigger: {
  trigger: ".services",
  scroller: "body",
  start:'top 70%',
  end:'top 30%',
  scrub:2,
  },
})


gsap.from('.scrollAnimate',{
  opacity:0,
  y:100,
  stagger:0.5,
  scrollTrigger: {
  trigger: ".serviceRight h1",
  scroller: "body",
  start:'top 70%',
  end:'top 30%',
  scrub:2,
  },
})


gsap.from('.servicesScroll',{
  opacity:0,
  y:100,
  stagger:0.5,
  scrollTrigger: {
  trigger: ".servicesScroll",
  scroller: "body",
  start:'top 70%',
  end:'top 30%',
  scrub:2,
  },
})


gsap.from('.projectScrollAnimate',{
  opacity:0,
  y:100,
  stagger:0.5,
  scrollTrigger: {
  trigger: ".projectScrollAnimate",
  scroller: "body",
  start:'top 70%',
  end:'top -50%',
  scrub:2,
  },
})


gsap.from('.registerScrollAnimation',{
  opacity:0,
  y:100,
  stagger:0.5,
  scrollTrigger: {
  trigger: ".registerScrollAnimation",
  scroller: "body",
  start:'top 70%',
  end:'top 30%',
  scrub:2,
  },
})

const allNavItems = document.querySelectorAll('nav h4, .slideBar h4');

allNavItems.forEach(link => {
  link.addEventListener('click', () => {
    allNavItems.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


// Highlight on scroll
const sections = {
  Home: document.querySelector('#home'),
  Services: document.querySelector('#about'),
  Projects: document.querySelector('#services'),
  Contact: document.querySelector('#experience'),
  Ragister: document.querySelector('#register')
};

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  for (const [funcName, section] of Object.entries(sections)) {
    const offsetTop = section.offsetTop - 120;
    const offsetBottom = offsetTop + section.offsetHeight;

    if (scrollY >= offsetTop && scrollY < offsetBottom) {
      allNavItems.forEach(l => l.classList.remove('active'));

      // Select matching h4s or buttons in nav and slideBar
      const activeItems = document.querySelectorAll(
        `[onclick="${funcName}()"]`
      );

      activeItems.forEach(item => item.classList.add('active'));
    }
  }
});

function Home() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
function Services() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function Projects() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}
function Contact() {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
}
function Ragister() {
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}
