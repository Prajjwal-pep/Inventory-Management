// import React from "react";

// function InventoryList({ inventory, deleteItem, editItem }) {
//   return (
//     <div className="w-full max-w-lg mt-6">
//       <h2 className="text-2xl font-semibold text-gray-700 mb-4">Inventory List</h2>
//       {inventory.length === 0 ? (
//         <p className="text-gray-500">No items in inventory.</p>
//       ) : (
//         <ul className="space-y-4">
//           {inventory.map((item) => (
//             <li
//               key={item.id}
//               className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
//             >
//               <div>
//                 <span className="font-bold text-gray-700">{item.name}</span> -{" "}
//                 <span className="text-gray-600">{item.quantity}</span>
//               </div>
//               <div className="space-x-3">
//                 <button
//                   onClick={() => editItem(item)}
//                   className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteItem(item.id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default InventoryList;



import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

function InventoryList({ inventory, deleteItem, editItem }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Inventory List
      </Typography>
      {inventory.length === 0 ? (
        <Typography variant="body1">No items in inventory.</Typography>
      ) : (
        <List>
          {inventory.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => editItem(item)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default InventoryList;
