import mongoose from 'mongoose';
import UserDetails from '../models/users';
import sendOTP from '../services/twilio';

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
      sendOTP('+919696712475', 'Hi, I am Rohan Raj Gupta');
      return res.status(400).json({message: 'User already exists.'});
    }

    console.log(req.body);

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
      verified,
    });

    console.log(result);

    const aadhaarNumber = 281943258754;

    res.status(200).json({result, aadhaarNumber});
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

const getVerifiedUsers = async (req, res) => {
  try {
    const verifiedUsers = await UserDetails.find({verified: true});

    res.status(200).json(verifiedUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getUnverifiedUsers = async (req, res) => {
  try {
    const unverifiedUsers = await UserDetails.find({verified: false});

    console.log(unverifiedUsers);

    res.status(200).json(unverifiedUsers);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export default {createUser, getUser, getVerifiedUsers, getUnverifiedUsers};
