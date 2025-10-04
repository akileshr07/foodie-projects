import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-pink-200 shadow-md">
            {/* Logo */}
            <Link to="/" className="text-4xl font-extrabold text-pink-600 tracking-wider">
                FOODIE
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-6 text-lg font-medium text-pink-700">
                <Link to="/home" className="hover:text-pink-500 transition">
                    Home
                </Link>
                <Link to="/about" className="hover:text-pink-500 transition">
                    About
                </Link>

                {/* Cart Text with Count */}
                <Link to="/cart" className="relative flex items-center hover:text-pink-500 transition font-semibold">
                    Cart
                    {cartItems.length > 0 && (
                        <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
