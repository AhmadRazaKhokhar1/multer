import mongoose from "mongoose";
const multerSchema =new mongoose.Schema({
    fileName:{
        type:String,
    },
    fileData:{
        type:Buffer,
    }
});

const multerModel =new mongoose.model('multer_file', multerSchema);
export default multerModel;