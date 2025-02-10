import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MessageTable from './Components/MessageTable/MessageTable';
import Buttons from './Components/Buttons/Buttons'; 

const App = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: '#EBEEF3', minHeight: '100vh', maxWidth: 'calc(100%)'}}>
            <Navbar />
            <div style={{ width: '80%' }}>
                
                <h1 style={{ color: 'black', display: 'inline-block', marginLeft: '20px' }}>Notifications</h1>
                <div style={{ 
                    width: '95%', 
                    margin: 'auto', 
                    backgroundColor: 'white', 
                    marginLeft: '20px', 
                    borderRadius: '15px', 
                    padding: '20px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                <Buttons /> 
                <MessageTable />
                </div>
            </div>
        </div>
    );
};

export default App;
