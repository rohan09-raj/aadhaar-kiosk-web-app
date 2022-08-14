import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: {type: String},
  aadhaarNumber: {type: Number},
  indianResident: {type: Boolean, required: true},
  name: {type: String, required: true},
  gender: {type: String, required: true},
  dob: {type: String, required: true},
  mobile: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  photo: {type: String, required: true},
  documents: {type: Object, required: true},
  biometrics: {type: Object, required: false},
  createdAt: {type: Date, default: new Date()},
  verified: {type: Boolean, default: false},
});

const UserDetails = mongoose.model('UserDetails', userSchema);

export default UserDetails;
