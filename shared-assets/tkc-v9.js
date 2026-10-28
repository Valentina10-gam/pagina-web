document.addEventListener('DOMContentLoaded', function(){
  // Conmutar al logo horizontal morado: mismo asset oficial ya incluido en el paquete.
  document.querySelectorAll('.header-wrap .brand img').forEach(function(img){
    const s=img.getAttribute('src')||'';
    if(s.includes('logo-horizontal-blanco'))img.setAttribute('src',s.replace('logo-horizontal-blanco','logo-horizontal-oficial'));
  });
});