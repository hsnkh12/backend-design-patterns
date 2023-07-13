const celery = require("./celery.config")
const express = require("express")

const app = express()


app.post("/publish-new-job", async (req, res ) => {

    try{
        await addJobToQueue()
        res.send(true)
    } catch (error) {
        console.log(error)
    }
})



app.listen(8080)


async function addJobToQueue() {

    const queueName = 'queue';
    const taskName = "task"
  
    const headers = {
      'task': taskName,
      'id': uuidv4(),
      'lang': 'py',
      'argsrepr': '',
      'kwargsrepr': '{}'
    }
  
    const body = {
      args: [],
      kwargs:{}
    }
  
    const options = {
      headers:headers, 
      contentType:'application/json', 
      contentEncoding:'utf-8',
      deliveryMode: 2
  
    }
    await celery.channel.assertQueue(queueName);
    await celery.channel.publish('',queueName, Buffer.from(JSON.stringify(body)), options);
  
  }
    


  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }