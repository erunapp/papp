/**
 * 
 */
let pos = location.search.lastIndexOf('=') + 1;
let file = Number(location.search.substr(pos));

CodeMirror(document.getElementById('code'), {
    lineNumbers: true,
    tabSize: 4,
    value: wdp.file(file),
    theme: 'cobalt'
  });
  
  function loaded() {}