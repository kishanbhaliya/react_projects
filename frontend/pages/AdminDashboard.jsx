import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:8000/orders/");
    setOrders(res.data);
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:8000/orders/${id}/${status}`);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Items</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="p-2 border">{order.name}</td>
              <td className="p-2 border">{order.phone}</td>
              <td className="p-2 border">{order.items}</td>
              <td className="p-2 border">{order.address}</td>
              <td className="p-2 border">{order.status}</td>
              <td className="p-2 border">
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  className="border px-2 py-1"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
