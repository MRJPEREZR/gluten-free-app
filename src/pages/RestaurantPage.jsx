import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

const locations = [
  { name: "Gluten-Free Bistro", type: "Restaurant", address: "123 Main St, Paris" },
  { name: "Healthy Market", type: "Market", address: "456 Greenway, Lyon" },
  { name: "Celiac Support Association", type: "Association", address: "789 Wellness Ave, Marseille" },
  { name: "No-Gluten Café", type: "Restaurant", address: "101 Fresh Blvd, Nice" },
];

export default function RestaurantPage() {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()) ||
    place.type.toLowerCase().includes(search.toLowerCase()) ||
    place.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="text-center py-16 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Find Gluten-Free Places Near You</h1>
        <p className="mt-4 text-lg">Restaurants, associations, and markets for a gluten-free lifestyle.</p>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center mt-8">
        <div className="relative w-2/3 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search for restaurants, associations, or markets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-lg rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Location List */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">Nearby Locations</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((place, index) => (
              <div key={index} className="w-80 bg-white shadow-lg rounded-lg p-6">
                <MapPin className="w-10 h-10 mx-auto text-blue-500" />
                <h3 className="text-xl font-semibold mt-4">{place.name}</h3>
                <p className="text-gray-600 mt-2">{place.type}</p>
                <p className="text-gray-500 mt-1">{place.address}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4">No locations found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
