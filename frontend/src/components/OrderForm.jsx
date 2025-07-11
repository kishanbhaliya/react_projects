import React, { useState } from "react";
import axios from "axios";


export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        items: "",
        address: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/orders/", formData);
            setSuccess(true)
            setFormData({name: "", phone: "", items: "", address: ""});
        } catch (err) {
            console.error("Order failed:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border px-4 py-2" onChange={handleChange} value={formData.name} />
            <input type="text" name="phone" placeholder="Phone Number" required className="w-full border px-4 py-2" onChange={handleChange} value={formData.phone} />
            <textarea name="items" placeholder="Items (e.g., 2 Veg, 1 Roti)" required className="w-full border px-4 py-2" onChange={handleChange} value={formData.items}></textarea>
            <textarea name="address" placeholder="Delivery Address" required className="w-full border px-4 py-2" onChange={handleChange} value={formData.address}></textarea>
            <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">Submit Order</button>
            {success && <p className="text-green-600 font-medium">Order placed successfully!</p>}
        </form>
    );
}