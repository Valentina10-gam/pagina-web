// Animación progresiva accesible para las páginas de líneas de TKC.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const animated=[...document.querySelectorAll('.service-card,.media-slot,.process-step,.faq')];
  const observer=new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('tkc-entered');
      observer.unobserve(entry.target);
    });
  }, {threshold:0.12,rootMargin:'0px 0px -24px 0px'});
  animated.forEach((el,i)=>{el.classList.add('tkc-motion-item');el.style.setProperty('--tkc-delay', `${(i%4)*85}ms`);observer.observe(el)});
})();
