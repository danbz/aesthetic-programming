(function () {
  function activateCodeblocks () {
    var codeblocks = document.querySelectorAll('pre code.javascript');
    
    // Loop untill all codeblocks are replaced
    for (var i = 0; i < codeblocks.length; i++) {
      var codeblock = codeblocks[i];
      CodeMirror(function(elt) {
        codeblock.parentNode.replaceChild(elt, codeblock);
        codeblock.remove();
      }, {
        value: codeblock.textContent,
        lineNumbers: true,
        readOnly: true,
        mode: "javascript"
      });
    }
  }

  window.activateCodeblocks = activateCodeblocks;
})();