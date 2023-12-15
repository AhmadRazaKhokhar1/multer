import express from 'express';
import multerController from '../controllers/multerController.js';
import uploadSingle from '../middlewares/multerMiddleWare.js';

const multerRoute = express.Router();
multerRoute.post('/file', uploadSingle, multerController.uploadFile);
multerRoute.get('/file', multerController.getFile);

export default multerRoute;