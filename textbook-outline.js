/* Textbook contents browser for the six core ABC of Political Science chapters.
   Reuses the same lesson/page data as the audiobook, so the outline stays in sync. */
(function(){
  'use strict';
  const root=document.getElementById('chapterMenuLevels');
  if(!root || typeof chapters==='undefined' || typeof makePages!=='function') return;
  const core=chapters.slice(0,6);
  if(!core.length) return;
  const style=document.createElement('style');
  style.textContent=`
    .textbook-outline{border-top:1px solid #ded9ce;margin-top:15px;padding-top:13px}
    .textbook-outline-head{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#778251;font-weight:700;margin:0 5px 5px}
    .textbook-outline-note{font-size:10px;line-height:1.55;color:#77796d;margin:0 5px 10px}
    .textbook-outline details{border-top:1px solid #e5e1d7}
    .textbook-outline details:last-child{border-bottom:1px solid #e5e1d7}
    .textbook-outline summary{cursor:pointer;list-style:none;display:flex;gap:8px;align-items:flex-start;padding:10px 5px;font-size:11px;line-height:1.45;font-weight:700;color:#263a2d}
    .textbook-outline summary::-webkit-details-marker{display:none}
    .textbook-outline summary:after{content:'+';margin-left:auto;font-size:16px;color:#788653}
    .textbook-outline details[open]>summary:after{content:'−'}
    .textbook-outline .outline-chapter-number{color:#87945c;flex:0 0 auto}
    .textbook-outline-list{display:grid;gap:3px;padding:0 0 10px 20px}
    .textbook-outline-item{width:100%;border:0;border-radius:6px;background:transparent;text-align:left;padding:7px 8px;font-size:10px;line-height:1.45;color:#55594e}
    .textbook-outline-item:before{content:'•';color:#91a05f;margin-right:8px}
    .textbook-outline-item:hover,.textbook-outline-item:focus-visible{background:#eaf0dc;color:#263a2d;outline:none}
    .textbook-outline-item.current{background:#e5edcf;color:#263a2d;font-weight:700}
    .textbook-outline-count{font-size:9px;color:#858579;font-weight:500;margin-left:auto;white-space:nowrap}
  `;
  document.head.append(style);
  const panel=document.createElement('section');
  panel.className='textbook-outline';
  panel.setAttribute('aria-label','Textbook topics and subtopics');
  const heading=document.createElement('h3');
  heading.className='textbook-outline-head';
  heading.textContent='Textbook contents';
  const note=document.createElement('p');
  note.className='textbook-outline-note';
  note.textContent='All six core chapters · Select any subtopic to open its audiobook reading.';
  panel.append(heading,note);
  const groups=[];
  core.forEach((chapter,chapterIndex)=>{
    const pages=makePages(chapter).filter(page=>page.kind!=='course connection');
    const details=document.createElement('details');
    details.open=chapterIndex===i;
    const summary=document.createElement('summary');
    const number=document.createElement('span');
    number.className='outline-chapter-number';
    number.textContent='0'+(chapterIndex+1);
    const title=document.createElement('span');
    title.textContent=chapter.title;
    const count=document.createElement('span');
    count.className='textbook-outline-count';
    count.textContent=pages.length+' topics';
    summary.append(number,title,count);
    const list=document.createElement('div');
    list.className='textbook-outline-list';
    pages.forEach((page,pageNumber)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='textbook-outline-item';
      button.textContent=page.heading||('Subtopic '+(pageNumber+1));
      button.dataset.chapter=String(chapterIndex);
      button.dataset.page=String(pageNumber);
      button.addEventListener('click',()=>{
        const targetChapter=Number(button.dataset.chapter);
        const targetPage=Number(button.dataset.page);
        if(typeof show==='function') show(targetChapter);
        if(typeof chapterPages!=='undefined' && chapterPages[targetPage]){
          try { pageIndex=targetPage; renderPage(); if(typeof rememberPosition==='function') rememberPosition(); if(typeof nav==='function') nav(); } catch(e) {}
        }
        panel.querySelectorAll('.textbook-outline-item.current').forEach(el=>el.classList.remove('current'));
        button.classList.add('current');
        if(typeof closeChapterMenu==='function') closeChapterMenu();
      });
      list.append(button);
    });
    details.append(summary,list);
    panel.append(details);
    groups.push(details);
  });
  root.insertAdjacentElement('afterend',panel);
  function sync(){
    panel.querySelectorAll('.textbook-outline details').forEach((d,n)=>{d.open=n===i});
    panel.querySelectorAll('.textbook-outline-item').forEach(button=>{
      button.classList.toggle('current',Number(button.dataset.chapter)===i&&Number(button.dataset.page)===pageIndex);
    });
  }
  const originalShow=show;
  if(typeof originalShow==='function'){
    window.addEventListener('load',sync);
    panel.addEventListener('click',e=>{if(e.target.closest('.textbook-outline-item'))setTimeout(sync,0)});
  }
  sync();
})();
