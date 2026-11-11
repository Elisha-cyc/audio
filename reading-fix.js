/* Reading fix for Common Ground:
   - topic/heading no longer read twice
   - pages turn reliably (speech is split into short chunks)
   - reading continues into the next chapter */

function makePages(c){
  const pages=splitForPages(c.text).map((passage,n)=>({
    text:passage.text,kind:'subtopic',
    heading:passage.heading||('Part '+(n+1)),
    headingSpoken:!!passage.heading&&!/\(continued\)$/.test(passage.heading)
  }));
  splitForPages(c.analysis||'').forEach((passage,n)=>pages.push({
    text:passage.text,kind:'course connection',
    heading:n===0?'Course connection':'Further reflection',
    headingSpoken:n===0
  }));
  return pages.length?pages:[{text:'This chapter has no reading text yet.',kind:'subtopic',heading:c.title,headingSpoken:false}];
}

function finishChapterReading(){
  if(!isReading)return;
  data.done=[...new Set([...data.done,i])];
  window.autoReadingTransition=false;
  if(i<chapters.length-1){
    show(i+1);
    isReading=true;isPaused=false;
    $('play').textContent='Ⅱ';
    toast('Chapter finished · continuing to the next chapter');
    setTimeout(()=>{if(isReading&&!isPaused)speakCurrentPage()},350);
    return;
  }
  isReading=false;isPaused=false;
  $('play').textContent='▶';$('audlabel').textContent='Course completed';
  rememberPosition();toast('You reached the last chapter');
}

function advanceReadingPage(chapterAtStart,pageAtEnd){
  if(!isReading||isPaused||i!==chapterAtStart||pageIndex!==pageAtEnd)return;
  if(pageAtEnd>=chapterPages.length-1){finishChapterReading();return}
  if(window.autoReadingTransition)return;
  window.autoReadingTransition=true;
  changePage(1,()=>{
    window.autoReadingTransition=false;
    if(isReading&&!isPaused&&i===chapterAtStart)speakCurrentPage();
  });
}

function speechChunks(text,max=200){
  const out=[],re=/[^.!?;:]+[.!?;:]*["'”’)\]]*\s*/g;
  let m;
  while((m=re.exec(text))){
    let start=m.index,piece=m[0];
    if(!piece.trim())continue;
    while(piece.length>max){
      let cut=piece.lastIndexOf(' ',max);if(cut<max/2)cut=max;
      out.push({text:piece.slice(0,cut),start});start+=cut;piece=piece.slice(cut);
    }
    if(piece.trim())out.push({text:piece,start});
  }
  const merged=[];
  out.forEach(c=>{
    const last=merged[merged.length-1];
    if(last&&last.text.length+c.text.length<=max&&last.start+last.text.length===c.start)last.text+=c.text;
    else merged.push({...c});
  });
  return merged;
}

function speakCurrentPage(){
  if(!isReading||isPaused||!chapterPages[pageIndex])return;
  const chapterAtStart=i,pageAtStart=pageIndex,session=++readingSession,
        c=chapters[chapterAtStart],p=chapterPages[pageAtStart];
  const norm=s=>(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  let intro='';
  if(pageAtStart===0)intro+=c.title+'. ';
  if(p.headingSpoken&&p.heading&&norm(p.heading)!==norm(c.title)&&!norm(p.text).startsWith(norm(p.heading)))intro+=p.heading+'. ';
  const pieces=[];
  if(intro)pieces.push({text:intro,start:-1});
  speechChunks(p.text).forEach(x=>pieces.push(x));
  const stillCurrent=()=>session===readingSession&&isReading&&!isPaused&&i===chapterAtStart&&pageIndex===pageAtStart;
  const speakPiece=k=>{
    if(!stillCurrent())return;
    if(k>=pieces.length){
      data.pageDone=data.pageDone||{};data.pageDone[chapterAtStart+':'+pageAtStart]=true;
      rememberPosition();advanceReadingPage(chapterAtStart,pageAtStart);return;
    }
    const piece=pieces[k],u=new SpeechSynthesisUtterance(piece.text),v=selectedVoice();
    if(v)u.voice=v;
    u.rate=+$('rate').value;u.pitch=1;
    let done=false;
    u.onstart=()=>{if(stillCurrent()){$('play').textContent='Ⅱ';$('audlabel').textContent=who()+' · page '+(pageIndex+1)+' of '+chapterPages.length}};
    u.onboundary=e=>{if(piece.start>=0&&typeof e.charIndex==='number'&&stillCurrent())updateSpokenPointer(piece.start+e.charIndex)};
    u.onend=()=>{if(done)return;done=true;speakPiece(k+1)};
    u.onerror=e=>{
      if(done)return;
      if(e&&(e.error==='interrupted'||e.error==='canceled'))return;
      if(!stillCurrent())return;
      done=true;isReading=false;isPaused=false;
      $('play').textContent='▶';$('audlabel').textContent='Reading stopped · tap to try again';
    };
    if(piece.start>=0)updateSpokenPointer(piece.start);
    speechSynthesis.speak(u);
  };
  speakPiece(0);
}

/* Rebuild the page that is already on screen with the fixed makePages */
try{
  chapterPages=makePages(chapters[i]);
  if(pageIndex>=chapterPages.length)pageIndex=chapterPages.length-1;
  renderPage();
}catch(e){console.error('Reading fix re-render failed',e)}
