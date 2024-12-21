import multer from "multer";
const storage = multer.memoryStorage();
const update = multer({storage: storage});
export default update;
