const descMap = {
  html: 'HTML — marcação estrutural para páginas web.',
  css: 'CSS — estilos e animações; aqui animamos o dinossauro.',
  javascript: 'JavaScript — interatividade e lógica cliente.',
  python: 'Python — scripts, automação e backends.',
  java: 'Java — aplicações robustas e multiplataforma.',
  sql: 'SQL — linguagem de consultas para bancos de dados.',
  mysql: 'MySQL — sistema de gerenciamento relacional (ex.: MySQL).'
}

document.querySelectorAll('.lang').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.dataset.lang;
    const desc = descMap[key] || 'Descrição não disponível.';
    const el = document.getElementById('desc');
    el.textContent = desc;
    // destaque visual
    document.querySelectorAll('.lang').forEach(b=>b.classList.remove('active'))
    btn.classList.add('active')
  })
})

// acessibilidade: primeira linguagem ao carregar
window.addEventListener('DOMContentLoaded', ()=>{
  const first = document.querySelector('.lang');
  if(first) first.focus();
})
