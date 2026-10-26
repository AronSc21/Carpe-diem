/* Calendario hecho a mano: vista mensual/semanal, filtros y panel de detalle. Lee EVENTOS (data/calendario.js). */
function renderCalendario(root){
 const S={v:'mes',ref:new Date(),tipo:'todos',ins:'todos',edad:'todas'},hoy=new Date();hoy.setHours(0,0,0,0);
 const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 const evs=EVENTOS.map(e=>{const d=new Date(hoy);if(e.f)return{...e,k:e.f};d.setDate(d.getDate()+e.d);return{...e,k:iso(d)}});
 const NT={clase:'Clase',taller:'Taller',evaluacion:'Evaluación',recital:'Recital','sin-clases':'Sin clases',promo:'Promoción'};
 const opt=(a,sel)=>a.map(([v,t])=>`<option value="${v}"${v==sel?' selected':''}>${t}</option>`).join('');
 function pintar(sel){
  const r=new Date(S.ref);let ini,n;
  if(S.v=='mes'){ini=new Date(r.getFullYear(),r.getMonth(),1);n=new Date(r.getFullYear(),r.getMonth()+1,0).getDate()}else{ini=new Date(r);n=7}
  ini.setDate(ini.getDate()-((ini.getDay()+6)%7));if(S.v=='mes'){const fin=new Date(r.getFullYear(),r.getMonth()+1,0);n=Math.ceil(((fin-ini)/864e5+1)/7)*7}
  const ok=e=>(S.tipo=='todos'||e.tipo==S.tipo)&&(S.ins=='todos'||e.ins=='todos'||e.ins==S.ins)&&(S.edad=='todas'||e.edad=='todas'||e.edad==S.edad);
  let celdas='';for(let i=0;i<n;i++){const d=new Date(ini);d.setDate(ini.getDate()+i);const k=iso(d);
   celdas+=`<div class="dia${d.getMonth()!=r.getMonth()&&S.v=='mes'?' fuera':''}${+d==+hoy?' hoy':''}${d.getDay()==0?' dom':''}"><b>${d.getDate()}</b>${d.getDay()==0?'<span class="muted">Cerrado</span>':''}${evs.filter(e=>e.k==k&&ok(e)).map(e=>`<button class="ev ${e.tipo}" data-k="${e.k}" data-t="${e.t}" title="${e.t}">${e.h} ${e.t}</button>`).join('')}</div>`}
  const tit=S.v=='mes'?r.toLocaleDateString('es-MX',{month:'long',year:'numeric'}):'Semana del '+ini.toLocaleDateString('es-MX',{day:'numeric',month:'long'});
  root.innerHTML=`<div class="tabs"><button class="tab" data-v="mes" aria-pressed="${S.v=='mes'}" aria-selected="${S.v=='mes'}">Mes</button><button class="tab" data-v="semana" aria-selected="${S.v=='semana'}">Semana</button><button class="btn suave" data-nav="-1" aria-label="Anterior">‹</button><button class="btn suave" data-nav="1" aria-label="Siguiente">›</button><strong style="align-self:center;text-transform:capitalize">${tit}</strong></div>
  <div class="filtros"><select aria-label="Tipo" data-f="tipo">${opt([['todos','Todas las actividades'],...Object.entries(NT)],S.tipo)}</select><select aria-label="Instrumento" data-f="ins">${opt([['todos','Todos los instrumentos'],...INSTRUMENTOS.map(i=>[i.id,i.nombre])],S.ins)}</select><select aria-label="Edad" data-f="edad">${opt([['todas','Todas las edades'],['ninos','Niños'],['jovenes','Jóvenes'],['adultos','Adultos']],S.edad)}</select></div>
  <div class="cal${S.v=='semana'?' sem':''}">${['L','M','M','J','V','S','D'].map(x=>`<div class="h">${x}</div>`).join('')}${celdas}</div><div class="panel card" aria-live="polite">${sel||'Toca un evento para ver sus detalles. Los datos son de ejemplo.'}</div>`}
 root.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.v){S.v=b.dataset.v;pintar()}
  else if(b.dataset.nav){S.ref.setDate(1);S.v=='mes'?S.ref.setMonth(S.ref.getMonth()+ +b.dataset.nav):S.ref.setDate(S.ref.getDate()+7*b.dataset.nav);pintar()}
  else if(b.classList.contains('ev')){const ev=evs.find(x=>x.k==b.dataset.k&&x.t==b.dataset.t);pintar(`<h3>${ev.t}</h3><p>${new Date(ev.k+'T12:00').toLocaleDateString('es-MX',{weekday:'long',day:'numeric',month:'long'})} ${ev.h?'· '+ev.h:''}</p><p class="muted">Tipo: ${NT[ev.tipo]} · Edad: ${ev.edad} <span class="pc">Ejemplo</span></p>`)}};
 root.onchange=e=>{if(e.target.dataset.f){S[e.target.dataset.f]=e.target.value;pintar()}};
 pintar()}
