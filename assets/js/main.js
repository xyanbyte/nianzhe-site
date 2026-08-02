
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});}
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
