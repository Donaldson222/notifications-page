import React from 'react';
import SearchIcon from '@mui/icons-material/Search'; 
import FilterListIcon from '@mui/icons-material/FilterList'; 
import Button from '@mui/material/Button';

const Buttons = ({ searchTerm, setSearchTerm, unreadCount }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', marginTop: '20px', marginLeft: '20px', marginRight: '20px', height: '100px' }}>
            
           
            <h4 style={{ marginLeft: '20px', color: '#5F6D8C' }}>
                {unreadCount} Unread Messages
            </h4>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '5px', marginLeft: '20px', marginRight: '20px' }}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ border: 'none', outline: 'none', marginLeft: '5px' }}
                    />
                </div>
                <Button style={{ backgroundColor: '#EBF7ED', color: 'black', borderRadius: '50%', width: '40px', height: '40px', minWidth: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                    <FilterListIcon />
                </Button>
            </div>
        </div>
    );
};

export default Buttons;
