const User = require("../models/User")

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