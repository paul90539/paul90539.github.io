const track=document.querySelector('#timeline'), inner=document.querySelector('#timelineInner'), eventsEl=document.querySelector('#events'), slider=document.querySelector('#yearSlider'), current=document.querySelector('#currentYear');
let data=[], filter='all', start=2026, end=2026;
let cardSizeObserver;
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
  const visible=data.filter(e=>filter==='all'||e.category===filter);
  inner.style.setProperty('--timeline-width',`${Math.max(900,(visible.length+1)*150)}px`);
  document.querySelector('#empty').hidden=visible.length>0;
  eventsEl.innerHTML=visible.map((e,i)=>`<article class="event ${i%2?'below':'above'}" style="--position:${start===end?(i+1)/(visible.length+1)*100:((Number(e.year)-start)/(end-start))*100}%"><div class="stem"></div><div class="card"><div class="visual stage"><img class="event-cover" src="${escapeHtml(e.cover)}" alt="${escapeHtml(e.title)} 活動宣傳圖" referrerpolicy="no-referrer"><span class="visual-tag">${escapeHtml(e.credit)}</span></div><div class="card-body"><div class="card-meta"><span>${escapeHtml(e.type)}</span><time>${escapeHtml(e.year)}</time></div><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.date)} · ${escapeHtml(e.venue)}</p><button type="button" class="event-detail-button" data-event="${data.indexOf(e)}">${e.setlist?.length ? "查看活動與歌單" : "查看活動"}</button></div></div></article>`).join('');
  cardSizeObserver?.disconnect();
  const cards=[...eventsEl.querySelectorAll('.card')];
  const sizeTimeline=()=>{const tallest=Math.max(0,...cards.map(card=>card.offsetHeight));inner.style.setProperty('--timeline-height',`${Math.max(820,2*(tallest+62+24))}px`);};
  if(typeof ResizeObserver!=='undefined'){cardSizeObserver=new ResizeObserver(sizeTimeline);cards.forEach(card=>cardSizeObserver.observe(card));}
  sizeTimeline();
  document.querySelector('#eventDetails').hidden=true;
}
function showDetails(e){
  const panel=document.querySelector('#eventDetails');
  panel.hidden=false;
  panel.innerHTML=`<div class="event-intro"><div class="event-intro-copy"><span class="eyebrow">FAN ARCHIVE · 非官方紀錄</span><p class="event-kicker">${escapeHtml(e.type)} · TAIPEI</p><h2>${escapeHtml(e.title)}</h2><p class="event-story">${escapeHtml(e.description)}</p><dl class="event-facts"><div><dt>日期</dt><dd>${escapeHtml(e.date)}</dd></div><div><dt>時間</dt><dd>${escapeHtml(e.doors)}</dd></div><div><dt>會場</dt><dd>${escapeHtml(e.venue)}</dd></div>${e.prices?`<div><dt>票價</dt><dd>${escapeHtml(e.prices)}</dd></div>`:''}${e.benefits?.length?`<div><dt>票種福利</dt><dd>${e.benefits.map(item=>{const [label,...rest]=item.split('：');return `<span class="benefit-line"><span class="benefit-label">${escapeHtml(label)}</span><span class="benefit-colon">：</span><span>${escapeHtml(rest.join('：'))}</span></span>`}).join('')}</dd></div>`:''}</dl><a class="source-link" href="${escapeHtml(e.source)}" target="_blank" rel="noopener noreferrer">查看主辦方活動資訊</a></div><figure class="event-poster"><img src="${escapeHtml(e.cover)}" alt="${escapeHtml(e.title)} 活動宣傳圖" loading="lazy" referrerpolicy="no-referrer"><figcaption>${escapeHtml(e.credit)}</figcaption></figure></div><details class="setlist"><summary>查看 DJ 歌單（${(e.setlist||[]).length} 首）</summary><p>依粉絲分享整理，曲序與名稱未經官方確認。</p><ol>${(e.setlist||[]).map(song=>`<li>${escapeHtml(song)}</li>`).join('')}</ol></details>`;
  if (e.setlistLocked) {
    panel.querySelector('.setlist').outerHTML='<div class="setlist-locked"><button type="button" disabled>巡演進行中・歌單暫不公開</button><p>為避免影響其他場次的觀眾，巡演結束後再開放。</p></div>';
  }
  else if (e.setlistSessions?.length) {
    panel.querySelector('.setlist').innerHTML=`<summary>${escapeHtml(e.setlistSummary||'查看午場與晚場歌單')}</summary><div class="setlist-sheet"><h3>2026 Live Setlist</h3><p class="setlist-subtitle">${escapeHtml(e.venue)} / ${escapeHtml(e.date)}</p>${e.setlistSessions.map(session=>`<div class="setlist-section setlist-session"><h4>[ ${escapeHtml(session.label)} ]</h4>${session.songs.map((song,i)=>`<div class="track-line"><span>${escapeHtml(session.prefix||'M')}${String(i+1).padStart(2,'0')}.</span><span>${escapeHtml(song)}</span></div>`).join('')}<div class="setlist-total">Total: ${session.songs.length} Tracks</div></div>`).join('')}<p class="setlist-note">${escapeHtml(e.setlistNote)}</p>${e.setlistSource?`<a class="source-link" href="${escapeHtml(e.setlistSource)}" target="_blank" rel="noopener noreferrer">查看歌單來源</a>`:''}</div>`;
  }
  else if (!e.setlist?.length) panel.querySelector('.setlist')?.remove();
  else if (e.encore?.length) {
    panel.querySelector('.setlist').innerHTML=`<summary><span class="spoiler-label">⚠ 巡演歌單防雷</span><span class="spoiler-action">顯示歌單</span></summary><div class="setlist-sheet"><h3>2026 Live Setlist</h3><p class="setlist-subtitle">${escapeHtml(e.venue)} / ${escapeHtml(e.date)}</p><div class="setlist-section"><h4>[ Opening ]</h4><div class="track-line"><span>SE.</span><span>${escapeHtml(e.opening)}</span></div></div><div class="setlist-section"><h4>[ Main Set ]</h4>${e.setlist.map((song,i)=>`<div class="track-line"><span>M${String(i+1).padStart(2,'0')}.</span><span>${escapeHtml(song)}</span></div>`).join('')}</div><div class="setlist-section"><h4>[ Encore ]</h4>${e.encore.map((song,i)=>`<div class="track-line"><span>EN${i+1}.</span><span>${escapeHtml(song)}</span></div>`).join('')}</div><div class="setlist-total">Total: ${1+e.setlist.length+e.encore.length} Tracks</div><p class="setlist-note">${escapeHtml(e.setlistNote)}</p></div>`;
    const spoiler=panel.querySelector('.setlist');
    spoiler.addEventListener('toggle',()=>{spoiler.querySelector('.spoiler-action').textContent=spoiler.open?'收起歌單':'顯示歌單';});
  }
  else {
    const setKind=e.setlistKind==='Live'?'Live':'DJ';
    panel.querySelector('.setlist').innerHTML=`<summary>查看 ${setKind} 歌單（${e.setlist.length} 首）</summary><div class="setlist-sheet"><h3>2026 ${setKind} Setlist</h3><p class="setlist-subtitle">${escapeHtml(e.venue)} / ${escapeHtml(e.date)}</p><div class="setlist-section"><h4>[ ${setKind==='Live'?'Main Set':'DJ Set'} ]</h4>${e.setlist.map((song,i)=>`<div class="track-line"><span>M${String(i+1).padStart(2,'0')}.</span><span>${escapeHtml(song)}</span></div>`).join('')}</div><div class="setlist-total">Total: ${e.setlist.length} Tracks</div><p class="setlist-note">${escapeHtml(e.setlistNote||'依粉絲分享整理，曲序與名稱未經官方確認。')}</p>${e.setlistSource?`<a class="source-link" href="${escapeHtml(e.setlistSource)}" target="_blank" rel="noopener noreferrer">查看歌單來源</a>`:''}</div>`;
  }
  if (e.program?.length) panel.insertAdjacentHTML('beforeend', `<section class="event-program"><span class="eyebrow">EVENT HIGHLIGHTS</span><h3>活動內容</h3><p>${escapeHtml(e.programNote||'依主辦方公開資訊整理，順序不代表實際進行順序。')}</p><ul>${e.program.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`);
  if (e.posts?.length) {
    panel.insertAdjacentHTML('beforeend', `<section class="event-posts"><span class="eyebrow">FROM THE ARTIST</span><h3>活動回顧</h3><p>${escapeHtml(e.artist)}官方帳號分享的貼文。</p><div class="post-grid">${e.posts.map(url=>`<div class="post-card"><div class="post-embed" data-post-id="${escapeHtml(url.match(/\/status\/(\d+)/)?.[1]||'')}"><p class="post-status">正在載入貼文…</p></div><a class="post-fallback" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">在 X 開啟貼文</a></div>`).join('')}</div></section>`);
    loadPostWidgets(panel);
  }
}
let widgetLoader;
function loadPostWidgets(panel) {
  widgetLoader ||= new Promise((resolve,reject)=>{
    if(window.twttr?.widgets?.createTweet){resolve(window.twttr);return;}
    const script=document.createElement('script');script.async=true;script.src='https://platform.twitter.com/widgets.js';
    script.onload=()=>{if(window.twttr?.ready) window.twttr.ready(resolve); else reject(new Error('Widget unavailable'));};
    script.onerror=()=>reject(new Error('Widget unavailable'));document.head.append(script);
  });
  widgetLoader.then(twitter=>panel.querySelectorAll('.post-embed').forEach(async target=>{
    const status=target.querySelector('.post-status');
    try {if(!target.dataset.postId)throw Error('Missing post ID');const widget=await twitter.widgets.createTweet(target.dataset.postId,target,{theme:'dark',dnt:true,align:'center'});if(!widget)throw Error('Post unavailable');status?.remove();}
    catch {if(status)status.textContent='無法載入嵌入貼文，請使用下方連結。';}
  })).catch(()=>{panel.querySelectorAll('.post-status').forEach(status=>{status.textContent='無法載入嵌入貼文，請使用下方連結。';});});
}
function setupYears(){
  const years=data.map(e=>Number(e.year)).filter(Number.isFinite); if(!years.length)return;
  start=Math.min(...years);end=Math.max(...years);inner.classList.toggle('single-year',start===end);
  document.querySelector('#yearRange').textContent=start===end?String(start):`${start} — ${end}`;
  document.querySelector('#years').innerHTML=Array.from({length:end-start+1},(_,i)=>`<span style="--position:${start===end?50:i/(end-start)*100}%">${start+i}</span>`).join('');
  document.querySelector('#railYears').innerHTML=Array.from({length:end-start+1},(_,i)=>`<button type="button" data-year="${start+i}">${start+i}</button>`).join('');
  slider.min=start;slider.max=end;slider.value=start;slider.disabled=start===end;current.textContent=start;
}
function jump(year){current.textContent=year;slider.value=year;if(matchMedia('(max-width: 720px)').matches){const card=[...document.querySelectorAll('.event')].find(el=>el.querySelector('time')?.textContent===String(year));card?.scrollIntoView({behavior:'smooth',block:'center'});}else track.scrollTo({left:start===end?0:(year-start)/(end-start)*(track.scrollWidth-track.clientWidth),behavior:'smooth'});}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.filter;document.querySelectorAll('.filter').forEach(b=>{const selected=b===btn;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});render();}));
eventsEl.addEventListener('click',e=>{const button=e.target.closest('[data-event]');if(button){showDetails(data[Number(button.dataset.event)]);document.querySelector('#eventDetails').scrollIntoView({behavior:'smooth',block:'start'});}});
slider.addEventListener('input',()=>jump(Number(slider.value)));document.querySelector('#railYears').addEventListener('click',e=>{const b=e.target.closest('button');if(b)jump(Number(b.dataset.year));});
track.addEventListener('wheel',e=>{if(matchMedia('(max-width: 720px)').matches||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;if(track.scrollWidth>track.clientWidth){e.preventDefault();track.scrollLeft+=e.deltaY;}},{passive:false});track.addEventListener('scroll',()=>{if(matchMedia('(max-width: 720px)').matches)return;const max=track.scrollWidth-track.clientWidth;const year=Math.round(start+(max?track.scrollLeft/max:0)*(end-start));slider.value=year;current.textContent=year;},{passive:true});
let drag;track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button===0&&!e.target.closest('button,a,input')){drag={x:e.clientX,left:track.scrollLeft};track.setPointerCapture(e.pointerId);track.classList.add('dragging');}});track.addEventListener('pointermove',e=>{if(drag)track.scrollLeft=drag.left-(e.clientX-drag.x);});function stop(){drag=null;track.classList.remove('dragging');}track.addEventListener('pointerup',stop);track.addEventListener('pointercancel',stop);
fetch('events.json').then(r=>{if(!r.ok)throw Error('load failed');return r.json()}).then(items=>{data=items;setupYears();render()}).catch(()=>{document.querySelector('#empty').hidden=false;document.querySelector('#empty').textContent='暫時無法載入時間軸，請稍後再試。';});
