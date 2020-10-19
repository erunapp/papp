/**
 * 
 */
let file = Number(url.searchParams.get("file"));

CodeMirror(document.getElementById('code'), {
    lineNumbers: true,
    tabSize: 4,
    value: wdp.getFile(file),
    mode: 'javascript',
    theme: 'cobalt'
  });
  
  function loaded() {}