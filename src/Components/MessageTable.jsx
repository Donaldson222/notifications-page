import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

export const data = [

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
    return (
        <TableContainer style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', width: '70%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox /></TableCell>
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
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>{row.messageType}</TableCell>
                            <TableCell>{row.message}</TableCell>
                            <TableCell>{row.createdBy}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.readBy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MessageTable;
