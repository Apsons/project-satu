// Challenge 4
/* The createEmitter function should create a new EvenEmitter and register "open" and "close" event listeners. The callbacks for those events should be onOpen and onClose arguments, respectively. The opened and closed methods should raise the "open" and "close" events on the EvenEmitter they will receive as emitter arguments. The callbacks should be invoked only once per emitter.
For example, after executing the following code, it print "Opened!" and then "Closed!":*/

let emitter = createEmitter(
    () => console.log("Opened!"), () => console.log("Closed!")
    );

    //Start code here :

    const events = require("events");
    function createEmitter(onOpen, onClose) {

    }
    function opened(emitter) {

    }
    function closed(emitter) {

    }
    let emitter = createEmitter(
    () => console.log("Opened!"), () => console.log("Closed!")
    );
    
    opened(emitter);
    closed(emitter);
    module.exports.createEmitter = createEmitter;
    module.exports.opened = opened;
    module.exports.closed = closed;