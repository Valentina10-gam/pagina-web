// Animaciones y navegación con fallback visible.

// Barra de recorrido basada en el desplazamiento, sin ocultar contenido.
(()=>{const section=document.querySelector('#ruta'),line=section?.querySelector('.timeline-progress');if(!section||!line)return;let scheduled=false;function update(){const r=section.getBoundingClientRect(),h=Math.max(1,r.height-innerHeight*.35),v=Math.max(0,Math.min(1,(innerHeight*.55-r.top)/h));line.style.height=(v*100)+'%';scheduled=false}addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update()})();
