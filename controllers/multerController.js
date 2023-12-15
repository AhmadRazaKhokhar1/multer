import fs from 'fs';
import multerModel from '../models/multerModel.js';
import path from 'path';

const multerController = {
    uploadFile: async(req, res)=>{
        const fileDataBuffer = Buffer.from(req.file.path, 'base64'); // Decode base64 data
        try {
            const newFile = new multerModel({
                fileName:req.file.originalname,
                fileData:fileDataBuffer,
            });
            await newFile.save();
            res.status(200).send({
                success:true,
                message:"Uploaded successfully!",
                newFile,
            });
            //clearing the temporary files
           const clearCache = ()=>{ setTimeout(()=>{
                const filePath = path.join('C:/uploads/test', req.file.filename);
               return fs.unlinkSync(filePath);
            },10000);
            console.log(`The file has been successfully removed from root directory!`);
        } 
        clearCache();

        } catch (error) {
            console.log(`There was an error in upload controller: ${error}`);
            res.status(500).send({
                success:false,
                message:"Internal Server Error!"
            })
        }
    },
    getFile: async(req, res)=>{
        try {
           const files = await multerModel.find({});
           res.status(200).send({
            success:true,
            message:"Files fetched successfully",
            files:files,
           })
        } catch (error) {
            console.log(`There was an error in the get file controller: ${error}`)
        }
    }
}
export default multerController;