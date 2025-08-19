import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    maxlength: [200, 'name cannot exceed 200 characters']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    trim: true,
    maxlength: [2000, 'email cannot exceed 2000 characters']
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    min: [0, 'password cannot be negative']
  },
 
});


export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
