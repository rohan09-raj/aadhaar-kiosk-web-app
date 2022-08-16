import UserDetails from '../models/users';
import sendOTP from '../services/twilio';
import generateAadhaar from '../utils/aadhaar';

const createUser = async (req, res) => {
  const {
    indianResident,
    name,
    gender,
    dob,
    mobile,
    email,
    address,
    photo,
    documents,
    biometrics,
  } = req.body;

  try {
    const existingUser = await UserDetails.findOne({name, mobile, email});
    if (existingUser) {
      // sendOTP('+919696712475', 'Hi, I am Rohan Raj Gupta');
      return res.status(400).json({message: 'User already exists.'});
    }

    const result = await UserDetails.create({
      indianResident,
      name,
      gender,
      dob,
      mobile,
      email,
      address,
      photo,
      documents,
      biometrics,
    });

    const aadhaarNumber = 281943258754;

    return res.status(200).json({result, aadhaarNumber});
  } catch (error) {
    res.status(500).json({message: 'Something went wrong.'});
  }
};

const getUser = async (req, res) => {
  const {id} = req.params;

  try {
    const user = await UserDetails.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message: error});
  }
};

const getUserByAadhaarNumber = async (req, res) => {
  const {aadhaar} = req.params;
  const aadhaarNumber = Number(aadhaar);
  try {
    const user = await UserDetails.findOne({aadhaarNumber});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message: error});
  }
};

const getVerifiedUsers = async (req, res) => {
  try {
    const verifiedUsers = await UserDetails.find({verified: true});

    return res.status(200).json(verifiedUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getUnverifiedUsers = async (req, res) => {
  try {
    const unverifiedUsers = await UserDetails.find({verified: false});

    console.log(unverifiedUsers);

    return res.status(200).json(unverifiedUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const updateUser = async (req, res) => {
  const {id} = req.params;

  console.log(id, req.body);
  try {
    const user = await UserDetails.findByIdAndUpdate(
      id,
      {$set: req.body},
      {new: true}
    );

    if (!user.aadhaarNumber) {
      await UserDetails.findByIdAndUpdate(id, {
        $set: {aadhaarNumber: generateAadhaar()},
      });
    }

    res.status(200).json({message: 'User Updated Successfully'});
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    if (await UserDetails.findById(id)) {
      const user = await UserDetails.findByIdAndDelete(id);
      res.status(200).json({message: 'User Deleted Successfully'});
    }
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export default {
  createUser,
  getUser,
  getUserByAadhaarNumber,
  getVerifiedUsers,
  getUnverifiedUsers,
  updateUser,
  deleteUser,
};
