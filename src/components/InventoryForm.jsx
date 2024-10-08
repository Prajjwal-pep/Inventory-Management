// import React, { useState, useEffect } from "react";

// function InventoryForm({ addItem, updateItem, editingItem }) {
//   const [item, setItem] = useState({ id: "", name: "", quantity: "" });

//   useEffect(() => {
//     if (editingItem) {
//       setItem(editingItem);
//     }
//   }, [editingItem]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setItem((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (item.id) {
//       updateItem(item);
//     } else {
//       addItem({ ...item, id: Date.now().toString() });
//     }
//     setItem({ id: "", name: "", quantity: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-6">
//       <div className="mb-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Item Name"
//           value={item.name}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={item.quantity}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className={`w-full py-2 px-4 rounded-lg text-white ${
//           item.id ? "bg-teal-600 hover:bg-teal-700" : "bg-blue-600 hover:bg-blue-700"
//         }`}
//       >
//         {item.id ? "Update Item" : "Add Item"}
//       </button>
//     </form>
//   );
// }

// export default InventoryForm;




import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

function InventoryForm({ addItem, updateItem, editingItem }) {
  const [item, setItem] = useState({ id: '', name: '', quantity: '' });

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
    setItem({ id: '', name: '', quantity: '' });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {item.id ? 'Update Item' : 'Add New Item'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Item Name"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={item.quantity}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color={item.id ? 'secondary' : 'primary'}
          fullWidth
        >
          {item.id ? 'Update Item' : 'Add Item'}
        </Button>
      </Box>
    </Paper>
  );
}

export default InventoryForm;
