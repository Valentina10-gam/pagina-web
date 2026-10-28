
// TKC V5: Animación progresiva del recorrido de Corp. Usa rutas de iconos editables.
(()=>{
 const flow=document.querySelector('.process-panel .process-flow');if(!flow)return;
 const steps=[...flow.querySelectorAll('.process-step')];
 const update=()=>{const r=flow.getBoundingClientRect();const fraction=Math.max(0,Math.min(1,(innerHeight*.83-r.top)/(Math.max(r.height,250)+innerHeight*.15)));
 flow.classList.add('tkc-visible');flow.style.setProperty('--process-progress',Math.round(fraction*86)+'%');
 steps.forEach((s,i)=>s.classList.toggle('tkc-step-reached',fraction>i/steps.length));};
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
 steps.forEach(s=>{const im=s.querySelector('.tkc-step-icon img');if(!im)return;const ok=()=>im.parentElement.classList.add('has-image');im.addEventListener('load',ok);im.addEventListener('error',()=>im.parentElement.classList.remove('has-image'));if(im.complete&&im.naturalWidth)ok()});
})();
