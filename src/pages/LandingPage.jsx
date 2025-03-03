import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Sans Gluten SVP!</h1>
        <p className="mt-4 text-lg">Your ultimate gluten-free guide.</p>
      </section>

      {/* Main Features */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">Explore Our Features</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <Link to="/scan">
            <Button className="px-6 py-3 text-lg bg-green-500 text-white hover:bg-green-600">
              📷 Scan Products
            </Button>
          </Link>
          <Link to="/restaurants">
            <Button className="px-6 py-3 text-lg bg-yellow-500 text-white hover:bg-yellow-600">
              🍽️ Find Gluten-Free Places
            </Button>
          </Link>
          <Link to="/community">
            <Button className="px-6 py-3 text-lg bg-purple-500 text-white hover:bg-purple-600">
              🏆 Community Labeling
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
