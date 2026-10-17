(function(){
var R=document.documentElement;
try{var s=localStorage.getItem('theme');if(s)R.setAttribute('data-theme',s)}catch(e){}
document.getElementById('tg').onclick=function(){var d=R.getAttribute('data-theme')==='dark'||(!R.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=d?'light':'dark';R.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
var bar=document.getElementById('bar');addEventListener('scroll',function(){var h=R.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=+e.target.dataset.n,i=0;(function f(){i++;e.target.textContent=Math.round(t*Math.min(i/40,1));if(i<40)requestAnimationFrame(f)})()})});document.querySelectorAll('[data-n]').forEach(function(e){co.observe(e)});
var ws=['Power BI dashboards','Excel KPI reports','SQL & Python analysis','Clean, decision-ready data'],wi=0,ci=0,del=false,el=document.getElementById('ty');
(function t(){var w=ws[wi];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?35:75;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%ws.length;d=350}setTimeout(t,d)})();
var fb=document.querySelectorAll('.fl button'),pc=document.querySelectorAll('.pc');fb.forEach(function(b){b.onclick=function(){fb.forEach(function(x){x.classList.remove('on')});b.classList.add('on');pc.forEach(function(c){c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.t.indexOf(b.dataset.f)<0)})}});
var secs=[].slice.call(document.querySelectorAll('main section')),ls=document.querySelectorAll('.links a');addEventListener('scroll',function(){var y=scrollY+120,cur='';secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});ls.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})},{passive:true});
var lb=document.getElementById('lb'),li=lb.querySelector('img'),grp=[],gi=0;
function show(){li.src=grp[gi].src;li.alt=grp[gi].alt}
document.querySelectorAll('[data-g]').forEach(function(im){im.addEventListener('click',function(){grp=[].slice.call(document.querySelectorAll('[data-g="'+im.dataset.g+'"]'));gi=grp.indexOf(im);show();lb.classList.add('on')})});
function nv(d){gi=(gi+d+grp.length)%grp.length;show()}
document.getElementById('lp').onclick=function(e){e.stopPropagation();nv(-1)};document.getElementById('ln').onclick=function(e){e.stopPropagation();nv(1)};document.getElementById('lx').onclick=lb.onclick=function(){lb.classList.remove('on')};
addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')nv(1);if(e.key==='ArrowLeft')nv(-1)});
var em=document.getElementById('em');if(em){var ad=['amiraabdelazeemkhosht2312','gmail.com'].join('@'),sh=false;em.addEventListener('click',function(e){if(!sh){e.preventDefault();sh=true;em.textContent=ad;em.href='mailto:'+ad}})}
})();
