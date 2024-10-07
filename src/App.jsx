import React, { useState } from "react";
import './index.css';  // or './App.css' if you added Tailwind there

import InventoryList from "./components/InventoryList";
import InventoryForm from "./components/InventoryForm";

function App() {
  const [inventory, setInventory] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  const updateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-teal-600 mt-8">Inventory Management System</h1>
      <InventoryForm
        addItem={addItem}
        updateItem={updateItem}
        editingItem={editingItem}
      />
      <InventoryList
        inventory={inventory}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
