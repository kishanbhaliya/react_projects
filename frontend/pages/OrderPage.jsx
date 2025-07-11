import React from "react";
import OrderForm from "../components/OrderForm";


export default function OrderPage() {
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Place Your Tiffin Order</h2>
            <OrderForm />
        </div>
    );
}