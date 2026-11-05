/* Apply a stored preference before CSS and first paint. */
(() => {
  const key='cyberstudy-theme-v1', root=document.documentElement;
  const media=window.matchMedia('(prefers-color-scheme: dark)');
  const valid=v=>['dark','light','system'].includes(v)?v:'dark';
  let preference='dark';
  try { preference=valid(localStorage.getItem(key)); } catch {}
  function apply(){
    const theme=preference==='system'?(media.matches?'dark':'light'):preference;
    root.dataset.theme=theme; root.style.colorScheme=theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#090F16':'#F5F8F6');
    const control=document.getElementById('theme-choice'); if(control)control.value=preference;
  }
  apply(); media.addEventListener('change',()=>{if(preference==='system')apply()});
  window.addEventListener('storage',e=>{if(e.key===key){preference=valid(e.newValue);apply()}});
  document.addEventListener('DOMContentLoaded',()=>{
    apply(); document.getElementById('theme-choice').addEventListener('change',e=>{
      preference=valid(e.target.value);try{localStorage.setItem(key,preference)}catch{}apply();
    });
  });
})();
