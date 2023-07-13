# Backend Design Pattern



### Push 
The push design pattern is a software design pattern commonly used in the backend to enable efficient and real-time communication between components or systems. It allows for the automatic delivery of data or events from a sender to one or more receivers without the receivers explicitly requesting the data.
```
nodemon push/server.js
```

### Polling
checking for new data over a fixed interval of time by making API calls at regular intervals to the server. It is used to get real-time updates in applications. There are many applications that need real-time data and polling is a life savior for those applications.
```
nodemon polling/server.js
```

### Publisher/consumer
The publisher-subscriber pattern is a messaging pattern where publishers send messages to subscribers through a message broker or middleware.
The broker acts as an intermediary between the publishers and subscribers, allowing them to communicate without being aware of each other’s existence. This decoupling enables publishers to send messages without knowing who will receive them, and subscribers to receive messages without knowing who sent them.
```
nodemon publisher-consumer/server.js
```


### Server sent events
Server sent events(SSE) is a pushing technology that enables pushing notification/message/events from the server to the client(s) via HTTP connection.
```
nodemon server-sent-events/server.js
```