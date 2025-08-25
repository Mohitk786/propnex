    "use client";

    import { useState } from "react";

    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";
    import { Card, CardContent } from "@/components/ui/card";
    import { Textarea } from "@/components/ui/textarea";
    import { Checkbox } from "@/components/ui/checkbox";
    import {
    Home,
    Car,
    Upload,
    CheckCircle,
    Star,
    Users,
    TrendingUp,
    } from "lucide-react";

    const Sell = () => {
    const [formData, setFormData] = useState({
        propertyType: "",
        title: "",
        description: "",
        price: "",
        location: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        parking: false,
        furnished: false,
        readyToMove: false,
        images: [] as File[],
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setFormData((prev) => ({
        ...prev,
        [name]: checked,
        }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...files],
        }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    const benefits = [
        {
        icon: Users,
        title: "Wide Reach",
        description: "Connect with thousands of potential buyers across India",
        color: "from-blue-500 to-purple-500",
        },
        {
        icon: TrendingUp,
        title: "Best Prices",
        description: "Get competitive offers and maximize your property value",
        color: "from-green-500 to-emerald-500",
        },
        {
        icon: CheckCircle,
        title: "Verified Buyers",
        description: "All inquiries are from verified and serious buyers",
        color: "from-pink-500 to-red-500",
        },
        {
        icon: Star,
        title: "Premium Listing",
        description: "Your property gets featured prominently in search results",
        color: "from-yellow-500 to-orange-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Page Header */}
        <div className="text-center relative overflow-hidden p-6">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sell Your Property
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                List your property with PropertyHub and reach thousands of verified
                buyers. Get the best price for your property.
            </p>
            </div>
        </div>

        <main className="container mx-auto px-4 pb-20">
            <div>
            <Card className="bg-white/90 backdrop-blur-xl border-2 border-white/50 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Property Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="flex items-center justify-between">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                        </label>
                        <Select
                        value={formData.propertyType}
                        onValueChange={(value) =>
                            handleSelectChange("propertyType", value)
                        }
                        >
                        <SelectTrigger className=" backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                            <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Price *
                        </label>
                        <Input
                        name="price"
                        type="text"
                        required
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="e.g., ₹2.5 Cr"
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                        />
                    </div>
                    </div>

                    {/* Title and Description */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Title *
                    </label>
                    <Input
                        name="title"
                        type="text"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g., Beautiful 3BHK Apartment in Prime Location"
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200  focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                    </label>
                    <Textarea
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your property, amenities, and unique features..."
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl resize-none"
                    />
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        City/Location *
                        </label>
                        <Input
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Mumbai, Maharashtra"
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Complete Address *
                        </label>
                        <Input
                        name="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street address, area, landmark..."
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                        />
                    </div>
                    </div>

                    {/* Property Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrooms
                        </label>
                        <Select
                        value={formData.bedrooms}
                        onValueChange={(value) =>
                            handleSelectChange("bedrooms", value)
                        }
                        >
                        <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                            <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">Studio</SelectItem>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4+ Bedrooms</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bathrooms
                        </label>
                        <Select
                        value={formData.bathrooms}
                        onValueChange={(value) =>
                            handleSelectChange("bathrooms", value)
                        }
                        >
                        <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                            <SelectValue placeholder="Select bathrooms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 Bathroom</SelectItem>
                            <SelectItem value="2">2 Bathrooms</SelectItem>
                            <SelectItem value="3">3 Bathrooms</SelectItem>
                            <SelectItem value="4">4+ Bathrooms</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area (sq ft) *
                        </label>
                        <Input
                        name="area"
                        type="text"
                        required
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="e.g., 1500"
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                        />
                    </div>
                    </div>

                    {/* Amenities */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                        Amenities
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3">
                        <Checkbox
                            id="parking"
                            checked={formData.parking}
                            onCheckedChange={(checked) =>
                            handleCheckboxChange("parking", checked as boolean)
                            }
                        />
                        <label
                            htmlFor="parking"
                            className="text-sm text-gray-700 flex items-center"
                        >
                            <Car className="h-4 w-4 mr-2" />
                            Parking
                        </label>
                        </div>
                        <div className="flex items-center space-x-3">
                        <Checkbox
                            id="furnished"
                            checked={formData.furnished}
                            onCheckedChange={(checked) =>
                            handleCheckboxChange("furnished", checked as boolean)
                            }
                        />
                        <label
                            htmlFor="furnished"
                            className="text-sm text-gray-700 flex items-center"
                        >
                            <Home className="h-4 w-4 mr-2" />
                            Furnished
                        </label>
                        </div>
                        <div className="flex items-center space-x-3">
                        <Checkbox
                            id="readyToMove"
                            checked={formData.readyToMove}
                            onCheckedChange={(checked) =>
                            handleCheckboxChange(
                                "readyToMove",
                                checked as boolean
                            )
                            }
                        />
                        <label
                            htmlFor="readyToMove"
                            className="text-sm text-gray-700 flex items-center"
                        >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Ready to Move
                        </label>
                        </div>
                    </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Images
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-300">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                        Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                        PNG, JPG, JPEG up to 10MB each
                        </p>
                        <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                        />
                        <label htmlFor="image-upload">
                        <Button
                            type="button"
                            variant="outline"
                            className="mt-4 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl"
                        >
                            Choose Files
                        </Button>
                        </label>
                    </div>
                    {formData.images.length > 0 && (
                        <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">
                            {formData.images.length} images selected
                        </p>
                        </div>
                    )}
                    </div>

                    {/* Submit Button */}
                    <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl py-4 text-lg font-semibold"
                    >
                    List My Property
                    </Button>
                </form>
                </CardContent>
            </Card> 
            </div>
        </main>
        </div>
    );
    };

    export default Sell;
