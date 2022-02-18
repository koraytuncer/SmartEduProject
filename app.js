const express = require("express");
const { use } = require("express/lib/application");
const pageRoute = require('./routes/pageRoute');



const app = express()

//Template Engine(Şablon Motoru :) )
app.set("view engine", "ejs")


//Middleware(Ara Yazılımlar)
app.use(express.static("public"))


//Routes(Yönlendirmeler)
app.use("/",pageRoute)


//Server Başlatılıyor..
const port = 5200
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı.`)
})

app.get('/random', function (req, res) {
    res.send('TEST')
  }) 
  ```
  yönlendirmesi hangi istek ile eşleşir?