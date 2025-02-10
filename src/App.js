import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MessageTable from './Components/MessageTable/MessageTable';
import Buttons from './Components/Buttons/Buttons';

const data = [
    { messageType: "Fuel", message: "Offloading wait time", createdBy: "Otieno Alouoch", status: "Unread", readBy: "Jesse Lin" },
    { messageType: "Fuel", message: "Offloading wait time", createdBy: "Otieno Alouoch", status: "Unread", readBy: "Jane Alice" },
    { messageType: "Fuel", message: "Loading wait time", createdBy: "Otieno Alouoch", status: "Read", readBy: "John Doe" },
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    
    const unreadCount = data.filter(row => row.status === "Unread").length;

    return (
        <div style={{ display: 'flex', backgroundColor: '#EBEEF3', minHeight: '100vh', width: '100%' }}>
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                
                
                <h1 style={{ color: 'black', marginLeft: '20px' }}>Notifications</h1>

                
                <div style={{ 
                    width: '95%', 
                    margin: 'auto', 
                    backgroundColor: 'white', 
                    marginLeft: '20px', 
                    borderRadius: '15px', 
                    padding: '20px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    
                    <Buttons searchTerm={searchTerm} setSearchTerm={setSearchTerm} unreadCount={unreadCount} />

                    
                    <MessageTable searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
};

export default App;
