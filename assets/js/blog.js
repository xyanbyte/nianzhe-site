
document.addEventListener('DOMContentLoaded',()=>{
 const search=document.querySelector('#blog-search'); const buttons=[...document.querySelectorAll('.filter-btn')]; const cards=[...document.querySelectorAll('.post-card')]; const empty=document.querySelector('.empty-state'); let active='全部';
 function run(){const q=(search?.value||'').trim().toLowerCase();let shown=0;cards.forEach(card=>{const text=(card.dataset.search||card.innerText).toLowerCase();const cat=card.dataset.category||'';const yes=(!q||text.includes(q))&&(active==='全部'||cat===active);card.hidden=!yes;if(yes)shown++;});if(empty)empty.hidden=shown!==0;}
 buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.filter;run()}));search?.addEventListener('input',run);run();
});
