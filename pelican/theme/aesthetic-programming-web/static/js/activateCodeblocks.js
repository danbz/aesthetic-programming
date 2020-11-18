(function () {
  function activateCodeblocks () {
    function makeCodeSegment (text, className) {
      var segment = document.createElement('span');
      segment.classList.add('code--line--segment');
      segment.classList.add('cm-' + className);
      segment.appendChild(document.createTextNode(text));

      return segment;
    }

    function makeLine(lineNumber, segments) {
      var line = document.createElement('span');
      line.classList.add('code--line');
      // var lineNumberEl = document.createElement('span');
      // lineNumberEl.appendChild(document.createTextNode(lineNumber));
      // lineNumberEl.classList.add('code--line--number');
      // line.appendChild(lineNumberEl);
      line.dataset.lineNumber = lineNumber;
      for (let i = 0; i < segments.length; i++) {
        line.appendChild(makeCodeSegment(segments[i][0], segments[i][1]));
      }
      return line;
    }

    var codeblocks = document.querySelectorAll('pre code');
    
    // Loop untill all codeblocks are replaced
    for (var i = 0; i < codeblocks.length; i++) {
      (function () {
        var codeblock = codeblocks[i],
            lineNumber = 1,
            lineBuffer = [],
            output = document.createElement('code'),
            language;
        
        if (codeblock.classList.contains('javascript')) {
          language = 'javascript';
        } else if (codeblock.classList.contains('html')) {
          language = 'html';
        } else if (codeblock.classList.contains('json')) {
          language = 'json';
        }

        output.classList.add('cm-s-p5-widget');
        
        CodeMirror.runMode(
          codeblock.textContent,
          language,
          function (text, className) {
            if (text == '\n') {
              output.appendChild(makeLine(lineNumber, lineBuffer));
              // output.appendChild(makeLine(lineBuffer));
              lineNumber++;
              lineBuffer = [];
            } else {
              lineBuffer.push([text, className]);
            }
          });

        if (lineBuffer.length > 0) {
          output.appendChild(makeLine(lineNumber, lineBuffer));
        }

        codeblock.parentNode.replaceChild(output, codeblock);
      })();

      // CodeMirror(function(elt) {
      //   codeblock.parentNode.replaceChild(elt, codeblock);
      //   codeblock.remove();
      // }, {
      //   value: codeblock.textContent,
      //   lineNumbers: true,
      //   readOnly: true,
      //   mode: "javascript"
      // });
    }
  }

  window.activateCodeblocks = activateCodeblocks;
})();