import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-3xl font-bold mb-6">Daily Tiffin Service</h1>
            <div className="space-x-4">
                <Link to="/order" className="bg-green-500 text-white px-6 py-2 rounded shadow">
                    Place Order
                </Link>
                <Link to="/admin" className="bg-blue-500 text-white px-6 py-2 rounded shadow">
                    Admin Dashboard
                </Link>
            </div>
        </div>
    );
}