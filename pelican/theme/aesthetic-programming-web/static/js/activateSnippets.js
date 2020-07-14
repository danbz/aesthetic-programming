function activateInView(selector, scrollContainer, activateCallback, deactivateCallback) {
  var candidates = document.querySelectorAll(selector),
      lastActive;

  document.addEventListener('scroll', function () {
    var containerTop, threshold;
    if (! scrollContainer) {
      containerTop = 0;
      containerBottom = window.innerHeight;
    } else {
      var containerRect = container.getBoundingClientRect();
      
      containerTop = containerRect.top;
      containerBottom = containerRect.bottom;
    }
    
    threshold = (containerBottom - containerTop) * .6;

    // var visibleCandidates = [];

    var bestCandidate, bestCandidateTop;

    for (var i=0; i < candidates.length; i++) {
      elRect = candidates[i].getBoundingClientRect();
      if (elRect.top < threshold && elRect.bottom > containerTop) {
        if (!bestCandidate || elRect.top > bestCandidateTop) {
          bestCandidateTop = elRect.top;
          bestCandidate = candidates[i];
        }
      }
    }

    if (bestCandidate) {
      if (lastActive != bestCandidate) {
        if (lastActive) {
          (deactivateCallback.bind(lastActive))();
        }
        lastActive = bestCandidate;
        (activateCallback.bind(bestCandidate))();
      }
    } else if (lastActive) {
      (deactivateCallback.bind(lastActive))();
      lastActive = null;
    }

    // if (auto) {
    //   if (visible < minVisible) {
    //     player.getPaused().then(function (paused) {
    //       if (!paused) {
    //         player.off('pause');
    //         player.pause();
    //         player.on('play', disableAuto);
    //       }
    //     })
    //   } else {
    //     player.getPaused().then(function (paused) {
    //       if (paused) {
    //         player.off('play');
    //         player.play();
    //         player.on('pause', disableAuto);
    //       }
    //     })
    //   }
    // }

  }, true);
}

// activateInView('.highlighttable, .codefragment[data-executable="true"]', null, function () {
//   var activeSnippets = document.querySelectorAll('.highlighttable.active');
  
//   for (let i = 0; i < activeSnippets.length; i++) {
//     activeSnippets[i].classList.remove('active');
//   }

//   this.classList.add('active');
//   console.log(this);
// }, function () {
//   this.classList.remove('active');
// });

activateInView('.exec', null, function () {
  // this is the '.exec' div which is being activated
  this.classList.add('active');
  var pre = this.querySelector('pre code'),
      script = document.createElement('script');

  script.setAttribute('type', 'text/p5');
  script.setAttribute('data-editor-layout', 'vertical');
  script.setAttribute('data-autoplay', 'autoplay');
  script.textContent = pre.textContent;

  document.querySelector('#canvas').appendChild(script);
  // console.log(pre.innerText);
  
  window['p5Widget'].replaceScript(script);

}, function () {
  // this is the .exec dic which is being deactivated
  this.classList.remove('active');
  var canvas = document.querySelector('#canvas');

  while (canvas.lastChild) {
    canvas.removeChild(canvas.lastChild);
  }
});

// pre_set = document.querySelectorAll(".exec .highlight pre");
// canvas = document.querySelector("#canvas");
// console.log(canvas);
// for (var i = 0; i < pre_set.length; i++){
// script = "<script type='text/p5' data-layout='vertical'>" + pre_set[i].innerText + "<\/script>";
// canvas.innerHTML = script;
// console.log(pre_set[i].innerText);
// }