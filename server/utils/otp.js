import {SIX_TIMES_NINE} from '../constants/aadhaar';

const generateOTP = () => {
  const otp = Math.floor(Math.random() * SIX_TIMES_NINE + 1);
  return otp;
};

export default generateOTP;
