const User = require("../models/User")
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)

    res.status(201).json({
      status: "İşlem başarılı",
      user,
    })
    res.send("Yeni user oluşturuldu")
  } catch (error) {
    res.status(404).json({
      status: "İşlemde hata var",
      error,
    })
  }
}
exports.loginUser = (req, res) => {
  try {
    const { email, password } = req.body

    User.findOne({ email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            // USER SESSION
            req.session.userID = user._id
            res.status(200).redirect("/")
          }
        })
      }
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    })
  }
}
