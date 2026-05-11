/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener(

'click',

function(e){

e.preventDefault();

document.querySelector(

this.getAttribute('href')

).scrollIntoView({

behavior:'smooth'

});

});

});

/* =========================
   CINEMATIC REVEAL
========================= */

const sections =
document.querySelectorAll(
'.panel-section,.vision'
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:
'translateY(80px)'
},

{
opacity:1,
transform:
'translateY(0)'
}

],

{
duration:1200,
easing:'ease',
fill:'forwards'
}

);

}

});

},

{
threshold:0.25
}

);

sections.forEach(section=>{

section.style.opacity='0';

observer.observe(section);

});

/* =========================
   NAVBAR EFFECT
========================= */

window.addEventListener(

'scroll',

()=>{

const nav =
document.querySelector('nav');

if(window.scrollY > 50){

nav.style.background =
'rgba(0,0,0,0.55)';

nav.style.backdropFilter =
'blur(14px)';

}

else{

nav.style.background =
'rgba(0,0,0,0.28)';

}

});

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener(

'mousemove',

(e)=>{

const x =
(e.clientX /
window.innerWidth - 0.5) * 15;

const y =
(e.clientY /
window.innerHeight - 0.5) * 15;

const hero =
document.querySelector(
'.hero-content'
);

if(hero){

hero.style.transform =

`translate(${x}px,${y}px)`;

}

});

/* =========================
   IMAGE CINEMATIC ZOOM
========================= */

const images =
document.querySelectorAll(
'.panel-image img'
);

window.addEventListener(

'scroll',

()=>{

const scroll =
window.scrollY;

images.forEach(img=>{

img.style.transform =

`scale(${1 + scroll*0.00006})`;

});

});

/* =========================
   PAGE ENTRY
========================= */

document.body.animate(

[
{
opacity:0
},

{
opacity:1
}

],

{
duration:1400,
easing:'ease'
}

);