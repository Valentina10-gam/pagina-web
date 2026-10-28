document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.tkc-float-whatsapp').forEach(button=>{
    const svg=button.querySelector('svg');
    if(!svg || button.querySelector('.tkc-wa-white')) return;
    const image=document.createElement('img');image.className='tkc-wa-white';image.src=new URL('../shared-assets/whatsapp-blanco.svg', document.baseURI).href;
    image.alt='';image.setAttribute('aria-hidden','true');
    svg.replaceWith(image);
  });
});
