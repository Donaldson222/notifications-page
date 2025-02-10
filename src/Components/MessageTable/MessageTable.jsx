import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

const data = [
  {
    messageType: "Fuel",
    message: "Offloading wait time",
    createdBy: "Otieno Alouoch",
    status: "Unread",
    readBy: "Jesse Lin",
  },
  {
    messageType: "Fuel",
    message: "Offloading wait time",
    createdBy: "Otieno Alouoch",
    status: "Unread",
    readBy: "Jane Alice",
  },
  {
    messageType: "Fuel",
    message: "Loading wait time",
    createdBy: "Otieno Alouoch",
    status: "Read",
    readBy: "John Doe",
  },
];

const MessageTable = () => {
    const [selected, setSelected] = useState(Array(data.length).fill(false)); 

    const handleSelectAll = (event) => {
        const newSelected = Array(data.length).fill(event.target.checked); 
        setSelected(newSelected);
    };

    const handleSelectRow = (index) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index]; 
        setSelected(newSelected);
    };

    return (
        <TableContainer style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#F2F2F2' }}>
                        <TableCell>
                            <Checkbox checked={selected.every(Boolean)} onChange={handleSelectAll} /> {/* Header checkbox */}
                        </TableCell>
                        <TableCell>Message Type</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Created By</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Read By</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Checkbox checked={selected[index]} onChange={() => handleSelectRow(index)} /> {/* Row checkbox */}
                            </TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.messageType}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.message}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.createdBy}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.status}</TableCell>
                            <TableCell style={{ color: '#5F6D8C' }}>{row.readBy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MessageTable;
