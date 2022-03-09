const   mongoose                    =require('mongoose');

const   ekleSchema = new mongoose.Schema({
    productImg : { type:String, required: "UYARI! Bu alan boş olamaz." },
    productModel : { type:String, required: "UYARI! Bu alan boş olamaz." },
    productFiyat : { type:String, required: "UYARI! Bu alan boş olamaz." },
    productText : { type:String, required: "UYARI! Bu alan boş olamaz." },
});

module.exports = mongoose.model("Ekle", ekleSchema);
