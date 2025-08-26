"use client";
import { cities, states } from "@/data/cities";
import { useState } from "react";


const SellPropertyForm = () => {
  const [propertyType, setPropertyType] = useState("rent");
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    price: "",
    city: "",
    state: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    parking: false,
    furnished: false,
    readyToMove: false,
    yearBuilt: "",
    floor: "",
    totalFloors: "",
    image: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors:any = {};
    
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (formData.title.length > 200) newErrors.title = "Title cannot exceed 200 characters";
    if (!formData.description) newErrors.description = "Description is required";
    if (formData.description.length > 2000) newErrors.description = "Description cannot exceed 2000 characters";
    if (!formData.price) newErrors.price = "Price is required";
    if (formData.price && (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0)) {
      newErrors.price = "Price must be a positive number";
    }
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.bedrooms) newErrors.bedrooms = "Number of bedrooms is required";
    if (!formData.bathrooms) newErrors.bathrooms = "Number of bathrooms is required";
    if (!formData.area) newErrors.area = "Property area is required";
   
    
    return newErrors;
  };

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev:any) => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
   
    try {
      const payload = {
        ...formData,
        propertyType,
      }
      const response = await fetch("/api/admin/properties", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error listing property:", error);
    }
   
  };

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        setPreviewImage(e.target.result);
        setFormData({ ...formData, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Page Header */}
      <div className="text-center relative overflow-hidden p-6">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            List Your Property
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            List your property for sale or rent with PropertyHub and reach
            thousands of verified buyers and tenants. Get the best value for
            your property.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-20 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl border-2 border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Property Details
            </h2>

            <div className="space-y-8">
              {/* Property Type Selection */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-100">
                <label className="block text-lg font-semibold text-gray-800 mb-4 text-center">
                  What would you like to do with your property? *
                </label>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setPropertyType("sell")}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      propertyType === "sell"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    🏠 Sell Property
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyType("rent")}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      propertyType === "rent"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300"
                    }`}
                  >
                    🏡 Rent Property
                  </button>
                </div>
              </div>

              {/* Basic Information */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                    <select
                      value={formData.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="plot">Plot</option>
                      <option value="shop">Shop</option>
                      <option value="office">Office</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="factory">Factory</option>
                      <option value="land">Land</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter property title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (INR) *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter price"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Describe your property..."
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>
              </section>

              {/* Location */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city.name + city.state} value={city.name}>
                          {city.name}, {city.state}
                        </option>
                      ))}
                    </select>
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter full address"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
              </section>

              {/* Property Details */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms *</label>
                    <input
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      min="0"
                    />
                    {errors.bedrooms && <p className="text-red-500 text-sm mt-1">{errors.bedrooms}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms *</label>
                    <input
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      min="0"
                    />
                    {errors.bathrooms && <p className="text-red-500 text-sm mt-1">{errors.bathrooms}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft) *</label>
                    <input
                      type="number"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      min="1"
                    />
                    {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
                  </div>
                </div>

                {/* Toggle Switches */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Parking</label>
                    <button
                      type="button"
                      onClick={() => handleInputChange('parking', !formData.parking)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.parking ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.parking ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Furnished</label>
                    <button
                      type="button"
                      onClick={() => handleInputChange('furnished', !formData.furnished)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.furnished ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.furnished ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Ready to Move</label>
                    <button
                      type="button"
                      onClick={() => handleInputChange('readyToMove', !formData.readyToMove)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.readyToMove ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        formData.readyToMove ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </section>

              {/* Additional Details */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {propertyType === "sell" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
                      <input
                        type="number"
                        value={formData.yearBuilt}
                        onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        min="1900"
                        max={new Date().getFullYear()}
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
                    <input
                      type="number"
                      value={formData.floor}
                      onChange={(e) => handleInputChange('floor', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      min="0"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Floors</label>
                    <input
                      type="number"
                      value={formData.totalFloors}
                      onChange={(e) => handleInputChange('totalFloors', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      min="1"
                    />
                  </div>
                </div>
              </section>
            

              {/* Image Upload */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Property Image</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Property Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {previewImage && (
                    <div className="mt-4">
                      <img
                        src={previewImage}
                        alt="Property Preview"
                        className="w-40 h-40 object-cover rounded-lg border shadow-md"
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* Submit Button */}
              <button

                onClick={handleSubmit}
                className="w-full py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
              >
                Submit Property Listing
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellPropertyForm;