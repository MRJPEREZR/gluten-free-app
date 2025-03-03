import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, MessageSquare, PlusCircle } from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Rice Flour",
    glutenFree: true,
    votes: 10,
    comments: ["Great for baking!", "Best alternative for wheat!"],
  },
  {
    id: 2,
    name: "Oatmeal Cereal",
    glutenFree: false,
    votes: -2,
    comments: ["Contains traces of gluten!", "Not safe for celiacs."],
  },
];

export default function CommunityPage() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState("");
  const [isGlutenFree, setIsGlutenFree] = useState(true);

  const addProduct = () => {
    if (newProduct.trim() !== "") {
      setProducts([
        ...products,
        { id: products.length + 1, name: newProduct, glutenFree: isGlutenFree, votes: 0, comments: [] },
      ]);
      setNewProduct("");
    }
  };

  const voteProduct = (id, value) => {
    setProducts(products.map(p => (p.id === id ? { ...p, votes: p.votes + value } : p)));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <section className="text-center py-16 bg-green-500 text-white">
        <h1 className="text-5xl font-bold">Community Gluten-Free Labeling</h1>
        <p className="mt-4 text-lg">Help classify products as truly gluten-free or not.</p>
      </section>

      {/* Add a New Product */}
      <div className="flex justify-center mt-8">
        <div className="w-2/3 max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
          <input
            type="text"
            placeholder="Product name..."
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <div className="flex justify-between">
            <label className="flex items-center space-x-2">
              <input type="radio" name="gluten" checked={isGlutenFree} onChange={() => setIsGlutenFree(true)} />
              <span className="text-green-600 font-semibold">Gluten-Free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="gluten" checked={!isGlutenFree} onChange={() => setIsGlutenFree(false)} />
              <span className="text-red-600 font-semibold">Contains Gluten</span>
            </label>
          </div>
          <button
            onClick={addProduct}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600"
          >
            <PlusCircle />
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">Community Verified Products</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-80 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className={`mt-2 font-bold ${product.glutenFree ? "text-green-600" : "text-red-600"}`}>
                {product.glutenFree ? "✅ Gluten-Free" : "❌ Contains Gluten"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button onClick={() => voteProduct(product.id, 1)} className="text-green-500 flex items-center gap-1">
                  <ThumbsUp /> {product.votes}
                </button>
                <button onClick={() => voteProduct(product.id, -1)} className="text-red-500 flex items-center gap-1">
                  <ThumbsDown />
                </button>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Community Comments</h4>
                {product.comments.length > 0 ? (
                  product.comments.map((comment, index) => <p key={index} className="text-gray-600 mt-1">💬 {comment}</p>)
                ) : (
                  <p className="text-gray-400">No comments yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}