let isScrolling = false;
let scrollingRequestId;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startScrolling' && !isScrolling) {
    startScrolling();
  } else if (request.action === 'pauseScrolling' && isScrolling) {
    stopScrolling();
  }
});

function startScrolling() {
  isScrolling = true;
  scrollLoop();
}

function stopScrolling() {
  isScrolling = false;
  cancelAnimationFrame(scrollingRequestId);
}

function scrollLoop() {
  if (!isScrolling) {
    return;
  }

  window.scrollBy(0, 1); // Ajusta la cantidad de desplazamiento según tu preferencia
  scrollingRequestId = requestAnimationFrame(scrollLoop);
}
