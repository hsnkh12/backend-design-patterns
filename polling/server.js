const express = require("express")
const app = express()

const jobs = new Map()


app.post("/submit-job", (req, res) => {

    const jobID = uuidv4()
    jobs.set(jobID, 0)
    updateJob(jobID,0); 

    res.send(jobID)
})

app.get("/check-job", (req, res) => {

    const jobID = req.query.jobID
    const job = jobs.get(jobID)

    if (job == 10) {
        return res.send("ready: 10")
    } 
    return res.send("not ready: "+job)
})

app.listen(8080, () => console.log("listening on 8080"));




function updateJob(jobID, prc) {

    jobs.set(jobID, prc)
    if (prc == 10) return;
    this.setTimeout(()=> updateJob(jobID, prc + 1), 3000)
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }