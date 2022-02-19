const Category = require("../models/Category")

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)

    res.status(201).json({
      status: "İşlem başarılı",
      category,
    })
    res.send("Yeni kategori oluşturuldu")
  } catch (error) {
    res.status(400).json({
      status: "İşlemde hata var",
      error,
    })
  }
}