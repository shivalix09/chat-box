import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  const [name, setName] = useState();
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("username")));
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setName();
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h2 style={{ textAlign: "center" }}>
        Welcome to home page {name && name} !
      </h2>

      {!name ? (
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      )}
    </div>
  );
};
