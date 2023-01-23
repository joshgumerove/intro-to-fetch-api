// event loop: can be viewed as a queue of tasks (this code will not actually work - just for visualization)

let eventLoop = [];
// first task in is first task out (can view as an array)

let event_1;

// event loop runs forever

while (true) {
  if (eventLoop.length > 0) {
    // get the next event in the queue
    event_1 = eventLoop.shift();
    try {
      event_1();
      removeEventFromQueue();
    } catch (e) {
      console.log("error: ", e);
    }
  }
}
