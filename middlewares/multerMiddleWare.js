import multer from 'multer';
import fs from 'fs';
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{

        const filePath = 'C:/uploads/test';
        cb(null, filePath);

      
        fs.mkdirSync(filePath, {recursive:true});
        cb(null, filePath);
   
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage:storage,
    limits:{fileSize:10*1024*1024},
});

const uploadSingle = upload.single('file');
const uploadArray = upload.array('file');
const uploadAny = upload.any('file');
export default uploadSingle;
