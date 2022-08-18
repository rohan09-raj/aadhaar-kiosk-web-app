import generateOTP from '../utils/otp';
import sendMessage from '../services/twilio';

const sendOTP = async (req, res) => {
  const {mobile} = req.body;

  try {
    const otp = generateOTP();
    const message = `Your OTP for Aadhaar verification is : ${otp}`;
    sendMessage(mobile, message);
    res.status(200).json({message: 'OTP sent successfully', otpCode: otp});
  } catch (error) {
    res.status(404).json({message: error});
  }
};

export default {sendOTP};
