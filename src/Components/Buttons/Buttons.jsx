import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Buttons = ({ searchTerm, setSearchTerm, setFilter, unreadCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ setSelectedFilter] = useState("All");

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterSelect = (filterOption) => {
    setSelectedFilter(filterOption);
    setFilter(filterOption); 
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        height: "100px",
      }}
    >
      <h4 style={{ marginLeft: "20px", color: "#5F6D8C" }}>
        {unreadCount} Unread Messages
      </h4>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "5px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", outline: "none", marginLeft: "5px" }}
          />
        </div>

       
        <Button
          style={{
            backgroundColor: "#EBF7ED",
            color: "black",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            minWidth: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={handleFilterClick}
        >
          <FilterListIcon />
        </Button>

       
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => handleFilterSelect("All")}>All</MenuItem>
          <MenuItem onClick={() => handleFilterSelect("Unread")}>Unread</MenuItem>
          <MenuItem onClick={() => handleFilterSelect("Read")}>Read</MenuItem>
          <MenuItem onClick={() => handleFilterSelect("Fuel")}>Fuel</MenuItem>
        </Menu>

        <Button
          style={{
            marginLeft: "20px",
            backgroundColor: "#2c963d",
            color: "rgb(255, 255, 255)",
            border: "none",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "35px",
            transition: "background-color 0.3s",
          }}
        >
          + Create
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
