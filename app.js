const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const pageRoute = require("./routes/pageRoute")
const courseRoute = require("./routes/courseRoute")
const categoryRoute = require("./routes/categoryRoute")
const userRoute = require("./routes/userRoute")
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

//Global Değişkenler
global.userIN = null

//Middleware(Ara Yazılımlar)
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
  })
)

//Routes(Yönlendirmeler)
app.use("*", (req, res, next) => {
  userIN = req.session.userID
  next()
})
app.use("/", pageRoute)
app.use("/courses", courseRoute)
app.use("/categories", categoryRoute)
app.use("/users", userRoute)

//Server Başlatılıyor..
const port = 5200
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`)
})

app.get("/random", function (req, res) {
  res.send("TEST")
})
