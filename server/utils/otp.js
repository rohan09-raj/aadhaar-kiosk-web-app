import {
  ONE_FIVE_TIMES_ZERO,
  NINE_FIVE_TIMES_ZERO,
} from "../constants/numbers.js";

const generateOTP = () => {
  const otp = Math.floor(
    ONE_FIVE_TIMES_ZERO + Math.random() * NINE_FIVE_TIMES_ZERO
  );
  return otp;
};

export default generateOTP;
