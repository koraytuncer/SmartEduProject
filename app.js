const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.status(404).send("Merhaba Dünya")
})

//Server Başlatılıyor..
const port = 5200
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`)
})
