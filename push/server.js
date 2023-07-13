const http = require("http")
const ws = require("ws")
let clients = new Map()

const httpServer = http.createServer()
const WebSocketServer = new ws.Server({"server":httpServer})


httpServer.listen(8080)


WebSocketServer.on("connection", (conn) => {

    
    const id = uuidv4()
    clients.set(conn, id)

    conn.on("message" , (mssg) => {
        const msg = JSON.parse(mssg)
        const client = clients.get(conn)

        msg.sender = client.id

        const outbound = JSON.stringify(msg);

        [...clients.keys()].forEach((client) => {
            client.send(outbound);
        });
    })


    conn.on("close", () => {
        clients.delete(conn);
    });
})



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }