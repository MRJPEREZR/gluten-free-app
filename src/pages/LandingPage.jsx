import React from "react";
import { Link } from "react-router-dom";
import { Search, Camera, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Sans Gluten svp !!!!</h1>
        <p className="mt-4 text-lg">Find and classify gluten-free products easily.</p>
        <div className="flex justify-center mt-6 gap-4">
          <Link to="/scan">
            <button className="px-6 py-3 text-lg bg-white text-blue-500 hover:bg-gray-200 flex items-center rounded-lg shadow-md">
              <Camera className="mr-2" /> Scan Product
            </button>
          </Link>
          <Link to="/restaurants">
            <button className="px-6 py-3 text-lg bg-white text-blue-500 hover:bg-gray-200 flex items-center rounded-lg shadow-md">
              <MapPin className="mr-2" /> Find Restaurants
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <div className="w-80 bg-white shadow-lg rounded-lg p-6">
            <Search className="w-10 h-10 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mt-4">Search Gluten-Free Products</h3>
            <p className="mt-2 text-gray-600">Find out if a product is gluten-free by scanning its barcode.</p>
          </div>
          <div className="w-80 bg-white shadow-lg rounded-lg p-6">
            <MapPin className="w-10 h-10 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mt-4">Find Restaurants & Shops</h3>
            <p className="mt-2 text-gray-600">Discover gluten-free restaurants, markets, and communities near you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
