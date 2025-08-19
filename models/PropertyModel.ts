import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Property title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Property description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Property price is required'],
    min: [0, 'Price cannot be negative']
  },
  priceType: {
    type: String,
    required: [true, 'Price type is required'],
    enum: ['sale', 'rent'],
    default: 'sale'
  },
  currency: {
    type: String,
    default: 'INR'
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  bedrooms: {
    type: Number,
    required: [true, 'Number of bedrooms is required'],
    min: [0, 'Bedrooms cannot be negative']
  },
  bathrooms: {
    type: Number,
    required: [true, 'Number of bathrooms is required'],
    min: [0, 'Bathrooms cannot be negative']
  },
  area: {
    type: Number,
    required: [true, 'Property area is required'],
    min: [0, 'Area cannot be negative']
  },
  areaUnit: {
    type: String,
    default: 'sq ft'
  },
  propertyType: {
    type: String,
    required: [true, 'Property type is required'],
    enum: ['apartment', 'house', 'villa', 'penthouse', 'commercial', 'land', 'studio'],
    default: 'apartment'
  },
  status: {
    type: String,
    enum: ['available', 'sold', 'rented', 'pending'],
    default: 'available'
  },
  featured: {
    type: Boolean,
    default: false
  },
  images: [{
    type: String,
    required: [true, 'At least one image is required']
  }],
  amenities: [{
    type: String,
    trim: true
  }],
  parking: {
    type: Boolean,
    default: false
  },
  furnished: {
    type: Boolean,
    default: false
  },
  readyToMove: {
    type: Boolean,
    default: false
  },
  yearBuilt: {
    type: Number,
    min: [1900, 'Year built cannot be before 1900']
  },
  floor: {
    type: Number,
    min: [0, 'Floor cannot be negative']
  },
  totalFloors: {
    type: Number,
    min: [1, 'Total floors must be at least 1']
  },
  contactPerson: {
    type: String,
    required: [true, 'Contact person is required'],
    trim: true
  },
  contactPhone: {
    type: String,
    required: [true, 'Contact phone is required'],
    trim: true
  },
  contactEmail: {
    type: String,
    required: [true, 'Contact email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  createdBy: {
    type: String,
    required: [true, 'Creator ID is required']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better search performance
PropertySchema.index({ city: 1, state: 1 });
PropertySchema.index({ priceType: 1 });
PropertySchema.index({ propertyType: 1 });
PropertySchema.index({ featured: 1 });
PropertySchema.index({ status: 1 });
PropertySchema.index({ price: 1 });
PropertySchema.index({ createdAt: -1 });

// Virtual for formatted price
PropertySchema.virtual('formattedPrice').get(function() {
  if (this.priceType === 'rent') {
    return `₹${(this.price / 1000).toFixed(0)}k/month`;
  } else {
    if (this.price >= 10000000) {
      return `₹${(this.price / 10000000).toFixed(1)} Cr`;
    } else if (this.price >= 100000) {
      return `₹${(this.price / 100000).toFixed(1)} L`;
    } else {
      return `₹${this.price.toLocaleString()}`;
    }
  }
});

// Virtual for full location
PropertySchema.virtual('fullLocation').get(function() {
  return `${this.location}, ${this.city}, ${this.state}`;
});

export default mongoose.models.Property || mongoose.model('Property', PropertySchema);
