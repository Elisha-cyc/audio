/* Reading-section content pagination only.
   Playback is intentionally owned by index.html. Do not redefine
   speakCurrentPage, advanceReadingPage, finishChapterReading, or speak here:
   doing so overrides the maintained iOS playback queue in the main reader. */

function makePages(c){
  const pages=splitForPages(c.text).map((passage,n)=>({
    text:passage.text,kind:'subtopic',
    heading:passage.heading||('Part '+(n+1)),
    headingSpoken:!!passage.heading&&!/\\(continued\\)$/.test(passage.heading)
  }));
  splitForPages(c.analysis||'').forEach((passage,n)=>pages.push({
    text:passage.text,kind:'course connection',
    heading:n===0?'Course connection':'Further reflection',
    headingSpoken:n===0
  }));
  return pages.length?pages:[{text:'This chapter has no reading text yet.',kind:'subtopic',heading:c.title,headingSpoken:false}];
}

/* Rebuild the page already on screen using the Reading-section pagination. */
try{
  chapterPages=makePages(chapters[i]);
  if(pageIndex>=chapterPages.length)pageIndex=chapterPages.length-1;
  renderPage();
}catch(e){console.error('Reading fix re-render failed',e)}
