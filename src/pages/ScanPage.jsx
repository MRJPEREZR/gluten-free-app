import React from "react";
import { Camera } from "lucide-react";

export default function ScanPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Scan Barcode Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Scan Your Product</h1>
        <p className="mt-4 text-lg">Check if it's gluten-free instantly.</p>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 text-lg bg-white text-blue-500 hover:bg-gray-200 flex items-center rounded-lg shadow-md">
            <Camera className="mr-2" /> Scan Barcode
          </button>
        </div>
      </section>
      
      {/* Product Info */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">Product Information</h2>
        <div className="w-96 mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Product Name</h3>
          <p className="mt-2">Gluten-Free Status: <span className="text-green-600 font-bold">Yes / No</span></p>
        </div>
      </section>

      {/* Alternatives & Recipes */}
      <section className="py-16 px-8 text-center bg-gray-200">
        <h2 className="text-3xl font-bold">Alternatives & Recipes</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <div className="w-80 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">🍞 Alternative Products</h3>
            <p className="mt-2 text-gray-600">Find gluten-free substitutes for this product.</p>
          </div>
          <div className="w-80 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">👩‍🍳 Gluten-Free Recipes</h3>
            <p className="mt-2 text-gray-600">Get recipes to replace this ingredient.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
