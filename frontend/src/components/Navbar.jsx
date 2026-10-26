import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    toast.error("You are logged Out");
    navigate("/");
  };

  return (
    <header className="bg-[#ede8dc] text-[#14171c]">

      {/* Top Navbar */}
      <nav className="w-full border-b border-[#d9d3c3] px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/home"
            className="serif text-xl font-medium tracking-tight"
          >
            Field<span className="text-[#8b9285]">note</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/home"
              className="hover:text-[#3a6ea5] transition-colors"
            >
              Home
            </Link>

            <Link
              to="/notes"
              className="hover:text-[#3a6ea5] transition-colors"
            >
              My Notes
            </Link>

            <Link
              to="/products"
              className="hover:text-[#3a6ea5] transition-colors"
            >
              Pens & Pencils
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <div className="hidden sm:block text-sm">
              <span className="text-[#8b9285]">Hi, </span>
              <span className="font-medium">User</span>
            </div>

            <button
              onClick={logout}
              className="
                px-3 py-1.5
                text-sm
                border border-[#14171c]
                hover:bg-[#14171c]
                hover:text-[#ede8dc]
                transition-colors
              "
            >
              Logout
            </button>

          </div>

        </div>
      </nav>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="serif text-4xl mb-2">
          Welcome back
        </h1>

        <p className="text-[#8b9285]">
          Capture your thoughts. Keep your ideas close.
        </p>
      </div>

    </header>
  );
};

export default Navbar;