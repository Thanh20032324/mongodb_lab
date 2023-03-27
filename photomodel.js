const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://thanhttph23851:thanh@demo.os8igsj.mongodb.net/?retryWrites=true&w=majority");
const PhotoSchema = new mongoose.Schema({
    id: String,
    albumId: String,
    title: String,
    url: String,
    thumbnailUrl: String
},{
    timestamps:true,
});
const PhotoModel = mongoose.model('baitap', PhotoSchema);
module.exports = PhotoModel;