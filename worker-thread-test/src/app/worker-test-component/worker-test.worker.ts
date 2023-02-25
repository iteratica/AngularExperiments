/// <reference lib="webworker" />

// waits ms milliseconds and then returns the current datetime
function delay(ms: number) {
  var start = Date.now();
  while (Date.now() - start < ms) {
    // just wait ms milliseconds
  }
  return Date.now().toString();
}

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
