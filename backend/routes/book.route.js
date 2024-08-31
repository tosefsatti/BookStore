import { Router } from 'express';
import { getBook} from "../controller/book.controller.js";
const router = Router();

router.get("/getbooks",
    getBook
)



export default router;