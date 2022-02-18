const express = require("express")
const ejs = require('ejs');

const app = express()


//Template Engine(Şablon Motoru :) )
app.set("view engine", "ejs")


//Middleware(Ara Yazılımlar)
app.use(express.static("public"))


//Routes(Yönlendirmeler)
app.get("/", (req, res) => {
  res.status(200)
  .render("index",{
      page_name:"index"
  })
})
app.get("/about", (req, res) => {
  res.status(200)
  .render("about",{
      page_name:"about"
  })
})
app.get("/contact", (req, res) => {
  res.status(200)
  .render("contact")
})




//Server Başlatılıyor..
const port = 5200
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`)
})
