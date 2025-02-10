import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

const data = [
  { messageType: "Fuel", message: "Offloading wait time", createdBy: "Otieno Alouoch", status: "Unread", readBy: "Jesse Lin" },
  { messageType: "Fuel", message: "Offloading wait time", createdBy: "Otieno Alouoch", status: "Unread", readBy: "Jane Alice" },
  { messageType: "Fuel", message: "Loading wait time", createdBy: "Otieno Alouoch", status: "Read", readBy: "John Doe" },
];

const MessageTable = ({ searchTerm }) => {
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

    
    const filteredData = data.filter(row => 
        row.messageType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.readBy.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <TableContainer style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#F2F2F2' }}>
                        <TableCell>
                            <Checkbox checked={selected.every(Boolean)} onChange={handleSelectAll} />
                        </TableCell>
                        <TableCell>Message Type</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Created By</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Read By</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Checkbox checked={selected[index]} onChange={() => handleSelectRow(index)} />
                                </TableCell>
                                <TableCell style={{ color: '#5F6D8C' }}>{row.messageType}</TableCell>
                                <TableCell style={{ color: '#5F6D8C' }}>{row.message}</TableCell>
                                <TableCell style={{ color: '#5F6D8C' }}>{row.createdBy}</TableCell>
                                <TableCell style={{ color: '#5F6D8C' }}>{row.status}</TableCell>
                                <TableCell style={{ color: '#5F6D8C' }}>{row.readBy}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} style={{ textAlign: 'center', color: 'gray' }}>
                                No messages found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MessageTable;
