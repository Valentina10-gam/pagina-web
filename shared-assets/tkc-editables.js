/* Editar imágenes: cambia el src de cada <img class="tkc-media-image"> en el HTML.
   Los espacios vacíos se muestran hasta que se añade la imagen al proyecto. */
document.querySelectorAll('.tkc-editable-media').forEach(function(slot){
 const img=slot.querySelector('.tkc-media-image');
 if(!img)return;
 function update(){const ok=img.complete && img.naturalWidth>0;slot.classList.toggle('has-image',ok);slot.classList.toggle('is-empty',!ok)}
 img.addEventListener('load',update);img.addEventListener('error',update);update();
});
