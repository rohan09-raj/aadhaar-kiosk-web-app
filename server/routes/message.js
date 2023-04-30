import Express from "express";
import message from "../controllers/message.js";

const router = Express.Router();

router.post("/otp", message.sendOTP);
router.post("/message", message.sendMessage);
router.post("/messages", message.sendMessages);

export default router;
