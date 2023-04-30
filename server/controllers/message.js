import generateOTP from "../utils/otp.js";
import sendSMS from "../services/twilio.js";

const sendOTP = async (req, res) => {
  const { mobile } = req.body;

  try {
    const otp = generateOTP();
    const message = `Your OTP for Aadhaar verification is : ${otp}`;
    sendSMS(mobile, message);
    res.status(200).json({ message: "OTP sent successfully", otpCode: otp });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const sendMessage = async (req, res) => {
  const { mobile, id } = req.body;

  try {
    const message = `Your request for aadhaar card has been successfully submitted. Please use the id: ${id} for future reference.`;
    sendSMS(mobile, message);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const sendMessages = async (req, res) => {
  const { mobile, message } = req.body;

  try {
    sendSMS(mobile, message);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export default { sendOTP, sendMessage, sendMessages };
