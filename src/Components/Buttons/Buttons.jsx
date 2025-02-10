import React, { useState } from 'react';
import { data } from '../MessageTable'; 
import SearchIcon from '@mui/icons-material/Search'; 
import FilterListIcon from '@mui/icons-material/FilterList'; 
import Button from '@mui/material/Button'; 

const Buttons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const unreadNotifications = data.filter(record => record.status === "Unread").length; 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilter = () => {
        // add filter functionality 
        console.log("Filter applied with term:", searchTerm);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', height: '100px' }}>
            <h4 style={{ marginLeft: '20px', color: '#5F6D8C' }}> {unreadNotifications} Unread Notifications</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '5px', marginLeft: '20px', marginRight: '20px' }}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ border: 'none', outline: 'none', marginLeft: '5px' }}
                    />
                </div>
                <Button onClick={handleFilter} style={{ backgroundColor: '#EBF7ED', 
        color: 'black', 
        borderRadius: '50%', 
        width: '40px', 
        height: '40px', 
        minWidth: '40px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        cursor: 'pointer', 
        transition: 'background-color 0.3s'  }}>
                    <FilterListIcon />
                </Button>
                <Button style={{ backgroundColor: '#2c963d', color: 'rgb(255, 255, 255)', border: 'none', padding: '10px 20px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '10px', cursor: 'pointer', borderRadius: '35px', transition: 'background-color 0.3s', marginLeft: '20px' }}>
                    + Create
                </Button>
            </div>
        </div>
    );
};

export default Buttons;
