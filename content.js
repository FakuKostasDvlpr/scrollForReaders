let scrollingInterval;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startScrolling') {
    scrollingInterval = setInterval(function() {
      window.scrollBy(0, 10); // Ajusta el valor según tu preferencia
    }, 100); // Ajusta la velocidad de desplazamiento
  } else if (request.action === 'pauseScrolling') {
    clearInterval(scrollingInterval);
  }
});
