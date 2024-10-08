// import React, { useState } from "react";
// import './index.css';  // or './App.css' if you added Tailwind there

// import InventoryList from "./components/InventoryList";
// import InventoryForm from "./components/InventoryForm";

// function App() {
//   const [inventory, setInventory] = useState([]);
//   const [editingItem, setEditingItem] = useState(null);

//   const addItem = (item) => {
//     setInventory([...inventory, item]);
//   };

//   const deleteItem = (id) => {
//     setInventory(inventory.filter((item) => item.id !== id));
//   };

//   const editItem = (item) => {
//     setEditingItem(item);
//   };

//   const updateItem = (updatedItem) => {
//     setInventory(
//       inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item))
//     );
//     setEditingItem(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-teal-600 mt-8">Inventory Management System</h1>
//       <InventoryForm
//         addItem={addItem}
//         updateItem={updateItem}
//         editingItem={editingItem}
//       />
//       <InventoryList
//         inventory={inventory}
//         deleteItem={deleteItem}
//         editItem={editItem}
//       />
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Box, Toolbar, CssBaseline, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";

function App() {
  const [inventory, setInventory] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [view, setView] = useState("list"); // To toggle between form and list view

  const addItem = (item) => {
    setInventory([...inventory, item]);
    setView("list");
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEditingItem(item);
    setView("form");
  };

  const updateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
    setView("list");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar setView={setView} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}>
        <Toolbar />
        <Typography variant="h4" component="h1" gutterBottom>
          Inventory Management System
        </Typography>

        {view === "form" ? (
          <InventoryForm addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
        ) : (
          <InventoryList inventory={inventory} deleteItem={deleteItem} editItem={editItem} />
        )}
      </Box>
    </Box>
  );
}

export default App;
