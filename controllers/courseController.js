const Course = require("../models/Course")

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body)

  try {
    res.status(201).json({
      status: "İşlem başarılı",
      course,
    })
    res.send("Yeni kurs oluşturuldu")
  } catch (error) {
    res.status(400).json({
      status: "İşlemde hata var",
      error,
    })
  }
}
