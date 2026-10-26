import React from "react";
import { useNavigate } from "react-router-dom";

const StationeryPage = () => {

  const navigate=useNavigate()

  const products = [
    {
      id: 1,
      name: "HB Pencil",
      category: "Pencils",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsU4Zo9W5MyzDMAQsoIm5KPStjfMW51Piq5GYuUs2xOQ&s=10",
      tool: "pencil",
      color: "#444444",
      width: 2,
    },
    {
      id: 2,
      name: "2B Pencil",
      category: "Pencils",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrtobw9v_DF_NBJG6MfAMdevG7_F6TBs2cOx82k-ZRA&s=10",
      tool: "pencil",
      color: "#222222",
      width: 4,
    },
    {
      id: 3,
      name: "Mechanical Pencil",
      category: "Pencils",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1aX1lVgLQeENX0bN5P1tlF4Y7uyUKakiOEtu6zep2w&s=10",
      tool: "pencil",
      color: "#333333",
      width: 1,
    },
    {
      id: 4,
      name: "Color Pencil",
      category: "Pencils",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtH6goUoi_nUCGvUafjFGR9GsJRNEVj9iJkCbr4XqMQ&s=10",
      tool: "pencil",
      color: "#e63946",
      width: 3,
    },

    {
      id: 5,
      name: "Blue Pen",
      category: "Pens",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhSqIr0MUsBC0gbdiD0ZswliNZo9s_GGtfOqlzia7FQ&s=10",
      tool: "pen",
      color: "#2563eb",
      width: 2,
    },
    {
      id: 6,
      name: "Black Pen",
      category: "Pens",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSzUPMf7wbdd43JutgS4NVRhx3UTjN8I1khVIqjEENw&s=10",
      tool: "pen",
      color: "#000000",
      width: 2,
    },
    {
      id: 7,
      name: "Gel Pen",
      category: "Pens",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R3QnDQ51PjZXvdh1ZjSAVN1v5CJs8pMx1xg7aHiyeA&s=10",
      tool: "pen",
      color: "#7c3aed",
      width: 3,
    },
    {
      id: 8,
      name: "Ball Pen",
      category: "Pens",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22YO5HOn-GMLsaFn5-IfDkZ4efslIaKvsOurBzWKE0g&s=10",
      tool: "pen",
      color: "#0f766e",
      width: 2,
    },

    {
      id: 9,
      name: "Soft Eraser",
      category: "Erasers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B7gHOFoWnYl3mwm4M8Pkky-G2wG3Oj1lMj_TYPj1kQ&s=10",
      tool: "eraser",
      color: "#ffffff",
      width: 50,
    },
    {
      id: 10,
      name: "Dust-Free Eraser",
      category: "Erasers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRir_u-Wy1bGwpkF1UO3Mp2FPT2EqnXXsHsDAK7gYlCYg&s=10",
      tool: "eraser",
      color: "#ffffff",
      width: 80,
    },
  ];

  const selectStationery = (product) => {
    localStorage.setItem("paintTool", product.tool);
    localStorage.setItem("paintColor", product.color);
    localStorage.setItem("paintWidth", product.width);

    alert(`${product.name} selected`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Stationery
        </h1>

        <p className="text-gray-500 mt-2">
          Pencils, Pens & Erasers
        </p>
      </div>
      <button 
      className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 cursor-pointer"
      onClick={()=>{
        navigate(-1)
      }}
      >
        Back
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => selectStationery(product)}
              className="bg-white rounded-xl shadow-md overflow-hidden text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className="h-52 bg-white flex items-center justify-center">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase">
                  {product.category}
                </p>

                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Click to select
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationeryPage;