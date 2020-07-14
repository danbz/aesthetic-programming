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
        (activateCallback.bind(bestCandidate))();
        lastActive = bestCandidate;
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

activateInView('.highlighttable, .codefragment[data-executable="true"]', null, function () {
  var activeSnippets = document.querySelectorAll('.highlighttable.active');
  
  for (let i = 0; i < activeSnippets.length; i++) {
    activeSnippets[i].classList.remove('active');
  }

  this.classList.add('active');
  console.log(this);
}, function () {
  this.classList.remove('active');
});