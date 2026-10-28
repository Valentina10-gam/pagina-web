/* Progressive enhancement: no content hidden when JS fails. */
(()=>{
 function init(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  // animate first-screen composition even on back navigation; no opacity:0 CSS required
  const scope=document.querySelector('main');if(!scope)return;
  const first=scope.querySelector('section,header,.hero,[class*="hero"]')||scope;
  const targets=Array.from(first.querySelectorAll('h1, .eyebrow, p, .actions, .button, img, .hero-art, .hero-visual, .tkc-social-panel')).filter(el=>el.getBoundingClientRect().height>0).slice(0,12);
  targets.forEach((el,i)=>{try{el.animate([{opacity:0,transform:`translateY(${Math.min(32,16+i*2)}px)`},{opacity:1,transform:'translateY(0)'}],{duration:780,delay:i*95,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'});}catch(e){}});
  // force visible if older IntersectionObservers left a reveal target hidden
  document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.9)el.classList.add('visible')});
  if('IntersectionObserver' in window){const ob=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');ob.unobserve(entry.target)}}),{threshold:.01,rootMargin:'0px 0px 30px 0px'});document.querySelectorAll('.reveal').forEach(el=>ob.observe(el));}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
 window.addEventListener('pageshow',e=>{if(e.persisted)document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))});
})();