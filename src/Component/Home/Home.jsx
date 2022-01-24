import { Delete } from "@mui/icons-material";
import { Button, Collapse, IconButton, List, ListItem, ListItemText, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";


export const Home = () => {
  
  const [name, setName] = useState();
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("username")));
  }, [name]);

  // const handleLogout = () => {
  //   localStorage.removeItem("username");
  //   setName();
  // };

  const [todosList, setTodosList] = useState([]);
  const [message, setMessage] = useState("");
  const handleAddMessage = () => {
    // const nextHiddenItem = todos.find((i) => !todosList.includes(i));
    // if (nextHiddenItem) {
    setTodosList([...todosList, message]);
    setMessage("");
    // }
  };

  const handleRemoveMessage = (item) => {
    setTodosList([...todosList.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Stack direction="row" justifyContent="center" spacing={2} marginY={5}>
      <TextField
        label="name"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleAddMessage}>
        Add todos list
      </Button>
    </Stack>
  );

  function renderItem(item, handleRemoveMessage, index) {
    return (
      <ListItem
        key={index}
        secondaryAction={
          <IconButton
            edge="end"      
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveMessage(item)}
          >     
            <Delete />
          </IconButton>
        }
      >
        <ListItemText primary={item} />
      </ListItem>
    );
  }
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h2 style={{ textAlign: "center" }}>
        Welcome to home page {name && name} !
      </h2>
      {addFruitButton}
      <Paper elevation={2} style={{ width: "35%", margin: "auto" }}>
        {todosList.length > 0 ? (
          <List>
            <TransitionGroup>
              {todosList.map((item, index) => (
                <Collapse key={index}>
                  {renderItem(item, handleRemoveMessage, index)}
                </Collapse>
              ))}
            </TransitionGroup>    
          </List>
        ) : (
          <Typography variant="h4" align="center">
            No Todos Here
          </Typography>
        )}
      </Paper>
    </div>
  );
};
