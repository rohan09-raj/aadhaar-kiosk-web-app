import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: String,
  aadhaarNumber: String,
  indianResident: Boolean,
  name: String,
  gender: String,
  dob: {
    type: Date,
  },
  mobile: String,
  email: String,
  address: String,
  photo: String,
  documents: Object,
  biometrics: Object,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserDetails = mongoose.model('UserDetails', userSchema);

export default UserDetails;
