const express = require("express")
const app = express()
let events = 0


app.get("/", (req, res) => res.send("hello!"));

app.get("/stream", (req, res) => {

    res.setHeader("Content-Type", "text/event-stream");
    send(res)
})


app.listen(8080)


function send(res) {

    if(events == 10){
        return
    }

    res.write("data: " + `hello from server ---- [${events++}]\n\n`);
    setTimeout(() => send(res), 1000);
}


