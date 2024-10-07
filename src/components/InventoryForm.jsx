import React, { useState, useEffect } from "react";

function InventoryForm({ addItem, updateItem, editingItem }) {
  const [item, setItem] = useState({ id: "", name: "", quantity: "" });

  useEffect(() => {
    if (editingItem) {
      setItem(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      updateItem(item);
    } else {
      addItem({ ...item, id: Date.now().toString() });
    }
    setItem({ id: "", name: "", quantity: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-6">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={item.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-lg text-white ${
          item.id ? "bg-teal-600 hover:bg-teal-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {item.id ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}

export default InventoryForm;
