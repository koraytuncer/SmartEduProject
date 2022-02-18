const express = require("express")
const mongoose = require("mongoose")
const pageRoute = require("./routes/pageRoute")
const courseRoute = require("./routes/courseRoute")

const app = express()

//Veritabanı Bağlantısı
mongoose
  .connect("mongodb://localhost/smatedu-db")
  .then(() => {
    console.log("Bağlantı Başarılı")
  })
  .catch((err) => {
    console.log(err)
  })

//Template Engine(Şablon Motoru :) )
app.set("view engine", "ejs")

//Middleware(Ara Yazılımlar)
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes(Yönlendirmeler)
app.use("/", pageRoute)
app.use("/courses", courseRoute)

//Server Başlatılıyor..
const port = 5200
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`)
})

app.get("/random", function (req, res) {
  res.send("TEST")
})
