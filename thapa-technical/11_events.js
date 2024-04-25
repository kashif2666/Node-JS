// Events Module
// Node.js has built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
// Example 1- registering for the event to be fired only one time using once
// Example 2- create an event emitter instance and register a couple of callbacks
// Example 3- registering for the event for callbacks parameters

const EventEmitter = require("events");
const event= new EventEmitter();


event.on("sayMyName",()=>{
    console.log("Your name is Kashif");
});
event.on("sayMyName",()=>{
    console.log("Your name is Anwar");
});
// event.on("sayMyName",()=>{
//     console.log("Your name is Irfan");
// });
// event.on("sayMyName",()=>{
//     console.log("Your name is Ansari");
// });
event.emit("sayMyName");


event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}. `);
})
event.emit("checkPage",200,"ok");
