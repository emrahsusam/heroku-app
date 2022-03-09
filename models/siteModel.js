const   mongoose                    =require('mongoose');

const   siteSchema = new mongoose.Schema({
    bgImage1 : { type:String, required: "UYARI! Bu alan boş olamaz." },
    bgImage2 : { type:String, required: "UYARI! Bu alan boş olamaz." },
    bgImage3 : { type:String, required: "UYARI! Bu alan boş olamaz." },
    bgImage4 : { type:String, required: "UYARI! Bu alan boş olamaz." },
    bgImage5 : { type:String, required: "UYARI! Bu alan boş olamaz." },
});

module.exports = mongoose.model("Site", siteSchema);
