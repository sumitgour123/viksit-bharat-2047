/* =========================
   HERO ATMOSPHERE
========================= */

const heroImage =
document.querySelector(
'.hero-image'
);

window.addEventListener(

'mousemove',

(e)=>{

const x =
(e.clientX /
window.innerWidth - 0.5) * 8;

const y =
(e.clientY /
window.innerHeight - 0.5) * 8;

heroImage.style.transform =

`translate(${x}px,${y}px)
scale(1.1)`;

});

/* =========================
   SECTION IMAGE FLOAT
========================= */

const panels =
document.querySelectorAll(
'.panel-image img'
);

panels.forEach(

(panel,index)=>{

setInterval(()=>{

panel.style.transform =

`scale(1.06)
translateY(${
Math.sin(Date.now()/1500)*5
}px)`;

},40);

});

/* =========================
   STATUS LIGHT
========================= */

const status =
document.querySelector(
'.hero-status span'
);

setInterval(()=>{

status.style.opacity =
status.style.opacity === '0.3'
? '1'
: '0.3';

},900);